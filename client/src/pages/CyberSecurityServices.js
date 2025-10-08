import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  FaUserShield, FaRocket, FaLaptopCode, FaServer, FaRobot, FaLock, FaDatabase, FaSearch, FaGraduationCap, FaArrowRight, FaCheckCircle
} from 'react-icons/fa';

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
`;

const PageContainer = styled.div`
  min-height: 100vh;
  padding-top: 80px;
  background: linear-gradient(180deg, #0f172a 0%, #1e293b 100%);
  overflow-x: hidden;
`;

const HeroSection = styled.section`
  position: relative;
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px 40px 80px;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    width: 200%;
    height: 200%;
    top: -50%;
    left: -50%;
    background: 
      radial-gradient(circle at 30% 40%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 70% 60%, rgba(168, 85, 247, 0.1) 0%, transparent 50%);
    animation: ${rotate} 40s linear infinite;
  }
`;

const HeroContent = styled.div`
  max-width: 1200px;
  text-align: center;
  position: relative;
  z-index: 1;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 4rem;
  font-weight: 800;
  background: linear-gradient(135deg, #ffffff 0%, #60a5fa 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 24px;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.4rem;
  color: rgba(255, 255, 255, 0.8);
  max-width: 800px;
  margin: 0 auto 40px;
  line-height: 1.8;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const ServicesGrid = styled.section`
  max-width: 1400px;
  margin: -60px auto 0;
  padding: 0 40px 100px;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    padding: 0 20px 60px;
    margin-top: -40px;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const ServiceCard = styled(motion.div)`
  position: relative;
  height: 500px;
  border-radius: 24px;
  overflow: hidden;
  cursor: pointer;
  background: linear-gradient(135deg, ${props => props.gradient});
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url(${props => props.image}) center/cover no-repeat;
    opacity: 0.15;
    transition: all 0.5s ease;
  }

  &:hover::before {
    opacity: 0.25;
    transform: scale(1.1);
  }
`;

const CardContent = styled.div`
  position: relative;
  height: 100%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 1;
`;

const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const CardIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  color: white;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  animation: ${float} 3s ease-in-out infinite;
`;

const CardTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  color: white;
  margin: 0;
  line-height: 1.3;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.7;
  margin: 20px 0;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
`;

const LearnMoreButton = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.1rem;
  font-weight: 600;
  color: white;
  transition: all 0.3s ease;

  svg {
    transition: transform 0.3s ease;
  }

  ${ServiceCard}:hover & svg {
    transform: translateX(5px);
  }
`;

const FeatureTag = styled.span`
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  color: white;
`;

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  overflow-y: auto;
`;

const ModalContent = styled(motion.div)`
  background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
  border-radius: 32px;
  max-width: 900px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 25px 100px rgba(0, 0, 0, 0.5);

  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 10px;

    &:hover {
      background: rgba(255, 255, 255, 0.3);
    }
  }
`;

const ModalHeader = styled.div`
  padding: 50px;
  background: linear-gradient(135deg, ${props => props.gradient});
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url(${props => props.image}) center/cover no-repeat;
    opacity: 0.1;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 30px;
  right: 30px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 10;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: rotate(90deg);
  }
`;

const ModalIconTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  position: relative;
  z-index: 1;
`;

const ModalIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  color: white;
`;

const ModalTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  margin: 0;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const ModalBody = styled.div`
  padding: 50px;

  @media (max-width: 768px) {
    padding: 30px;
  }
`;

const Section = styled.div`
  margin-bottom: 40px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const SectionTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  color: white;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 12px;

  &::before {
    content: '';
    width: 4px;
    height: 30px;
    background: linear-gradient(180deg, #3b82f6 0%, #8b5cf6 100%);
    border-radius: 4px;
  }
`;

const SectionText = styled.p`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.8;
  margin-bottom: 20px;
`;

const ListItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 15px;
  padding: 15px 20px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  margin-bottom: 12px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    transform: translateX(5px);
  }
`;

const ListIcon = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 8px;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  flex-shrink: 0;
`;

const ListText = styled.span`
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
`;

const CTASection = styled.div`
  margin-top: 50px;
  padding: 40px;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  border-radius: 20px;
  text-align: center;
`;

const CTATitle = styled.h4`
  font-size: 1.8rem;
  font-weight: 700;
  color: white;
  margin-bottom: 15px;
`;

const CTAText = styled.p`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 30px;
  line-height: 1.7;
`;

const CTAButton = styled.button`
  padding: 16px 40px;
  background: white;
  color: #3b82f6;
  border: none;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
  }
