import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { FaArrowRight, FaShieldAlt, FaChartLine, FaGlobe } from 'react-icons/fa';

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
`;

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.1); }
`;

const HeroContainer = styled.section`
  min-height: 90vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #0a1929 0%, #1e3a8a 50%, #1e40af 100%);
  position: relative;
  overflow: hidden;
  padding: 140px 40px 80px;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: 
      radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.2) 0%, transparent 50%),
      radial-gradient(circle at 80% 50%, rgba(96, 165, 250, 0.15) 0%, transparent 50%);
    animation: ${rotate} 40s linear infinite;
  }

  @media (max-width: 768px) {
    min-height: 80vh;
    padding: 120px 20px 60px;
  }
`;

const FloatingOrb = styled.div`
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%);
  filter: blur(60px);
  animation: ${pulse} 4s ease-in-out infinite;

  &:nth-child(1) {
    width: 400px;
    height: 400px;
    top: 10%;
    left: 10%;
    animation-delay: 0s;
  }

  &:nth-child(2) {
    width: 300px;
    height: 300px;
    bottom: 15%;
    right: 15%;
    animation-delay: 1s;
  }

  &:nth-child(3) {
    width: 250px;
    height: 250px;
    top: 50%;
    right: 20%;
    animation-delay: 2s;
  }
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  text-align: center;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 5rem;
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 30px;
  background: linear-gradient(135deg, #ffffff 0%, #60a5fa 50%, #93c5fd 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -3px;
  text-shadow: 0 0 80px rgba(59, 130, 246, 0.5);

  @media (max-width: 768px) {
    font-size: 2.8rem;
    letter-spacing: -1px;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.85);
  max-width: 800px;
  margin: 0 auto 50px;
  line-height: 1.8;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 40px;
  }
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 80px;
`;

const PrimaryButton = styled.button`
  padding: 20px 45px;
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  color: white;
  border: none;
  border-radius: 14px;
  font-size: 1.15rem;
  font-weight: 700;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  transition: all 0.3s ease;
  box-shadow: 0 10px 40px rgba(59, 130, 246, 0.4);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 50px rgba(59, 130, 246, 0.5);

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(-1px);
  }

  @media (max-width: 768px) {
    padding: 16px 35px;
    font-size: 1rem;
  }
`;

const SecondaryButton = styled.button`
  padding: 20px 45px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 14px;
  font-size: 1.15rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.5);
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(255, 255, 255, 0.1);
  }

  &:active {
    transform: translateY(-1px);
  }

  @media (max-width: 768px) {
    padding: 16px 35px;
    font-size: 1rem;
  }
`;

const FeaturesHighlight = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  max-width: 900px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const FeatureItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 30px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  transition: all 0.4s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(59, 130, 246, 0.5);
    transform: translateY(-8px);
    box-shadow: 0 20px 60px rgba(59, 130, 246, 0.3);
  }
`;

const FeatureIcon = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 18px;
  background: linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: white;
  box-shadow: 0 10px 30px rgba(59, 130, 246, 0.4);
  animation: ${float} 3s ease-in-out infinite;
`;

const FeatureTitle = styled.h3`
  font-size: 1.15rem;
  font-weight: 700;
  color: white;
  margin: 0;
  text-align: center;
`;

const FeatureText = styled.p`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  text-align: center;
  line-height: 1.6;
`;

const Hero = () => {
  return (
    <HeroContainer>
      <FloatingOrb />
      <FloatingOrb />
      <FloatingOrb />
      
      <HeroContent>
        <HeroTitle
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Secure Your Digital Future
        </HeroTitle>
        
        <HeroSubtitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Enterprise-grade cybersecurity solutions powered by advanced threat intelligence 
          and cutting-edge technology to protect your organization
        </HeroSubtitle>

        <ButtonGroup
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <PrimaryButton>
            Get Started <FaArrowRight />
          </PrimaryButton>
          <SecondaryButton>
            View Solutions
          </SecondaryButton>
        </ButtonGroup>

        <FeaturesHighlight
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <FeatureItem
            whileHover={{ scale: 1.05 }}
          >
            <FeatureIcon>
              <FaShieldAlt />
            </FeatureIcon>
            <FeatureTitle>24/7 Protection</FeatureTitle>
            <FeatureText>Continuous monitoring and threat detection</FeatureText>
          </FeatureItem>

          <FeatureItem
            whileHover={{ scale: 1.05 }}
          >
            <FeatureIcon>
              <FaChartLine />
            </FeatureIcon>
            <FeatureTitle>Risk Intelligence</FeatureTitle>
            <FeatureText>Data-driven insights and analytics</FeatureText>
          </FeatureItem>

          <FeatureItem
            whileHover={{ scale: 1.05 }}
          >
            <FeatureIcon>
              <FaGlobe />
            </FeatureIcon>
            <FeatureTitle>Global Coverage</FeatureTitle>
            <FeatureText>Worldwide threat intelligence network</FeatureText>
          </FeatureItem>
        </FeaturesHighlight>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
