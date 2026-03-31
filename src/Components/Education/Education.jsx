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
            {/* <h3>{education.s_no}</h3> */}
            <h2>{education.s_name}</h2>
            {education.s_no === "01" && education.duration && (
              <p className="work-duration">University of Luxembourg</p>
            )}
            {education.s_no === "01" && education.duration && (
              <p className="work-duration">Duration: {education.duration}</p>
            )}
            {education.s_no === "01" && (
              <p>Thesis: "Design, Implementation, and Empirical Evaluation of a Gamified Behavioral Intervention Framework for Cyberbullying Risk Prevention among Adolescents"</p>
            )}
            
            {education.s_no === "02" && education.duration && (
              <p className="work-duration">University of Rome Tor Vergata</p>
            )}
            {education.s_no === "02" && education.duration && (
              <p className="work-duration">Duration: {education.duration}</p>
            )}
            {education.s_no === "02" && (
              <p>"Space Through Literature, Theatre, Cinema, and Other Arts"</p>
            )}

            
            


          </div>
        })}


      </div>

    </div>
  )
}

export default education