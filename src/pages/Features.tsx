import PageCarousel from '../components/PageCarousel';
import HomeFeature2 from '../components/HomeFeature2';
import '../styles/Features.css';

const Features = () => {
  const images = [
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  ];

  return (
    <div className="features-page">
      <PageCarousel 
        images={images}
        title="Our Features"
        description="Innovative solutions powered by cutting-edge technology"
      />
      <HomeFeature2 />
    </div>
  );
};

export default Features;