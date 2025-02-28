import React from 'react';
import { ArrowRight } from 'lucide-react';
import '../styles/HomeFeature2.css';

const HomeFeature2 = () => {
  const features = [
    {
      title: "Easily control your business through our products.",
      description: "Our products offer seamless web solutions, advanced database management, and scalable system architecture, enabling you to efficiently manage your business operations. We create dynamic and user-friendly platforms that simplify your online presence and data handling. With our tailored, integrated solutions, you can streamline processes and focus on growth effortlessly.",
      images: [
        "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?q=80&w=1080&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1080&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1080&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?q=80&w=1080&auto=format&fit=crop"
      ],
      showStoreButtons: true,
      headingPosition: 'left'
    },
    {
      title: "Committed to Long-Term Success",
      description: "Our products offer seamless web solutions, advanced database management, and scalable system architecture, enabling you to efficiently manage your business operations. We create dynamic and user-friendly platforms that simplify your online presence and data handling. With our tailored, integrated solutions, you can streamline processes and focus on growth effortlessly.",
      images: [
        "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=1080&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1573164574472-797cdf4a583a?q=80&w=1080&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1573164713619-24c711fe7878?q=80&w=1080&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1573167243872-43c6433b9d40?q=80&w=1080&auto=format&fit=crop"
      ],
      showStoreButtons: false,
      headingPosition: 'right'
    }
  ];

  return (
    <div className="feature-sections">
      {features.map((feature, index) => (
        <React.Fragment key={index}>
          <section className={`feature-section ${index % 2 === 0 ? '' : 'reverse'}`}>
            <div className="feature-content">
              <h2>{feature.title}</h2>
              <p>{feature.description}</p>
              {feature.showStoreButtons ? (
                <div className="store-buttons">
                  <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" className="store-button" />
                  <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Google Play" className="store-button google-play" />
                </div>
              ) : (
                <button className="get-started-btn">
                  Get Started <ArrowRight size={20} />
                </button>
              )}
            </div>
            <div className="feature-images">
              {feature.images.map((image, imgIndex) => (
                <div key={imgIndex} className="image-container">
                  <img src={image} alt={`Feature ${index + 1} - ${imgIndex + 1}`} />
                </div>
              ))}
            </div>
          </section>
        </React.Fragment>
      ))}
    </div>
  );
};

export default HomeFeature2;