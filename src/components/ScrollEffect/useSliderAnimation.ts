import { useState } from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from '../../store'

// Initialise classname animation when the Redux pageCount is above reduxCountCheck
function useSliderAnimation(reduxCountCheck: number): string {
    const pageCount = useSelector((state: RootState) => state.pageCount.value)
    const [activated, setActivated] = useState(false)

    if (pageCount > reduxCountCheck && !activated) {
        setActivated(true)
    }

    return `${pageCount > reduxCountCheck ? 'slide_next' : activated ? 'slide_watching' : ''}`
}

export default useSliderAnimation
