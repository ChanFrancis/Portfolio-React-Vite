import { useEffect, useRef, Suspense, lazy } from "react";
import useSliderAnimation from '../ScrollEffect/useSliderAnimation'
import useSplineScene from '../Utils/useSplineScene'
import { useDispatch } from "react-redux"
import { increment } from "../ScrollEffect/pageCountRedux"
import PageChangeButtons from '../ScrollEffect/PageChangeButtons'
const Spline = lazy(() => import('@splinetool/react-spline'));

import "../styles/presentation.css"

const SPLINE_SCENE_URL = "https://prod.spline.design/vwoC797pTGS6qu5l/scene.splinecode";
// Safety net: hide the loader after this delay even if the scene never signals ready.
const LOADER_FALLBACK_MS = 10000;
// Buffer after the scene's onLoad to let the WebGL canvas paint its first frame,
// otherwise the white background flashes through before the blob appears.
const BLOB_PAINT_BUFFER_MS = 350;
// translateY the fill eases toward while loading (5% down => ~95% filled).
const FILL_TARGET = "translateY(5%)";

// Kick the long compositor-driven fill transition (duration/easing live in CSS).
function startFiller() {
    const filler = document.getElementById("loaderColorFiller");
    if (filler) requestAnimationFrame(() => { filler.style.transform = FILL_TARGET; });
}

// Snap the fill to 100 % quickly once the scene is actually ready.
function completeFiller() {
    const filler = document.getElementById("loaderColorFiller");
    if (filler) {
        filler.style.transition = "transform 0.3s ease";
        filler.style.transform = "translateY(0)";
    }
}

function hideLoader() {
    const loader = document.getElementById("WebsiteLoader");
    if (loader) {
        loader.style.opacity = "0";
        setTimeout(() => { loader.style.display = "none"; }, 750);
    }
}

function Presentation() {

    const dispatch = useDispatch()

    const redirectPageProjects = () => {
        dispatch(increment());
    }

    const { sceneUrl, error } = useSplineScene(SPLINE_SCENE_URL);
    const loadedRef = useRef(false);

    // Warm the Spline runtime chunk in parallel with the scene download.
    useEffect(() => {
        void import('@splinetool/react-spline');
    }, []);

    // Start the fill on mount (main thread is free here). The transition then runs
    // on the compositor and keeps moving even while Spline blocks the main thread.
    useEffect(() => {
        startFiller();
    }, []);

    // Scene ready + painted: complete the bar, wait a painted frame, then reveal.
    const handleLoaded = () => {
        if (loadedRef.current) return;
        loadedRef.current = true;
        completeFiller();
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                setTimeout(hideLoader, BLOB_PAINT_BUFFER_MS);
            });
        });
    };

    // Never let a failed/slow scene trap the user behind the loader.
    useEffect(() => {
        if (error) {
            loadedRef.current = true;
            completeFiller();
            hideLoader();
            return;
        }
        const fallback = setTimeout(() => {
            loadedRef.current = true;
            completeFiller();
            hideLoader();
        }, LOADER_FALLBACK_MS);
        return () => clearTimeout(fallback);
    }, [error]);

    return (
        <section className={`Presentation ${useSliderAnimation(0)}`}>
            {sceneUrl && (
                <Suspense fallback={null}>
                    <Spline scene={sceneUrl} className="Spline_Blob" onLoad={handleLoaded} />
                </Suspense>
            )}
            <div className='Welcome'>
                <h1>Hello I&apos;m Francis</h1>
                <h2>A Full-Stack Developer</h2>
                <h2>Welcome to my website!</h2>
                <div className='downArrow' onClick={redirectPageProjects}> View my work <span>&#10140;</span> </div>
            </div>
            <PageChangeButtons currentSlide="start" />
        </section >
    )
}

export default Presentation
