import { Shield, Target, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SectionHeading from './SectionHeading';
import '../styles/HomeFeature1.css';

const HomeFeature1 = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/services');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="home-feature1">
      <div className="section-heading-wrapper">
        <SectionHeading text="Why Choose Clear Solution Services" className="heading-features" />
      </div>

      <div className="feature1-content">
        <h1 className="main-heading">
          You do the business,<br />
          we'll handle the tech.
        </h1>
        
        <p className="main-description">
          We are dedicated to providing comprehensive technology solutions, focusing on
          web development, database management, system architecture, mobile
          applications, and UI/UX design. As a tech innovator, we aim to empower
          businesses with cutting-edge digital tools and services that enhance their
          operational efficiency and user engagement.
        </p>

        <button className="get-started-btn" onClick={handleGetStarted}>
          Get Started
        </button>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <Target size={32} />
            </div>
            <h3>Commitment to Innovation</h3>
            <p>
              Leveraging the latest technologies and embracing continuous learning to deliver
              state-of-the-art solutions that keep clients ahead in the competitive tech landscape.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <Shield size={32} />
            </div>
            <h3>100% Secured</h3>
            <p>
              We take proactive steps make sure your information and databases are secure.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <Users size={32} />
            </div>
            <h3>Client-Centric Focus</h3>
            <p>
              Prioritizing client satisfaction through personalized service, close collaboration,
              and dedicated support, ensuring solutions that align perfectly with business goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFeature1;