import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaLock, FaEye, FaCloud, FaNetworkWired, FaChartLine, FaBrain, FaUserShield, FaCheckCircle, FaRocket } from 'react-icons/fa';
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

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
`;

const ProductCard = styled(motion.div)`
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

const ProductIcon = styled.div`
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

const ProductTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 16px;
`;

const ProductDescription = styled.p`
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 20px;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
`;

const FeatureItem = styled.li`
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

const ComparisonTable = styled.div`
  background: white;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 4px 20px rgba(30, 64, 175, 0.1);
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    padding: 16px;
    text-align: left;
    border-bottom: 1px solid var(--border-color);
  }

  th {
    background: var(--bg-tertiary);
    color: var(--text-primary);
    font-weight: 600;
  }

  tr:last-child td {
    border-bottom: none;
  }
`;

const CyberSecurityProducts = () => {
  const products = [
    {
      icon: <FaShieldAlt />,
      title: 'Advanced Threat Protection',
      description: 'Real-time threat detection and prevention using AI-powered analytics and machine learning algorithms.',
      features: [
        'Zero-day threat detection',
        'Behavioral analysis',
        'Automated response',
        'Threat intelligence integration'
      ]
    },
    {
      icon: <FaEye />,
      title: 'Security Monitoring & SIEM',
      description: 'Comprehensive security information and event management with 24/7 monitoring and instant alerts.',
      features: [
        'Real-time log analysis',
        'Compliance reporting',
        'Incident correlation',
        'Custom dashboards'
      ]
    },
    {
      icon: <FaLock />,
      title: 'Data Encryption Solutions',
      description: 'Military-grade encryption for data at rest and in transit, ensuring complete data confidentiality.',
      features: [
        'AES-256 encryption',
        'Key management',
        'Secure file transfer',
        'Database encryption'
      ]
    },
    {
      icon: <FaCloud />,
      title: 'Cloud Security Platform',
      description: 'Comprehensive cloud security posture management across multi-cloud and hybrid environments.',
      features: [
        'Cloud workload protection',
        'Configuration management',
        'Access control',
        'Compliance automation'
      ]
    },
    {
      icon: <FaNetworkWired />,
      title: 'Network Security',
      description: 'Next-generation firewall and intrusion prevention systems for complete network protection.',
      features: [
        'Deep packet inspection',
        'VPN management',
        'DDoS protection',
        'Network segmentation'
      ]
    },
    {
      icon: <FaBrain />,
      title: 'AI-Powered Security Analytics',
      description: 'Machine learning algorithms that predict and prevent security incidents before they occur.',
      features: [
        'Predictive analytics',
        'Anomaly detection',
        'Risk scoring',
        'Automated remediation'
      ]
    }
  ];

  const lifecycleSteps = [
    {
      number: '1',
      title: 'Assessment',
      description: 'Comprehensive security audit and vulnerability assessment of your infrastructure'
    },
    {
      number: '2',
      title: 'Planning',
      description: 'Strategic security roadmap development tailored to your business needs'
    },
    {
      number: '3',
      title: 'Implementation',
      description: 'Deployment of security solutions with minimal disruption to operations'
    },
    {
      number: '4',
      title: 'Monitoring',
      description: '24/7 continuous monitoring and threat detection across all systems'
    },
    {
      number: '5',
      title: 'Optimization',
      description: 'Regular updates and improvements based on emerging threats and technologies'
    }
  ];

  const deploymentSteps = [
    {
      icon: <FaRocket />,
      title: 'Discovery',
      description: 'Asset identification and risk analysis'
    },
    {
      icon: <FaChartLine />,
      title: 'Design',
      description: 'Architecture planning and solution design'
    },
    {
      icon: <FaUserShield />,
      title: 'Deploy',
      description: 'Phased rollout with testing'
    },
    {
      icon: <FaCheckCircle />,
      title: 'Validate',
      description: 'Security verification and compliance check'
    }
  ];

  return (
    <PageContainer>
      <HeroSection>
        <HeroContent>
          <Pill>Cybersecurity Products</Pill>
          <Title>Enterprise-Grade Security Solutions</Title>
          <Subtitle>
            Protect your digital assets with our comprehensive suite of cybersecurity products 
            designed for modern enterprises facing evolving threats.
          </Subtitle>
        </HeroContent>
      </HeroSection>

      {/* Section 1: Product Overview */}
      <Section>
        <SectionTitle>Our Security Product Portfolio</SectionTitle>
        <SectionSubtitle>
          Industry-leading security solutions powered by artificial intelligence and decades of cybersecurity expertise
        </SectionSubtitle>
        <ProductsGrid>
          {products.map((product, index) => (
            <ProductCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProductIcon>{product.icon}</ProductIcon>
              <ProductTitle>{product.title}</ProductTitle>
              <ProductDescription>{product.description}</ProductDescription>
              <FeatureList>
                {product.features.map((feature, idx) => (
                  <FeatureItem key={idx}>
                    <FaCheckCircle />
                    <span>{feature}</span>
                  </FeatureItem>
                ))}
              </FeatureList>
            </ProductCard>
          ))}
        </ProductsGrid>
      </Section>

      {/* Section 2: Implementation Lifecycle */}
      <LifecycleDiagram
        title="Security Implementation Lifecycle"
        steps={lifecycleSteps}
        type="horizontal"
        background="var(--bg-secondary)"
      />

      {/* Section 3: Statistics */}
      <Section>
        <StatsSection>
          <StatCard>
            <StatNumber>99.9%</StatNumber>
            <StatLabel>Threat Detection Rate</StatLabel>
          </StatCard>
          <StatCard>
            <StatNumber>&lt;5min</StatNumber>
            <StatLabel>Average Response Time</StatLabel>
          </StatCard>
          <StatCard>
            <StatNumber>500+</StatNumber>
            <StatLabel>Enterprise Clients</StatLabel>
          </StatCard>
          <StatCard>
            <StatNumber>24/7</StatNumber>
            <StatLabel>Security Operations Center</StatLabel>
          </StatCard>
        </StatsSection>
      </Section>

      {/* Section 4: Deployment Process */}
      <LifecycleDiagram
        title="Rapid Deployment Process"
        steps={deploymentSteps}
        type="circular"
        background="var(--bg-tertiary)"
      />

      {/* Section 5: Product Comparison */}
      <Section>
        <SectionTitle>Product Comparison Matrix</SectionTitle>
        <SectionSubtitle>
          Choose the right security solution for your organization's needs
        </SectionSubtitle>
        <ComparisonTable>
          <Table>
            <thead>
              <tr>
                <th>Feature</th>
                <th>Essential</th>
                <th>Professional</th>
                <th>Enterprise</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Threat Detection</td>
                <td>✓ Basic</td>
                <td>✓ Advanced</td>
                <td>✓ AI-Powered</td>
              </tr>
              <tr>
                <td>24/7 Monitoring</td>
                <td>-</td>
                <td>✓</td>
                <td>✓</td>
              </tr>
              <tr>
                <td>Incident Response</td>
                <td>Email Support</td>
                <td>✓ 4-hour SLA</td>
                <td>✓ 1-hour SLA</td>
              </tr>
              <tr>
                <td>Compliance Reporting</td>
                <td>Basic</td>
                <td>✓ Advanced</td>
                <td>✓ Custom</td>
              </tr>
              <tr>
                <td>Cloud Security</td>
                <td>Single Cloud</td>
                <td>✓ Multi-Cloud</td>
                <td>✓ Hybrid + Multi-Cloud</td>
              </tr>
              <tr>
                <td>API Access</td>
                <td>-</td>
                <td>✓ Limited</td>
                <td>✓ Unlimited</td>
              </tr>
              <tr>
                <td>Dedicated Support</td>
                <td>-</td>
                <td>-</td>
                <td>✓ CSM Assigned</td>
              </tr>
            </tbody>
          </Table>
        </ComparisonTable>
      </Section>

      {/* Section 6: CTA */}
      <CTASection>
        <CTAContent>
          <CTATitle>Ready to Secure Your Enterprise?</CTATitle>
          <CTADescription>
            Get started with a free security assessment and discover how our products 
            can protect your organization from cyber threats.
          </CTADescription>
          <CTAButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule a Demo
          </CTAButton>
        </CTAContent>
      </CTASection>
    </PageContainer>
  );
};

export default CyberSecurityProducts;
