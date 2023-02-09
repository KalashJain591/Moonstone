import React from 'react'
import './footer.css'
export default function Footer() {
  return (
    <div className='footer-body'>
     <div className="footer-section">
        <div className="footer-container">
          <div className="footer-image footer-solo-section">
            <img src="https://portal.medicaps.ac.in/accsoft2/images/medi_logo.jpeg" alt=""/>
          </div>
          <div className="footer-content-section footer-solo-section">
            <div className="content-section-heading">
              <h6>Quick Links</h6>
              <ul>
                <li><a href='/'>Home</a></li>
                <li><a href='/events'>Events</a></li>
                <li><a href='/aboutus'>About Us</a></li>
                <li><a href='/ourteam'>Our Team</a></li>
                <li><a href='/contactus'>Contact Us</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-help-section footer-solo-section">
            <h6>Help</h6>
            <ul>
              <li>Shipping Information (FAQs)</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="footer-contact-section footer-solo-section">
            <h6>Have Questions?</h6>
            <div className="footer-address solo-contact">
              <i className="fa-solid fa-location-dot"></i> Medi-Caps University

A.B. Road, Pigdamber, Rau Indore - 453331
            </div>
            <div className="footer-contact-no solo-contact">
              <i className="fa-solid fa-phone"></i> +91 9827141324
            </div>
            <div className="footer-gmail solo-contact">
              <i className="fa-solid fa-envelope"></i> info@medicaps.ac.in
            </div>
          </div>
        </div>
      </div> 
    </div>
  )
}
