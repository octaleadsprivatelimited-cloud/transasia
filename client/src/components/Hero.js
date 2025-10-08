import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { FaArrowRight, FaShieldAlt, FaBolt, FaGlobe, FaCheckCircle } from 'react-icons/fa';

const gradientMove = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
`;

const slideInLeft = keyframes`
  from { transform: translateX(-100px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`;

const slideInRight = keyframes`
  from { transform: translateX(100px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`;

const HeroContainer = styled.section`
  min-height: 65vh;
  background: linear-gradient(-45deg, #0a0e27, #1a1f3a, #1e3a8a, #2563eb);
  background-size: 400% 400%;
  animation: ${gradientMove} 15s ease infinite;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 140px 0 60px;

  @media (max-width: 768px) {
    min-height: 70vh;
    padding: 120px 0 40px;
  }
`;

const Particles = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 300px;
    height: 300px;
    border-radius: 50%;
  }

  &::before {
    background: radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%);
    top: 10%;
    left: 10%;
    animation: ${float} 6s ease-in-out infinite;
  }

  &::after {
    background: radial-gradient(circle, rgba(96, 165, 250, 0.3) 0%, transparent 70%);
    bottom: 10%;
    right: 10%;
    animation: ${float} 8s ease-in-out infinite;
    animation-delay: 2s;
  }
`;

const GridPattern = styled.div`
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(rgba(59, 130, 246, 0.03) 2px, transparent 2px),
    linear-gradient(90deg, rgba(59, 130, 246, 0.03) 2px, transparent 2px);
  background-size: 100px 100px;
  opacity: 0.5;
`;

const Content = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
  position: relative;
  z-index: 10;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const MainContent = styled.div`
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
`;

const Badge = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: rgba(59, 130, 246, 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(59, 130, 246, 0.4);
  padding: 12px 24px;
  border-radius: 50px;
  font-size: 0.95rem;
  font-weight: 600;
  color: #60a5fa;
  margin-bottom: 40px;
  box-shadow: 0 8px 32px rgba(59, 130, 246, 0.3);

  svg {
    font-size: 1.1rem;
  }
`;

const Title = styled(motion.h1)`
  font-size: 4.5rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 28px;
  color: #ffffff;
  letter-spacing: -1.5px;
  text-shadow: 0 2px 30px rgba(59, 130, 246, 0.4);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

  .gradient-text {
    background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 50%, #2563eb 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    display: inline-block;
    font-weight: 800;
  }

  @media (max-width: 1024px) {
    font-size: 3.5rem;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
    letter-spacing: -1px;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.7;
  margin-bottom: 45px;
  max-width: 650px;
  margin-left: auto;
  margin-right: auto;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }
`;

const PrimaryButton = styled(motion.button)`
  padding: 18px 40px;
  background: white;
  color: #1e3a8a;
  border: none;
  border-radius: 12px;
  font-size: 1.05rem;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 10px 40px rgba(255, 255, 255, 0.2);
  position: relative;
  overflow: hidden;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%);
    opacity: 0;
    transition: opacity 0.3s;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 50px rgba(255, 255, 255, 0.25);

    &::before {
      opacity: 1;
    }
  }

  span {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    padding: 16px 36px;
  }
`;

const SecondaryButton = styled(motion.button)`
  padding: 18px 40px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  font-size: 1.05rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.5);
    transform: translateY(-3px);
    box-shadow: 0 15px 50px rgba(255, 255, 255, 0.15);
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 16px 36px;
  }
`;

const FeaturesRow = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const FeatureBox = styled(motion.div)`
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 24px;
  padding: 36px 28px;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #3b82f6 0%, #60a5fa 100%);
    transform: scaleX(0);
    transition: transform 0.4s ease;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.12);
    border-color: rgba(59, 130, 246, 0.5);
    transform: translateY(-10px);
    box-shadow: 0 25px 70px rgba(59, 130, 246, 0.3);

    &::before {
      transform: scaleX(1);
    }
  }
`;

const FeatureIcon = styled.div`
  width: 70px;
  height: 70px;
  margin: 0 auto 20px;
  border-radius: 18px;
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: white;
  box-shadow: 0 10px 40px rgba(59, 130, 246, 0.5);
  animation: ${float} 3s ease-in-out infinite;
  
  &::after {
    content: '';
    position: absolute;
    width: 70px;
    height: 70px;
    border-radius: 18px;
    border: 2px solid rgba(59, 130, 246, 0.5);
    animation: ${float} 3s ease-in-out infinite;
    animation-delay: 0.3s;
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.15rem;
  font-weight: 600;
  color: white;
  margin-bottom: 10px;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
`;

const FeatureText = styled.p`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.6;
  margin: 0;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
`;

const TrustBadges = styled(motion.div)`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 24px;
    margin-top: 40px;
  }
`;

const TrustItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.95rem;
  font-weight: 500;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

  svg {
    color: #10b981;
    font-size: 1.2rem;
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <Particles />
      <GridPattern />
      
      <Content>
        <MainContent>
          <Badge
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <FaBolt /> AI-Powered Cybersecurity Platform
          </Badge>
          
          <Title
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Protect Your Business
            <br />
            <span className="gradient-text">From Cyber Threats</span>
          </Title>
          
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Enterprise-grade security solutions powered by advanced AI and threat intelligence. 
            Monitor, detect, and respond to cyber attacks in real-time.
          </Subtitle>

          <ButtonGroup
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <PrimaryButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Get Started Free <FaArrowRight /></span>
            </PrimaryButton>
            <SecondaryButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Schedule Demo
            </SecondaryButton>
          </ButtonGroup>

          <FeaturesRow
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <FeatureBox
              whileHover={{ scale: 1.05 }}
            >
              <FeatureIcon>
                <FaShieldAlt />
              </FeatureIcon>
              <FeatureTitle>24/7 Protection</FeatureTitle>
              <FeatureText>Continuous monitoring and threat detection</FeatureText>
            </FeatureBox>

            <FeatureBox
              whileHover={{ scale: 1.05 }}
            >
              <FeatureIcon>
                <FaBolt />
              </FeatureIcon>
              <FeatureTitle>Instant Response</FeatureTitle>
              <FeatureText>Automated incident response in milliseconds</FeatureText>
            </FeatureBox>

            <FeatureBox
              whileHover={{ scale: 1.05 }}
            >
              <FeatureIcon>
                <FaGlobe />
              </FeatureIcon>
              <FeatureTitle>Global Coverage</FeatureTitle>
              <FeatureText>Worldwide threat intelligence network</FeatureText>
            </FeatureBox>
          </FeaturesRow>

          <TrustBadges
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <TrustItem>
              <FaCheckCircle /> 500+ Enterprises Trust Us
            </TrustItem>
            <TrustItem>
              <FaCheckCircle /> 99.9% Threat Detection
            </TrustItem>
            <TrustItem>
              <FaCheckCircle /> ISO 27001 Certified
            </TrustItem>
          </TrustBadges>
        </MainContent>
      </Content>
    </HeroContainer>
  );
};

export default Hero;
