import { useEffect, useState } from 'react'
import useImageLoader from '../../Utils/useImagesLoader';
import '../../styles/projects.css';
import grayArrow from '../../images/arrow_gray.png'

interface ImagesScrollerProps {
    receivedImages: string[];
    title: string;
    imagesReady: boolean;
}

/*  ImagesScroller takes the URLs of all images that should be displayed and the title.
    The "title" is used as an useEffect dependency to reset the slider. */
function ImagesScroller({ receivedImages, title, imagesReady }: ImagesScrollerProps) {

    const { loading, loaded, handleImageLoad, handleImageError } = useImageLoader(receivedImages, title);
    const [actualSlide, setActualSlide] = useState(0);

    useEffect(() => {
        setActualSlide(0);
    }, [title])

    const slider = receivedImages.length - 1;

    const handlePreviousSlide = () => {
        setActualSlide((prevSlide) => (prevSlide > 0 ? prevSlide - 1 : slider));
    };

    const handleNextSlide = () => {
        setActualSlide((prevSlide) => (prevSlide < slider ? prevSlide + 1 : 0));
    };

    return (
        <>

            {receivedImages.length === 0 && (
                imagesReady
                    ? <div className="ImageLoader"><span className="noPreview">No preview available</span></div>
                    : <div className="ImageLoader"><img src="/Loading.gif" alt="Loading..." /></div>
            )}

            {receivedImages.map((image, key) => {
                return (

                    <div style={{
                        backgroundImage: `url(${image})`,
                        transform: `translateX(-${actualSlide}00%)`,
                        display: loaded[key] ? 'flex' : 'none'
                    }}
                        className='slideImage'
                        key={key}
                    >
                        <img
                            src={image}
                            alt={`Slide ${key}`}
                            onLoad={() => handleImageLoad(key)}
                            onError={(error) => handleImageError(key, error)}
                            style={{ display: 'none' }}
                        />
                        <div className='slideImageLeft' onClick={handlePreviousSlide}><img src={grayArrow} alt="<" /></div>
                        <div className='slideImageRight' onClick={handleNextSlide}><img src={grayArrow} alt=">" /></div>
                    </div>

                )
            })
            }
            {loading && receivedImages.length > 0 && <div className="ImageLoader"><img src="/Loading.gif" alt="Loading..." /></div>}


        </>
    )
}

export default ImagesScroller
