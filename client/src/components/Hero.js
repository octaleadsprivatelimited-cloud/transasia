import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight, FaChevronLeft, FaChevronRight, FaShieldAlt, FaBrain, FaRocket } from 'react-icons/fa';

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
`;

const shimmer = keyframes`
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
`;

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const HeroContainer = styled.section`
  position: relative;
  height: 100vh;
  background: radial-gradient(ellipse at top, #1e3a8a 0%, #0a0e27 100%);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: 
      radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 25%),
      radial-gradient(circle at 80% 50%, rgba(96, 165, 250, 0.1) 0%, transparent 25%);
    animation: ${rotate} 30s linear infinite;
  }

  @media (max-width: 768px) {
    height: 100vh;
  }
`;

const ParticleCanvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
`;

const SlideContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 2;
`;

const Slide = styled(motion.div)`
  position: absolute;
  inset: 0;
  background-image: ${props => `linear-gradient(to right, rgba(10, 14, 39, 0.97) 0%, rgba(30, 58, 138, 0.85) 40%, rgba(0, 0, 0, 0.4) 100%), url(${props.bgImage})`};
  background-size: cover;
  background-position: center 25%;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: 
      radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.2) 0%, transparent 40%),
      radial-gradient(circle at 80% 70%, rgba(96, 165, 250, 0.15) 0%, transparent 40%);
    pointer-events: none;
  }
`;

const SlideContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 80px;
  color: white;
  position: relative;
  z-index: 10;

  @media (max-width: 1024px) {
    padding: 0 60px;
  }

  @media (max-width: 768px) {
    padding: 0 30px;
  }
`;

const SlideLabel = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 24px;
  background: rgba(59, 130, 246, 0.15);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(59, 130, 246, 0.3);
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 600;
  color: #60a5fa;
  margin-bottom: 30px;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 0 8px 32px rgba(59, 130, 246, 0.2);

  svg {
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 10px 20px;
  }
`;

const SlideTitle = styled(motion.h1)`
  font-size: 5.5rem;
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 30px;
  max-width: 1000px;
  letter-spacing: -3px;
  background: linear-gradient(135deg, #ffffff 0%, #60a5fa 50%, #3b82f6 100%);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  animation: ${shimmer} 3s ease-in-out infinite;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 0;
    width: 150px;
    height: 6px;
    background: linear-gradient(90deg, #3b82f6 0%, transparent 100%);
    border-radius: 3px;
  }

  @media (max-width: 1024px) {
    font-size: 4rem;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 20px;
    letter-spacing: -1.5px;
  }
`;

const SlideDescription = styled(motion.p)`
  font-size: 1.5rem;
  line-height: 1.7;
  margin-bottom: 50px;
  max-width: 750px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.95);
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 1.15rem;
    margin-bottom: 35px;
  }
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 20px;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const PrimaryButton = styled(motion.button)`
  padding: 20px 45px;
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  color: #000000;
  border: none;
  border-radius: 4px;
  font-size: 1.1rem;
  font-weight: 700;
  font-family: 'Times New Roman', Times, serif;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  transition: all 0.4s ease;
  box-shadow: 0 8px 30px rgba(251, 191, 36, 0.4);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.5s;
  }

  &:hover::before {
    left: 100%;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 40px rgba(251, 191, 36, 0.6);
    background: linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%);
  }

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(5px);
  }

  @media (max-width: 768px) {
    padding: 16px 35px;
    font-size: 1rem;
  }
`;

const SecondaryButton = styled(motion.button)`
  padding: 20px 45px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  color: #ffffff;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: #60a5fa;
    color: #60a5fa;
    transform: translateY(-3px);
  }

  @media (max-width: 768px) {
    padding: 16px 35px;
    font-size: 1rem;
  }
`;

const FloatingStats = styled(motion.div)`
  position: absolute;
  right: 40px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 30px;
  z-index: 10;

  @media (max-width: 1200px) {
    right: 20px;
    gap: 20px;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

const StatCard = styled(motion.div)`
  padding: 20px 25px;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 16px;
  min-width: 180px;
  max-width: 200px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  
  &:nth-child(1) {
    animation: ${float} 4s ease-in-out infinite;
  }
  
  &:nth-child(2) {
    animation: ${float} 4s ease-in-out infinite;
    animation-delay: 0.5s;
  }
  
  &:nth-child(3) {
    animation: ${float} 4s ease-in-out infinite;
    animation-delay: 1s;
  }

  @media (max-width: 1200px) {
    padding: 18px 20px;
    min-width: 160px;
    max-width: 180px;
  }
