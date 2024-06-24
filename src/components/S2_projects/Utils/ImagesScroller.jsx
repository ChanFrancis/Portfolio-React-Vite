import React, { useEffect, useState, useReducer } from 'react'
import useImageLoader from '../../Utils/useImagesLoader';
import '../../styles/projects.css';
import grayArrow from '../../images/arrow_gray.png'


/*  ImagesScroller function takes the URL of all images that should be displayed and the title  
    The "title" will be used for an useEffect dependency */
function ImagesScroller(receivedImages, title) {

    const { loading, loaded, error, handleImageLoad, handleImageError } = useImageLoader(receivedImages, title);
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

            {receivedImages.map((image, key) => {
                return (

                    <div style={{
                        'backgroundImage': `url(${image})`,
                        "transform": `translateX(-${actualSlide}00%)`,
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
            {loading && <div className="ImageLoader"><img src="/Loading.gif" alt="Loading..." /></div>}


        </>
    )
}

export default ImagesScroller