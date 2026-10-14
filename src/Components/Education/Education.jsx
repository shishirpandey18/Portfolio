import React from 'react'
import './Education.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Education_Data from '../../assets/education_data'

const Education = () => {
  return (
    <div id='education' className='education'>
      <div className="education-title">
        <h1>Education</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="education-container">
        {Education_Data.map((education) => (
          <div key={education.title} className="education-format">
            <h2>{education.title}</h2>
            <p className="work-duration">{education.org}</p>
            <p className="work-duration">Duration: {education.duration}</p>
            {education.bullets.map((b, i) => <p key={i}>{b}</p>)}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Education
