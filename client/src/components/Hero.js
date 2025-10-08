import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { FaArrowRight, FaPlay } from 'react-icons/fa';

const gradientShift = keyframes`
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
`;

const floatSlow = keyframes`
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  33% { transform: translate(30px, -30px) rotate(5deg); }
  66% { transform: translate(-20px, 20px) rotate(-5deg); }
`;

const floatMedium = keyframes`
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(-40px, -40px) scale(1.1); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.4; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.2); }
`;

const HeroContainer = styled.section`
  min-height: 100vh;
  background: #0a0e27;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 120px 0 60px;
`;

const BackgroundGradient = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, 
    #0a0e27 0%, 
    #1a237e 25%, 
    #0d47a1 50%, 
    #1565c0 75%, 
    #0a0e27 100%
  );
  background-size: 400% 400%;
  animation: ${gradientShift} 20s ease infinite;
`;

const FloatingShape = styled.div`
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.6;
  
  &:nth-child(1) {
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(33, 150, 243, 0.6) 0%, transparent 70%);
    top: -10%;
    left: -10%;
    animation: ${floatSlow} 30s ease-in-out infinite;
  }
  
  &:nth-child(2) {
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(100, 181, 246, 0.5) 0%, transparent 70%);
    bottom: -15%;
    right: -10%;
    animation: ${floatMedium} 25s ease-in-out infinite;
  }
  
  &:nth-child(3) {
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(66, 165, 245, 0.4) 0%, transparent 70%);
    top: 40%;
    right: 10%;
    animation: ${floatSlow} 35s ease-in-out infinite reverse;
  }
`;

const GridOverlay = styled.div`
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(rgba(59, 130, 246, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(59, 130, 246, 0.05) 1px, transparent 1px);
  background-size: 50px 50px;
  opacity: 0.5;
`;

const Content = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
  position: relative;
  z-index: 10;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 80px;
  align-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 60px;
    text-align: center;
  }

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const LeftContent = styled.div`
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Badge = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(59, 130, 246, 0.15);
  border: 1px solid rgba(59, 130, 246, 0.4);
  padding: 10px 20px;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 600;
  color: #60a5fa;
  margin-bottom: 30px;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 20px rgba(59, 130, 246, 0.2);

  &::before {
    content: '✨';
    font-size: 1.1rem;
  }
`;

const Title = styled(motion.h1)`
  font-size: 5.5rem;
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 30px;
  color: #ffffff;
  letter-spacing: -3px;
  
  span {
    background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 50%, #2563eb 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    display: inline-block;
  }

  @media (max-width: 1024px) {
    font-size: 4rem;
  }

  @media (max-width: 768px) {
    font-size: 3rem;
    letter-spacing: -1px;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.4rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.8;
  margin-bottom: 50px;
  max-width: 600px;

  @media (max-width: 1024px) {
    max-width: 100%;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 20px;
  align-items: center;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

const PrimaryButton = styled(motion.button)`
  padding: 22px 50px;
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  color: white;
  border: none;
  border-radius: 16px;
  font-size: 1.15rem;
  font-weight: 700;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  transition: all 0.3s ease;
  box-shadow: 0 10px 40px rgba(59, 130, 246, 0.5);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
    opacity: 0;
    transition: opacity 0.3s;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 60px rgba(59, 130, 246, 0.6);

    &::before {
      opacity: 1;
    }
  }

  span {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    gap: 12px;
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    padding: 18px 40px;
  }
`;

const SecondaryButton = styled(motion.button)`
  padding: 22px 50px;
  background: rgba(255, 255, 255, 0.05);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  font-size: 1.15rem;
  font-weight: 700;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.4);
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(255, 255, 255, 0.15);
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    padding: 18px 40px;
  }
`;

const Stats = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  max-width: 600px;

  @media (max-width: 1024px) {
    max-width: 100%;
  }

  @media (max-width: 768px) {
    gap: 30px;
  }
`;

const StatItem = styled.div`
  text-align: left;

  @media (max-width: 1024px) {
    text-align: center;
  }
`;

const StatNumber = styled.div`
  font-size: 2.8rem;
  font-weight: 900;
  background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const StatLabel = styled.div`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.6);
  font-weight: 500;
`;

const RightContent = styled.div`
  position: relative;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const FloatingCard = styled(motion.div)`
  position: absolute;
  background: rgba(30, 58, 138, 0.4);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(59, 130, 246, 0.3);
  border-radius: 24px;
  padding: 32px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  
  &:nth-child(1) {
    top: 0;
    right: 0;
    width: 350px;
    animation: ${floatSlow} 20s ease-in-out infinite;
  }
  
  &:nth-child(2) {
    top: 200px;
    right: 200px;
    width: 300px;
    animation: ${floatMedium} 18s ease-in-out infinite;
  }
  
  &:nth-child(3) {
    bottom: 50px;
    right: 50px;
    width: 280px;
    animation: ${floatSlow} 22s ease-in-out infinite reverse;
  }
`;

const CardIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 16px;
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  color: white;
  margin-bottom: 20px;
  box-shadow: 0 10px 30px rgba(59, 130, 246, 0.5);
`;

const CardTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 700;
  color: white;
  margin-bottom: 10px;
`;

const CardText = styled.p`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin: 0;
`;

const GlowOrb = styled.div`
  position: absolute;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.6) 0%, transparent 70%);
  filter: blur(50px);
  animation: ${pulse} 4s ease-in-out infinite;
  
  &:nth-child(4) {
    top: 20%;
    right: 30%;
  }
  
  &:nth-child(5) {
    bottom: 30%;
    right: 10%;
    animation-delay: 2s;
  }
`;

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <HeroContainer>
      <BackgroundGradient />
      <FloatingShape />
      <FloatingShape />
      <FloatingShape />
      <GridOverlay />
      
      <Content>
        <LeftContent>
          <Badge
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Next-Gen Cybersecurity Platform
          </Badge>
          
          <Title
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Defend Your
            <br />
            <span>Digital Empire</span>
          </Title>
          
          <Description
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Advanced AI-powered threat intelligence and autonomous security solutions 
            designed to protect enterprises from sophisticated cyber attacks
          </Description>

          <ButtonGroup
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <PrimaryButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Start Free Trial <FaArrowRight /></span>
            </PrimaryButton>
            <SecondaryButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaPlay /> Watch Demo
            </SecondaryButton>
          </ButtonGroup>

          <Stats
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <StatItem>
              <StatNumber>99.9%</StatNumber>
              <StatLabel>Threat Detection</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>24/7</StatNumber>
              <StatLabel>Monitoring</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>500+</StatNumber>
              <StatLabel>Enterprises</StatLabel>
            </StatItem>
          </Stats>
        </LeftContent>

        <RightContent
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
          }}
        >
          <FloatingCard
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <CardIcon>🛡️</CardIcon>
            <CardTitle>Real-time Protection</CardTitle>
            <CardText>AI-powered threat detection identifying attacks in milliseconds</CardText>
          </FloatingCard>

          <FloatingCard
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <CardIcon>📊</CardIcon>
            <CardTitle>Risk Analytics</CardTitle>
            <CardText>Quantify cyber risks in financial terms for better decisions</CardText>
          </FloatingCard>

          <FloatingCard
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <CardIcon>⚡</CardIcon>
            <CardTitle>Instant Response</CardTitle>
            <CardText>Automated incident response in under 50 milliseconds</CardText>
          </FloatingCard>

          <GlowOrb />
          <GlowOrb />
        </RightContent>
      </Content>
    </HeroContainer>
  );
};

export default Hero;
