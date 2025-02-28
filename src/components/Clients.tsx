import React from 'react';
import SectionHeading from './SectionHeading';
import '../styles/Clients.css';

const Clients = () => {
  const clients = [
    {
      name: "Cura Tech Engineering",
      logo: "/cura.svg"
    },
    {
      name: "Sarathi",
      logo: "/saarthi.svg"
    },
    {
      name: "Focus",
      logo: "/focus-3.svg"
    },
    {
      name: "Alex Health Care System",
      logo: "/alex.svg"
    }
  ];

  // Duplicate the clients array to create a seamless loop
  const duplicatedClients = [...clients, ...clients, ...clients];

  return (
    <section className="clients">
      <div className="section-heading-wrapper">
        <SectionHeading text="Our Clients" className="heading-features" />
      </div>
      
      <div className="clients-header">
        <h2>Our collaborated companies</h2>
        <p>Thank you for partnering with us</p>
      </div>
      
      <div className="clients-scroll-container">
        <div className="clients-track">
          {duplicatedClients.map((client, index) => (
            <div key={index} className="client-logo">
              <img src={client.logo} alt={client.name} />
              <span className="client-name">{client.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;