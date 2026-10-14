import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'

const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-right">
                    <div className="about-para">
                        <p>Hi, I'm Shishir Pandey — a recent graduate of the Master in Cybersecurity and Cyber Defence at the University of Luxembourg, with a Bachelor's in Computer Engineering. I'm a curious and hands-on person who enjoys solving problems, learning independently and understanding how things work.</p>
                        <p>I value teamwork, clear communication and being someone others can rely on. I adapt quickly to new environments, take initiative when faced with challenges and enjoy explaining things in a simple, practical way. I'm looking for an entry-level opportunity in IT support, systems or cybersecurity where I can keep learning, contribute to the team and grow professionally.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
