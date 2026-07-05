import { useState } from 'react'
import useSliderAnimation from '../ScrollEffect/useSliderAnimation'
import Experience from './Experiences/Experience'
import MyProjects from './Projects/MyProjects'
import PageChangeButtons from '../ScrollEffect/PageChangeButtons'
import '../styles/projects.css'
import '../styles/perspectiveRotate.css'

function Projects() {

    const [isChecked, setIsChecked] = useState(true);

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.id === 'experience');
    };

    return (
        <section className={`Projects ${useSliderAnimation(1)}`}>
            <img src="/spline_flower.png" alt="" className="ProjectsBg" />

            <div className='glassEffect'></div>

            <div className='ProjectsContainer'>
                <div className='ProjectsRadio'>
                    <input type="radio" name="experience" id="experience" checked={isChecked} onChange={handleCheckboxChange} />
                    <label htmlFor="experience" className='ProjectsExperience'>Experiences</label>

                    <input type="radio" name="experience" id="MyProjects" checked={!isChecked} onChange={handleCheckboxChange} />
                    <label htmlFor="MyProjects" className='ProjectsMyProjects'>Projects</label>
                </div>

                <div className='ExperiencesOrProjects'>
                    <div className={`ExperienceContainer ${isChecked ? "RotateLeftIn" : "RotateLeftOut"}`}>
                        <Experience />
                    </div>

                    <div className={`MyProjectsContainer ${!isChecked ? "RotateRightIn" : "RotateRightOut"}`}>
                        <MyProjects />
                    </div>
                </div>
                <PageChangeButtons />
            </div>

        </section>
    )
}

export default Projects