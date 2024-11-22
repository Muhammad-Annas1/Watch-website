import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";

const contact = () => {
  return (
    <div className="bg-image" style={{ backgroundImage: "url(/pic13.jpg)" }}>
      
      
      <div className='icon' >

        <div className='email'  >
          <MdOutlineEmail />
          <span className='email-text'>xyz@example.com</span>
        </div>

        <div className='insta' style={{paddingTop: '5px'}}>
          <FaInstagram />
          <span className='insta-text' style={{marginLeft: '0px'  }}>@watches.shop</span>
        </div>

        <div className='location'>
          <FaLocationDot />
          <span className='location-text' style={{marginLeft: '0px'}} >123 Main Street, City,Country</span>
        </div>

        <div className='phone' style={{paddingTop: '5px'}}>
          <FaPhone />
          <span className='phone-text' style={{marginLeft: '3px'}}>+1 (123) 456-7890</span>
        </div>

      </div>
      

      <section className="contact-form">
        <h2 className="fade-in">Contact Us</h2>
        <form>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="text" placeholder="Phone Number" required />
          <textarea placeholder="Message" rows={5} required></textarea>
          <button type="submit">Send Message</button>

        </form>
      </section>

    </div>
  )
}

export default contact
