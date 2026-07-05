import { useState } from 'react'
import ImagesScroller from '../Utils/ImagesScroller';
import useImageSelect from '../Utils/useImageSelect';
import DescriptionRenderer from '../Utils/DescriptionRenderer';
import experiencesData from "./experiencesData.json"
import TitlesScroller from '../Utils/TitlesScroller';

function Experience() {

    const experienceTitlesList = experiencesData.map(experience => experience.company);
    const [currentDataIndex, setCurrentDataIndex] = useState(0);
    let currentTitle = experienceTitlesList[currentDataIndex];
    const images = useImageSelect();

    const handleTitleChange = (newDataIndex) => {
        setCurrentDataIndex(newDataIndex);
    };

    const experienceImages = images.filter((img) => {
        return img.includes(currentTitle);
    });

    return (
        <>
            <div className='imageContainer'>
                <div id='titleContainer'>

                    <TitlesScroller
                        titles={experienceTitlesList}
                        setNewDataIndex={handleTitleChange}
                    />

                </div>

                <div id="slideContainer" className='slideContainer'>
                    <ImagesScroller receivedImages={experienceImages} title={currentTitle} />
                </div>
            </div>

            <div className='ImageDescription'>
                <DescriptionRenderer data={experiencesData[currentDataIndex]} />
            </div>
        </>

    )
}

export default Experience