`;

const CyberSecurityServices = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 'red-team',
      icon: <FaUserShield />,
      title: 'Red Team Assessment',
      gradient: '#dc2626 0%, #991b1b 100%',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200',
      tag: 'Advanced',
      shortDesc: 'Simulate real-world cyber attacks to test your security defenses and identify vulnerabilities before malicious actors do.',
      description: 'Red teaming is a security assessment methodology where a team acts like an adversary, attempting to bypass your defenses and achieve specific objectives. This approach provides a holistic view of your security posture.',
      methodology: {
        title: 'MITRE ATT&CK Methodology',
        items: [
          'Planning and Scoping',
          'Reconnaissance and Initial Compromise',
          'Lateral Movement',
          'Installation of Tools and C2 Communication',
          'Actions on Objectives'
        ]
      },
      benefits: [
        'Get a Real Attacker View',
        'Improved Security Posture',
        'Enhanced Threat Detection',
        'Proactive Risk Management'
      ]
    },
    {
      id: 'app-security',
      icon: <FaLaptopCode />,
      title: 'Application Security Assessment',
      gradient: '#7c3aed 0%, #5b21b6 100%',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1200',
      tag: 'Essential',
      shortDesc: 'Comprehensive security testing of your applications using OWASP 2023 methodology to identify and fix vulnerabilities.',
      description: 'An Application Security Assessment (ASA) is a systematic process of identifying, evaluating, and documenting vulnerabilities in software applications using OWASP Testing Guide methodology.',
      methodology: {
        title: 'OWASP 2023 Methodology',
        items: [
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
      gradient: '#2563eb 0%, #1e40af 100%',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200',
      tag: 'Critical',
      shortDesc: 'Comprehensive evaluation of your IT infrastructure using NIST framework to identify security gaps and misconfigurations.',
      description: 'Infrastructure Security Assessment (ISA) is a comprehensive evaluation to identify vulnerabilities, security misconfigurations, and potential attack vectors using NIST Special Publication 800-30.',
      methodology: {
        title: 'NIST Framework Methodology',
        items: [
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
      title: 'OT and IoT Cyber Assessments',
      gradient: '#059669 0%, #047857 100%',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200',
      tag: 'Specialized',
      shortDesc: 'Specialized security assessments for Operational Technology and IoT environments to ensure operational safety.',
      description: 'OT and IoT cyber assessments are crucial for understanding and mitigating the risks associated with these interconnected systems in industrial environments.',
      methodology: {
        title: 'Assessment Key Areas',
        items: [
          'Asset Discovery',
          'Vulnerability Assessment',
          'Threat Modeling',
          'Risk Assessment',
          'Security Controls Evaluation',
          'Compliance Review'
        ]
      },
      benefits: [
        'Critical Infrastructure Protection',
        'Operational Safety',
        'Compliance with NIST and NERC CIP',
        'Reduced Attack Surface'
      ]
    },
    {
      id: 'anti-ransomware',
      icon: <FaLock />,
      title: 'Anti-Ransomware Readiness',
      gradient: '#d97706 0%, #b45309 100%',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200',
      tag: 'High Priority',
      shortDesc: 'Comprehensive ransomware preparedness assessment using MITRE ATT&CK to test your defenses and response capabilities.',
      description: 'Anti-Ransomware Readiness Assessment (ARRA) leverages MITRE ATT&CK framework to simulate real-world ransomware attacks and test your organization\'s preparedness.',
      methodology: {
        title: 'ARRA Methodology',
        items: [
          'Preparation',
          'Emulation',
          'Detection and Response',
          'Reporting and Remediation Suggestions'
        ]
      },
      benefits: [
        'Targeted Ransomware Focus',
        'Real-world Attack Simulation',
        'Test People, Processes & Technology',
        'Prioritized Recommendations'
      ]
    },
    {
      id: 'data-breach',
      icon: <FaDatabase />,
      title: 'Deep Dark Web Data Breach Assessment',
      gradient: '#db2777 0%, #be185d 100%',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1200',
      tag: 'Intelligence',
      shortDesc: 'Monitor deep and dark web for stolen data and map findings to MITRE ATT&CK for proactive threat intelligence.',
      description: 'Deep Dark Web monitoring to identify stolen data from breaches and map findings to MITRE ATT&CK framework for understanding attacker tactics.',
      methodology: {
        title: 'Monitoring & Mapping Process',
        items: [
          'Identify Data Leaks',
          'Gauge Breach Severity',
          'Track Attacker Activity',
          'Map TTPs to Stolen Data',
          'Develop Mitigation Strategies'
        ]
      },
      benefits: [
        'Improved Threat Intelligence',
        'Proactive Defense',
        'Targeted Incident Response',
        'Early Warning System'
      ]
    },
    {
      id: 'cyber-forensic',
      icon: <FaSearch />,
      title: 'Cyber Forensic Assessment',
      gradient: '#0891b2 0%, #0e7490 100%',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200',
      tag: 'Investigation',
      shortDesc: 'Systematic investigation to identify, collect, analyze, and preserve digital evidence using NIST framework.',
      description: 'Cyber forensic assessment is a systematic investigation to identify, collect, analyze, and preserve digital evidence using NIST CyberSecurity Framework.',
      methodology: {
        title: 'NIST Framework Functions',
        items: [
          'Identify',
          'Protect',
          'Detect',
          'Respond',
          'Recover'
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
      id: 'training',
      icon: <FaGraduationCap />,
      title: 'Cyber Security Training',
      gradient: '#0d9488 0%, #0f766e 100%',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200',
      tag: 'Essential',
      shortDesc: 'Customized cybersecurity training programs designed to empower your workforce and build a strong security culture.',
      description: 'Comprehensive customized Cybersecurity Training Programs designed to address the unique needs of your organization and empower employees with knowledge to combat evolving threats.',
      methodology: {
        title: 'Training Approach',
        items: [
          'Needs Assessment',
          'Content Development',
          'Delivery Options (Online/Offline)',
          'Hands-on Exercises',
          'Assessment and Certification'
        ]
      },
      benefits: [
        'Reduced Risk of Cyberattacks',
        'Improved Data Security',
        'Enhanced Compliance',
        'Increased Employee Productivity'
      ]
    }
  ];

  const openModal = (service) => {
    setSelectedService(service);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedService(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <PageContainer>
      <Helmet>
        <title>Cybersecurity Services - TransAsia Soft Tech</title>
        <meta name="description" content="Comprehensive cybersecurity assessment and training services including Red Team, Application Security, Infrastructure Security, and more." />
      </Helmet>

      <HeroSection>
        <HeroContent>
          <HeroTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Cybersecurity Services
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Comprehensive security assessments and training programs designed to protect your organization from evolving cyber threats
          </HeroSubtitle>
        </HeroContent>
      </HeroSection>

      <ServicesGrid>
        <GridContainer>
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              gradient={service.gradient}
              image={service.image}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -10, 
                boxShadow: '0 30px 80px rgba(0, 0, 0, 0.4)'
              }}
              onClick={() => openModal(service)}
            >
              <CardContent>
                <CardHeader>
                  <CardIcon>{service.icon}</CardIcon>
                  <div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.shortDesc}</CardDescription>
                  </div>
                </CardHeader>
                <CardFooter>
                  <FeatureTag>{service.tag}</FeatureTag>
                  <LearnMoreButton>
                    Learn More <FaArrowRight />
                  </LearnMoreButton>
                </CardFooter>
              </CardContent>
            </ServiceCard>
          ))}
        </GridContainer>
      </ServicesGrid>

      {selectedService && (
        <ModalOverlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
        >
          <ModalContent
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', duration: 0.5 }}
            onClick={(e) => e.stopPropagation()}
          >
            <CloseButton onClick={closeModal}>×</CloseButton>
            
            <ModalHeader gradient={selectedService.gradient} image={selectedService.image}>
              <ModalIconTitle>
                <ModalIcon>{selectedService.icon}</ModalIcon>
                <ModalTitle>{selectedService.title}</ModalTitle>
              </ModalIconTitle>
            </ModalHeader>

            <ModalBody>
              <Section>
                <SectionText>{selectedService.description}</SectionText>
              </Section>

              <Section>
                <SectionTitle>{selectedService.methodology.title}</SectionTitle>
                {selectedService.methodology.items.map((item, idx) => (
                  <ListItem key={idx}>
                    <ListIcon>{idx + 1}</ListIcon>
                    <ListText>{item}</ListText>
                  </ListItem>
                ))}
              </Section>

              <Section>
                <SectionTitle>Benefits</SectionTitle>
                {selectedService.benefits.map((benefit, idx) => (
                  <ListItem key={idx}>
                    <ListIcon><FaCheckCircle size={16} /></ListIcon>
                    <ListText>{benefit}</ListText>
                  </ListItem>
                ))}
              </Section>

              <CTASection>
                <CTATitle>Ready to Get Started?</CTATitle>
                <CTAText>
                  Contact us today for a free consultation and learn how we can help secure your organization.
                </CTAText>
                <CTAButton>
                  <FaRocket /> Request Assessment
                </CTAButton>
              </CTASection>
            </ModalBody>
          </ModalContent>
        </ModalOverlay>
      )}
    </PageContainer>
  );
};

export default CyberSecurityServices;
