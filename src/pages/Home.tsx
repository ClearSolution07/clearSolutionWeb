import Carousel from '../components/Carousel';
import HomeFeature1 from '../components/HomeFeature1';
import HomeFeature2 from '../components/HomeFeature2';
import HomeServices from '../components/HomeServices';
import HomeProducts from '../components/HomeProducts';
import HomeIntegrations from '../components/HomeIntegrations';
import Clients from '../components/Clients';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';

const Home = () => {
  return (
    <div className="home">
      <Carousel />
      <HomeFeature1 />
      <HomeFeature2 />
      <HomeProducts />
      <HomeServices />
      <HomeIntegrations />
      <Clients />
      <Testimonials />
      <FAQ />
    </div>
  );
};

export default Home;