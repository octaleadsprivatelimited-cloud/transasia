import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaUserShield, FaSearch, FaClipboardCheck, FaHeadset, FaGraduationCap, FaCogs, FaCheckCircle, FaShieldAlt, FaLaptopCode, FaChartBar } from 'react-icons/fa';
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

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled(motion.div)`
  background: white;
  padding: 50px 40px;
  border-radius: 24px;
  box-shadow: 0 4px 20px rgba(30, 64, 175, 0.1);
  transition: all 0.3s ease;
  border: 2px solid transparent;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: var(--gradient-primary);
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 40px rgba(30, 64, 175, 0.2);
    border-color: var(--primary-color);
  }
`;

const ServiceIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 20px;
  background: var(--gradient-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  color: white;
  margin-bottom: 24px;
`;

const ServiceTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 16px;
`;

const ServiceDescription = styled.p`
  font-size: 1.05rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 24px;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 14px;
  color: var(--text-secondary);
  font-size: 1rem;

  svg {
    color: var(--primary-color);
    flex-shrink: 0;
    font-size: 1.2rem;
  }
`;

const ProcessSection = styled.div`
  background: white;
  padding: 60px 40px;
  border-radius: 24px;
  box-shadow: 0 4px 20px rgba(30, 64, 175, 0.1);
  margin: 60px 0;
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 40px;
`;

const BenefitCard = styled(motion.div)`
  text-align: center;
  padding: 30px;
  background: var(--bg-tertiary);
  border-radius: 16px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    background: white;
    box-shadow: 0 8px 24px rgba(30, 64, 175, 0.15);
  }
`;

const BenefitIcon = styled.div`
  font-size: 3rem;
  color: var(--primary-color);
  margin-bottom: 16px;
`;

const BenefitTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 12px;
`;

const BenefitDescription = styled.p`
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.6;
`;

const CTASection = styled.section`
  background: var(--gradient-secondary);
  padding: 100px 20px;
  text-align: center;
  margin-top: 80px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
  }
`;

const CTAContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const CTATitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 20px;
`;

const CTADescription = styled.p`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 40px;
`;

const CTAButton = styled(motion.button)`
  background: white;
  color: var(--primary-color);
  border: none;
  padding: 18px 48px;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);
  }
`;

