import React from 'react'
import './Contact.css'
import mail_icon from '../../assets/email.png'
import location_icon from '../../assets/location.png'
import theme_pattern from '../../assets/theme_pattern.svg'

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
                <p>I'm just getting started, so if you have advice, opportunities, or just want to chat about tech, feel free to reach out!</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" /><p>shishirpandey180@gmail.com</p>


                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt="" /><p>Belval, Luxembourg</p>
                    </div>
                    <div className="contact-detail">
                        <img src="" alt="" /><p></p>
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