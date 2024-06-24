import { useState } from 'react'
import { useSelector } from "react-redux"


// Initialise classname animation when the Redux pageCount is above reduxCountCheck  
function activateSliderAnimation(reduxCountCheck) {

    let pageCount = useSelector(state => state.pageCount.value)

    const [activated, setActivated] = useState(false);

    if (pageCount > reduxCountCheck && !activated) {
        setActivated(true);
    }

    return `${pageCount > reduxCountCheck ? "slide_next" : activated ? "slide_watching" : ""}`;
}

export default activateSliderAnimation