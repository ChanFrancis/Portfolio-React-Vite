import React, { useRef, useState } from 'react'
import { useDispatch } from "react-redux"
import { increment, decrement } from "./pageCountRedux"
import { useSelector } from "react-redux"

import pageArrow from '../images/pageArrow.png'
import '../styles/pagesArrows.css'

function PageChangeButtons(currentSlide) {

    let dispatch = useDispatch()
    const pageCountRef = useRef(null);

    let pageCount = useSelector(state => state.pageCount.value)
    pageCountRef.current = pageCount;

    const [isDisabled, setIsDisabled] = useState(false)

    const buttonsTimeOut = () => {
        setIsDisabled(true);
        setTimeout(() => {
            setIsDisabled(false);
        }, 1500);
    };

    const nextPage = () => {
        if (!isDisabled) {
            dispatch(increment());
            buttonsTimeOut()
        }
    }

    const previousPage = () => {
        if (!isDisabled) {
            dispatch(decrement());
            buttonsTimeOut()
        }
    }

    return (
        <div className='PageArrowsContainer'>
            <img src={pageArrow} alt=">" className={`PreviousPageArrow ${currentSlide === "start" && 'ArrowDisabled'}`} onClick={previousPage} />
            <img src={pageArrow} alt=">" className={`NextPageArrow ${currentSlide === "end" && 'ArrowDisabled'}`} onClick={currentSlide === "end" ? null : nextPage} />
        </div>
    )
}

export default PageChangeButtons