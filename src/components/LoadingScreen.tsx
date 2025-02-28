import { useEffect, useState } from 'react';
import { Terminal } from 'lucide-react';
import '../styles/LoadingScreen.css';

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const loadingSteps = [
    'Initializing system components...',
    'Loading application modules...',
    'Configuring user interface...',
    'Establishing secure connection...',
    'Starting Clear Solutions engine...'
  ];

  useEffect(() => {
    let progressInterval: NodeJS.Timeout;
    let stepInterval: NodeJS.Timeout;

    // Progress animation
    progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    // Step animation
    stepInterval = setInterval(() => {
      setCurrentStep(prev => {
        if (prev >= loadingSteps.length - 1) {
          clearInterval(stepInterval);
          return prev;
        }
        return prev + 1;
      });
    }, 400);

    // Complete loading
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Dispatch a custom event when loading is complete
      window.dispatchEvent(new CustomEvent('loadingComplete'));
    }, 2000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(stepInterval);
      clearTimeout(timer);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="logo-container">
          <img src="/CLEAR SOLUTIONS LOGOS-2.svg" alt="Clear Solutions" className="logo" />
          <div className="logo-glow"></div>
        </div>

        <div className="terminal-container">
          <div className="terminal-header">
            <Terminal size={16} />
            <span>System Initialization</span>
          </div>
          <div className="terminal-body">
            {loadingSteps.map((step, index) => (
              <div 
                key={index} 
                className={`terminal-line ${index <= currentStep ? 'active' : ''}`}
              >
                <span className="terminal-prompt">$</span>
                <span className="terminal-command">{step}</span>
                {index <= currentStep && (
                  <span className="terminal-status">
                    {index < currentStep ? '✓' : '...'}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="progress-container">
          <div className="progress-bar">
            <div 
              className="progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="progress-text">
            System Loading: {progress}%
          </div>
        </div>

        <div className="binary-background">
          {Array.from({ length: 50 }).map((_, i) => (
            <div key={i} className="binary-line" style={{ 
              animationDelay: `${i * 0.1}s`,
              left: `${(i / 50) * 100}%`
            }}>
              {Array.from({ length: 20 }).map((_, j) => (
                <span key={j}>
                  {Math.random() > 0.5 ? '1' : '0'}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;