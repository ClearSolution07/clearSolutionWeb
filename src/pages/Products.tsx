import PageCarousel from '../components/PageCarousel';
import { ArrowRight } from 'lucide-react';
import '../styles/Products.css';

const Products = () => {
  const images = [
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  ];

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
    <div className="products-page1">
      <PageCarousel 
        images={images}
        title="Our Products"
        description="Comprehensive solutions for modern enterprises"
      />
      <div className="products-content1">
        <div className="products-list1">
          {products.map((product, index) => (
            <div key={index} className={`product-item1 ${product.align}`}>
              <div className="product-content1">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <a 
                  href={product.url} 
                  className="learn-more-btn1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Learn More <ArrowRight size={16} />
                </a>
              </div>
              <div className="product-image1">
                <img src={product.image} alt={product.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
