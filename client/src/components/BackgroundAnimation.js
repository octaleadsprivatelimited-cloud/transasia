import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const AnimationContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
`;


const GridPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(0, 102, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 102, 255, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: gridMove 20s linear infinite;

  @keyframes gridMove {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(50px, 50px);
    }
  }
`;

const BackgroundAnimation = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const createParticles = () => {
      const container = containerRef.current;
      if (!container) return;

      // Clear existing particles
      container.innerHTML = '';

      // Create particles
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        const colors = ['#0066ff', '#00a8ff', '#0047cc', '#0052cc'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        const size = Math.random() * 4 + 2;
        const duration = Math.random() * 20 + 10;
        const drift = (Math.random() - 0.5) * 200;
        const left = Math.random() * 100;

        particle.style.position = 'absolute';
        particle.style.left = `${left}%`;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.background = `radial-gradient(circle, ${color} 0%, transparent 70%)`;
        particle.style.borderRadius = '50%';
        particle.style.animation = `float ${duration}s linear infinite`;
        particle.style.opacity = '0.1';

        const keyframes = `
          @keyframes float {
            0% {
              transform: translateY(100vh) translateX(0) rotate(0deg);
              opacity: 0;
            }
            10% {
              opacity: 0.1;
            }
            90% {
              opacity: 0.1;
            }
            100% {
              transform: translateY(-100px) translateX(${drift}px) rotate(360deg);
              opacity: 0;
            }
          }
        `;

        if (!document.querySelector('#particle-animations')) {
          const style = document.createElement('style');
          style.id = 'particle-animations';
          style.textContent = keyframes;
          document.head.appendChild(style);
        }

        container.appendChild(particle);
      }
    };

    createParticles();
    const interval = setInterval(createParticles, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimationContainer ref={containerRef}>
      <GridPattern />
    </AnimationContainer>
  );
};

export default BackgroundAnimation;
