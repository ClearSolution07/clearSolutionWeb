import React from 'react';
import '../styles/SectionHeading.css';

interface SectionHeadingProps {
  text: string;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ text, className = '' }) => {
  return (
    <div className={`section-heading ${className}`}>
      <h2>{text}</h2>
    </div>
  );
};

export default SectionHeading;