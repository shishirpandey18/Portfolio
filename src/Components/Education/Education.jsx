import React from 'react'
import './Education.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Education_Data from '../../assets/education_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const education = () => {
  return (
    <div id='education' className='education'>
      <div className="education-title">
        <h1>Education</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="education-container">
        {Education_Data.map((education, index) => {
          return <div key={index} className="education-format">
            <h3>{education.s_no}</h3>
            <h2>{education.s_name}</h2>
            {education.s_no === "01" && education.duration && (
              <p className="work-duration">University of Luxembourg</p>
            )}
            {education.s_no === "01" && education.duration && (
              <p className="work-duration">Duration: {education.duration}</p>
            )}
            {education.s_no === "01" && (
              <ul>
                <li>Analysis on Android Application Using VUSC</li>
                <li>VUSC (Vulnerability Scanner) is dynamic analysis environment</li>
                <li>Execute ADB commands for app debugging</li>
                <li>Manual Interaction with Applications</li>
                <li>Document findings and provided detailed report</li>

              </ul>
            )}
            {education.s_no === "02" && (
              <ul>
                <li>Developed intuitive frontend interface for the music player</li>
                <li>Technologies Used: HTML, CSS, JS, React</li>

              </ul>
            )}
            {education.s_no === "03" && (
              <ul>
                <li>Developed a system for tourist to view and book diﬀerent packages</li>
                <li>Created form using formik with Yup validation for Authentication.</li>
                <li>Technologies Used: HTML, CSS, JS, React, Formik, Yup</li>

              </ul>
            )}
            


          </div>
        })}


      </div>

    </div>
  )
}

export default education