import { useState } from 'react'
import ImagesScroller from '../Utils/ImagesScroller';
import useImageSelect from '../Utils/useImageSelect';
import DescriptionRenderer from '../Utils/DescriptionRenderer';
import myProjectsData from "./myProjectsData.json"
import TitlesScroller from '../Utils/TitlesScroller';
import ProjectsGallery from './ProjectsGallery';


function MyProjects() {

    const projectsTitlesList = myProjectsData.map(project => project.title);
    const [currentDataIndex, setCurrentDataIndex] = useState(0);
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);
    let currentTitle = projectsTitlesList[currentDataIndex];
    const images = useImageSelect();

    const handleTitleChange = (newDataIndex) => {
        setCurrentDataIndex(newDataIndex);
    };

    const openProjectFromGallery = (index) => {
        setCurrentDataIndex(index);
        setIsGalleryOpen(false);
    };

    const projectsImages = images.filter((img) => {
        return img.includes(currentTitle);
    });

    return (
        <>
            <div className='ImageDescription'>
                <button className='galleryButton' onClick={() => setIsGalleryOpen(true)}>
                    &#9638; All projects
                </button>
                <DescriptionRenderer data={myProjectsData[currentDataIndex]} />
            </div>

            <div className='imageContainer'>
                <div id='titleContainer'>

                    <TitlesScroller
                        titles={projectsTitlesList}
                        currentIndex={currentDataIndex}
                        setNewDataIndex={handleTitleChange}
                    />

                </div>

                <div id="slideContainer" className='slideContainer'>
                    <ImagesScroller receivedImages={projectsImages} title={currentTitle} imagesReady={images.length > 0} />
                </div>
            </div>

            {isGalleryOpen && (
                <ProjectsGallery
                    projects={myProjectsData}
                    images={images}
                    onSelect={openProjectFromGallery}
                    onClose={() => setIsGalleryOpen(false)}
                />
            )}
        </>
    )
}

export default MyProjects
