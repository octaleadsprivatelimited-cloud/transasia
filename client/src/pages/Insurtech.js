import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaChartLine, FaCogs, FaCloud, FaBolt, FaExchangeAlt, FaCheckCircle, FaRocket } from 'react-icons/fa';
import LifecycleDiagram from '../components/LifecycleDiagram';

const PageContainer = styled.div`
  min-height: 100vh;
  padding-top: 80px;
  background: var(--bg-primary);
`;

const HeroSection = styled.section`
  background: var(--gradient-hero);
  padding: 120px 20px 80px;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 50%, rgba(30, 64, 175, 0.1) 0%, transparent 70%);
  }
`;

const HeroContent = styled.div`
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const Pill = styled.span`
  display: inline-block;
  background: var(--gradient-primary);
  color: white;
  padding: 8px 20px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: 24px;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.3rem;
  color: var(--text-secondary);
  margin-bottom: 40px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const Section = styled.section`
  padding: 80px 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 20px;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  color: var(--text-secondary);
  text-align: center;
  margin-bottom: 60px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
`;

const Card = styled(motion.div)`
  background: white;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(30, 64, 175, 0.1);
  transition: all 0.3s ease;
  border: 2px solid transparent;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 40px rgba(30, 64, 175, 0.2);
    border-color: var(--primary-color);
  }
`;

const CardIcon = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 16px;
  background: var(--gradient-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: white;
  margin-bottom: 24px;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 16px;
`;

const CardText = styled.p`
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 20px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
  color: var(--text-secondary);
  font-size: 0.95rem;

  svg {
    color: var(--primary-color);
    flex-shrink: 0;
  }
`;

const StatsSection = styled.div`
  background: var(--gradient-secondary);
  padding: 60px 40px;
  border-radius: 24px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
  text-align: center;
  margin: 60px 0;
`;

const StatCard = styled.div`
  color: white;
`;

const StatNumber = styled.div`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 10px;
`;

const StatLabel = styled.div`
  font-size: 1.1rem;
  opacity: 0.9;
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
`;

const BenefitCard = styled(motion.div)`
  background: white;
  padding: 40px 30px;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(30, 64, 175, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(30, 64, 175, 0.2);
  }
`;

const BenefitIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  background: var(--bg-tertiary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  color: var(--primary-color);
  margin-bottom: 20px;
`;

const BenefitTitle = styled.h4`
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 12px;
`;

const BenefitDescription = styled.p`
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.6;
`;

const CTASection = styled.section`
  background: var(--gradient-hero);
  padding: 100px 20px;
  text-align: center;
  margin-top: 80px;
`;

const CTAContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const CTATitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 20px;
`;

const CTADescription = styled.p`
  font-size: 1.2rem;
  color: var(--text-secondary);
  margin-bottom: 40px;
`;

const CTAButton = styled(motion.button)`
  background: var(--gradient-primary);
  color: white;
  border: none;
  padding: 18px 48px;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 8px 24px rgba(30, 64, 175, 0.3);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 32px rgba(30, 64, 175, 0.4);
  }
