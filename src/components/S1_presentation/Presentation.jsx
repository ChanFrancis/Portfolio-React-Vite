import React, { useState, useEffect, useRef } from "react";
import Spline from '@splinetool/react-spline';
import activateSliderAnimation from '../ScrollEffect/activateSliderAnimation'
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { increment } from "../ScrollEffect/pageCountRedux"
import PageChangeButtons from '../ScrollEffect/PageChangeButtons'

import "../styles/presentation.css"

function Presentation() {

    let dispatch = useDispatch()
    const pageCountRef = useRef(null);

    let pageCount = useSelector(state => state.pageCount.value)
    pageCountRef.current = pageCount;

    const redirectPageProjects = () => {
        dispatch(increment());
    }

    const [isLoading, setIsLoading] = useState(true);
    const removeLoading = () => {
        const loaderCollorFiller = document.getElementById("loaderColorFiller");
        if (loaderColorFiller) {
            loaderColorFiller.style.maxHeight = '100%';
        }

        setTimeout(() => {
            const websiteLoaderID = document.getElementById("WebsiteLoader");
            if (websiteLoaderID) {
                websiteLoaderID.style.opacity = "0"
            }
            setIsLoading(false);

            setTimeout(() => {
                websiteLoaderID.style.display = "none"
            }, 750);

        }, 3500);
    }

    return (
        <section className={`Presentation ${activateSliderAnimation(0)}`}>
            {/* {isLoading && <style>.WebsiteLoader: display "none"</style>} */}
            <Spline scene="https://prod.spline.design/vwoC797pTGS6qu5l/scene.splinecode" className="Spline_Blob" onLoad={removeLoading} />
            <div className='Welcome'>
                <h1>Hello I'm Francis</h1>
                <h2>A Web Developper</h2>
                <h2>Welcome to my website!</h2>
                <div className='downArrow' onClick={redirectPageProjects}> View my work <span>&#10140;</span> </div>
            </div>
            {PageChangeButtons("start")}
        </section>
    )
}

export default Presentation