import React from 'react'
import './Skills.css'
import theme_pattern from '../../assets/theme_pattern.svg'

const Skills_Data = [
  {
    heading: 'Systems & Networking',
    items: ['Linux', 'Docker', 'Git & GitHub', 'TCP/IP & Networking', 'Wireshark / tcpdump', 'ADB'],
  },
  {
    heading: 'Programming & Data',
    items: ['Python', 'C / C++', 'SQL, PostgreSQL', 'JavaScript, HTML, CSS', 'React'],
  },
  {
    heading: 'AI, Security & Regulation',
    items: ['Adversarial ML (evasion, poisoning)', 'Jupyter, Google Colab', 'NIS2, GDPR, DORA, ISO 27001', 'Figma'],
  },
  {
    heading: 'Languages',
    items: ['Nepali – Native', 'English – C1 (IELTS 7)', 'French – Intermediate', 'Hindi – Intermediate'],
  },
]

const Skills = () => {
  return (
    <div id='skills' className='skills'>
      <div className="skills-title">
        <h1>Skills</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="skills-container">
        {Skills_Data.map((group) => (
          <div key={group.heading} className="skills-format">
            <h2>{group.heading}</h2>
            <ul>
              {group.items.map((s) => <li key={s}>{s}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
