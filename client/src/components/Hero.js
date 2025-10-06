import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaPlay, FaArrowRight, FaShieldAlt, FaBrain, FaRocket } from 'react-icons/fa';
import CountUp from 'react-countup';

const HeroContainer = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
  padding-top: 80px;

  @media (max-width: 768px) {
    padding-top: 70px;
    min-height: 90vh;
  }
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 60px;
    text-align: center;
  }

  @media (max-width: 768px) {
    padding: 0 15px;
    gap: 40px;
  }
`;

const LeftContent = styled(motion.div)`
  z-index: 2;
`;

const Badge = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(0, 255, 136, 0.1);
  border: 1px solid rgba(0, 255, 136, 0.3);
  padding: 8px 16px;
  border-radius: 50px;
  font-size: 14px;
  font-weight: 500;
  color: var(--primary-color);
  margin-bottom: 30px;
`;

const Title = styled(motion.h1)`
  font-size: clamp(48px, 8vw, 72px);
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 24px;
  background: linear-gradient(135deg, #ffffff 0%, #0066ff 50%, #00a8ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -2px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 20px;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 40px;
  max-width: 500px;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 30px;
    max-width: none;
  }
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 20px;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
    gap: 15px;
  }
`;

const PrimaryButton = styled(Link)`
  background: var(--gradient-primary);
  color: #000000;
  padding: 18px 36px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 700;
  font-size: 16px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 20px 60px rgba(0, 255, 136, 0.3);
  }

  @media (max-width: 768px) {
    padding: 15px 30px;
    font-size: 14px;
  }
`;

const SecondaryButton = styled(Link)`
  background: transparent;
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
  padding: 16px 32px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 10px;

  &:hover {
    background: var(--primary-color);
    color: #000000;
    transform: translateY(-3px);
  }

  @media (max-width: 768px) {
    padding: 14px 28px;
    font-size: 14px;
  }
`;

const RightContent = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 968px) {
    order: -1;
  }
`;

const HeroVisual = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  height: 400px;
  background: radial-gradient(circle, rgba(0, 255, 136, 0.1) 0%, transparent 70%);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(0, 255, 136, 0.2);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: conic-gradient(from 0deg, transparent, rgba(0, 255, 136, 0.1), transparent);
    animation: rotate 10s linear infinite;
  }

  @keyframes rotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  @media (max-width: 768px) {
    max-width: 350px;
    height: 300px;
  }
`;

const StatsGrid = styled(motion.div)`
  position: absolute;
  bottom: -50px;
  left: 50%;
  transform: translateX(-50%);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  background: rgba(26, 26, 26, 0.95);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(0, 255, 136, 0.1);
  border-radius: 16px;
  padding: 30px;
  width: 100%;
  max-width: 600px;

  @media (max-width: 768px) {
    position: static;
    transform: none;
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 20px;
    margin-top: 40px;
  }
`;

const StatItem = styled.div`
  text-align: center;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: left;
  }
`;

const StatNumber = styled.div`
  font-size: 32px;
  font-weight: 800;
  color: var(--primary-color);
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 0;
  }
`;

const StatLabel = styled.div`
  font-size: 14px;
  color: var(--text-secondary);
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const FeatureIcons = styled(motion.div)`
  display: flex;
  gap: 20px;
  margin-top: 40px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const FeatureIcon = styled(motion.div)`
  width: 60px;
  height: 60px;
  background: rgba(0, 255, 136, 0.1);
  border: 1px solid rgba(0, 255, 136, 0.3);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-color);
  font-size: 24px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 255, 136, 0.2);
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    font-size: 20px;
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <LeftContent
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Badge
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <FaShieldAlt />
            Trusted by 500+ Enterprises
          </Badge>

          <Title
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Autonomous Cyber
            <br />
            <span style={{ color: '#0066ff' }}>Risk Management</span>
            <br />
            Reinvented
          </Title>

          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Next-generation AI-powered cybersecurity platform that autonomously detects, 
            quantifies, and mitigates threats across your entire digital ecosystem.
          </Subtitle>

          <ButtonGroup
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <PrimaryButton to="/demo">
              Start Free Trial
              <FaArrowRight />
            </PrimaryButton>
            <SecondaryButton to="/watch-demo">
              <FaPlay />
              Watch Demo
            </SecondaryButton>
          </ButtonGroup>

          <FeatureIcons
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <FeatureIcon
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaBrain />
            </FeatureIcon>
            <FeatureIcon
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaShieldAlt />
            </FeatureIcon>
            <FeatureIcon
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaRocket />
            </FeatureIcon>
          </FeatureIcons>
        </LeftContent>

        <RightContent
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <HeroVisual>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, delay: 1 }}
              style={{
                fontSize: '120px',
                color: 'rgba(0, 102, 255, 0.3)',
                zIndex: 2
              }}
            >
              <FaShieldAlt />
            </motion.div>
          </HeroVisual>

          <StatsGrid
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <StatItem>
              <StatNumber>
                <CountUp end={99.9} suffix="%" duration={2} />
              </StatNumber>
              <StatLabel>Threat Detection Rate</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>
                <CountUp end={24} suffix="/7" duration={2} />
              </StatNumber>
              <StatLabel>Continuous Monitoring</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>
                <CountUp end={500} suffix="+" duration={2} />
              </StatNumber>
              <StatLabel>Enterprise Clients</StatLabel>
            </StatItem>
          </StatsGrid>
        </RightContent>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
