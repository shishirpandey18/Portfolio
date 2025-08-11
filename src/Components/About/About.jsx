import React from 'react'
import './About.css'
import profile_img from '../../assets/profile_img1.jpeg'
import theme_pattern from '../../assets/theme_pattern.svg'

const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>Hi, I'm Shishir Pandey — a tech enthusiast with a background in web development and a growing passion for cybersecurity. I enjoy building clean, user-friendly applications using modern tools like React, Node.js, and MongoDB. </p>
                        <p>Currently, I'm diving deeper into the world of cybersecurity, exploring mobile app security and dynamic analysis. Whether it’s crafting intuitive UIs or uncovering vulnerabilities, I love learning and tackling new challenges.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>C/C++ </p><hr /></div>
                        <div className="about-skill"><p>HTML & CSS</p><hr /></div>
                        <div className="about-skill"><p>React JS</p><hr /></div>
                        <div className="about-skill"><p>JavaScript</p><hr /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
