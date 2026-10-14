import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img1.jpeg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import resume from '../../assets/resume.pdf'

const Hero = () => {
        const handleDownloadResume = () => {
          const link = document.createElement('a');
          link.href = resume;
          link.download = 'Shishir-Pandey-CV.pdf';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        };
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt=''/>
        <h1><span>I'm Shishir Pandey,</span> a cybersecurity graduate from the University of Luxembourg.</h1>
        <p>Master in Cybersecurity and Cyber Defence, Bachelor's in Computer Engineering. Looking for an entry-level role in IT support, systems or cybersecurity.</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
            <div className="hero-resume" onClick={handleDownloadResume}>My resume</div>
        </div>
    </div>
  )
}

export default Hero