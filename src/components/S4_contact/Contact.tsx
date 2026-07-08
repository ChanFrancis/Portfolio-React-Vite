import useSliderAnimation from '../ScrollEffect/useSliderAnimation'
import PageChangeButtons from '../ScrollEffect/PageChangeButtons'
import '../styles/contact.css'

function Contact() {

  return (
    <section className={`Contact ${useSliderAnimation(2)}`}>
      <div className='ContactContainer'>
        <h2 className='ContactMe'>
          Contact me at <a href='mailto:francis.chan.75013@gmail.com' className='email'>francis.chan.75013@gmail.com</a> <br />
          or find me on LinkedIn and GitHub.
        </h2>
        <div className='Socials'>
          <a href="https://www.linkedin.com/in/francis-chan-290325123/" target="_blank" rel="noopener noreferrer">
            <img src="/linkedin.png" alt="LinkedIn" className='LinkedIn' />
          </a>
          <a href="https://github.com/ChanFrancis?tab=repositories" target="_blank" rel="noopener noreferrer">
            <img src="/github.png" alt="GitHub" className='GitHub' />
          </a>
        </div>
        <div className='CopyRight'>&copy; Francis Chan {new Date().getFullYear()}</div>
      </div>
      <PageChangeButtons currentSlide="end" />
    </section>
  )
}

export default Contact
