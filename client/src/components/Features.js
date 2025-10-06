import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaBrain, 
  FaShieldAlt, 
  FaEye, 
  FaRocket, 
  FaChartLine, 
  FaLock,
  FaRobot,
  FaNetworkWired,
  FaGlobe
} from 'react-icons/fa';

const FeaturesContainer = styled.section`
  padding: 120px 0;
  background: var(--bg-primary);
  position: relative;

  @media (max-width: 768px) {
    padding: 80px 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

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
  background: rgba(0, 255, 136, 0.1);
  border: 1px solid rgba(0, 255, 136, 0.3);
  padding: 8px 16px;
  border-radius: 50px;
  font-size: 14px;
  font-weight: 500;
  color: var(--primary-color);
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

const FeaturesGrid = styled.div`
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

const FeatureCard = styled(motion.div)`
  background: rgba(26, 26, 26, 0.5);
  border: 1px solid rgba(0, 255, 136, 0.1);
  border-radius: 16px;
  padding: 40px 30px;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(0, 255, 136, 0.05), transparent);
    transition: left 0.5s;
  }

  &:hover {
    border-color: rgba(0, 255, 136, 0.3);
    transform: translateY(-10px);
    box-shadow: 0 20px 60px rgba(0, 255, 136, 0.1);

    &::before {
      left: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

const FeatureIcon = styled.div`
  width: 80px;
  height: 80px;
  background: var(--gradient-primary);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px;
  font-size: 32px;
  color: #000000;
  transition: all 0.3s ease;

  ${FeatureCard}:hover & {
    transform: scale(1.1) rotate(5deg);
  }

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
    font-size: 24px;
    margin-bottom: 20px;
  }
`;

const FeatureTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 16px;
  color: var(--text-primary);

  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 12px;
  }
`;

const FeatureDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const StatsSection = styled(motion.div)`
  background: rgba(26, 26, 26, 0.3);
  border: 1px solid rgba(0, 255, 136, 0.1);
  border-radius: 20px;
  padding: 60px 40px;
  margin-top: 80px;

  @media (max-width: 768px) {
    padding: 40px 20px;
    margin-top: 60px;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: 48px;
  font-weight: 900;
  color: var(--primary-color);
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const StatLabel = styled.div`
  font-size: 16px;
  color: var(--text-secondary);
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const features = [
  {
    icon: <FaBrain />,
    title: "AI-Powered Threat Detection",
    description: "Advanced machine learning algorithms that continuously learn and adapt to detect emerging threats before they impact your organization."
  },
  {
    icon: <FaShieldAlt />,
    title: "Autonomous Protection",
    description: "Self-healing security infrastructure that automatically responds to threats and implements countermeasures without human intervention."
  },
  {
    icon: <FaEye />,
    title: "Real-time Monitoring",
    description: "24/7 continuous monitoring of your entire digital ecosystem with instant alerts and detailed threat intelligence."
  },
  {
    icon: <FaRocket />,
    title: "Lightning Fast Response",
    description: "Sub-second threat detection and response capabilities that minimize damage and reduce downtime."
  },
  {
    icon: <FaChartLine />,
    title: "Risk Quantification",
    description: "Quantify cyber risks in financial terms to make informed decisions and justify security investments."
  },
  {
    icon: <FaLock />,
    title: "Zero Trust Architecture",
    description: "Implement zero trust principles across all systems with continuous verification and least privilege access."
  },
  {
    icon: <FaRobot />,
    title: "Intelligent Automation",
    description: "Automate routine security tasks and incident response workflows to free up your security team for strategic initiatives."
  },
  {
    icon: <FaNetworkWired />,
    title: "Network Security",
    description: "Comprehensive network protection with advanced firewalls, intrusion detection, and traffic analysis."
  },
  {
    icon: <FaGlobe />,
    title: "Global Threat Intelligence",
    description: "Access to global threat intelligence feeds and collaborative security networks for enhanced protection."
  }
];

const stats = [
  { number: "99.9%", label: "Threat Detection Rate" },
  { number: "24/7", label: "Continuous Monitoring" },
  { number: "500+", label: "Enterprise Clients" },
  { number: "50ms", label: "Average Response Time" }
];

const Features = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <FeaturesContainer ref={ref}>
      <Container>
        <SectionHeader>
          <Badge
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <FaBrain />
            Powered by AI
          </Badge>

          <Title
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Next-Generation Security
            <br />
            Features
          </Title>

          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Experience the future of cybersecurity with our cutting-edge AI-powered platform 
            that provides autonomous protection and intelligent threat management.
          </Subtitle>
        </SectionHeader>

        <FeaturesGrid>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <FeatureIcon>{feature.icon}</FeatureIcon>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureCard>
          ))}
        </FeaturesGrid>

        <StatsSection
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <StatsGrid>
            {stats.map((stat, index) => (
              <StatItem key={index}>
                <StatNumber>{stat.number}</StatNumber>
                <StatLabel>{stat.label}</StatLabel>
              </StatItem>
            ))}
          </StatsGrid>
        </StatsSection>
      </Container>
    </FeaturesContainer>
  );
};

export default Features;