`;

const StatNumber = styled.div`
  font-size: 2.2rem;
  font-weight: 900;
  background: linear-gradient(135deg, #60a5fa 0%, #ffffff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 5px;
  line-height: 1.1;

  @media (max-width: 1200px) {
    font-size: 2rem;
  }
`;

const StatLabel = styled.div`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
  line-height: 1.3;

  @media (max-width: 1200px) {
    font-size: 0.85rem;
  }
`;

const NavigationButtons = styled.div`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 15px;
  z-index: 20;

  @media (max-width: 768px) {
    bottom: 30px;
  }
`;

const NavButton = styled.button`
  width: 60px;
  height: 60px;
  background: rgba(59, 130, 246, 0.2);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(59, 130, 246, 0.5);
  border-radius: 50%;
  color: #60a5fa;
  font-size: 1.3rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(59, 130, 246, 0.3);

  &:hover {
    background: #3b82f6;
    color: #ffffff;
    border-color: #3b82f6;
    transform: scale(1.1);
    box-shadow: 0 6px 30px rgba(59, 130, 246, 0.6);
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    font-size: 1.1rem;
  }
`;

const ProgressDots = styled.div`
  position: absolute;
  bottom: 40px;
  left: 80px;
  display: flex;
  gap: 15px;
  z-index: 20;

  @media (max-width: 768px) {
    bottom: 30px;
    left: 30px;
    gap: 10px;
  }
`;

const Dot = styled.button`
  width: ${props => props.active ? '50px' : '15px'};
  height: 15px;
  background: ${props => props.active ? '#3b82f6' : 'rgba(255, 255, 255, 0.3)'};
  border: ${props => props.active ? '2px solid rgba(59, 130, 246, 0.5)' : 'none'};
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: ${props => props.active ? '0 4px 20px rgba(59, 130, 246, 0.6)' : 'none'};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #3b82f6;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }

  &:hover {
    box-shadow: 0 4px 20px rgba(59, 130, 246, 0.6);
  }
`;

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const canvasRef = useRef(null);

  const slides = [
    {
      label: 'Cyber Risk Intelligence',
      icon: FaShieldAlt,
      title: 'Quantifying Cyber Risk for the Board of Directors',
      description: 'World Leaders in Cyber Risk Quantification providing a Robust Risk Management Framework Executive Dashboard - Justifying Cyber Spend',
      primaryButton: 'Get Started',
      secondaryButton: 'Learn More',
      bgImage: '/insurtech/hero.png'
    },
    {
      label: 'AI-Powered Security',
      icon: FaBrain,
      title: 'Next-Gen Threat Detection & Response',
      description: 'Real-time protection with machine learning algorithms that identify and respond to threats instantly, protecting your digital assets 24/7',
      primaryButton: 'Discover More',
      secondaryButton: 'Watch Demo',
      bgImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop'
    },
    {
      label: 'Innovation First',
      icon: FaRocket,
      title: 'Transform Security into Strategic Asset',
      description: 'Quantify cyber risks in financial terms and make data-driven security decisions that drive business growth and resilience',
      primaryButton: 'Explore Solutions',
      secondaryButton: 'Contact Us',
      bgImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop'
    }
  ];

  // Particle animation effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 80;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.fillStyle = `rgba(59, 130, 246, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.15 * (1 - distance / 100)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      
      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const IconComponent = slides[currentSlide].icon;

  return (
    <HeroContainer>
      <ParticleCanvas ref={canvasRef} />
      
      <SlideContainer>
        <AnimatePresence mode="wait">
          <Slide
            key={currentSlide}
            bgImage={slides[currentSlide].bgImage}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <SlideContent>
              <SlideLabel
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <IconComponent />
                {slides[currentSlide].label}
              </SlideLabel>

              <SlideTitle
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {slides[currentSlide].title}
              </SlideTitle>
              
              <SlideDescription
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {slides[currentSlide].description}
              </SlideDescription>

              <ButtonGroup
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <PrimaryButton
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {slides[currentSlide].primaryButton} <FaArrowRight />
                </PrimaryButton>
                <SecondaryButton
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {slides[currentSlide].secondaryButton}
                </SecondaryButton>
              </ButtonGroup>
            </SlideContent>

            <FloatingStats
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <StatCard whileHover={{ scale: 1.05, y: -5 }}>
                <StatNumber>19+</StatNumber>
                <StatLabel>Cyber Experts</StatLabel>
              </StatCard>
              <StatCard whileHover={{ scale: 1.05, y: -5 }}>
                <StatNumber>125+</StatNumber>
                <StatLabel>Years Experience</StatLabel>
              </StatCard>
              <StatCard whileHover={{ scale: 1.05, y: -5 }}>
                <StatNumber>99.9%</StatNumber>
                <StatLabel>Protection Rate</StatLabel>
              </StatCard>
            </FloatingStats>
          </Slide>
        </AnimatePresence>

        <NavigationButtons>
          <NavButton onClick={prevSlide}>
            <FaChevronLeft />
          </NavButton>
          <NavButton onClick={nextSlide}>
            <FaChevronRight />
          </NavButton>
        </NavigationButtons>

        <ProgressDots>
          {slides.map((_, index) => (
            <Dot
              key={index}
              active={currentSlide === index}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </ProgressDots>
      </SlideContainer>
    </HeroContainer>
  );
};

export default Hero;
