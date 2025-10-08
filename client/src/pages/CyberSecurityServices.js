import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaUserShield, FaChevronDown, FaRocket, FaLaptopCode, FaServer, FaRobot, FaLock, FaDatabase, FaSearch, FaGraduationCap
} from 'react-icons/fa';

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const PageContainer = styled.div`
  min-height: 100vh;
  padding-top: 80px;
  background: #ffffff;
  overflow-x: hidden;
`;

const HeroSection = styled.section`
  position: relative;
  min-height: 70vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #0a1128 0%, #1e3a8a 50%, #1e40af 100%);
  overflow: hidden;
  padding: 120px 40px 80px;

  &::before {
    content: '';
    position: absolute;
    width: 200%;
    height: 200%;
    top: -50%;
    left: -50%;
    background: 
      radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
      radial-gradient(circle at 80% 50%, rgba(96, 165, 250, 0.1) 0%, transparent 50%);
    animation: ${rotate} 30s linear infinite;
  }
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 4rem;
  font-weight: 700;
  color: white;
  margin-bottom: 24px;
  line-height: 1.2;
  letter-spacing: -1px;

  span {
    display: block;
    font-weight: 300;
    font-size: 3.5rem;
    background: linear-gradient(135deg, #60a5fa 0%, #93c5fd 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-top: 8px;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
    
    span {
      font-size: 2.2rem;
    }
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.9);
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.7;
`;

const ServicesSection = styled.section`
  padding: 120px 40px;
  background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
`;

const SectionTitle = styled(motion.h2)`
  font-size: 3rem;
  font-weight: 800;
  text-align: center;
  color: var(--text-primary);
  margin-bottom: 20px;
  letter-spacing: -1px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SectionSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: var(--text-secondary);
  text-align: center;
  max-width: 700px;
  margin: 0 auto 80px;
  line-height: 1.7;
`;

const ServicesContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const ServiceCard = styled(motion.div)`
  background: white;
  border-radius: 24px;
  overflow: hidden;
  border: 2px solid ${props => props.$isOpen ? 'var(--primary-color)' : 'rgba(0, 0, 0, 0.05)'};
  box-shadow: ${props => props.$isOpen ? '0 20px 60px rgba(30, 64, 175, 0.15)' : '0 4px 20px rgba(0, 0, 0, 0.06)'};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    box-shadow: 0 12px 40px rgba(30, 64, 175, 0.12);
  }
`;

const ServiceHeader = styled.div`
  padding: 0;
  cursor: pointer;
  display: grid;
  grid-template-columns: ${props => props.$isOpen ? '1fr' : '400px 1fr'};
  align-items: center;
  transition: all 0.4s ease;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceImage = styled.div`
  width: 100%;
  height: ${props => props.$isOpen ? '300px' : '200px'};
  background-image: url(${props => props.$image});
  background-size: cover;
  background-position: center;
  position: relative;
  transition: all 0.4s ease;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: ${props => props.$isOpen 
      ? 'linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.7) 100%)' 
      : 'linear-gradient(135deg, rgba(30, 64, 175, 0.8) 0%, rgba(59, 130, 246, 0.6) 100%)'};
  }

  @media (max-width: 968px) {
    height: ${props => props.$isOpen ? '250px' : '180px'};
  }
`;

const ServiceHeaderContent = styled.div`
  padding: 32px 40px;
  display: flex;
  align-items: center;
  gap: 24px;
  position: ${props => props.$isOpen ? 'absolute' : 'relative'};
  bottom: ${props => props.$isOpen ? '0' : 'auto'};
  left: ${props => props.$isOpen ? '0' : 'auto'};
  right: ${props => props.$isOpen ? '0' : 'auto'};
  z-index: 1;

  @media (max-width: 968px) {
    padding: 24px 20px;
    gap: 16px;
    position: ${props => props.$isOpen ? 'absolute' : 'relative'};
  }
`;

const ServiceIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 16px;
  background: ${props => props.$isOpen ? 'rgba(255, 255, 255, 0.2)' : props.$gradient};
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  color: white;
  flex-shrink: 0;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    font-size: 1.5rem;
  }
`;

const ServiceTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${props => props.$isOpen ? 'white' : 'var(--text-primary)'};
  flex: 1;
  transition: color 0.3s ease;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const ServiceChevron = styled(motion.div)`
  font-size: 1.5rem;
  color: ${props => props.$isOpen ? 'white' : 'var(--primary-color)'};
  transition: color 0.3s ease;
`;

