import React, { useEffect } from "react"


function ZindexPage() {
    
    useEffect(()=>{
        var sections = document.querySelectorAll("section")
        var sectionsCount = sections.length
          
        sections.forEach((section, index) => {  
            section.style.zIndex = sectionsCount-index+"0"
            section.id = `section_${index}`
        })
    
    }, [])

  return null
}


export default ZindexPage