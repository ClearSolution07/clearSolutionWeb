import { 
  Database, 
  Cloud, 
  Code2, 
  Smartphone, 
  Globe, 
  Cpu, 
  Server, 
  Shield, 
  Blocks, 
  Layers,
  Workflow,
  Bot
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import SectionHeading from './SectionHeading';
import '../styles/HomeIntegrations.css';

const HomeIntegrations = () => {
  const particlesRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [gridDimensions, setGridDimensions] = useState({ width: 1200, height: 800 });

  const integrations = [
    { 
      icon: <Database size={48} />,
      position: { top: '25%', left: '15%' },
      label: 'Database',
      connections: ['cloud', 'server', 'microservices', 'ai', 'security', 'network']
    },
    { 
      icon: <Cloud size={48} />, 
      position: { top: '15%', left: '50%' },
      label: 'Cloud',
      connections: ['webdev', 'server', 'security', 'database', 'ai', 'mobile', 'microservices']
    },
    { 
      icon: <Code2 size={48} />, 
      position: { top: '25%', left: '85%' },
      label: 'Web Dev',
      connections: ['mobile', 'ui', 'cloud', 'database', 'security']
    },
    { 
      icon: <Smartphone size={48} />, 
      position: { top: '45%', left: '92%' },
      label: 'Mobile',
      connections: ['webdev', 'ui', 'cloud', 'security', 'network']
    },
    { 
      icon: <Globe size={48} />, 
      position: { top: '45%', left: '8%' },
      label: 'Network',
      connections: ['security', 'server', 'cloud', 'mobile', 'hardware']
    },
    { 
      icon: <Cpu size={48} />, 
      position: { top: '45%', left: '50%' },
      label: 'Hardware',
      connections: ['server', 'network', 'security', 'ai']
    },
    { 
      icon: <Server size={48} />, 
      position: { top: '75%', left: '15%' },
      label: 'Server',
      connections: ['database', 'cloud', 'security', 'network', 'microservices']
    },
    { 
      icon: <Shield size={48} />, 
      position: { top: '75%', left: '85%' },
      label: 'Security',
      connections: ['network', 'cloud', 'database', 'server', 'mobile', 'webdev']
    },
    { 
      icon: <Blocks size={48} />, 
      position: { top: '85%', left: '50%' },
      label: 'Microservices',
      connections: ['server', 'cloud', 'devops', 'database', 'ai']
    },
    { 
      icon: <Layers size={48} />, 
      position: { top: '45%', left: '28%' },
      label: 'UI/UX',
      connections: ['webdev', 'mobile', 'cloud', 'ai']
    },
    { 
      icon: <Workflow size={48} />, 
      position: { top: '65%', left: '50%' },
      label: 'DevOps',
      connections: ['cloud', 'server', 'microservices', 'security', 'ai']
    },
    { 
      icon: <Bot size={48} />, 
      position: { top: '35%', left: '72%' },
      label: 'AI/ML',
      connections: ['cloud', 'database', 'microservices', 'ui', 'hardware']
    }
  ];

  useEffect(() => {
    const updateDimensions = () => {
      if (gridRef.current) {
        const width = window.innerWidth;
        let newScale = 1;
        let newWidth = 1200;
        let newHeight = 800;

        if (width <= 360) {
          newScale = 0.75;
          newWidth = 400;
          newHeight = 450;
        } else if (width <= 480) {
          newScale = 0.85;
          newWidth = 500;
          newHeight = 500;
        } else if (width <= 640) {
          newScale = 0.8;
          newWidth = 600;
          newHeight = 500;
        } else if (width <= 768) {
          newScale = 0.8;
          newWidth = 600;
          newHeight = 500;
        } else if (width <= 1024) {
          newScale = 0.9;
          newWidth = 900;
          newHeight = 700;
        }

        setScale(newScale);
        setGridDimensions({ width: newWidth, height: newHeight });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const createParticle = (startX: number, startY: number, endX: number, endY: number) => {
    if (!particlesRef.current) return;

    const particle = document.createElement('div');
    particle.className = 'connection-particle';
    
    // Scale the coordinates based on the current grid dimensions
    const scaleX = gridDimensions.width / 1200;
    const scaleY = gridDimensions.height / 800;
    
    particle.style.setProperty('--startX', `${startX * scaleX}px`);
    particle.style.setProperty('--startY', `${startY * scaleY}px`);
    particle.style.setProperty('--endX', `${endX * scaleX}px`);
    particle.style.setProperty('--endY', `${endY * scaleY}px`);
    
    particle.style.animation = `particleFlow ${Math.random() * 2 + 2}s linear`;
    
    particlesRef.current.appendChild(particle);
    
    particle.addEventListener('animationend', () => {
      particle.remove();
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      integrations.forEach((source, i) => {
        integrations.forEach((target, j) => {
          if (i < j && source.connections.some(conn => target.label.toLowerCase().includes(conn.toLowerCase()))) {
            const scaleX = gridDimensions.width / 1200;
            const scaleY = gridDimensions.height / 800;
            
            const sourceX = parseFloat(source.position.left) * 12 * scaleX;
            const sourceY = parseFloat(source.position.top) * 8 * scaleY;
            const targetX = parseFloat(target.position.left) * 12 * scaleX;
            const targetY = parseFloat(target.position.top) * 8 * scaleY;
            
            if (Math.random() < 0.3) {
              createParticle(sourceX, sourceY, targetX, targetY);
            }
          }
        });
      });
    }, 200);

    return () => clearInterval(interval);
  }, [scale, gridDimensions]);

  return (
    <section className="home-integrations">
      <div className="section-heading-wrapper">
        <SectionHeading text="Our Technology Stack" className="heading-features" />
      </div>

      <div className="integrations-content">
        <h2>We Offer Wide Range of<br />Technology Solutions</h2>
        <p>
          Seamlessly integrate cutting-edge technologies into your business with our comprehensive
          stack of solutions, designed to optimize workflow and maximize efficiency across all platforms.
        </p>

        <div 
          className="integrations-grid" 
          ref={gridRef} 
          style={{ 
            transform: `scale(${scale})`,
            width: `${gridDimensions.width}px`,
            height: `${gridDimensions.height}px`
          }}
        >
          <svg 
            className="connections" 
            width="100%" 
            height="100%" 
            viewBox={`0 0 ${gridDimensions.width} ${gridDimensions.height}`} 
            preserveAspectRatio="xMidYMid meet"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#CC0003" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#CC0003" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#CC0003" stopOpacity="0.6" />
              </linearGradient>
              <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ff0004" stopOpacity="0.7" />
                <stop offset="50%" stopColor="#CC0003" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#ff0004" stopOpacity="0.7" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {integrations.map((source, i) => 
              integrations.map((target, j) => {
                if (i < j && source.connections.some(conn => target.label.toLowerCase().includes(conn.toLowerCase()))) {
                  const scaleX = gridDimensions.width / 1200;
                  const scaleY = gridDimensions.height / 800;
                  
                  const sourceX = parseFloat(source.position.left) * 12 * scaleX;
                  const sourceY = parseFloat(source.position.top) * 8 * scaleY;
                  const targetX = parseFloat(target.position.left) * 12 * scaleX;
                  const targetY = parseFloat(target.position.top) * 8 * scaleY;
                  
                  const midX = (sourceX + targetX) / 2;
                  const midY = (sourceY + targetY) / 2;
                  const controlOffset = 60 * Math.min(scaleX, scaleY);
                  
                  const dx = targetX - sourceX;
                  const dy = targetY - sourceY;
                  const angle = Math.atan2(dy, dx);
                  
                  const controlPoint1X = midX - controlOffset * Math.sin(angle);
                  const controlPoint1Y = midY + controlOffset * Math.cos(angle);
                  const controlPoint2X = midX + controlOffset * Math.sin(angle);
                  const controlPoint2Y = midY - controlOffset * Math.cos(angle);
                  
                  return (
                    <path
                      key={`${i}-${j}`}
                      d={`M ${sourceX},${sourceY} C ${controlPoint1X},${controlPoint1Y} ${controlPoint2X},${controlPoint2Y} ${targetX},${targetY}`}
                      stroke="url(#lineGradient1)"
                      strokeWidth={1.5 * Math.min(scaleX, scaleY)}
                      fill="none"
                      className="connection-line"
                    />
                  );
                }
                return null;
              })
            )}
          </svg>
          
          <div ref={particlesRef} className="particles-container" />
          
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="integration-icon"
              style={{
                top: integration.position.top,
                left: integration.position.left
              }}
            >
              {integration.icon}
              <span className="icon-label">{integration.label}</span>
              <div className="icon-glow"></div>
            </div>
          ))}
          <div className="integration-glow"></div>
        </div>
      </div>
    </section>
  );
};

export default HomeIntegrations;