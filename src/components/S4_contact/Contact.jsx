import React from 'react'
import activateSliderAnimation from '../ScrollEffect/activateSliderAnimation'
import PageChangeButtons from '../ScrollEffect/PageChangeButtons'
import '../styles/contact.css'

function Contact() {

  return (
    <section className={`Contact ${activateSliderAnimation(2)}`}>
      <div className='ContactContainer'>
      <h2 className='ContactMe'>
        Contact me at <a href='mailto:francis.chan.75013@gmail.com' className='email'>francis.chan.75013@gmail.com</a> <br /> 
        or throught my LinkedIn.
      </h2>
      <div><a href="https://www.linkedin.com/in/francis-chan-290325123/"><img src="/linkedin.png" alt="LinkedIn" className='LinkedIn'/></a></div>
      <div className='CopyRight'>&copy; Francis Chan 2024</div>
      </div>
      {PageChangeButtons("end")}
    </section>
  )
}

export default Contact