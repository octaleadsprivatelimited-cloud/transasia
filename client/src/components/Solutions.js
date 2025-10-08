import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaShieldAlt, 
  FaChartLine, 
  FaUsers, 
  FaBrain, 
  FaLock,
  FaNetworkWired,
  FaArrowRight
} from 'react-icons/fa';

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const SolutionsContainer = styled.section`
  padding: 100px 0;
  background: #ffffff;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 300px;
    background: linear-gradient(180deg, #0f172a 0%, transparent 100%);
  }
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 80px;
`;

const Title = styled(motion.h2)`
  font-size: 3.5rem;
  font-weight: 900;
  color: #0f172a;
  margin-bottom: 20px;
  letter-spacing: -2px;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: #64748b;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.7;
`;

const BentoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 24px;
  margin-bottom: 60px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(6, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const BentoCard = styled(motion.div)`
  grid-column: span ${props => props.span || 4};
  min-height: ${props => props.height || '380px'};
  background: ${props => props.featured 
    ? 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)' 
    : '#f8fafc'};
  border: 1px solid ${props => props.featured ? 'rgba(59, 130, 246, 0.3)' : '#e2e8f0'};
  border-radius: 28px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 200%;
    height: 200%;
    background: ${props => props.featured 
      ? 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)' 
      : 'radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, transparent 70%)'};
    animation: ${rotate} 20s linear infinite;
    opacity: 0;
    transition: opacity 0.4s;
  }

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: ${props => props.featured 
      ? '0 30px 80px rgba(59, 130, 246, 0.4)' 
      : '0 20px 60px rgba(59, 130, 246, 0.15)'};
    border-color: ${props => props.featured ? '#60a5fa' : '#3b82f6'};

    &::before {
      opacity: 1;
    }
  }

  @media (max-width: 1024px) {
    grid-column: span ${props => props.spanTablet || 6};
  }

  @media (max-width: 768px) {
    grid-column: span 1;
    min-height: 320px;
  }
`;

const CardIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 20px;
  background: ${props => props.featured 
    ? 'rgba(255, 255, 255, 0.15)' 
    : 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)'};
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.2rem;
  color: ${props => props.featured ? 'white' : 'white'};
  margin-bottom: 24px;
  box-shadow: ${props => props.featured 
    ? '0 10px 40px rgba(0, 0, 0, 0.2)' 
    : '0 10px 30px rgba(59, 130, 246, 0.4)'};
`;

const CardTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: ${props => props.featured ? 'white' : '#0f172a'};
  margin-bottom: 16px;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const CardDescription = styled.p`
  font-size: 1.05rem;
  color: ${props => props.featured ? 'rgba(255, 255, 255, 0.9)' : '#64748b'};
  line-height: 1.7;
  margin-bottom: 24px;
`;

const CardLink = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 1rem;
  font-weight: 600;
  color: ${props => props.featured ? 'white' : '#3b82f6'};
  transition: gap 0.3s ease;

  svg {
    transition: transform 0.3s ease;
  }

  ${BentoCard}:hover & {
    gap: 12px;
    
    svg {
      transform: translateX(4px);
    }
  }
`;

const CTASection = styled(motion.div)`
  margin-top: 80px;
  padding: 80px 60px;
  background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%);
  border-radius: 40px;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: -100%;
    background: conic-gradient(
      from 0deg,
      transparent 0deg,
      rgba(59, 130, 246, 0.3) 90deg,
      transparent 180deg,
      rgba(59, 130, 246, 0.3) 270deg,
      transparent 360deg
    );
    animation: ${rotate} 4s linear infinite;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 2px;
    background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%);
    border-radius: 38px;
  }

  @media (max-width: 768px) {
    padding: 60px 30px;
  }
`;

const CTAContent = styled.div`
  position: relative;
  z-index: 1;
`;

const CTATitle = styled.h3`
  font-size: 2.8rem;
  font-weight: 900;
  color: white;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const CTAText = styled.p`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 40px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const CTAButton = styled.button`
  padding: 22px 60px;
  background: white;
  color: #1e3a8a;
  border: none;
  border-radius: 16px;
  font-size: 1.15rem;
  font-weight: 800;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  transition: all 0.3s ease;
  box-shadow: 0 10px 40px rgba(255, 255, 255, 0.2);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 60px rgba(255, 255, 255, 0.3);
  }
`;

const Solutions = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const solutions = [
    {
      icon: <FaShieldAlt />,
      title: "Advanced Threat Protection",
      description: "AI-powered threat detection and autonomous response to protect against sophisticated cyber attacks",
      span: 6,
      height: '450px',
      featured: true
    },
    {
      icon: <FaChartLine />,
      title: "Risk Intelligence",
      description: "Quantify cyber risks in financial terms with data-driven insights",
      span: 6,
      height: '450px',
      featured: false
    },
    {
      icon: <FaUsers />,
      title: "Third-Party Risk",
      description: "Monitor and assess vendor security posture continuously",
      span: 4,
      height: '380px',
      featured: false
    },
    {
      icon: <FaBrain />,
      title: "AI Security",
      description: "Machine learning for predictive threat analysis",
      span: 4,
      height: '380px',
      featured: false
    },
    {
      icon: <FaLock />,
      title: "Zero Trust",
      description: "Continuous verification and least privilege access",
      span: 4,
      height: '380px',
      featured: false
    }
  ];

  return (
    <SolutionsContainer ref={ref}>
      <Container>
        <SectionHeader>
          <Title
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            Enterprise Security Solutions
          </Title>

          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Comprehensive cybersecurity platform protecting organizations worldwide
          </Subtitle>
        </SectionHeader>

        <BentoGrid>
          {solutions.map((solution, index) => (
            <BentoCard
              key={index}
              span={solution.span}
              height={solution.height}
              featured={solution.featured}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div>
                <CardIcon featured={solution.featured}>{solution.icon}</CardIcon>
                <CardTitle featured={solution.featured}>{solution.title}</CardTitle>
                <CardDescription featured={solution.featured}>{solution.description}</CardDescription>
              </div>
              <CardLink featured={solution.featured}>
                Explore <FaArrowRight size={14} />
              </CardLink>
            </BentoCard>
          ))}
        </BentoGrid>

        <CTASection
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <CTAContent>
            <CTATitle>Ready to Secure Your Future?</CTATitle>
            <CTAText>
              Join 500+ enterprises protecting their digital assets with Trans Asia Tech
            </CTAText>
            <CTAButton>
              Get Started Now <FaArrowRight />
            </CTAButton>
          </CTAContent>
        </CTASection>
      </Container>
    </SolutionsContainer>
  );
};

export default Solutions;
