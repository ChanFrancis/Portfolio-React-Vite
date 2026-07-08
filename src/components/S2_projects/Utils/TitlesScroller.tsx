import arrow from '../../images/arrow.png'

interface TitlesScrollerProps {
    titles: string[];
    currentIndex: number;
    setNewDataIndex: (index: number) => void;
}

function TitlesScroller({ titles, currentIndex, setNewDataIndex }: TitlesScrollerProps) {

    const FormattedTitle = titles[currentIndex].replace(/_/g, ' ');
    const titlesListLength = titles.length - 1;

    const nextTitle = () => {
        setNewDataIndex(currentIndex < titlesListLength ? currentIndex + 1 : 0);
    }

    const previousTitle = () => {
        setNewDataIndex(currentIndex === 0 ? titlesListLength : currentIndex - 1);
    }

    return (
        <>
            <div onClick={previousTitle} >
                <img src={arrow} alt="<" />
            </div>

            <span className='titleText'>
                {FormattedTitle}
                <span className='titleCounter'>{currentIndex + 1} / {titles.length}</span>
            </span>

            <div className='returnArrow' onClick={nextTitle} >
                <img src={arrow} alt=">" />
            </div>
        </>
    )
}

export default TitlesScroller
