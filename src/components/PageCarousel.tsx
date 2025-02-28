import React, { useState, useEffect } from 'react';
import '../styles/PageCarousel.css';

interface PageCarouselProps {
  images: string[];
  title: string;
  description: string;
}

const PageCarousel: React.FC<PageCarouselProps> = ({ images, title, description }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="page-carousel">
      {images.map((image, index) => (
        <div
          key={index}
          className={`page-slide ${index === current ? 'active' : ''}`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
      <div className="page-slide-content">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className="page-carousel-dots">
        {images.map((_, index) => (
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

export default PageCarousel;