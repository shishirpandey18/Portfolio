import React from 'react'
import './Contact.css'
import mail_icon from '../../assets/mail.svg'
import location_icon from '../../assets/location.gif'
import theme_pattern from '../../assets/theme_pattern.svg'
import linkedin from '../../assets/linkedin.svg'
import github from '../../assets/github.svg'

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "be108470-6d91-431a-adbb-fdc1f6e96da5");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
      };

  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in Touch</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's Talk</h1>
                <p>I'm looking for entry-level opportunities in IT support, systems or cybersecurity. If you have an opportunity, advice, or just want to chat about tech, feel free to reach out!</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" /><p><a className="contact-link" href="mailto:shishirpandey180@gmail.com">shishirpandey180@gmail.com</a></p>


                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt="" /><p>Luxembourg</p>
                    </div>
                    <div className="contact-detail">
                        <p>🌐 <a className="contact-link" href="https://shishir.nepeu.eu/" target="_blank" rel="noopener noreferrer">shishir.nepeu.eu</a></p>
                    </div>
                    <div className="contact-detail">
                        <p>✍️ <a className="contact-link" href="https://blog.nepeu.eu/" target="_blank" rel="noopener noreferrer">blog.nepeu.eu</a></p>
                    </div>
                    <div className="socialmedia">
                    <a href="https://www.linkedin.com/in/pshishir/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="" /></a>
                    <a href="https://github.com/shishirpandey18/" target="_blank" rel="noopener noreferrer"><img src={github} alt="" /></a>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your name.' name='name'/>
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter your email.' name='email' />
                <label htmlFor="">Write your message here.</label>
                <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
                <button type='submit' className="contact-submit">Submit now</button>
            </form>
        </div>

    </div>
  )
}

export default Contact