`;

const Insurtech = () => {
  const solutions = [
    {
      icon: <FaShieldAlt />,
      title: 'Cyber Risk Scoring',
      description: 'External attack surface, control maturity, and threat telemetry unified into a single score for pricing and risk selection.',
      features: [
        'Signal ingestion: DNS, SSL/TLS, vulnerabilities, misconfigurations',
        'Sector/size benchmarking and peer comparisons',
        'Loss propensity indicators aligned to coverage',
        'Real-time risk score updates'
      ]
    },
    {
      icon: <FaChartLine />,
      title: 'Digital Underwriting',
      description: 'Quote in minutes with pre-fill, dynamic questionnaires, and straight-through processing for low/medium risk.',
      features: [
        'Broker/insured pre-fill from first/third-party data',
        'Automated appetite checks and triage',
        'Binders, endorsements, and referrals workflow',
        'AI-powered risk assessment'
      ]
    },
    {
      icon: <FaCogs />,
      title: 'Claims Automation',
      description: 'Faster FNOL, guided triage, and evidence collection to reduce cycle time and leakage.',
      features: [
        'Intake bots and severity prediction',
        'Forensics pack and panel coordination',
        'Recovery tracking and reporting',
        'Automated claims processing'
      ]
    },
    {
      icon: <FaCloud />,
      title: 'Continuous Monitoring',
      description: 'Portfolio exposure views, alerts on material changes, and remediation playbooks for insureds.',
      features: [
        'Book-of-business risk heatmaps',
        'Automated recommendations to insureds',
        'Broker/carrier portals and APIs',
        '24/7 threat intelligence updates'
      ]
    },
    {
      icon: <FaExchangeAlt />,
      title: 'Core & PAS Integration',
      description: 'Integrate with policy admin, rating engines, and CRM for seamless straight-through flows.',
      features: [
        'API-first architecture',
        'Real-time data synchronization',
        'Custom workflow automation',
        'Legacy system compatibility'
      ]
    },
    {
      icon: <FaBolt />,
      title: 'Data & Signals',
      description: 'Plug in external threat intel, dark web, credential leaks, and firmographics to enrich decisions.',
      features: [
        'Multi-source threat intelligence',
        'Dark web monitoring',
        'Credential breach detection',
        'Industry-specific risk indicators'
      ]
    }
  ];

  const lifecycle = [
    {
      number: '1',
      title: 'Risk Assessment',
      description: 'Comprehensive cyber risk evaluation using AI-powered analytics and external data sources'
    },
    {
      number: '2',
      title: 'Quote Generation',
      description: 'Automated underwriting with dynamic pricing based on real-time risk scores'
    },
    {
      number: '3',
      title: 'Policy Binding',
      description: 'Instant policy issuance with digital signatures and automated documentation'
    },
    {
      number: '4',
      title: 'Continuous Monitoring',
      description: 'Ongoing risk monitoring with alerts for material changes in insured\'s security posture'
    },
    {
      number: '5',
      title: 'Claims Processing',
      description: 'Streamlined claims workflow with automated triage and evidence collection'
    }
  ];

  const benefits = [
    {
      icon: <FaRocket />,
      title: 'Faster Time to Market',
      description: 'Launch new cyber insurance products in weeks, not months, with our pre-built platform'
    },
    {
      icon: <FaChartLine />,
      title: 'Improved Loss Ratios',
      description: 'Reduce losses by 30-40% through better risk selection and continuous monitoring'
    },
    {
      icon: <FaCogs />,
      title: 'Operational Efficiency',
      description: 'Automate 80% of underwriting tasks and reduce manual processing time'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Enhanced Risk Insights',
      description: 'Access to comprehensive cyber risk data and predictive analytics'
    }
  ];

  return (
    <PageContainer>
      <Helmet>
        <title>Insurtech Solutions | TransAsia</title>
        <meta name="description" content="Comprehensive insurtech capabilities for cyber insurance carriers, MGAs, and brokers" />
      </Helmet>

      <HeroSection>
        <HeroContent>
          <Pill>Insurtech Solutions</Pill>
          <Title>Cyber Insurance Technology Platform</Title>
          <Subtitle>
            Purpose-built capabilities for carriers, MGAs, and brokers to price cyber risk accurately,
            grow profitably, and reduce loss ratios — from digital intake to automated claims.
          </Subtitle>
        </HeroContent>
      </HeroSection>

      {/* Section 1: Solutions Overview */}
      <Section>
        <SectionTitle>Comprehensive Insurtech Solutions</SectionTitle>
        <SectionSubtitle>
          End-to-end platform for modern cyber insurance operations
        </SectionSubtitle>
        <Grid>
          {solutions.map((solution, index) => (
            <Card
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <CardIcon>{solution.icon}</CardIcon>
              <CardTitle>{solution.title}</CardTitle>
              <CardText>{solution.description}</CardText>
              <List>
                {solution.features.map((feature, idx) => (
                  <ListItem key={idx}>
                    <FaCheckCircle />
                    <span>{feature}</span>
                  </ListItem>
                ))}
              </List>
            </Card>
          ))}
        </Grid>
      </Section>

      {/* Section 2: Insurance Lifecycle */}
      <LifecycleDiagram
        title="Cyber Insurance Lifecycle"
        steps={lifecycle}
        type="horizontal"
        background="var(--bg-secondary)"
      />

      {/* Section 3: Statistics */}
      <Section>
        <StatsSection>
          <StatCard>
            <StatNumber>90%</StatNumber>
            <StatLabel>Faster Underwriting</StatLabel>
          </StatCard>
          <StatCard>
            <StatNumber>40%</StatNumber>
            <StatLabel>Loss Ratio Reduction</StatLabel>
          </StatCard>
          <StatCard>
            <StatNumber>100+</StatNumber>
            <StatLabel>Insurance Carriers</StatLabel>
          </StatCard>
          <StatCard>
            <StatNumber>$5B+</StatNumber>
            <StatLabel>Premium Under Management</StatLabel>
          </StatCard>
        </StatsSection>
      </Section>

      {/* Section 4: Benefits */}
      <Section>
        <SectionTitle>Key Benefits</SectionTitle>
        <SectionSubtitle>
          Transform your cyber insurance operations with our platform
        </SectionSubtitle>
        <BenefitsGrid>
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <BenefitIcon>{benefit.icon}</BenefitIcon>
              <BenefitTitle>{benefit.title}</BenefitTitle>
              <BenefitDescription>{benefit.description}</BenefitDescription>
            </BenefitCard>
          ))}
        </BenefitsGrid>
      </Section>

      {/* Section 5: CTA */}
      <CTASection>
        <CTAContent>
          <CTATitle>Ready to Transform Your Cyber Insurance Business?</CTATitle>
          <CTADescription>
            Schedule a demo to see how our insurtech platform can help you grow profitably
            and reduce loss ratios.
          </CTADescription>
          <CTAButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Request a Demo
          </CTAButton>
        </CTAContent>
      </CTASection>
    </PageContainer>
  );
};

export default Insurtech;