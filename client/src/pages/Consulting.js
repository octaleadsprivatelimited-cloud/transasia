import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  FaUsersCog, FaClipboardCheck, FaTools, FaProjectDiagram, FaUserShield,
  FaCloud, FaDatabase, FaBug, FaUserTie, FaCheckCircle,
  FaRocket, FaChartLine, FaLightbulb, FaCogs
} from 'react-icons/fa';
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

const ApproachGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
`;

const ApproachCard = styled(motion.div)`
  background: white;
  padding: 40px 30px;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(30, 64, 175, 0.1);
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(30, 64, 175, 0.2);
  }
`;

const ApproachIcon = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: var(--gradient-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: white;
  margin: 0 auto 20px;
`;

const ApproachTitle = styled.h4`
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 12px;
`;

const ApproachDescription = styled.p`
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

const Consulting = () => {
  const services = [
    {
      icon: <FaUsersCog />,
      title: 'Strategy & Target Operating Model',
      description: 'Current state assessments, capability roadmaps, org design, and executive reporting.',
      features: [
        'Maturity baselines mapped to frameworks (NIST/ISO)',
        'Target operating model and staffing plans',
        'Board and ELT-ready KPIs/KRIs',
        'Strategic security roadmap development'
      ]
    },
    {
      icon: <FaClipboardCheck />,
      title: 'GRC & Compliance',
      description: 'Policy suites, risk registers, control catalogs, audits, and certification support.',
      features: [
        'ISO 27001, SOC 2, HIPAA, PCI, GDPR readiness',
        'Risk, issue, and exception management',
        'Control testing and continuous assurance',
        'Compliance automation and reporting'
      ]
    },
    {
      icon: <FaUserShield />,
      title: 'Zero Trust & Defense',
      description: 'Identity, network, and data-centric architectures with pragmatic rollout plans.',
      features: [
        'Segmentation, PAM, EDR/XDR strategy',
        'Threat modeling and attack surface reduction',
        'Use-case driven detections and response',
        'Identity and access management'
      ]
    },
    {
      icon: <FaTools />,
      title: 'Incident Response & Resilience',
      description: 'IR plans, tabletop exercises, purple teaming, and business continuity programs.',
      features: [
        'Runbooks and communications playbooks',
        'Ransomware readiness and backups validation',
        'BCP/DR strategy and testing',
        '24/7 incident response support'
      ]
    },
    {
      icon: <FaCloud />,
      title: 'Cloud & SaaS Security',
      description: 'Landing zones, IaC guardrails, CSPM, CIEM, and multi-cloud policies.',
      features: [
        'Cloud security architecture design',
        'Multi-cloud security strategy',
        'Container and Kubernetes security',
        'Cloud compliance and governance'
      ]
    },
    {
      icon: <FaDatabase />,
      title: 'Data Protection & Privacy',
      description: 'DLP, encryption, retention, and privacy-by-design with DPIAs and ROPAs.',
      features: [
        'Data classification and protection',
        'Privacy impact assessments',
        'GDPR and privacy compliance',
        'Data lifecycle management'
      ]
    }
  ];

  const consultingProcess = [
    {
      number: '1',
      title: 'Discovery & Assessment',
      description: 'Comprehensive analysis of current security posture, gaps, and business requirements'
    },
    {
      number: '2',
      title: 'Strategy Development',
      description: 'Design target state architecture and create detailed roadmap with priorities'
    },
    {
      number: '3',
      title: 'Implementation Planning',
      description: 'Develop detailed implementation plans with resource allocation and timelines'
    },
    {
      number: '4',
      title: 'Execution Support',
      description: 'Guide implementation with hands-on support and change management'
    },
    {
      number: '5',
      title: 'Optimization & Handoff',
      description: 'Measure outcomes, optimize processes, and transfer knowledge to internal teams'
    }
  ];

  const approach = [
    {
      icon: <FaLightbulb />,
      title: 'Business-Aligned',
      description: 'Security strategies that enable business objectives and drive value'
    },
    {
      icon: <FaChartLine />,
      title: 'Outcome-Focused',
      description: 'Measurable results with clear KPIs and success metrics'
    },
    {
      icon: <FaCogs />,
      title: 'Pragmatic Approach',
      description: 'Practical solutions that balance security, usability, and cost'
    },
    {
      icon: <FaRocket />,
      title: 'Accelerated Delivery',
      description: 'Rapid implementation with proven methodologies and best practices'
    }
  ];

  return (
    <PageContainer>
      <Helmet>
        <title>Consulting Services | TransAsia</title>
        <meta name="description" content="Expert cybersecurity consulting across strategy, GRC, privacy, cloud, and resilience" />
      </Helmet>

      <HeroSection>
        <HeroContent>
          <Pill>Consulting Services</Pill>
          <Title>Cybersecurity Advisory & Transformation</Title>
          <Subtitle>
            Outcome-driven cybersecurity consulting that aligns security with business objectives.
            We design target operating models, modernize controls, and accelerate compliance while
            improving risk posture and resilience.
          </Subtitle>
        </HeroContent>
      </HeroSection>

      {/* Section 1: Core Services */}
      <Section>
        <SectionTitle>Comprehensive Consulting Services</SectionTitle>
        <SectionSubtitle>
          Expert guidance across all aspects of cybersecurity strategy and implementation
        </SectionSubtitle>
        <Grid>
          {services.map((service, index) => (
            <Card
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <CardIcon>{service.icon}</CardIcon>
              <CardTitle>{service.title}</CardTitle>
              <CardText>{service.description}</CardText>
              <List>
                {service.features.map((feature, idx) => (
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

      {/* Section 2: Consulting Process */}
      <LifecycleDiagram
        title="Our Consulting Process"
        steps={consultingProcess}
        type="horizontal"
        background="var(--bg-secondary)"
      />

      {/* Section 3: Statistics */}
      <Section>
        <StatsSection>
          <StatCard>
            <StatNumber>200+</StatNumber>
            <StatLabel>Consulting Engagements</StatLabel>
          </StatCard>
          <StatCard>
            <StatNumber>95%</StatNumber>
            <StatLabel>Client Satisfaction</StatLabel>
          </StatCard>
          <StatCard>
            <StatNumber>50+</StatNumber>
            <StatLabel>Certified Consultants</StatLabel>
          </StatCard>
          <StatCard>
            <StatNumber>15+</StatNumber>
            <StatLabel>Years Experience</StatLabel>
          </StatCard>
        </StatsSection>
      </Section>

      {/* Section 4: Our Approach */}
      <Section>
        <SectionTitle>Our Consulting Approach</SectionTitle>
        <SectionSubtitle>
          Proven methodologies that deliver measurable business value
        </SectionSubtitle>
        <ApproachGrid>
          {approach.map((item, index) => (
            <ApproachCard
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ApproachIcon>{item.icon}</ApproachIcon>
              <ApproachTitle>{item.title}</ApproachTitle>
              <ApproachDescription>{item.description}</ApproachDescription>
            </ApproachCard>
          ))}
        </ApproachGrid>
      </Section>

      {/* Section 5: Additional Services */}
      <Section>
        <SectionTitle>Specialized Consulting Services</SectionTitle>
        <SectionSubtitle>
          Deep expertise in specialized domains
        </SectionSubtitle>
        <Grid>
          <Card
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <CardIcon><FaProjectDiagram /></CardIcon>
            <CardTitle>Secure SDLC</CardTitle>
            <CardText>
              Threat modeling, SAST/DAST, SBOM, and DevSecOps pipelines with policy gates.
            </CardText>
          </Card>
          <Card
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <CardIcon><FaBug /></CardIcon>
            <CardTitle>Offensive Security</CardTitle>
            <CardText>
              Red teaming, penetration testing, and adversary emulation aligned to real threats.
            </CardText>
          </Card>
          <Card
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <CardIcon><FaUserTie /></CardIcon>
            <CardTitle>vCISO & Advisory</CardTitle>
            <CardText>
              Fractional leadership, program governance, and stakeholder communications.
            </CardText>
          </Card>
        </Grid>
      </Section>

      {/* Section 6: CTA */}
      <CTASection>
        <CTAContent>
          <CTATitle>Transform Your Security Program</CTATitle>
          <CTADescription>
            Partner with our expert consultants to build a world-class security program
            aligned with your business objectives.
          </CTADescription>
          <CTAButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule a Consultation
          </CTAButton>
        </CTAContent>
      </CTASection>
    </PageContainer>
  );
};

export default Consulting;