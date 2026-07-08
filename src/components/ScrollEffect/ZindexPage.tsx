import { useEffect } from "react"

function ZindexPage() {

    useEffect(() => {
        const sections = document.querySelectorAll<HTMLElement>("section")
        const sectionsCount = sections.length

        sections.forEach((section, index) => {
            section.style.zIndex = sectionsCount - index + "0"
            section.id = `section_${index}`
        })
    }, [])

    return null
}

export default ZindexPage
