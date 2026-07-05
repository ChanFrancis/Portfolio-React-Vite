import { useState } from 'react'
import ImagesScroller from '../Utils/ImagesScroller';
import useImageSelect from '../Utils/useImageSelect';
import DescriptionRenderer from '../Utils/DescriptionRenderer';
import myProjectsData from "./myProjectsData.json"
import TitlesScroller from '../Utils/TitlesScroller';


function MyProjects() {

    
    const projectsTitlesList = myProjectsData.map(project => project.title);
    const [currentDataIndex, setCurrentDataIndex] = useState(0);
    let currentTitle = projectsTitlesList[currentDataIndex];
    const images = useImageSelect();

    const handleTitleChange = (newDataIndex) => {
        setCurrentDataIndex(newDataIndex);
    };

    const projectsImages = images.filter((img) => {
        return img.includes(currentTitle);
    });

    return (
        <>
            <div className='ImageDescription'>
                <DescriptionRenderer data={myProjectsData[currentDataIndex]} />
            </div>

            <div className='imageContainer'>
                <div id='titleContainer'>

                    <TitlesScroller
                        titles={projectsTitlesList}
                        setNewDataIndex={handleTitleChange}
                    />

                </div>

                <div id="slideContainer" className='slideContainer'>
                    <ImagesScroller receivedImages={projectsImages} title={currentTitle} />
                </div>
            </div>


        </>
    )
}

export default MyProjects