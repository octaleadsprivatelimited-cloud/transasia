import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { 
  FaShieldAlt, 
  FaUsers, 
  FaGlobe, 
  FaClock,
  FaCheckCircle,
  FaRocket,
  FaBrain,
  FaChartLine
} from 'react-icons/fa';

const StatsContainer = styled.section`
  padding: 120px 0;
  background: var(--bg-primary);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 50%, rgba(0, 255, 136, 0.05) 0%, transparent 70%);
    pointer-events: none;
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
  z-index: 2;

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

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-bottom: 80px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    margin-bottom: 60px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const StatCard = styled(motion.div)`
  background: rgba(26, 26, 26, 0.5);
  border: 1px solid rgba(0, 255, 136, 0.1);
  border-radius: 20px;
  padding: 40px 30px;
  text-align: center;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

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

const StatIcon = styled.div`
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

  ${StatCard}:hover & {
    transform: scale(1.1) rotate(5deg);
  }

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
    font-size: 24px;
    margin-bottom: 20px;
  }
`;

const StatNumber = styled.div`
  font-size: 48px;
  font-weight: 900;
  color: var(--primary-color);
  margin-bottom: 8px;
  line-height: 1;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const StatLabel = styled.div`
  font-size: 16px;
  color: var(--text-secondary);
  font-weight: 500;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const StatDescription = styled.div`
  font-size: 14px;
  color: var(--text-muted);
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const PerformanceSection = styled(motion.div)`
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

const PerformanceTitle = styled.h3`
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

const PerformanceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;

  @media (max-width: 768px) {
    gap: 20px;
  }
`;

const PerformanceItem = styled.div`
  text-align: center;
  padding: 30px 20px;
  border-radius: 12px;
  background: rgba(0, 255, 136, 0.05);
  border: 1px solid rgba(0, 255, 136, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 255, 136, 0.1);
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    padding: 20px 15px;
  }
`;

const PerformanceIcon = styled.div`
  width: 60px;
  height: 60px;
  background: var(--gradient-primary);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;
  font-size: 24px;
  color: #000000;
`;

const PerformanceValue = styled.div`
  font-size: 36px;
  font-weight: 900;
  color: var(--primary-color);
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const PerformanceLabel = styled.div`
  font-size: 14px;
  color: var(--text-secondary);
  font-weight: 500;
`;

const stats = [
  {
    icon: <FaShieldAlt />,
    number: 99.9,
    suffix: "%",
    label: "Threat Detection Rate",
    description: "Industry-leading accuracy in threat identification and prevention"
  },
  {
    icon: <FaUsers />,
    number: 500,
    suffix: "+",
    label: "Enterprise Clients",
    description: "Trusted by leading organizations worldwide"
  },
  {
    icon: <FaGlobe />,
    number: 150,
    suffix: "+",
    label: "Countries Protected",
    description: "Global presence with localized threat intelligence"
  },
  {
    icon: <FaClock />,
    number: 50,
    suffix: "ms",
    label: "Average Response Time",
    description: "Lightning-fast threat detection and response"
  },
  {
    icon: <FaCheckCircle />,
    number: 24,
    suffix: "/7",
    label: "Continuous Monitoring",
    description: "Round-the-clock protection and surveillance"
  },
  {
    icon: <FaRocket />,
    number: 10,
    suffix: "x",
    label: "Faster Response",
    description: "Compared to traditional security solutions"
  }
];

const performanceMetrics = [
  {
    icon: <FaBrain />,
    value: "1000+",
    label: "AI Models"
  },
  {
    icon: <FaChartLine />,
    value: "99.99%",
    label: "Uptime"
  },
  {
    icon: <FaShieldAlt />,
    value: "1M+",
    label: "Threats Blocked"
  },
  {
    icon: <FaClock />,
    value: "<1s",
    label: "Detection Time"
  }
];

const Stats = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <StatsContainer ref={ref}>
      <Container>
        <SectionHeader>
          <Badge
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <FaChartLine />
            Proven Results
          </Badge>

          <Title
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Trusted by Industry
            <br />
            Leaders
          </Title>

          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Our platform delivers measurable results that matter to your business. 
            See why leading organizations trust CyberSecure for their security needs.
          </Subtitle>
        </SectionHeader>

        <StatsGrid>
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <StatIcon>{stat.icon}</StatIcon>
              <StatNumber>
                {inView && (
                  <CountUp
                    end={stat.number}
                    duration={2}
                    suffix={stat.suffix}
                    decimals={stat.number % 1 !== 0 ? 1 : 0}
                  />
                )}
              </StatNumber>
              <StatLabel>{stat.label}</StatLabel>
              <StatDescription>{stat.description}</StatDescription>
            </StatCard>
          ))}
        </StatsGrid>

        <PerformanceSection
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <PerformanceTitle>Platform Performance</PerformanceTitle>
          <PerformanceGrid>
            {performanceMetrics.map((metric, index) => (
              <PerformanceItem key={index}>
                <PerformanceIcon>{metric.icon}</PerformanceIcon>
                <PerformanceValue>{metric.value}</PerformanceValue>
                <PerformanceLabel>{metric.label}</PerformanceLabel>
              </PerformanceItem>
            ))}
          </PerformanceGrid>
        </PerformanceSection>
      </Container>
    </StatsContainer>
  );
};

export default Stats;
