import React from 'react'
import './Skills.css'
import theme_pattern from '../../assets/theme_pattern.svg' 
import arrow_icon from '../../assets/arrow_icon.svg'

const Skills = () => {
  return (
    <div id='skills' className='skills'>
      <div className="skills-title">
        <h1>Skills</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="skills-container">
        <div  className="skills-format">
            <h2>Technical</h2>
            <ul>
                <li>Python</li>
                <li>C / C++</li>
                <li>Linux</li>
                <li>TCP/IP & Networking</li>
                <li>Wireshark / tcpdump</li>
                <li>Android App Analysis (ADB)</li>
                <li>Vulnerability Scanning</li>
                <li>MS Office Suite</li>
            </ul>
        </div>
        <div  className="skills-format">
            <h2>Web & Dev</h2>
            <ul>
                <li>HTML / CSS</li>
                <li>JavaScript</li>
                <li>React (Hooks, Router)</li>
                <li>Formik & Yup</li>
                <li>MERN Stack</li>
            </ul>
        </div>
        <div  className="skills-format">
            <h2>Security & Policy</h2>
            <ul>
                <li>Cyber Risk Management</li>
                <li>GDPR / NIS2 / DORA</li>
                <li>ISO 27001</li>
                <li>Privacy-aware Design</li>
                <li>Threat Intelligence</li>
                <li>Digital Forensics</li>
                <li>EU Digital Sovereignty</li>
            </ul>
        </div>
        <div className="skills-format">
            <h2>Relevant Coursework</h2>
            <ul className="small-text">
                <li>Cybersecurity Ethics – ethical decision-making, privacy, societal impact of digital technologies</li>
                <li>Cyber Policy – national and EU-level cybersecurity and data governance frameworks like GDPR, NIS2, DORA</li>
                <li>Cybersecurity Risk Management – risk assessment, mitigation strategies, compliance-oriented security, ISO 27001</li>
                <li>EU Digital Sovereignty – EU data strategy, digital sovereignty, secure data sharing through research & innovation</li>
                <li>Entrepreneurship (Cybersecurity context) – innovation in regulated and public-sector environments</li>
                <li>Threat Intelligence & Digital Forensics – legal and ethical considerations in cyber investigations</li>
            </ul>
        </div>
        

      </div>

    </div>
  )
}

export default Skills