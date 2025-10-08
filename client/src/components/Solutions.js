import React from 'react';
import styled from 'styled-components';
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

const SolutionsContainer = styled.section`
  padding: 120px 0;
  background: #ffffff;
  position: relative;
  isolation: isolate;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: #ffffff;
    z-index: 0;
  }

  @media (max-width: 768px) {
    padding: 80px 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 0 15px;
  }
`;

const SectionHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 80px;

  @media (max-width: 768px) {
    margin-bottom: 60px;
  }
`;

const Badge = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(0, 102, 255, 0.1);
  border: 1px solid rgba(0, 102, 255, 0.3);
  padding: 8px 16px;
  border-radius: 50px;
  font-size: 14px;
  font-weight: 500;
  color: var(--secondary-color);
  margin-bottom: 20px;
`;

const Title = styled(motion.h2)`
  font-size: clamp(36px, 6vw, 48px);
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 20px;
  background: linear-gradient(135deg, #ffffff 0%, #0066ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Subtitle = styled(motion.p)`
  font-size: 18px;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const SolutionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-bottom: 80px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
    margin-bottom: 60px;
  }
`;

const SolutionCard = styled(motion.div)`
  background: #ffffff;
  border: 1px solid rgba(0, 102, 255, 0.12);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06), 0 2px 10px rgba(0, 102, 255, 0.08);
  border-radius: 20px;
  padding: 40px 30px;
  text-align: center;
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transform-style: preserve-3d;
  will-change: transform;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(0, 102, 255, 0.05), transparent);
    transition: left 0.5s;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(800px 200px at 20% 0%, rgba(255,255,255,0.18), transparent 60%);
    pointer-events: none;
    transform: translateZ(30px);
  }

  &:hover {
    border-color: rgba(0, 102, 255, 0.3);
    transform: translateY(-6px);
    box-shadow: 0 25px 80px rgba(0, 0, 0, 0.10), 0 8px 24px rgba(0, 102, 255, 0.12);

    &::before {
      left: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

const SolutionIcon = styled.div`
  width: 80px;
  height: 80px;
  background: var(--gradient-secondary);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px;
  font-size: 32px;
  color: #ffffff;
  transition: all 0.3s ease;

  ${SolutionCard}:hover & {
    transform: scale(1.1) rotate(5deg);
  }

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
    font-size: 24px;
    margin-bottom: 20px;
  }
`;

const SolutionTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 16px;
  color: var(--text-primary);

  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 12px;
  }
`;

const SolutionDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
  font-size: 16px;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 20px;
  }
`;

const SolutionFeatures = styled.ul`
  list-style: none;
  text-align: left;
  margin-bottom: 30px;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--text-secondary);
  font-size: 14px;
  margin-bottom: 8px;

  svg {
    color: var(--secondary-color);
    font-size: 12px;
  }
`;

const LearnMoreButton = styled.button`
  background: transparent;
  border: 2px solid var(--secondary-color);
  color: var(--secondary-color);
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0 auto;

  &:hover {
    background: var(--secondary-color);
    color: #ffffff;
    transform: translateY(-2px);
  }
`;

const ComparisonSection = styled(motion.div)`
  background: #ffffff;
  border: 1px solid rgba(0, 102, 255, 0.1);
  border-radius: 20px;
  padding: 60px 40px;
  margin-top: 80px;

  @media (max-width: 768px) {
    padding: 40px 20px;
    margin-top: 60px;
  }
`;

const ComparisonTitle = styled.h3`
  text-align: center;
  font-size: 32px;
  font-weight: 800;
  margin-bottom: 40px;
  color: var(--text-primary);

  @media (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 30px;
  }
`;

const ComparisonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;

  @media (max-width: 768px) {
    gap: 20px;
  }
`;

const ComparisonItem = styled.div`
  text-align: center;
  padding: 30px 20px;
  border-radius: 12px;
  background: rgba(0, 102, 255, 0.05);
  border: 1px solid rgba(0, 102, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 102, 255, 0.1);
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    padding: 20px 15px;
  }
`;

const ComparisonIcon = styled.div`
  width: 60px;
  height: 60px;
  background: var(--gradient-secondary);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;
  font-size: 24px;
  color: #ffffff;
`;

const ComparisonItemTitle = styled.h4`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
  color: var(--text-primary);
`;

const ComparisonDescription = styled.p`
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.5;
`;

const solutions = [
  {
    icon: <FaShieldAlt />,
    title: "Threat Protection",
    description: "Comprehensive protection against advanced persistent threats, malware, and zero-day attacks.",
    features: [
      "AI-powered threat detection",
      "Real-time monitoring",
      "Automated response",
      "Behavioral analysis"
    ]
  },
  {
    icon: <FaChartLine />,
    title: "Risk Management",
    description: "Quantify and manage cyber risks with advanced analytics and financial impact assessment.",
    features: [
      "Risk quantification",
      "Financial impact analysis",
      "Compliance reporting",
      "Executive dashboards"
    ]
  },
  {
    icon: <FaUsers />,
    title: "Third-Party Risk",
    description: "Comprehensive vendor and supplier risk management with continuous monitoring.",
    features: [
      "Vendor assessment",
      "Continuous monitoring",
      "Risk scoring",
      "Compliance tracking"
    ]
  },
  {
    icon: <FaEye />,
    title: "Continuous Monitoring",
    description: "24/7 monitoring of your digital ecosystem with instant threat intelligence.",
    features: [
      "Real-time monitoring",
      "Threat intelligence",
      "Incident response",
      "Security analytics"
    ]
  }
];

const comparisons = [
  {
    icon: <FaRocket />,
    title: "10x Faster",
    description: "Response time compared to traditional security solutions"
  },
  {
    icon: <FaBrain />,
    title: "AI-Powered",
    description: "Machine learning algorithms for intelligent threat detection"
  },
  {
    icon: <FaGlobe />,
    title: "Global Scale",
    description: "Protecting organizations worldwide with localized intelligence"
  },
  {
    icon: <FaLock />,
    title: "Zero Trust",
    description: "Implementing zero trust architecture across all systems"
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
              
              <SolutionFeatures>
                {solution.features.map((feature, featureIndex) => (
                  <FeatureItem key={featureIndex}>
                    <FaCheck />
                    {feature}
                  </FeatureItem>
                ))}
              </SolutionFeatures>

              <LearnMoreButton>
                Learn More
                <FaArrowRight />
              </LearnMoreButton>
            </SolutionCard>
          ))}
        </SolutionsGrid>

        <ComparisonSection
          variants={variants.fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={withDelay(transitions.base, 0.6)}
        >
          <ComparisonTitle>Why Choose Trans Asia Tech?</ComparisonTitle>
          <ComparisonGrid>
            {comparisons.map((comparison, index) => (
              <ComparisonItem key={index}>
                <ComparisonIcon>{comparison.icon}</ComparisonIcon>
                <ComparisonItemTitle>{comparison.title}</ComparisonItemTitle>
                <ComparisonDescription>{comparison.description}</ComparisonDescription>
              </ComparisonItem>
            ))}
          </ComparisonGrid>
        </ComparisonSection>
      </Container>
    </SolutionsContainer>
  );
};

export default Solutions;
