import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import PageCarousel from '../components/PageCarousel';
import { ArrowRight } from 'lucide-react';
import '../styles/Services.css';

const Services = () => {
  const location = useLocation();
  const servicesRef = useRef<Record<string, HTMLDivElement | null>>({});

  const images = [
    "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  ];

  const services = [
    {
      title: "Web Development",
      description: "We create visually stunning, user-friendly websites that reflect your brand's values and engage your audience with easy-to-use navigation. Our web development team focuses on building responsive, high-performance websites that provide exceptional user experiences across all devices.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
      align: "right"
    },
    {
      title: "Mobile Development",
      description: "We create sophisticated mobile applications for iOS and Android platforms that deliver exceptional user experiences. Our mobile development team focuses on building intuitive, feature-rich apps that help businesses connect with their customers effectively. From concept to deployment, we ensure your mobile application meets the highest standards of quality and performance.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
      align: "left"
    },
    {
      title: "Database Management",
      description: "We provide secure, efficient database solutions, from setup and maintenance to performance optimization and data integrity. Our database management services ensure your data is organized, protected, and easily accessible when needed. We implement robust security measures and regular backups to protect your valuable information.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop",
      align: "right"
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and services to help your business grow and maintain high availability. Our cloud solutions are designed to optimize your operations, reduce costs, and enhance security. We provide comprehensive cloud migration, management, and optimization services tailored to your specific business needs.",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop",
      align: "left"
    },
    {
      title: "UI/UX Design",
      description: "Creating beautiful and intuitive user interfaces that provide exceptional user experiences. Our design team focuses on understanding your users' needs and behaviors to create interfaces that are not only visually appealing but also functional and easy to navigate. We employ user-centered design principles to ensure your digital products are engaging and effective.",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=2070&auto=format&fit=crop",
      align: "right"
    },
    {
      title: "DevOps Services",
      description: "Streamline your development and operations with our comprehensive DevOps solutions. We help organizations implement continuous integration and delivery pipelines, automate infrastructure management, and optimize development workflows. Our DevOps services enable faster, more reliable software delivery and improved collaboration between development and operations teams.",
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=2070&auto=format&fit=crop",
      align: "left"
    },
    {
      title: "AI Solutions",
      description: "Implement cutting-edge artificial intelligence solutions to automate and optimize your business processes. Our AI services include machine learning model development, natural language processing, computer vision, and predictive analytics. We help businesses leverage AI technologies to gain valuable insights, enhance decision-making, and create innovative products and services.",
      image: "https://d2xd1xgy7uhqas.cloudfront.net/NapaGlobal-image/67a02fc97e6f36c3b92c89d0-CUSTOM%20AI%20SOLUTION%20-%206.1.25.png",
      align: "right"
    },
    {
      title: "Cybersecurity",
      description: "Protect your digital assets with our comprehensive security solutions and best practices. Our cybersecurity services include vulnerability assessments, penetration testing, security monitoring, and incident response. We help organizations identify and address security risks, implement robust protection measures, and develop security policies and procedures.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2070&auto=format&fit=crop",
      align: "left"
    },
    {
      title: "Data Analytics",
      description: "Transform your data into actionable insights with our advanced analytics solutions. Our data analytics services help businesses collect, process, and analyze data to uncover patterns, trends, and correlations. We develop customized dashboards and reporting tools that enable data-driven decision-making and strategic planning.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      align: "right"
    },
    {
      title: "IoT Solutions",
      description: "Connect and manage your devices with our Internet of Things development services. We design and implement IoT systems that enable real-time monitoring, data collection, and automated control of physical devices. Our IoT solutions help businesses improve operational efficiency, enhance product capabilities, and create new revenue streams.",
      image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=2070&auto=format&fit=crop",
      align: "left"
    }
  ];

  useEffect(() => {
    // Check if there's a hash in the URL
    if (location.hash) {
      // Remove the # character
      const serviceId = location.hash.substring(1);
      
      // Scroll to the service section if it exists
      if (servicesRef.current[serviceId]) {
        setTimeout(() => {
          servicesRef.current[serviceId]?.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }, 500); // Small delay to ensure the page has fully loaded
      }
    }
  }, [location]);

  return (
    <div className="services-page">
      <PageCarousel 
        images={images}
        title="Our Services"
        description="Expert solutions tailored to your needs"
      />
      <div className="services-content">
        <div className="services-list">
          {services.map((service, index) => {
            // Create a slug from the service title
            const serviceSlug = service.title.toLowerCase().replace(/\s+/g, '-');
            
            return (
              <div 
                key={index} 
                className={`service-item ${service.align}`}
                id={serviceSlug}
                ref={el => servicesRef.current[serviceSlug] = el}
              >
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
                <div className="service-image">
                  <img src={service.image} alt={service.title} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;