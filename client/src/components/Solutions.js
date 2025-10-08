import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, useReducedMotion } from 'framer-motion';
import { variants, transitions, withDelay } from '../styles/motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaShieldAlt, 
  FaChartLine, 
  FaUsers, 
  FaEye, 
  FaArrowRight,
  FaCheck,
  FaRocket,
  FaBrain,
  FaGlobe,
  FaLock
} from 'react-icons/fa';

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
`;

const SolutionsContainer = styled.section`
  padding: 120px 0;
  background: linear-gradient(180deg, #0f172a 0%, #1e293b 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background: 
      radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
      radial-gradient(circle at 70% 80%, rgba(96, 165, 250, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 80px 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
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

  @media (max-width: 768px) {
    margin-bottom: 60px;
  }
`;

const Badge = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: rgba(59, 130, 246, 0.15);
  border: 1px solid rgba(59, 130, 246, 0.3);
  padding: 10px 20px;
  border-radius: 50px;
  font-size: 14px;
  font-weight: 600;
  color: #60a5fa;
  margin-bottom: 24px;
  backdrop-filter: blur(10px);
`;

const Title = styled(motion.h2)`
  font-size: clamp(40px, 6vw, 56px);
  font-weight: 900;
  line-height: 1.2;
  margin-bottom: 24px;
  background: linear-gradient(135deg, #ffffff 0%, #60a5fa 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -2px;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.8);
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.8;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const SolutionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 32px;
  margin-bottom: 100px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
    margin-bottom: 80px;
  }
`;

const SolutionCard = styled(motion.div)`
  background: rgba(30, 58, 138, 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 24px;
  padding: 40px;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.1), transparent);
    transition: left 0.6s;
  }

  &:hover {
    background: rgba(30, 58, 138, 0.3);
    border-color: rgba(59, 130, 246, 0.5);
    transform: translateY(-10px);
    box-shadow: 0 20px 60px rgba(59, 130, 246, 0.3);

    &::before {
      left: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 30px;
  }
`;

const SolutionIcon = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 18px;
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  font-size: 2rem;
  color: white;
  box-shadow: 0 10px 30px rgba(59, 130, 246, 0.4);
  animation: ${float} 3s ease-in-out infinite;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    inset: -2px;
    border-radius: 18px;
    padding: 2px;
    background: linear-gradient(135deg, #60a5fa, #3b82f6);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0.5;
  }
`;

const SolutionTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 16px;
`;

const SolutionDescription = styled.p`
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.8;
  margin-bottom: 24px;
`;

const LearnMoreLink = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #60a5fa;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  svg {
    transition: transform 0.3s ease;
  }

  &:hover {
    gap: 12px;
    color: #93c5fd;

    svg {
      transform: translateX(4px);
    }
  }
`;

const ComparisonSection = styled(motion.section)`
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 32px;
  padding: 80px 60px;
  margin-top: 100px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%);
    animation: ${float} 8s ease-in-out infinite;
  }

  @media (max-width: 768px) {
    padding: 60px 30px;
    margin-top: 80px;
  }
`;

const ComparisonContent = styled.div`
  position: relative;
  z-index: 1;
`;

const ComparisonTitle = styled.h3`
  font-size: 2.5rem;
  font-weight: 800;
  color: #ffffff;
  text-align: center;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 40px;
  }
`;

const ComparisonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

const ComparisonItem = styled.div`
  padding: 32px;
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 20px;
  transition: all 0.4s ease;

  &:hover {
    background: rgba(59, 130, 246, 0.15);
    border-color: rgba(59, 130, 246, 0.4);
    transform: translateY(-6px);
    box-shadow: 0 15px 40px rgba(59, 130, 246, 0.2);
  }
`;

const ComparisonIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 14px;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  font-size: 1.6rem;
  color: white;
  box-shadow: 0 8px 24px rgba(16, 185, 129, 0.4);
`;

const ComparisonItemTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 12px;
`;

const ComparisonItemText = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.7;
  margin: 0;
`;

