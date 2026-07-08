import { useState, useEffect } from 'react'

function useImageSelect(): string[] {
    const [images, setImages] = useState<string[]>([]);

    useEffect(() => {
        const imageImport = async () => {
            const modules = import.meta.glob<{ default: string }>('/src/assets/*');
            const imageArray: string[] = []

            for (const path in modules) {
                const mod = await modules[path]();
                imageArray.push(mod.default);
            }

            setImages(imageArray)
        }

        imageImport()
    }, []);

    return images
}

export default useImageSelect
