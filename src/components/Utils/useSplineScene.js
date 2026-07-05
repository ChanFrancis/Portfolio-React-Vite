import { useState, useEffect } from 'react'

/*  Preloads a Spline .splinecode file with real download progress.
    Streams the response, reports a 0-99 % based on Content-Length, and exposes
    the fully-downloaded scene as an in-memory blob URL so <Spline scene={sceneUrl}>
    reads it from memory (no second network request).

    Note: Content-Length is a CORS-safelisted header, so the % works cross-origin.
    If the server omits it (or gzips), we fall back to an indeterminate creep. */
export default function useSplineScene(url) {
  const [sceneUrl, setSceneUrl] = useState(null)
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false
    let objectUrl = null

    const load = async () => {
      try {
        const response = await fetch(url)
        if (!response.ok) throw new Error(`HTTP ${response.status}`)

        const total = Number(response.headers.get('Content-Length')) || 0
        const reader = response.body.getReader()
        const chunks = []
        let received = 0

        for (;;) {
          const { done, value } = await reader.read()
          if (done) break
          chunks.push(value)
          received += value.length
          if (cancelled) return

          if (total) {
            setProgress(Math.min(99, Math.round((received / total) * 100)))
          } else {
            // No Content-Length: creep toward 90 % so the bar still moves.
            setProgress((prev) => Math.min(90, prev + 3))
          }
        }

        if (cancelled) return
        objectUrl = URL.createObjectURL(new Blob(chunks))
        setSceneUrl(objectUrl)
      } catch (err) {
        if (!cancelled) setError(err)
      }
    }

    load()

    return () => {
      cancelled = true
      if (objectUrl) URL.revokeObjectURL(objectUrl)
    }
  }, [url])

  return { sceneUrl, progress, error }
}
