import PageCarousel from '../components/PageCarousel';
import SubmitForm from '../components/Forms';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram
} from 'lucide-react';
import '../styles/Contact.css';

const Contact = () => {
  const images = [
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  ];

  const officeHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'Closed' }
  ];

  const socialLinks = [
    { icon: <Facebook size={20} />, url: 'https://www.facebook.com/clearsolutionssofficial/', name: 'Facebook' },
    { icon: <Twitter size={20} />, url: 'https://x.com/CSS_2024_Dev', name: 'Twitter' },
    { icon: <Linkedin size={20} />, url: 'https://www.linkedin.com/company/104755004/', name: 'LinkedIn' },
    { icon: <Instagram size={20} />, url: 'https://www.instagram.com/clear.solutions.services_/', name: 'Instagram' }
  ];

  return (
    <div className="contact-page">
      <PageCarousel 
        images={images}
        title="Contact Us"
        description="Let's discuss how we can help your business grow"
      />
      <div className="contact-content">
        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-details">
              <h2>Get in Touch</h2>
              <p>We're here to help and answer any question you might have. We look forward to hearing from you.</p>
              
              <div className="contact-methods">
                <div className="contact-method">
                  <Mail size={24} />
                  <div>
                    <h3>Email</h3>
                    <a href="mailto:clear.solutions07@gmail.com" className="contact-link">
                      clear.solutions07@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="contact-method">
                  <Phone size={24} />
                  <div>
                    <h3>Phone</h3>
                    <p className="contact-link">
                      <a href="tel:9365752655">9365752655</a>{' '}
                    </p>
                  </div>
                </div>
                
                <div className="contact-method">
                  <MapPin size={24} />
                  <div>
                    <h3>Address</h3>
                    <p>House No. 04, ByeLane A02, Shankar Nagar Path, Near Dominos lalganesh, Odalbakra, Guwahati, Assam 781034</p>
                  </div>
                </div>

                <div className="contact-method">
                  <Clock size={24} />
                  <div>
                    <h3>Office Hours</h3>
                    <div className="office-hours">
                      {officeHours.map((schedule, index) => (
                        <div key={index} className="schedule">
                          <span className="day">{schedule.day}</span>
                          <span className="hours">{schedule.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="social-links">
                <h3>Follow Us</h3>
                <div className="social-icons">
                  {socialLinks.map((social, index) => (
                    <a 
                      key={index} 
                      href={social.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.832182678619!2d91.73471889999999!3d26.1370142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x62c10b610c3f14e9%3A0xce889549d499289e!2sClear%20Solutions%20Services!5e0!3m2!1sen!2sin!4v1740418478201!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              />
            </div>
          </div>
          
          <div className="contact-form-container">
            <h2>Send us a Message</h2>
            <SubmitForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;