const ServiceContent = styled(motion.div)`
  padding: 40px;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 24px 20px;
  }
`;

const ServiceDescription = styled.p`
  font-size: 1.15rem;
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 30px;
`;

const SubSection = styled.div`
  margin: 40px 0;
`;

const SubSectionTitle = styled.h4`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 16px;
`;

const SubSectionDescription = styled.p`
  font-size: 1.05rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 24px;
`;

const PointsList = styled.div`
  display: grid;
  gap: 16px;
  margin-bottom: 30px;
`;

const PointItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px;
  background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);
  border-radius: 16px;
  border-left: 4px solid var(--primary-color);
`;

const PointNumber = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: 700;
  flex-shrink: 0;
`;

const PointText = styled.p`
  font-size: 1.05rem;
  color: var(--text-primary);
  line-height: 1.7;
  flex: 1;
  font-weight: 500;
`;

const CTAButton = styled(motion.button)`
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  color: white;
  border: none;
  padding: 16px 40px;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  box-shadow: 0 8px 24px rgba(59, 130, 246, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 32px rgba(59, 130, 246, 0.4);
  }
`;

const CyberSecurityServices = () => {
  const [openService, setOpenService] = useState(null);

  const services = [
    {
      id: 'red-team',
      icon: <FaUserShield />,
      title: 'Red Team Assessment',
      gradient: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200',
      description: 'Red teaming is a security assessment methodology where a team acts like an adversary, attempting to bypass your defenses and achieve specific objectives. Unlike penetration testing that focuses on vulnerabilities, red teaming mimics the tactics, techniques, and procedures (TTPs) of real-world attackers. This approach provides a more holistic view of your security posture, identifying not just exploitable vulnerabilities but also weaknesses in detection, response, and recovery capabilities.',
      mitreSection: {
        title: 'Why Use MITRE ATT&CK for Red Teaming?',
        description: 'The MITRE ATT&CK framework is a comprehensive knowledge base of adversary TTPs. By leveraging this framework, red teaming exercises can be:',
        points: [
          'More Targeted',
          'Data-Driven',
          'Measurable'
        ]
      },
      methodology: {
        title: 'Red Teaming Methodology with MITRE ATT&CK Framework',
        description: 'A red team assessment using MITRE ATT&CK typically follows these stages:',
        stages: [
          'Planning and Scoping',
          'Reconnaissance and Initial Compromise',
          'Lateral Movement',
          'Installation of Tools and C2 Communication',
          'Actions on Objectives',
          'Reporting and Debriefing'
        ]
      },
      benefits: [
        'Get a Attack View',
        'Improved Security Posture',
        'Enhanced Threat Detection',
        'Proactive Risk Management'
      ]
    },
    {
      id: 'app-security',
      icon: <FaLaptopCode />,
      title: 'Application Security Assessment',
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200',
      description: 'Application Security Assessment (ASA) is a systematic process of identifying, evaluating, and documenting vulnerabilities in software applications. It plays a crucial role in protecting applications from cyberattacks and data breaches. This document outlines the ASA process using the Open Web Application Security Project (OWASP) Testing Guide methodology.',
      owaspSection: {
        title: 'OWASP 2023 Methodology',
        description: 'Phases of an OWASP-based ASA:',
        phases: [
          'Preparation',
          'Information Gathering',
          'Threat Modeling',
          'Vulnerability Scanning',
          'Manual Penetration Testing',
          'Reporting'
        ]
      },
      benefits: [
        'Structured Approach',
        'Focus on Threats',
        'Flexibility',
        'Community Resources'
      ]
    },
    {
      id: 'infrastructure',
      icon: <FaServer />,
      title: 'Infrastructure Security Assessment',
      gradient: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200',
      description: 'Infrastructure Security Assessment (ISA) is a comprehensive evaluation of an organization\'s IT infrastructure to identify vulnerabilities, security misconfigurations, and potential attack vectors. It plays a crucial role in safeguarding critical systems and data from cyber threats. This assessment draws upon methodologies from frameworks like NIST and penetration testing to provide a robust security posture.',
      nistSection: {
        title: 'Methodology',
        description: 'Following a structured approach ensures a thorough and effective ISA. Align with NIST Special Publication 800-30 (Risk Management Framework for Information Systems) to identify high-risk assets and prioritize them for testing.',
        phases: [
          'Planning and Scoping',
          'Information Gathering',
          'Vulnerability Scanning and Assessment',
          'Data Analysis and Reporting',
          'Remediation and Follow-up'
        ]
      },
      benefits: [
        'Improved Security Posture',
        'Regulatory Compliance',
        'Proactive Risk Management',
        'Enhanced Decision-making'
      ]
    },
    {
      id: 'ot-iot',
      icon: <FaRobot />,
      title: 'OT and IOT Cyber Assessments',
      gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200',
      description: 'OT and IoT cyber assessments are crucial for understanding and mitigating the risks associated with these interconnected systems.',
      definitions: [
        {
          term: 'OT (Operational Technology)',
          definition: 'Systems that control and monitor physical processes in industrial environments. Think factories, manufacturing plants, power grids, water treatment plants.'
        },
        {
          term: 'IoT (Internet of Things)',
          definition: 'A vast network of interconnected devices with embedded sensors, software, and network connectivity. Examples include smart homes, wearables, and industrial machinery.'
        }
      ],
      whyNeeded: [
        'Increased Connectivity: Both OT and IoT systems are increasingly connected to the internet, expanding their attack surface',
        'Critical Infrastructure: Disruptions to OT systems can have severe consequences, from power outages to safety hazards',
        'Data Security: IoT devices often collect sensitive data, making them targets for data breaches',
        'Compliance: Regulations like NIST and NERC CIP mandate cybersecurity assessments for critical infrastructure'
      ],
      keyAreas: [
        {
          title: 'Asset Discovery',
          points: [
            'Identify all devices and systems within the OT/IoT environment',
            'Understand their criticality and interdependencies'
          ]
        },
        {
          title: 'Vulnerability Assessment',
          points: [
            'Identify and prioritize known vulnerabilities in devices, software, and firmware',
            'Utilize vulnerability scanning tools and penetration testing techniques'
          ]
        },
        {
          title: 'Threat Modeling',
          points: [
            'Analyze potential threats and attack vectors',
            'Consider insider threats, external attacks, and physical security risks'
          ]
        },
        {
          title: 'Risk Assessment',
          points: [
            'Evaluate the likelihood and impact of potential security incidents',
            'Prioritize risks based on their severity and potential consequences'
          ]
        },
        {
          title: 'Security Controls Evaluation',
          points: [
            'Assess the effectiveness of existing security controls, such as firewalls, intrusion detection systems, and access controls'
          ]
        },
        {
          title: 'Compliance Review',
          points: [
            'Ensure compliance with relevant industry standards and regulations'
          ]
        }
      ]
    },
    {
      id: 'anti-ransomware',
      icon: <FaLock />,
      title: 'Anti Ransomware Readiness Assessment',
      gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200',
      description: 'Ransomware Attacks pose a significant threat to organizations, disrupting operations and causing financial losses. To effectively combat this threat, a standard Vulnerability Assessment and Penetration Testing (VAPT) might not be sufficient. This is where an Anti-Ransomware Readiness Assessment (ARRA) comes in.',
      arraMethodology: {
        title: 'ARRA Methodology based on MITRE ATT&CK',
        description: 'An ARRA leverages the MITRE ATT&CK framework, a comprehensive knowledge base of attacker tactics, techniques, and procedures (TTPs). This allows for a targeted assessment that simulates real-world ransomware attacks.',
        phases: [
          'Preparation',
          'Emulation',
          'Detection and Response',
          'Reporting and Remediation Suggestions'
        ]
      },
      comparison: {
        title: 'Comparison with Standard VAPT',
        description: 'While a standard VAPT identifies vulnerabilities in systems and applications, it often doesn\'t specifically target ransomware attack vectors.',
        table: [
          { feature: 'Focus', vapt: 'Broad range of vulnerabilities', arra: 'Targeted on ransomware attack methods' },
          { feature: 'Methodology', vapt: 'Vulnerability Scanning, Penetration testing', arra: 'Emulation of attacker TTPs based on MITRE ATT&CK' },
          { feature: 'Output', vapt: 'List of vulnerabilities', arra: 'Report with prioritized recommendations for mitigating ransomware risk' }
        ]
      },
      limitations: {
        title: 'Why Standard VAPT Isn\'t Enough',
        description: 'Standard VAPT has limitations when it comes to ransomware preparedness:',
        points: [
          'Scope Limited Activity',
          'Focus on Detection, not Prevention',
          'Doesn\'t Test Response Capabilities'
        ]
      },
      conclusion: 'An ARRA, by focusing on emulating real-world attacker behaviors, provides a more comprehensive assessment of an organization\'s preparedness against ransomware attack. It goes beyond identifying vulnerabilities to test the organization\'s entire security posture, including people, processes, and technology.'
    },
    {
      id: 'data-breach',
      icon: <FaDatabase />,
      title: 'Data Breach Assessment',
      gradient: 'linear-gradient(135deg, #ec4899 0%, #db2777 100%)',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1200',
      description: 'Thorough investigation and analysis of data breach incidents. We identify the scope of compromise, assess impact, collect forensic evidence, and provide actionable recommendations to prevent future breaches and strengthen your data protection measures.'
    },
    {
      id: 'cyber-forensic',
      icon: <FaSearch />,
      title: 'Cyber Forensic Assessment',
      gradient: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200',
      description: 'Expert digital forensics and incident investigation services. We collect, preserve, and analyze digital evidence to understand attack vectors, identify perpetrators, and support legal proceedings while ensuring chain of custody compliance.'
    },
    {
      id: 'training',
      icon: <FaGraduationCap />,
      title: 'Cyber Security Training',
      gradient: 'linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200',
      description: 'Comprehensive security awareness and technical training programs. We offer customized training for employees, security teams, and executives covering topics from basic security hygiene to advanced threat detection and incident response.'
    }
  ];

  const toggleService = (id) => {
    setOpenService(openService === id ? null : id);
  };

  return (
    <PageContainer>
      <Helmet>
        <title>Cybersecurity Services | TransAsia</title>
        <meta name="description" content="Professional cybersecurity assessment and training services" />
      </Helmet>

      <HeroSection>
        <HeroContent>
          <HeroTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Cybersecurity Services
            <span>Expert Assessment & Training</span>
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Comprehensive security services to assess, protect, and train your organization against evolving cyber threats
          </HeroSubtitle>
        </HeroContent>
      </HeroSection>

      <ServicesSection>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Services
        </SectionTitle>
        <SectionSubtitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Professional security assessments and training tailored to your needs
        </SectionSubtitle>

        <ServicesContainer>
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              $isOpen={openService === service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <ServiceHeader
                $isOpen={openService === service.id}
                onClick={() => toggleService(service.id)}
              >
                <ServiceImage 
                  $image={service.image} 
                  $isOpen={openService === service.id}
                />
                <ServiceHeaderContent $isOpen={openService === service.id}>
                  <ServiceIcon $gradient={service.gradient} $isOpen={openService === service.id}>
                    {service.icon}
                  </ServiceIcon>
                  <ServiceTitle $isOpen={openService === service.id}>
                    {service.title}
                  </ServiceTitle>
                  <ServiceChevron
                    $isOpen={openService === service.id}
                    animate={{ rotate: openService === service.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaChevronDown />
                  </ServiceChevron>
                </ServiceHeaderContent>
              </ServiceHeader>

              <AnimatePresence>
                {openService === service.id && (
                  <ServiceContent
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                  >
                    <ServiceDescription>{service.description}</ServiceDescription>

                    {service.id === 'red-team' && (
                      <>
                        <SubSection>
                          <SubSectionTitle>{service.mitreSection.title}</SubSectionTitle>
                          <SubSectionDescription>{service.mitreSection.description}</SubSectionDescription>
                          <PointsList>
                            {service.mitreSection.points.map((point, idx) => (
                              <PointItem
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                              >
                                <PointNumber>{idx + 1}</PointNumber>
                                <PointText>{point}</PointText>
                              </PointItem>
                            ))}
                          </PointsList>
                        </SubSection>

                        <SubSection>
                          <SubSectionTitle>{service.methodology.title}</SubSectionTitle>
                          <SubSectionDescription>{service.methodology.description}</SubSectionDescription>
                          <PointsList>
                            {service.methodology.stages.map((stage, idx) => (
                              <PointItem
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.08 }}
                              >
                                <PointNumber>{idx + 1}</PointNumber>
                                <PointText>{stage}</PointText>
                              </PointItem>
                            ))}
                          </PointsList>
                        </SubSection>

                        <SubSection>
                          <SubSectionTitle>Benefits of Red Teaming with MITRE ATT&CK</SubSectionTitle>
                          <PointsList>
                            {service.benefits.map((benefit, idx) => (
                              <PointItem
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                              >
                                <PointNumber>{idx + 1}</PointNumber>
                                <PointText>{benefit}</PointText>
                              </PointItem>
                            ))}
                          </PointsList>
                        </SubSection>
                      </>
                    )}

                    {service.id === 'app-security' && (
                      <>
                        <SubSection>
                          <SubSectionTitle>{service.owaspSection.title}</SubSectionTitle>
                          <SubSectionDescription>{service.owaspSection.description}</SubSectionDescription>
                          <PointsList>
                            {service.owaspSection.phases.map((phase, idx) => (
                              <PointItem
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.08 }}
                              >
                                <PointNumber>{idx + 1}</PointNumber>
                                <PointText>{phase}</PointText>
                              </PointItem>
                            ))}
                          </PointsList>
                        </SubSection>

                        <SubSection>
                          <SubSectionTitle>Benefits of using OWASP 2023 Methodology:</SubSectionTitle>
                          <PointsList>
                            {service.benefits.map((benefit, idx) => (
                              <PointItem
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                              >
                                <PointNumber>{idx + 1}</PointNumber>
                                <PointText>{benefit}</PointText>
                              </PointItem>
                            ))}
                          </PointsList>
                        </SubSection>

                        <div style={{ textAlign: 'center', marginTop: '40px' }}>
                          <CTAButton
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <FaRocket /> Request Application Security Assessment
                          </CTAButton>
                        </div>
                      </>
                    )}

                    {service.id === 'infrastructure' && (
                      <>
                        <SubSection>
                          <SubSectionTitle>{service.nistSection.title}</SubSectionTitle>
                          <SubSectionDescription>{service.nistSection.description}</SubSectionDescription>
                          <PointsList>
                            {service.nistSection.phases.map((phase, idx) => (
                              <PointItem
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.08 }}
                              >
                                <PointNumber>{idx + 1}</PointNumber>
                                <PointText>{phase}</PointText>
                              </PointItem>
                            ))}
                          </PointsList>
                        </SubSection>

                        <SubSection>
                          <SubSectionTitle>Benefits of ISA:</SubSectionTitle>
                          <PointsList>
                            {service.benefits.map((benefit, idx) => (
                              <PointItem
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                              >
                                <PointNumber>{idx + 1}</PointNumber>
                                <PointText>{benefit}</PointText>
                              </PointItem>
                            ))}
                          </PointsList>
                        </SubSection>

                        <div style={{ textAlign: 'center', marginTop: '40px' }}>
                          <CTAButton
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <FaRocket /> Request Infrastructure Security Assessment
                          </CTAButton>
                        </div>
                      </>
                    )}

                    {service.id === 'ot-iot' && (
                      <>
                        <SubSection>
                          <SubSectionTitle>What are OT and IoT?</SubSectionTitle>
                          {service.definitions.map((def, idx) => (
                            <div key={idx} style={{ marginBottom: '20px' }}>
                              <h5 style={{ fontSize: '1.15rem', fontWeight: '700', color: 'var(--primary-color)', marginBottom: '8px' }}>
                                • {def.term}:
                              </h5>
                              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: '1.7', paddingLeft: '20px' }}>
                                {def.definition}
                              </p>
                            </div>
                          ))}
                        </SubSection>

                        <SubSection>
                          <SubSectionTitle>Why are Cyber Assessments Needed?</SubSectionTitle>
                          <PointsList>
                            {service.whyNeeded.map((reason, idx) => (
                              <PointItem
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.08 }}
                              >
                                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--primary-color)', flexShrink: 0 }} />
                                <PointText>{reason}</PointText>
                              </PointItem>
                            ))}
                          </PointsList>
                        </SubSection>

                        <SubSection>
                          <SubSectionTitle>Key Areas of an OT/IoT Cyber Assessment:</SubSectionTitle>
                          {service.keyAreas.map((area, idx) => (
                            <div key={idx} style={{ marginBottom: '30px' }}>
                              <h5 style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '16px' }}>
                                {idx + 1}. {area.title}:
                              </h5>
                              <div style={{ display: 'grid', gap: '12px', paddingLeft: '20px' }}>
                                {area.points.map((point, pointIdx) => (
                                  <div key={pointIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                    <span style={{ color: 'var(--primary-color)', fontSize: '1.2rem', marginTop: '2px' }}>•</span>
                                    <span style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: '1.7', flex: 1 }}>
                                      {point}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </SubSection>

                        <div style={{ textAlign: 'center', marginTop: '40px' }}>
                          <CTAButton
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <FaRocket /> Request OT/IoT Security Assessment
                          </CTAButton>
                        </div>
                      </>
                    )}

                    {service.id === 'anti-ransomware' && (
                      <>
                        <SubSection>
                          <SubSectionTitle>{service.arraMethodology.title}</SubSectionTitle>
                          <SubSectionDescription>{service.arraMethodology.description}</SubSectionDescription>
                          <PointsList>
                            {service.arraMethodology.phases.map((phase, idx) => (
                              <PointItem
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.08 }}
                              >
                                <PointNumber>{idx + 1}</PointNumber>
                                <PointText>{phase}</PointText>
                              </PointItem>
                            ))}
                          </PointsList>
                        </SubSection>

                        <SubSection>
                          <SubSectionTitle>{service.comparison.title}</SubSectionTitle>
                          <SubSectionDescription>{service.comparison.description}</SubSectionDescription>
                          <div style={{ overflowX: 'auto', marginTop: '30px' }}>
                            <table style={{
                              width: '100%',
                              borderCollapse: 'collapse',
                              background: 'rgba(255, 255, 255, 0.05)',
                              borderRadius: '12px',
                              overflow: 'hidden',
                              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
                            }}>
                              <thead>
                                <tr style={{ background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%)' }}>
                                  <th style={{ padding: '18px 20px', textAlign: 'left', color: 'white', fontWeight: '700', fontSize: '1.1rem' }}>Feature</th>
                                  <th style={{ padding: '18px 20px', textAlign: 'left', color: 'white', fontWeight: '700', fontSize: '1.1rem' }}>Standard VAPT</th>
                                  <th style={{ padding: '18px 20px', textAlign: 'left', color: 'white', fontWeight: '700', fontSize: '1.1rem' }}>ARRA</th>
                                </tr>
                              </thead>
                              <tbody>
                                {service.comparison.table.map((row, idx) => (
                                  <tr key={idx} style={{
                                    background: idx % 2 === 0 ? 'rgba(255, 255, 255, 0.6)' : 'rgba(255, 255, 255, 0.3)',
                                    borderBottom: idx < service.comparison.table.length - 1 ? '1px solid rgba(0, 0, 0, 0.05)' : 'none'
                                  }}>
                                    <td style={{ padding: '18px 20px', fontWeight: '700', color: 'var(--primary-color)', fontSize: '1.05rem' }}>{row.feature}</td>
                                    <td style={{ padding: '18px 20px', color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.6' }}>{row.vapt}</td>
                                    <td style={{ padding: '18px 20px', color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.6', fontWeight: '600' }}>{row.arra}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </SubSection>

                        <SubSection>
                          <SubSectionTitle>{service.limitations.title}</SubSectionTitle>
                          <SubSectionDescription>{service.limitations.description}</SubSectionDescription>
                          <PointsList>
                            {service.limitations.points.map((point, idx) => (
                              <PointItem
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                              >
                                <PointNumber>{idx + 1}</PointNumber>
                                <PointText>{point}</PointText>
                              </PointItem>
                            ))}
                          </PointsList>
                        </SubSection>

                        <div style={{
                          marginTop: '40px',
                          padding: '25px',
                          background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(217, 119, 6, 0.1) 100%)',
                          borderRadius: '16px',
                          borderLeft: '4px solid var(--primary-color)'
                        }}>
                          <p style={{ fontSize: '1.1rem', color: 'var(--text-primary)', lineHeight: '1.8', margin: 0 }}>
                            {service.conclusion}
                          </p>
                        </div>

                        <div style={{ textAlign: 'center', marginTop: '40px' }}>
                          <CTAButton
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <FaRocket /> Request Anti-Ransomware Assessment
                          </CTAButton>
                        </div>
                      </>
                    )}

                    {service.id !== 'red-team' && service.id !== 'app-security' && service.id !== 'infrastructure' && service.id !== 'ot-iot' && service.id !== 'anti-ransomware' && (
                      <div style={{ textAlign: 'center', marginTop: '30px' }}>
                        <CTAButton
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FaRocket /> Learn More
                        </CTAButton>
                      </div>
                    )}

                    {service.id === 'red-team' && (
                      <div style={{ textAlign: 'center', marginTop: '40px' }}>
                        <CTAButton
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FaRocket /> Request Red Team Assessment
                        </CTAButton>
                      </div>
                    )}
                  </ServiceContent>
                )}
              </AnimatePresence>
            </ServiceCard>
          ))}
        </ServicesContainer>
      </ServicesSection>
    </PageContainer>
  );
};

export default CyberSecurityServices;