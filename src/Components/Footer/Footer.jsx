import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/Logo.png'
import user_icon from '../../assets/user_icon.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footer_logo} alt="" />
                <p>A beginner in cybersecurity from Nepal, currently residing in Luxembourg and learning by building, exploring, and staying curious.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder='Enter your email.' />
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">© 2025 Shishir Pandey. Built with ❤️ and curiosity.</p>
            <div className="footer-bottom-right">
                <p><AnchorLink className='anchor-link' offset={50} href='#home'>Home</AnchorLink></p>
                <p><AnchorLink className='anchor-link' offset={50} href='#about'>About Me</AnchorLink></p>
                <p><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></p>
            </div>
        </div>
    </div>
  )
}

export default Footer