const solutions = [
  {
    icon: <FaShieldAlt />,
    title: "Cyber Risk Quantification",
    description: "Quantify cyber risks in financial terms to make informed decisions and justify security investments with data-driven insights."
  },
  {
    icon: <FaUsers />,
    title: "Third-Party Risk Management",
    description: "Comprehensive vendor risk assessment and continuous monitoring to protect your supply chain from security threats."
  },
  {
    icon: <FaEye />,
    title: "Continuous Monitoring",
    description: "24/7 real-time monitoring of your security posture with instant alerts and automated threat response capabilities."
  },
  {
    icon: <FaBrain />,
    title: "Threat Intelligence",
    description: "Advanced AI-powered threat detection using machine learning to identify and prevent sophisticated attacks."
  },
  {
    icon: <FaRocket />,
    title: "Incident Response",
    description: "Rapid incident response team with proven methodologies to minimize damage and ensure business continuity."
  },
  {
    icon: <FaLock />,
    title: "Zero Trust Architecture",
    description: "Implementing zero trust principles across all systems with continuous verification and least privilege access."
  }
];

const comparisons = [
  {
    icon: <FaCheck />,
    title: "Enterprise-Grade Security",
    description: "Built for global organizations with stringent security requirements"
  },
  {
    icon: <FaCheck />,
    title: "Proven Track Record",
    description: "Trusted by Fortune 500 companies and industry leaders worldwide"
  },
  {
    icon: <FaCheck />,
    title: "Expert Support",
    description: "24/7 dedicated security experts ready to assist your team"
  },
  {
    icon: <FaCheck />,
    title: "Compliance Ready",
    description: "Meet regulatory requirements with built-in compliance frameworks"
  }
];

const Solutions = () => {
  const prefersReducedMotion = useReducedMotion();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <SolutionsContainer ref={ref}>
      <Container>
        <SectionHeader>
          <Badge
            variants={variants.fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            transition={transitions.fast}
          >
            <FaRocket />
            Comprehensive Solutions
          </Badge>

          <Title
            variants={variants.fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            transition={withDelay(transitions.base, 0.2)}
          >
            Enterprise Security
            <br />
            Solutions
          </Title>

          <Subtitle
            variants={variants.fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            transition={withDelay(transitions.base, 0.4)}
          >
            Protect your organization with our comprehensive suite of cybersecurity solutions 
            designed for modern enterprises facing evolving threats.
          </Subtitle>
        </SectionHeader>

        <SolutionsGrid>
          {solutions.map((solution, index) => (
            <SolutionCard
              key={index}
              variants={variants.fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              transition={withDelay(transitions.base, index * 0.1)}
              whileHover={{ scale: prefersReducedMotion ? 1 : 1.015, rotateX: prefersReducedMotion ? 0 : 3, rotateY: prefersReducedMotion ? 0 : -3 }}
            >
              <SolutionIcon>{solution.icon}</SolutionIcon>
              <SolutionTitle>{solution.title}</SolutionTitle>
              <SolutionDescription>{solution.description}</SolutionDescription>
              <LearnMoreLink>
                Learn more <FaArrowRight size={14} />
              </LearnMoreLink>
            </SolutionCard>
          ))}
        </SolutionsGrid>

        <ComparisonSection
          variants={variants.fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={withDelay(transitions.base, 0.6)}
        >
          <ComparisonContent>
            <ComparisonTitle>Why Choose Trans Asia Tech?</ComparisonTitle>
            <ComparisonGrid>
              {comparisons.map((comparison, index) => (
                <ComparisonItem key={index}>
                  <ComparisonIcon>{comparison.icon}</ComparisonIcon>
                  <ComparisonItemTitle>{comparison.title}</ComparisonItemTitle>
                  <ComparisonItemText>{comparison.description}</ComparisonItemText>
                </ComparisonItem>
              ))}
            </ComparisonGrid>
          </ComparisonContent>
        </ComparisonSection>
      </Container>
    </SolutionsContainer>
  );
};

export default Solutions;
