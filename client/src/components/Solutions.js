import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaShieldAlt, 
  FaChartLine, 
  FaUsers, 
  FaBrain, 
  FaLock,
  FaArrowRight,
  FaCheckCircle
} from 'react-icons/fa';

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
`;

const shimmer = keyframes`
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
`;

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const SolutionsContainer = styled.section`
  padding: 120px 0;
  background: #f8fafc;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -10%;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%);
    border-radius: 50%;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -30%;
    left: -10%;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(251, 191, 36, 0.1) 0%, transparent 70%);
    border-radius: 50%;
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

const LabelBadge = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 24px;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(251, 191, 36, 0.1) 100%);
  border: 2px solid rgba(59, 130, 246, 0.2);
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 24px;
  text-transform: uppercase;
  letter-spacing: 1.5px;

  svg {
    color: #fbbf24;
  }
`;

const Title = styled(motion.h2)`
  font-size: 4.5rem;
  font-weight: 900;
  background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #fbbf24 100%);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 24px;
  letter-spacing: -3px;
  line-height: 1.1;
  position: relative;
  animation: ${shimmer} 5s ease-in-out infinite;

  &::after {
    content: '';
    position: absolute;
    bottom: -16px;
    left: 50%;
    transform: translateX(-50%);
    width: 120px;
    height: 6px;
    background: linear-gradient(90deg, #3b82f6 0%, #fbbf24 100%);
    border-radius: 3px;
    box-shadow: 0 4px 20px rgba(59, 130, 246, 0.4);
  }

  @media (max-width: 768px) {
    font-size: 2.8rem;
    letter-spacing: -1.5px;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.35rem;
  color: #64748b;
  max-width: 800px;
  margin: 30px auto 0;
  line-height: 1.8;
  font-weight: 400;
`;

const SolutionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-bottom: 60px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

const SolutionCard = styled(motion.div)`
  position: relative;
  padding: 45px;
  background: #ffffff;
  border-radius: 24px;
  cursor: pointer;
  overflow: hidden;
  border: 2px solid ${props => props.featured ? '#fbbf24' : 'rgba(226, 232, 240, 1)'};
  box-shadow: ${props => props.featured 
    ? '0 20px 60px rgba(251, 191, 36, 0.2)' 
    : '0 10px 40px rgba(0, 0, 0, 0.08)'};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 6px;
    background: ${props => props.featured 
      ? 'linear-gradient(90deg, #fbbf24 0%, #f59e0b 100%)' 
      : 'linear-gradient(90deg, #3b82f6 0%, #1e3a8a 100%)'};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s ease;
  }

  &:hover {
    transform: translateY(-12px) scale(1.02);
    box-shadow: ${props => props.featured 
      ? '0 30px 80px rgba(251, 191, 36, 0.35)' 
      : '0 25px 70px rgba(59, 130, 246, 0.25)'};
    border-color: ${props => props.featured ? '#f59e0b' : '#3b82f6'};

    &::before {
      transform: scaleX(1);
    }
  }

  @media (max-width: 768px) {
    padding: 35px;
  }
`;

const IconWrapper = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 20px;
  background: ${props => props.featured 
    ? 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)' 
    : 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  color: white;
  margin-bottom: 28px;
  box-shadow: ${props => props.featured 
    ? '0 15px 40px rgba(251, 191, 36, 0.4)' 
    : '0 15px 40px rgba(59, 130, 246, 0.3)'};
  animation: ${float} 4s ease-in-out infinite;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    inset: -4px;
    background: ${props => props.featured 
      ? 'linear-gradient(135deg, #fbbf24, #f59e0b)' 
      : 'linear-gradient(135deg, #3b82f6, #60a5fa)'};
    border-radius: 20px;
    z-index: -1;
    opacity: 0;
    filter: blur(20px);
    transition: opacity 0.3s ease;
  }

  ${SolutionCard}:hover &::after {
    opacity: 0.6;
    animation: ${pulse} 2s ease-in-out infinite;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.85rem;
  font-weight: 800;
  color: #1e293b;
  margin-bottom: 16px;
  line-height: 1.3;
  transition: color 0.3s ease;

  ${SolutionCard}:hover & {
    color: ${props => props.featured ? '#f59e0b' : '#3b82f6'};
  }

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const CardDescription = styled.p`
  font-size: 1.08rem;
  color: #64748b;
  line-height: 1.75;
  margin-bottom: 28px;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 28px;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 0.95rem;
  color: #475569;
  margin-bottom: 12px;

  svg {
    color: ${props => props.featured ? '#fbbf24' : '#3b82f6'};
    flex-shrink: 0;
  }
`;

const CardLink = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 1.05rem;
  font-weight: 700;
  color: ${props => props.featured ? '#fbbf24' : '#3b82f6'};
  transition: gap 0.3s ease;

  svg {
    transition: transform 0.3s ease;
  }

  ${SolutionCard}:hover & {
    gap: 16px;
    
    svg {
      transform: translateX(5px);
    }
  }
`;

const StatsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-top: 80px;
  padding: 60px;
  background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
  border-radius: 30px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -20%;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(251, 191, 36, 0.2) 0%, transparent 70%);
    border-radius: 50%;
    animation: ${rotate} 20s linear infinite;
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 40px 30px;
  }
