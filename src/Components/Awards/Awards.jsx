import React from 'react'
import './Awards.css'
import theme_pattern from '../../assets/theme_pattern.svg'

const Awards = () => {
  return (
    <div id='awards' className='awards'>
      <div className="awards-title">
        <h1>Awards & Leadership</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="awards-container">
        <div className="awards-format">
            <h1>🏅</h1>
            <h2>CyberEdu4Teens Scholarship (Google.org Seminars) – March 2026</h2>
            Awarded for my research proposal on gamified interventions to raise cyberbullying awareness among teenagers.
        </div>
        <div className="awards-format">
            <h1>🥈</h1>
            <h2>2nd Place – CyberEdu4Teens Hackathon (Google.org & SnT), 2025</h2>
            Serious game for cyberbullying awareness, selected for workshops in Luxembourg lycées.
        </div>
        <div className="awards-format">
            <h1>🌍</h1>
            <h2>International Selection – Winter School 2025, University of Rome Tor Vergata</h2>
            Chosen from 67 applicants for a fully funded place (December 2025).
        </div>
        <div className="awards-format">
            <h1>🤝</h1>
            <h2>Collaboration & Communication</h2>
            <ul>
                <li>Delivered a technical awareness session for Luxembourg Tech School students, explaining technical concepts clearly to a young audience.</li>
                <li>Student Representative for the Master's cohort, University of Luxembourg (Sep 2025 – Sep 2026), acting as the link between students and staff.</li>
                <li>Vice-President, NCE IT Club (Dec 2021 – Feb 2023); Treasurer, NCE IT Club (Dec 2019 – Dec 2020).</li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Awards
