import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import SectionHeading from './SectionHeading';
import '../styles/FAQ.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What services does Clear Solutions offer?",
      answer: "Clear Solutions specializes in web development, mobile app development, SaaS products, and digital solutions tailored to business needs."
    },
    {
      question: "Can Clear Solutions develop custom websites and applications?",
      answer: "Yes, we specialize in developing custom websites and applications tailored to your specific business requirements, ensuring unique and scalable solutions."
    },
    {
      question: "What industries does Clear Solutions serve?",
      answer: "We serve a wide range of industries including healthcare, education, e-commerce, finance, and technology sectors, adapting our solutions to meet industry-specific needs."
    },
    {
      question: "How long does it take to develop a website or app?",
      answer: "Development timelines vary based on project complexity. A basic website might take 4-6 weeks, while complex applications can take 3-6 months. We provide detailed timelines during project planning."
    },
    {
      question: "How can I get in touch with Clear Solutions for a project?",
      answer: "You can contact us through our website's contact form, email us at clear.solutions07@gmail.com, or call us at 8133895591. We'll respond within 24 hours to discuss your project."
    }
  ];

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="section-heading-wrapper">
        <SectionHeading text="FAQ" className="heading-features" />
      </div>
      
      <div className="faq-content">
        <h2>Common Questions</h2>
        <p>Answers to keep you moving with <span>Clear Solutions</span></p>
        
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'active' : ''}`}
              onClick={() => toggleQuestion(index)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;