`;

const StatCard = styled(motion.div)`
  text-align: center;
  position: relative;
  z-index: 1;
`;

const StatNumber = styled.div`
  font-size: 3.5rem;
  font-weight: 900;
  background: linear-gradient(135deg, #ffffff 0%, #fbbf24 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 8px;
  line-height: 1;

  @media (max-width: 768px) {
    font-size: 2.8rem;
  }
`;

const StatLabel = styled.div`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
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
      description: "AI-powered threat detection and autonomous response system protecting against sophisticated cyber attacks",
      features: [
        "Real-time threat intelligence",
        "Automated incident response",
        "Zero-day vulnerability protection"
      ],
      featured: true
    },
    {
      icon: <FaChartLine />,
      title: "Risk Intelligence",
      description: "Quantify cyber risks in financial terms with comprehensive data-driven insights and predictive analytics",
      features: [
        "Financial impact analysis",
        "Board-level risk reporting",
        "Compliance dashboards"
      ],
      featured: false
    },
    {
      icon: <FaUsers />,
      title: "Third-Party Risk Management",
      description: "Continuously monitor and assess vendor security posture across your entire supply chain",
      features: [
        "Vendor security scoring",
        "Continuous monitoring",
        "Risk mitigation strategies"
      ],
      featured: false
    },
    {
      icon: <FaBrain />,
      title: "AI Security Operations",
      description: "Machine learning algorithms for predictive threat analysis and intelligent security automation",
      features: [
        "Behavioral analytics",
        "Anomaly detection",
        "Predictive threat modeling"
      ],
      featured: false
    },
    {
      icon: <FaLock />,
      title: "Zero Trust Architecture",
      description: "Continuous verification and least privilege access control across your entire infrastructure",
      features: [
        "Identity verification",
        "Micro-segmentation",
        "Adaptive access control"
      ],
      featured: false
    },
    {
      icon: <FaShieldAlt />,
      title: "Cloud Security Posture",
      description: "Comprehensive cloud security management with automated compliance and configuration monitoring",
      features: [
        "Multi-cloud protection",
        "Automated compliance",
        "Configuration management"
      ],
      featured: false
    }
  ];

  const stats = [
    { number: "99.9%", label: "Threat Detection Rate" },
    { number: "500+", label: "Enterprise Clients" },
    { number: "24/7", label: "Security Monitoring" },
    { number: "<2min", label: "Average Response Time" }
  ];

  return (
    <SolutionsContainer ref={ref}>
      <Container>
        <SectionHeader>
          <LabelBadge
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <FaShieldAlt />
            Our Solutions
          </LabelBadge>

          <Title
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Enterprise Security Solutions
          </Title>

          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Comprehensive cybersecurity platform protecting organizations worldwide with cutting-edge AI and advanced threat intelligence
          </Subtitle>
        </SectionHeader>

        <SolutionsGrid>
          {solutions.map((solution, index) => (
            <SolutionCard
              key={index}
              featured={solution.featured}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + (index * 0.1) }}
            >
              <IconWrapper featured={solution.featured}>
                {solution.icon}
              </IconWrapper>
              
              <CardTitle featured={solution.featured}>
                {solution.title}
              </CardTitle>
              
              <CardDescription>
                {solution.description}
              </CardDescription>

              <FeatureList>
                {solution.features.map((feature, idx) => (
                  <FeatureItem key={idx} featured={solution.featured}>
                    <FaCheckCircle size={16} />
                    {feature}
                  </FeatureItem>
                ))}
              </FeatureList>

              <CardLink featured={solution.featured}>
                Learn More <FaArrowRight size={16} />
              </CardLink>
            </SolutionCard>
          ))}
        </SolutionsGrid>

        <StatsSection>
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 1 + (index * 0.1) }}
            >
              <StatNumber>{stat.number}</StatNumber>
              <StatLabel>{stat.label}</StatLabel>
            </StatCard>
          ))}
        </StatsSection>
      </Container>
    </SolutionsContainer>
  );
};

export default Solutions;