const CyberSecurityServices = () => {
  const services = [
    {
      icon: <FaUserShield />,
      title: 'Managed Security Services',
      description: 'Comprehensive 24/7 security monitoring and management by our expert SOC team, ensuring your infrastructure is always protected.',
      features: [
        '24/7/365 Security Operations Center',
        'Real-time threat monitoring and response',
        'Incident management and forensics',
        'Monthly security reports and analytics',
        'Compliance management support'
      ]
    },
    {
      icon: <FaSearch />,
      title: 'Penetration Testing',
      description: 'Ethical hacking services to identify vulnerabilities before malicious actors do, with detailed remediation guidance.',
      features: [
        'Network and application penetration testing',
        'Social engineering assessments',
        'Wireless security testing',
        'Physical security evaluation',
        'Detailed vulnerability reports'
      ]
    },
    {
      icon: <FaClipboardCheck />,
      title: 'Security Audits & Compliance',
      description: 'Comprehensive security assessments and compliance audits for ISO 27001, SOC 2, GDPR, HIPAA, and more.',
      features: [
        'Gap analysis and risk assessment',
        'Compliance framework mapping',
        'Policy and procedure development',
        'Audit preparation and support',
        'Continuous compliance monitoring'
      ]
    },
    {
      icon: <FaHeadset />,
      title: 'Incident Response',
      description: 'Rapid response team available 24/7 to contain, investigate, and remediate security incidents.',
      features: [
        'Emergency incident response',
        'Digital forensics investigation',
        'Malware analysis and removal',
        'Data breach notification support',
        'Post-incident review and recommendations'
      ]
    },
    {
      icon: <FaGraduationCap />,
      title: 'Security Awareness Training',
      description: 'Comprehensive training programs to build a security-conscious culture within your organization.',
      features: [
        'Customized training modules',
        'Phishing simulation campaigns',
        'Security best practices workshops',
        'Executive security briefings',
        'Certification preparation courses'
      ]
    },
    {
      icon: <FaCogs />,
      title: 'Security Architecture Design',
      description: 'Design and implementation of robust security architectures tailored to your business requirements.',
      features: [
        'Zero Trust architecture design',
        'Cloud security architecture',
        'Network segmentation planning',
        'Identity and access management',
        'Security tool integration'
      ]
    }
  ];

  const serviceLifecycle = [
    {
      number: '1',
      title: 'Discovery & Assessment',
      description: 'Comprehensive analysis of your current security posture and identification of gaps'
    },
    {
      number: '2',
      title: 'Strategy Development',
      description: 'Custom security strategy aligned with your business objectives and risk tolerance'
    },
    {
      number: '3',
      title: 'Implementation',
      description: 'Deployment of security controls and services with minimal business disruption'
    },
    {
      number: '4',
      title: 'Continuous Monitoring',
      description: '24/7 monitoring and proactive threat hunting to detect and respond to incidents'
    },
    {
      number: '5',
      title: 'Review & Optimize',
      description: 'Regular reviews and optimization based on threat landscape and business changes'
    }
  ];

  const responseProcess = [
    {
      icon: <FaShieldAlt />,
      title: 'Detect',
      description: 'Identify security incidents through monitoring'
    },
    {
      icon: <FaSearch />,
      title: 'Analyze',
      description: 'Investigate and assess the scope of impact'
    },
    {
      icon: <FaLaptopCode />,
      title: 'Contain',
      description: 'Isolate affected systems and prevent spread'
    },
    {
      icon: <FaChartBar />,
      title: 'Recover',
      description: 'Restore operations and implement fixes'
    }
  ];

  const benefits = [
    {
      icon: <FaShieldAlt />,
      title: 'Proactive Protection',
      description: 'Stay ahead of threats with continuous monitoring and threat intelligence'
    },
    {
      icon: <FaCheckCircle />,
      title: 'Compliance Assurance',
      description: 'Meet regulatory requirements with expert guidance and documentation'
    },
    {
      icon: <FaUserShield />,
      title: 'Expert Team',
      description: 'Access to certified security professionals with decades of experience'
    },
    {
      icon: <FaCogs />,
      title: 'Cost Efficiency',
      description: 'Reduce security costs compared to building an in-house team'
    }
  ];

  return (
    <PageContainer>
      <HeroSection>
        <HeroContent>
          <Pill>Cybersecurity Services</Pill>
          <Title>Professional Security Services</Title>
          <Subtitle>
            Expert cybersecurity services delivered by certified professionals to protect 
            your organization from evolving cyber threats and ensure compliance.
          </Subtitle>
        </HeroContent>
      </HeroSection>

      {/* Section 1: Services Overview */}
      <Section>
        <SectionTitle>Our Service Offerings</SectionTitle>
        <SectionSubtitle>
          Comprehensive cybersecurity services tailored to your organization's unique needs and risk profile
        </SectionSubtitle>
        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ServiceIcon>{service.icon}</ServiceIcon>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
              <FeatureList>
                {service.features.map((feature, idx) => (
                  <FeatureItem key={idx}>
                    <FaCheckCircle />
                    <span>{feature}</span>
                  </FeatureItem>
                ))}
              </FeatureList>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </Section>

      {/* Section 2: Service Delivery Lifecycle */}
      <LifecycleDiagram
        title="Service Delivery Lifecycle"
        steps={serviceLifecycle}
        type="horizontal"
        background="var(--bg-secondary)"
      />

      {/* Section 3: Incident Response Process */}
      <LifecycleDiagram
        title="Incident Response Process"
        steps={responseProcess}
        type="circular"
        background="var(--bg-tertiary)"
      />

      {/* Section 4: Benefits */}
      <Section>
        <SectionTitle>Why Choose Our Services</SectionTitle>
        <SectionSubtitle>
          Partner with us for comprehensive security services backed by expertise and proven methodologies
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

      {/* Section 5: Service Process */}
      <Section>
        <ProcessSection>
          <SectionTitle>Our Engagement Process</SectionTitle>
          <SectionSubtitle>
            A structured approach to delivering exceptional security services
          </SectionSubtitle>
          <FeatureList style={{ maxWidth: '800px', margin: '0 auto' }}>
            <FeatureItem>
              <FaCheckCircle />
              <span><strong>Initial Consultation:</strong> Free 30-minute security assessment call</span>
            </FeatureItem>
            <FeatureItem>
              <FaCheckCircle />
              <span><strong>Proposal & Scoping:</strong> Detailed service proposal with clear deliverables</span>
            </FeatureItem>
            <FeatureItem>
              <FaCheckCircle />
              <span><strong>Onboarding:</strong> Smooth transition with dedicated account manager</span>
            </FeatureItem>
            <FeatureItem>
              <FaCheckCircle />
              <span><strong>Service Delivery:</strong> Professional execution with regular updates</span>
            </FeatureItem>
            <FeatureItem>
              <FaCheckCircle />
              <span><strong>Continuous Improvement:</strong> Regular reviews and service optimization</span>
            </FeatureItem>
          </FeatureList>
        </ProcessSection>
      </Section>

      {/* Section 6: CTA */}
      <CTASection>
        <CTAContent>
          <CTATitle>Protect Your Business Today</CTATitle>
          <CTADescription>
            Schedule a free consultation with our security experts to discuss your 
            organization's security needs and how we can help.
          </CTADescription>
          <CTAButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Now
          </CTAButton>
        </CTAContent>
      </CTASection>
    </PageContainer>
  );
};

export default CyberSecurityServices;
