import { useEffect, useRef } from "react"
import { useDispatch } from "react-redux"
import { increment, decrement} from "./pageCountRedux"
import { useSelector } from "react-redux"



function ScrollBehavior() {

    let dispatch = useDispatch()
    const pageCountRef = useRef(null);

    let pageCount = useSelector(state => state.pageCount.value)
    pageCountRef.current = pageCount;

    useEffect(() => {
        const handleScroll = (event) => {
            // While the loading screen is still visible, ignore wheel navigation.
            const loader = document.getElementById('WebsiteLoader');
            if (loader && loader.style.display !== 'none') {
                return;
            }

            // Scrolling inside the description or the projects gallery modal only
            // scrolls that content — never changes page.
            if (event.target.closest?.('.ImageDescription, .galleryOverlay')) {
                return;
            }

            const sectionsCounting = document.querySelectorAll('section').length-1;
            const deltaY = event.deltaY;
            const currentPageCount = pageCountRef.current;
            const scrollDown = deltaY > 0 && currentPageCount < sectionsCounting;
            const scrollUp = deltaY < 0 && currentPageCount > 0;

            if (scrollDown) {
                dispatch(increment())
            } else if (scrollUp) {
                dispatch(decrement())
            }
                 
            if (scrollDown || scrollUp) {
                window.removeEventListener("wheel", handleScroll);

                setTimeout(() => {
                    window.addEventListener("wheel", handleScroll);
                }, 1000);
            }
        }

        window.addEventListener("wheel", handleScroll);

        return () => {
            window.removeEventListener("wheel", handleScroll);
        };

    }, [dispatch])

    return null
}

export default ScrollBehavior