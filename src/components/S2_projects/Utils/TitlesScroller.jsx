import React, {useState} from 'react'
import arrow from '../../images/arrow.png'

function TitlesScroller({titles, setNewDataIndex}) {

    const [actualTitleIndex, setActualTitleIndex] = useState(0);
    let actualTitle = titles[actualTitleIndex];
    const FormattedTitle = actualTitle.replace(/_/g, ' ');
    const titlesListLength = titles.length - 1;

    const nextTitle = () => {
        const newTitleIndex = actualTitleIndex < titlesListLength ? actualTitleIndex + 1 : 0;
        setActualTitleIndex(newTitleIndex);
        setNewDataIndex(newTitleIndex)
    }

    const previousTitle = () => {
        const newTitleIndex = actualTitleIndex == 0 ? titlesListLength : actualTitleIndex - 1;
        setActualTitleIndex(newTitleIndex);
        setNewDataIndex(newTitleIndex)
    }

    return (
        <>
            <div onClick={previousTitle} >
                <img src={arrow} alt="<" />
            </div>

            {FormattedTitle}

            <div className='returnArrow' onClick={nextTitle} >
                <img src={arrow} alt=">" />
            </div>
        </>
    )
}

export default TitlesScroller