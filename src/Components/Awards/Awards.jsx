import React from 'react'
import './Awards.css'
import theme_pattern from '../../assets/theme_pattern.svg' 
import arrow_icon from '../../assets/arrow_icon.svg'

const Awards = () => {
  return (
    <div id='awards' className='awards'>
      <div className="awards-title">
        <h1>Awards & Honours</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="awards-container">
        <div  className="awards-format">
            <h1>🏅</h1>
            <h2>CyberEdu4Teens (Google.org Seminars) Scholarship - March 2026</h2>
            Awarded for my research proposal on gamified educational interventions for cyberbullying awareness among teenagers.
        </div>
        <div  className="awards-format">
            <h1>🥈</h1>
            <h2>2nd Place – CyberEdu4Teens Hackathon (Google.org & SnT), 2025</h2>
            <ul>
                <li>Designed and developed an interactive physical attack-and-defence cybersecurity card game to teach core security concepts to teenagers aged 12–17.</li>
                <li>Project selected as 2nd place winner and prepared for deployment in Phase 2 as part of nationwide cybersecurity workshops in Luxembourg lycées (2026).</li>
                <li>Project recognized for creativity, educational impact, and potential integration into national outreach workshops.</li>
            </ul>
        </div>
        

      </div>

    </div>
  )
}

export default Awards