import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const HeroContainer = styled.section`
  position: relative;
  height: 100vh;
  background: #000000;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 100vh;
  }
`;

const SlideContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Slide = styled(motion.div)`
  position: absolute;
  inset: 0;
  background-image: ${props => `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url(${props.bgImage})`};
  background-size: cover;
  background-position: center 25%;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
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

const SlideTitle = styled(motion.h1)`
  font-size: 4.5rem;
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 30px;
  max-width: 900px;
  letter-spacing: -0.5px;

  @media (max-width: 1024px) {
    font-size: 3.5rem;
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
    margin-bottom: 20px;
  }
`;

const SlideDescription = styled(motion.p)`
  font-size: 1.4rem;
  line-height: 1.6;
  margin-bottom: 40px;
  max-width: 700px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.95);

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 30px;
  }
`;

const SlideButton = styled(motion.button)`
  padding: 18px 40px;
  background: #ffffff;
  color: #1e3a8a;
  border: none;
  border-radius: 8px;
  font-size: 1.05rem;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);

  &:hover {
    background: #f8fafc;
    transform: translateX(5px);
    box-shadow: 0 6px 30px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    padding: 16px 32px;
    font-size: 1rem;
  }
`;

const NavigationButtons = styled.div`
  position: absolute;
  bottom: 60px;
  right: 80px;
  display: flex;
  gap: 15px;
  z-index: 20;

  @media (max-width: 768px) {
    bottom: 30px;
    right: 30px;
  }
`;

const NavButton = styled.button`
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: scale(1.1);
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
    font-size: 1rem;
  }
`;

const ProgressDots = styled.div`
  position: absolute;
  bottom: 60px;
  left: 80px;
  display: flex;
  gap: 12px;
  z-index: 20;

  @media (max-width: 768px) {
    bottom: 30px;
    left: 30px;
  }
`;

const Dot = styled.button`
  width: ${props => props.active ? '40px' : '12px'};
  height: 12px;
  background: ${props => props.active ? '#ffffff' : 'rgba(255, 255, 255, 0.5)'};
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #ffffff;
  }
`;

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Quantifying Cyber Risk for the Board of Directors',
      description: 'World Leaders in Cyber Risk Quantification providing a Robust Risk Management Framework Executive Dashboard - Justifying Cyber Spend',
      buttonText: 'Learn More',
      bgImage: '/insurtech/hero.png'
    },
    {
      title: 'AI-Powered Threat Detection',
      description: 'Real-time protection with machine learning algorithms that identify and respond to threats instantly',
      buttonText: 'Discover More',
      bgImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: 'Risk Management Excellence',
      description: 'Quantify cyber risks in financial terms and make data-driven security decisions',
      buttonText: 'Explore Solutions',
      bgImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <HeroContainer>
      <SlideContainer>
        <AnimatePresence mode="wait">
          <Slide
            key={currentSlide}
            bgImage={slides[currentSlide].bgImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <SlideContent>
              <SlideTitle
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {slides[currentSlide].title}
              </SlideTitle>
              
              <SlideDescription
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {slides[currentSlide].description}
              </SlideDescription>

              <SlideButton
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                {slides[currentSlide].buttonText} <FaArrowRight />
              </SlideButton>
            </SlideContent>
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
