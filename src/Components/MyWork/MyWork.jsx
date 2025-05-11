import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import MyWork_Data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const MyWork = () => {
  return (
    <div id='mywork' className='mywork'>
      <div className="mywork-title">
        <h1>My Work & Project</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        {MyWork_Data.map((mywork, index) => {
          return <div key={index} className="mywork-format">
            <h3>{mywork.s_no}</h3>
            <h2>{mywork.s_name}</h2>
            {mywork.s_no === "01" && mywork.duration && (
              <p className="work-duration">University of Luxembourg</p>
            )}
            {mywork.s_no === "01" && mywork.duration && (
              <p className="work-duration">Duration: {mywork.duration}</p>
            )}
            {mywork.s_no === "01" && (
              <ul>
                <li>Analysis on Android Application Using VUSC</li>
                <li>VUSC (Vulnerability Scanner) is dynamic analysis environment</li>
                <li>Execute ADB commands for app debugging</li>
                <li>Manual Interaction with Applications</li>
                <li>Document findings and provided detailed report</li>

              </ul>
            )}
            {mywork.s_no === "02" && (
              <ul>
                <li>Developed intuitive frontend interface for the music player</li>
                <li>Technologies Used: HTML, CSS, JS, React</li>

              </ul>
            )}
            {mywork.s_no === "03" && (
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

export default MyWork