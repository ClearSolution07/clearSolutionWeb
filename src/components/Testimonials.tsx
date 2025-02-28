import SectionHeading from './SectionHeading';
import '../styles/Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      text: "Their team carefully analyzes our requirements to deliver solutions that perfectly align with our business goals. They truly understand our objectives and provide invaluable support.",
      author: "Aaron Taylor",
      position: "CEO, TechVision"
    },
    {
      text: "We've been consistently impressed with their system solutions and attention to detail. Their expertise in delivering solutions is exceptional throughout the project.",
      author: "Sarah L.",
      position: "CTO, Innovate Inc"
    },
    {
      text: "The team has an exceptional level of technical expertise and professionalism. They've demonstrated their dedication to delivering quality solutions.",
      author: "Michael Raj",
      position: "Director, FutureTech"
    },
    {
      text: "Clear Solutions has transformed our business operations with their innovative approach. Their commitment to excellence is truly remarkable.",
      author: "John Smith",
      position: "CEO, DataFlow"
    },
    {
      text: "The level of support and expertise we received was outstanding. They went above and beyond to ensure our project's success.",
      author: "Emma Lewis",
      position: "CTO, CloudTech"
    },
    {
      text: "Exceptional service and technical prowess. They delivered exactly what we needed, on time and within budget.",
      author: "Alex Smith",
      position: "Director, WebSolutions"
    },
    {
      text: "Their attention to detail and commitment to quality is unmatched. A truly reliable technology partner.",
      author: "David Chen",
      position: "CTO, InnovateTech"
    },
    {
      text: "Outstanding work on our mobile application. The team's expertise and dedication made all the difference.",
      author: "Lisa Wang",
      position: "Product Manager, MobileFirst"
    },
    {
      text: "They provided excellent solutions for our complex database needs. Highly recommended for any tech project.",
      author: "Robert Johnson",
      position: "Director, DataSys"
    },
    {
      text: "The team's innovative approach to problem-solving helped us achieve our goals faster than expected.",
      author: "Maria Garcia",
      position: "CEO, TechStart"
    }
  ];

  // Duplicate testimonials for seamless scrolling
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="testimonials">
      <div className="section-heading-wrapper">
        <SectionHeading text="Testimonials" className="heading-features" />
      </div>
      
      <div className="testimonials-header">
        <h2>Are you still in dilemma?</h2>
        <p>Hear from our clients about their experience</p>
      </div>
      
      <div className="testimonials-rows">
        <div className="testimonials-track left-to-right">
          {duplicatedTestimonials.map((testimonial, index) => (
            <div key={`row1-${index}`} className="testimonial-card">
              <div className="testimonial-author">
                <div className="author-avatar">
                  {testimonial.author.charAt(0)}
                </div>
                <div className="author-info">
                  <h4>{testimonial.author}</h4>
                  <p>{testimonial.position}</p>
                </div>
              </div>
              <p className="testimonial-text">{testimonial.text}</p>
            </div>
          ))}
        </div>

        <div className="testimonials-track right-to-left">
          {duplicatedTestimonials.reverse().map((testimonial, index) => (
            <div key={`row2-${index}`} className="testimonial-card">
              <div className="testimonial-author">
                <div className="author-avatar">
                  {testimonial.author.charAt(0)}
                </div>
                <div className="author-info">
                  <h4>{testimonial.author}</h4>
                  <p>{testimonial.position}</p>
                </div>
              </div>
              <p className="testimonial-text">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;