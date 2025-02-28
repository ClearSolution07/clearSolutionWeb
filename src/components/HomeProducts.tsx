import SectionHeading from '../components/SectionHeading';
import { ArrowRight } from 'lucide-react';
import '../styles/HomeProducts.css';

const HomeProducts = () => {
  const products = [
    {
      title: "Cura Tech Engineering Portfolio",
      description: "Cura Tech Engineering provides essential equipment and builds custom manufacturing for hospitals and other industries. The company offers end-to-end solutions, including medical equipment, hospital furnishings, and advanced technological systems. An innovative website for this growing company, with modern and responsive infrastructure development. Clear Solution Services developed Cura Tech Engineering's portfolio website, creating a professional and user-friendly digital presence. The website highlights the company's expertise, achievements, and commitment to technological excellence and innovation.",
      image: "/curawebdesign-3.gif",
      align: "right",
      url: "https://curatechengineering.com"
    },
    {
      title: "Saarathi Website",
      description: "Saarathi (Guide) is an innovative e-learning platform that aims to reach out to core learners, helping them enhance access opportunities, and address concerns at a national level. Hosted by Azim M Ajmal, in partnership with UNICEF-India, it is supported by civil society organizations who have shown their commitment to education. Core learners are individuals who have spent at least three years or less, based on circumstances. In a child's first institution, the school, we aim to create a safe space for them and their families, welcoming all, regardless of background. Clear Solution Services developed Saarathi's official website, ensuring a professional and accessible platform.",
      image: "/saarthiwebdesign.gif",
      align: "left",
      url: "https://saarathi.example.com"
    },
    {
      title: "Focus Mobile App",
      description: "Focus Mobile App is a comprehensive study resource that helps users prepare for exams, stay updated with current affairs, and access valuable study resources. It provides a user-friendly interface for practicing tests, browsing the latest news, and enhancing knowledge across various subjects. The app is designed with a modern approach, offering a seamless experience with intuitive navigation, real-time updates, and innovative features to support students and professionals in their learning journey.",
      image: "/focuswebdesign.gif",
      align: "right",
      url: "https://focusapp.example.com"
    },
    {
      title: "CV Maker",
      description: "CV Maker is a free, user-friendly SaaS product designed for creating CVs / Resumes. It features a simple interface, professional templates, and advanced customization options. Users craft personalized resumes easily. The tool is lightweight, indicating fast performance, and was developed using modern web technologies. The team at Clear Solution Services aims to address a new market need by offering an accessible solution for CV creation without requiring technical expertise.",
      image: "/cvmaker.dd44350f.gif",
      align: "left",
      url: "https://cvmaker.example.com"
    }
  ];

  return (
    <div className="home-products-section">
      <div className="section-heading-wrapper">
        <SectionHeading text="Our Recent Products" className="heading-features" />
      </div>
      <div className="products-header">
        <h2>Our Recent Products</h2>
        <p>Thank you for partnering with us.</p>
      </div>
      <div className="products-list">
        {products.map((product, index) => (
          <div key={index} className={`product-item ${product.align}`}>
            <div className="product-content">
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <a 
                href={product.url} 
                className="learn-more-btn" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Learn More <ArrowRight size={16} />
              </a>
            </div>
            <div className="product-image">
              <img src={product.image} alt={product.title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeProducts;
