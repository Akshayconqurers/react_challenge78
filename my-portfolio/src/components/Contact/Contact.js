import './Contact.css';
import { FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Get In Touch</h2>
        <p className="contact-intro">
          I'm always open to discussing new opportunities, interesting projects, 
          or just having a chat about technology!
        </p>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon"><FaEnvelope /></div>
              <div>
                <h4>Email</h4>
                <a href="mailto:akshayprince7800@gmail.com">akshayprince7800@gmail.com</a>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon"><FaPhone /></div>
              <div>
                <h4>Phone</h4>
                <a href="tel:+919453845941">+91 9453845941</a>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon"><FaLinkedin /></div>
              <div>
                <h4>LinkedIn</h4>
                <a href="https://linkedin.com/in/akshay-pratap-singh-a309b8250/" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/akshay-pratap-singh
                </a>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon"><FaGithub /></div>
              <div>
                <h4>GitHub</h4>
                <a href="https://github.com/Akshayconqurers" target="_blank" rel="noopener noreferrer">
                  github.com/Akshayconqurers
                </a>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon"><FaMapMarkerAlt /></div>
              <div>
                <h4>Location</h4>
                <p>Lucknow, India</p>
              </div>
            </div>
          </div>
          
          <div className="contact-form">
            <h3>Send me a message</h3>
            <form>
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Subject" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;