import { ArrowRight } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/HomeServices.css';

const HomeServices = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const navigate = useNavigate();

  const services = [
    {
      title: "Web Development",
      description: "We create visually stunning, user-friendly websites that reflect your brand's values and engage your audience with easy-to-use navigation.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
    },
    {
      title: "Mobile Development",
      description: "Our team delivers robust, cross-platform mobile apps that integrate the latest technologies for everyday use and business needs.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Database Management",
      description: "We provide secure, efficient database solutions, from setup and maintenance to performance optimization and data integrity.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop"
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and services to help your business grow and maintain high availability.",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "UI/UX Design",
      description: "Creating beautiful and intuitive user interfaces that provide exceptional user experiences.",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "DevOps Services",
      description: "Streamline your development and operations with our comprehensive DevOps solutions.",
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "AI Solutions",
      description: "Implement cutting-edge artificial intelligence solutions to automate and optimize your business processes.",
      image: "https://d2xd1xgy7uhqas.cloudfront.net/NapaGlobal-image/67a02fc97e6f36c3b92c89d0-CUSTOM%20AI%20SOLUTION%20-%206.1.25.png"
    },
    {
      title: "Cybersecurity",
      description: "Protect your digital assets with our comprehensive security solutions and best practices.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Data Analytics",
      description: "Transform your data into actionable insights with our advanced analytics solutions.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "IoT Solutions",
      description: "Connect and manage your devices with our Internet of Things development services.",
      image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  const startAutoScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      if (!isPaused && scrollContainerRef.current) {
        const nextIndex = (currentCardIndex + 1) % services.length;
        smoothScrollToIndex(nextIndex);
      }
    }, 5000);
  };

  const smoothScrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const cardWidth = 400;
      const gap = 32;
      const scrollPosition = (cardWidth + gap) * index;
      
      scrollContainerRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
      
      setCurrentCardIndex(index);
    }
  };

  const handleLearnMore = (serviceTitle: string) => {
    // Create a slug from the service title
    const serviceSlug = serviceTitle.toLowerCase().replace(/\s+/g, '-');
    navigate(`/services#${serviceSlug}`);
  };

  useEffect(() => {
    startAutoScroll();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [currentCardIndex, isPaused, services.length]);

  return (
    <div className="home-services-section">
      <div className="section-heading-wrapper">
        <SectionHeading text="Our Services" className="heading-features" />
      </div>
      <div className="services-header">
        <h2>Our Services</h2>
      </div>
      <div 
        className="services-scroll-container" 
        ref={scrollContainerRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`service-card ${index === currentCardIndex ? 'active' : ''}`}
              onMouseEnter={() => {
                setCurrentCardIndex(index);
                setIsPaused(true);
              }}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="service-image">
                <img src={service.image} alt={service.title} />
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <button 
                  className="learn-more-btn"
                  onClick={() => handleLearnMore(service.title)}
                >
                  Learn More <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="services-dots">
        {services.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentCardIndex ? 'active' : ''}`}
            onClick={() => smoothScrollToIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeServices;