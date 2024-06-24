import React, { useEffect, useState } from 'react'
import activateSliderAnimation from '../ScrollEffect/activateSliderAnimation'
import Spline from '@splinetool/react-spline';
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
        <section className={`Projects ${activateSliderAnimation(1)}`}>
            <Spline scene="https://prod.spline.design/w4KjH9I6F1urphN2/scene.splinecode" className="Spline_bg" />

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
                {PageChangeButtons()}
            </div>

        </section>
    )
}

export default Projects