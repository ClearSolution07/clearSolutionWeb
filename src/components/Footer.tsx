import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2 // Start animation when 20% of the footer is visible
      }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <footer ref={footerRef} className={`footer ${isVisible ? 'animate' : ''}`}>
      <div className="footer-content">
        <div className="footer-left">
          <div className="footer-logo">
            <img src="/CLEAR SOLUTIONS LOGOS-2.svg" alt="Clear Solutions" className="logo" />
          </div>
          <p className="footer-tagline">We Build your success</p>
        </div>

        <div className="footer-center">
          <h3>Contact details</h3>
          <p>
            <a href="tel:+918133895591">9365752655</a>
          </p>
          <p>
            <a href="mailto:clear.solutions07@gmail.com">clear.solutions07@gmail.com</a>
          </p>
        </div>

        <div className="footer-right">
          <div className="footer-section">
            <h3>Community</h3>
            <ul>
              <li><Link to="/help-center">Help Center</Link></li>
              <li><Link to="/partners">Partners</Link></li>
              <li><Link to="/suggestions">Suggestions</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/newsletters">Newsletters</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Partner</h3>
            <ul>
              <li><Link to="/our-partner">Our Partner</Link></li>
              <li><Link to="/become-partner">Become a Partner</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="copyright">
          <p>Copyright © {currentYear} clearsolutions.</p>
          <p>All Rights Reserved.</p>
        </div>
        <div className="social-links">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Instagram size={20} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <Facebook size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <Twitter size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;