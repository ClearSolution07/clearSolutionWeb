import React, { useState, useEffect } from 'react';
import { ArrowRight, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import '../styles/Carousel.css';

const slides = [
  {
    topText: "In Clear Solutions Services we provide",
    title: "WE PROVIDE YOU",
    subtitle: "MOBILE APPLICATION",
    description: "Building engaging mobile experiences that resonate with your users."
  },
  {
    topText: "In Clear Solutions Services we provide",
    title: "INNOVATIVE",
    subtitle: "SOLUTIONS",
    description: "Transforming ideas into powerful digital experiences"
  },
  {
    topText: "In Clear Solutions Services we provide",
    title: "EXPERT",
    subtitle: "DEVELOPMENT",
    description: "Creating cutting-edge applications with modern technologies"
  }
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();
  
    const handleGetStarted = () => {
      navigate('/contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleLoadingComplete = () => {
      // Add a small delay to ensure smooth transition
      setTimeout(() => {
        setIsLoaded(true);
      }, 100);
    };

    window.addEventListener('loadingComplete', handleLoadingComplete);
    return () => {
      window.removeEventListener('loadingComplete', handleLoadingComplete);
    };
  }, []);

  const scrollToClients = () => {
    const clientsSection = document.querySelector('.clients');
    if (clientsSection) {
      clientsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="carousel">
      <div className={`carousel-background ${isLoaded ? 'start-animation' : ''}`}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide-content ${index === current ? 'active' : ''}`}
          >
            <p className="top-text">{slide.topText}</p>
            <h2>
              {slide.title}<br/>{slide.subtitle}
            </h2>
            <p className="description">{slide.description}</p>
            
            <div className="trusted-clients" onClick={scrollToClients}>
              <div className="client-avatars">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop" alt="Client 1" />
                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=50&h=50&fit=crop" alt="Client 2" />
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop" alt="Client 3" />
              </div>
              <span>
                <Users size={16} />
                Trusted by 20+ Clients
              </span>
            </div>

            <button className="get-started-btn" onClick={handleGetStarted}>
              Get Started
              <ArrowRight size={20} />
            </button>
          </div>
        ))}
      </div>
      <div className="carousel-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === current ? 'active' : ''}`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;