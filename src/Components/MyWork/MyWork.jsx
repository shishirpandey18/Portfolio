import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import MyWork_Data, { Experience_Data } from '../../assets/mywork_data'

const Card = ({ item, index }) => (
  <div className="mywork-format">
    <h3>{String(index + 1).padStart(2, '0')}</h3>
    <h2>{item.title}</h2>
    {item.org && <p className="work-duration">{item.org}</p>}
    {item.duration && <p className="work-duration">Duration: {item.duration}</p>}
    <ul>
      {item.bullets.map((b, i) => <li key={i}>{b}</li>)}
    </ul>
    {item.link && (
      <a className="mywork-link" href={item.link} target="_blank" rel="noopener noreferrer">
        {item.linkLabel || 'View project'} →
      </a>
    )}
  </div>
)

const MyWork = () => {
  return (
    <div id='mywork' className='mywork'>
      <div className="mywork-title">
        <h1>Experience & Projects</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <h2 className="mywork-subtitle">Work Experience</h2>
      <div className="mywork-container">
        {Experience_Data.map((item, index) => <Card key={item.title} item={item} index={index} />)}
      </div>
      <h2 className="mywork-subtitle">Selected Technical Projects</h2>
      <div className="mywork-container">
        {MyWork_Data.map((item, index) => <Card key={item.title} item={item} index={index} />)}
      </div>
    </div>
  )
}

export default MyWork
