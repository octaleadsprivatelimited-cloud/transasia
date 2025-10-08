import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaUserShield, FaRocket, FaLaptopCode, FaServer, FaRobot, FaLock, FaDatabase, FaSearch, FaGraduationCap, FaCheckCircle, FaArrowRight
} from 'react-icons/fa';

const shimmer = keyframes`
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

const PageContainer = styled.div`
  min-height: 100vh;
  padding-top: 80px;
  background: #0f172a;
  overflow: hidden;
`;

const HeroSection = styled.section`
  padding: 60px 40px 40px;
  background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    padding: 40px 20px 30px;
  }
`;

const HeroContent = styled.div`
  max-width: 1600px;
  margin: 0 auto;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, #ffffff 0%, #60a5fa 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.7);
  max-width: 800px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SplitContainer = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 380px 1fr;
  min-height: calc(100vh - 300px);

  @media (max-width: 1024px) {
    grid-template-columns: 320px 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Sidebar = styled.aside`
  background: rgba(30, 41, 59, 0.5);
  backdrop-filter: blur(10px);
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  padding: 30px 20px;
  overflow-y: auto;
  position: sticky;
  top: 80px;
  height: calc(100vh - 80px);

  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 3px;

    &:hover {
      background: rgba(255, 255, 255, 0.3);
    }
  }

  @media (max-width: 768px) {
    position: relative;
    top: 0;
    height: auto;
    border-right: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding: 20px;
  }
`;

const SidebarTitle = styled.h3`
  font-size: 0.9rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.5);
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin-bottom: 20px;
  padding: 0 10px;
`;

const MenuItem = styled(motion.button)`
  width: 100%;
  padding: 16px 20px;
  background: ${props => props.active ? 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)' : 'rgba(255, 255, 255, 0.03)'};
  border: 1px solid ${props => props.active ? '#3b82f6' : 'rgba(255, 255, 255, 0.1)'};
  border-radius: 12px;
  margin-bottom: 12px;
  cursor: pointer;
  text-align: left;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 15px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transition: left 0.5s;
  }

  &:hover {
    background: ${props => props.active ? 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)' : 'rgba(255, 255, 255, 0.08)'};
    border-color: ${props => props.active ? '#3b82f6' : 'rgba(59, 130, 246, 0.5)'};
    transform: translateX(5px);

    &::before {
      left: 100%;
    }
  }
`;

const MenuIcon = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 10px;
  background: ${props => props.active ? 'rgba(255, 255, 255, 0.2)' : 'rgba(59, 130, 246, 0.1)'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  color: ${props => props.active ? 'white' : '#60a5fa'};
  flex-shrink: 0;
`;

const MenuContent = styled.div`
  flex: 1;
`;

const MenuTitle = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: ${props => props.active ? 'white' : 'rgba(255, 255, 255, 0.9)'};
  margin-bottom: 4px;
`;

const MenuTag = styled.span`
  font-size: 0.75rem;
  color: ${props => props.active ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.5)'};
  font-weight: 500;
`;

const ContentArea = styled.div`
  padding: 40px;
  overflow-y: auto;
  height: calc(100vh - 300px);

  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(59, 130, 246, 0.3);
    border-radius: 4px;

    &:hover {
      background: rgba(59, 130, 246, 0.5);
    }
  }

  @media (max-width: 768px) {
    padding: 30px 20px;
    height: auto;
  }
`;

const ContentHeader = styled(motion.div)`
  margin-bottom: 40px;
`;

const ContentIconTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
`;

const ContentIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 20px;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  color: white;
  box-shadow: 0 10px 40px rgba(59, 130, 246, 0.3);
  animation: ${float} 3s ease-in-out infinite;
`;

const ContentTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 800;
  color: white;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ContentDescription = styled(motion.p)`
  font-size: 1.15rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.8;
  margin-bottom: 40px;
`;

const Section = styled(motion.section)`
  margin-bottom: 50px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 25px;
  padding-bottom: 15px;
  border-bottom: 2px solid rgba(59, 130, 246, 0.2);
`;

const SectionNumber = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: 700;
  color: white;
`;

const SectionTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  color: white;
  margin: 0;
`;

const GridList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
`;

const ListCard = styled(motion.div)`
  padding: 25px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(59, 130, 246, 0.5);
    transform: translateY(-5px);
  }
`;

const ListCardNumber = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 8px;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  font-weight: 700;
  color: white;
  margin-bottom: 15px;
`;

const ListCardTitle = styled.h4`
  font-size: 1.15rem;
  font-weight: 600;
  color: white;
  margin: 0 0 8px 0;
`;

const ListCardText = styled.p`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin: 0;
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;

const BenefitCard = styled(motion.div)`
  padding: 30px;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 16px;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(59, 130, 246, 0.5);
    transform: translateY(-8px);
    box-shadow: 0 20px 60px rgba(59, 130, 246, 0.2);
  }
`;

const BenefitIcon = styled.div`
  width: 60px;
  height: 60px;
  margin: 0 auto 20px;
  border-radius: 50%;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: white;
`;

const BenefitText = styled.p`
  font-size: 1.05rem;
  font-weight: 600;
  color: white;
  margin: 0;
  line-height: 1.5;
`;

const CTASection = styled(motion.div)`
  margin-top: 50px;
  padding: 50px;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  border-radius: 24px;
  text-align: center;
  box-shadow: 0 20px 60px rgba(59, 130, 246, 0.3);

  @media (max-width: 768px) {
    padding: 40px 30px;
  }
`;

const CTATitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  color: white;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const CTAText = styled.p`
  font-size: 1.15rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 30px;
  line-height: 1.7;
`;

const CTAButton = styled.button`
  padding: 18px 40px;
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

const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  color: rgba(255, 255, 255, 0.5);
  text-align: center;
`;

const EmptyIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 20px;
  opacity: 0.3;
`;

const EmptyText = styled.p`
  font-size: 1.2rem;
`;

const CyberSecurityServices = () => {
  const [activeService, setActiveService] = useState('red-team');

  const services = [
    {
      id: 'red-team',
      icon: <FaUserShield />,
      title: 'Red Team Assessment',
      tag: 'Advanced',
      description: 'Red teaming is a security assessment methodology where a team acts like an adversary, attempting to bypass your defenses and achieve specific objectives. Unlike penetration testing that focuses on vulnerabilities, red teaming mimics the tactics, techniques, and procedures (TTPs) of real-world attackers. This approach provides a more holistic view of your security posture, identifying not just exploitable vulnerabilities but also weaknesses in detection, response, and recovery capabilities.',
      methodology: {
        title: 'Red Teaming Methodology with MITRE ATT&CK Framework',
        items: [
          { title: 'Planning and Scoping', desc: 'Define objectives, rules of engagement, and success criteria for the assessment' },
          { title: 'Reconnaissance and Initial Compromise', desc: 'Gather intelligence and establish initial access to the target environment' },
          { title: 'Lateral Movement', desc: 'Navigate through the network to reach high-value targets' },
          { title: 'Installation of Tools and C2 Communication', desc: 'Deploy persistence mechanisms and establish command and control channels' },
          { title: 'Actions on Objectives', desc: 'Execute mission goals such as data exfiltration or system compromise' }
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
      title: 'Application Security',
      tag: 'Essential',
      description: 'An Application Security Assessment (ASA) is a systematic process of identifying, evaluating, and documenting vulnerabilities in software applications. It plays a crucial role in protecting applications from cyberattacks and data breaches. This assessment uses the Open Web Application Security Project (OWASP) Testing Guide methodology to ensure comprehensive coverage of potential security issues.',
      methodology: {
        title: 'OWASP 2023 Methodology Phases',
        items: [
          { title: 'Preparation', desc: 'Define scope, gather requirements, and establish testing parameters' },
          { title: 'Information Gathering', desc: 'Collect data about the application architecture and technologies' },
          { title: 'Threat Modeling', desc: 'Identify potential threats and attack vectors specific to the application' },
          { title: 'Vulnerability Scanning', desc: 'Use automated tools to discover common security weaknesses' },
          { title: 'Manual Penetration Testing', desc: 'Perform hands-on testing to validate and exploit vulnerabilities' },
          { title: 'Reporting', desc: 'Document findings with risk ratings and remediation recommendations' }
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
      title: 'Infrastructure Security',
      tag: 'Critical',
      description: 'An Infrastructure Security Assessment (ISA) is a comprehensive evaluation of an organization\'s IT infrastructure to identify vulnerabilities, security misconfigurations, and potential attack vectors. It plays a crucial role in safeguarding critical systems and data from cyber threats. This assessment draws upon methodologies from frameworks like NIST and penetration testing to provide a robust security posture.',
      methodology: {
        title: 'NIST Framework Methodology',
        items: [
          { title: 'Planning and Scoping', desc: 'Identify high-risk assets and prioritize them for testing using NIST SP 800-30' },
          { title: 'Information Gathering', desc: 'Collect data about network topology, systems, and security controls' },
          { title: 'Vulnerability Scanning', desc: 'Identify misconfigurations and vulnerabilities across the infrastructure' },
          { title: 'Data Analysis', desc: 'Evaluate findings and assess potential impact on the organization' },
          { title: 'Remediation', desc: 'Provide actionable recommendations and follow-up support' }
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
      title: 'OT and IoT Security',
      tag: 'Specialized',
      description: 'OT and IoT cyber assessments are crucial for understanding and mitigating the risks associated with these interconnected systems. Operational Technology (OT) systems control physical processes in industrial environments, while IoT devices form a vast network of interconnected sensors and devices. Both are increasingly connected to the internet, expanding their attack surface and requiring specialized security assessments.',
      methodology: {
        title: 'Key Areas of Assessment',
        items: [
          { title: 'Asset Discovery', desc: 'Identify all devices and systems within the OT/IoT environment and understand their criticality' },
          { title: 'Vulnerability Assessment', desc: 'Identify and prioritize known vulnerabilities in devices, software, and firmware' },
          { title: 'Threat Modeling', desc: 'Analyze potential threats, attack vectors, and consider insider threats' },
          { title: 'Risk Assessment', desc: 'Evaluate the likelihood and impact of potential security incidents' },
          { title: 'Security Controls', desc: 'Assess the effectiveness of firewalls, IDS, and access controls' },
          { title: 'Compliance Review', desc: 'Ensure compliance with NIST, NERC CIP, and other relevant standards' }
        ]
      },
      benefits: [
        'Critical Infrastructure Protection',
        'Operational Safety',
        'Compliance Assurance',
        'Reduced Attack Surface'
      ]
    },
    {
      id: 'anti-ransomware',
      icon: <FaLock />,
      title: 'Anti-Ransomware',
      tag: 'High Priority',
      description: 'Ransomware Attacks pose a significant threat to organizations, disrupting operations and causing financial losses. To effectively combat this threat, a standard Vulnerability Assessment and Penetration Testing (VAPT) might not be sufficient. An Anti-Ransomware Readiness Assessment (ARRA) leverages the MITRE ATT&CK framework to provide a targeted assessment that simulates real-world ransomware attacks.',
      methodology: {
        title: 'ARRA Methodology based on MITRE ATT&CK',
        items: [
          { title: 'Preparation', desc: 'Define scope and identify critical assets that need ransomware protection' },
          { title: 'Emulation', desc: 'Simulate ransomware tactics and techniques based on MITRE ATT&CK' },
          { title: 'Detection and Response', desc: 'Test detection capabilities and incident response procedures' },
          { title: 'Remediation Suggestions', desc: 'Provide prioritized recommendations to mitigate ransomware risk' }
        ]
      },
      benefits: [
        'Targeted Ransomware Focus',
        'Real-world Attack Simulation',
        'Tests People, Processes & Technology',
        'Prioritized Recommendations'
      ]
    },
    {
      id: 'data-breach',
      icon: <FaDatabase />,
      title: 'Data Breach Assessment',
      tag: 'Intelligence',
      description: 'The Deep and Dark Web are hidden corners of the internet not indexed by traditional search engines. These spaces can harbor criminal activity, including the sale of stolen data from data breaches. Organizations that have experienced a data breach can leverage deep dark web monitoring to assess the scope of the breach and potential impact. This assessment can then be mapped to the MITRE ATT&CK framework to understand the tactics and techniques attackers might use with the stolen data.',
      methodology: {
        title: 'Deep Dark Web Monitoring Process',
        items: [
          { title: 'Identify Data Leaks', desc: 'Monitor hidden marketplaces and forums for your organization\'s data' },
          { title: 'Gauge Severity', desc: 'Assess the type and volume of data compromised' },
          { title: 'Track Activity', desc: 'Monitor attacker discussions and sale of stolen credentials' },
          { title: 'Map TTPs', desc: 'Map findings to MITRE ATT&CK to understand exploitation methods' },
          { title: 'Mitigation Strategies', desc: 'Develop actionable plans to address identified risks' }
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
      title: 'Cyber Forensics',
      tag: 'Investigation',
      description: 'A Cyber forensic assessment is a systematic investigation conducted to identify, collect, analyze, and preserve digital evidence in the aftermath of a cyber security incident. This process is crucial for legal proceedings, determining the root cause of the incident, and implementing effective mitigation strategies. The National Institute of Standards and Technology (NIST) CyberSecurity Framework provides a methodology that can be effectively applied to cyber forensic assessments.',
      methodology: {
        title: 'NIST Framework Core Functions',
        items: [
          { title: 'Identify', desc: 'Develop understanding of systems, assets, data, and capabilities to manage cybersecurity risk' },
          { title: 'Protect', desc: 'Implement safeguards to ensure delivery of critical infrastructure services' },
          { title: 'Detect', desc: 'Develop and implement activities to identify cybersecurity events' },
          { title: 'Respond', desc: 'Take action regarding a detected cybersecurity incident' },
          { title: 'Recover', desc: 'Maintain plans for resilience and restore capabilities impaired due to incidents' }
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
      title: 'Security Training',
      tag: 'Essential',
      description: 'In today\'s digital age, cyber threats are constantly evolving. Equipping your employees with the knowledge and skills to combat these threats is no longer optional, it\'s essential. TransAsia Soft Tech offers comprehensive customized Cybersecurity Training Programs designed to address the unique needs of your organization and build a strong security culture.',
      methodology: {
        title: 'Customized Training Approach',
        items: [
          { title: 'Needs Assessment', desc: 'Evaluate current security awareness levels and identify knowledge gaps' },
          { title: 'Content Development', desc: 'Create targeted training materials specific to your organization\'s risks' },
          { title: 'Delivery Options', desc: 'Choose from online, in-person, or hybrid training formats' },
          { title: 'Hands-on Exercises', desc: 'Practice responding to simulated security incidents' },
          { title: 'Certification', desc: 'Assess learning outcomes and provide completion certificates' }
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

  const currentService = services.find(s => s.id === activeService);

  return (
    <PageContainer>
      <Helmet>
        <title>Cybersecurity Services - TransAsia Soft Tech</title>
        <meta name="description" content="Comprehensive cybersecurity assessment and training services including Red Team, Application Security, Infrastructure Security, and more." />
      </Helmet>

      <HeroSection>
        <HeroContent>
          <HeroTitle>Cybersecurity Services</HeroTitle>
          <HeroSubtitle>
            Comprehensive security assessments and training programs designed to protect your organization from evolving cyber threats
          </HeroSubtitle>
        </HeroContent>
      </HeroSection>

      <SplitContainer>
        <Sidebar>
          <SidebarTitle>Services</SidebarTitle>
          {services.map((service) => (
            <MenuItem
              key={service.id}
              active={activeService === service.id}
              onClick={() => setActiveService(service.id)}
              whileTap={{ scale: 0.98 }}
            >
              <MenuIcon active={activeService === service.id}>
                {service.icon}
              </MenuIcon>
              <MenuContent>
                <MenuTitle active={activeService === service.id}>
                  {service.title}
                </MenuTitle>
                <MenuTag active={activeService === service.id}>
                  {service.tag}
                </MenuTag>
              </MenuContent>
            </MenuItem>
          ))}
        </Sidebar>

        <ContentArea>
          <AnimatePresence mode="wait">
            {currentService ? (
              <motion.div
                key={currentService.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <ContentHeader>
                  <ContentIconTitle>
                    <ContentIcon>{currentService.icon}</ContentIcon>
                    <ContentTitle>{currentService.title}</ContentTitle>
                  </ContentIconTitle>
                  <ContentDescription>
                    {currentService.description}
                  </ContentDescription>
                </ContentHeader>

                <Section>
                  <SectionHeader>
                    <SectionNumber>1</SectionNumber>
                    <SectionTitle>{currentService.methodology.title}</SectionTitle>
                  </SectionHeader>
                  <GridList>
                    {currentService.methodology.items.map((item, idx) => (
                      <ListCard
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <ListCardNumber>{idx + 1}</ListCardNumber>
                        <ListCardTitle>{item.title}</ListCardTitle>
                        <ListCardText>{item.desc}</ListCardText>
                      </ListCard>
                    ))}
                  </GridList>
                </Section>

                <Section>
                  <SectionHeader>
                    <SectionNumber>2</SectionNumber>
                    <SectionTitle>Key Benefits</SectionTitle>
                  </SectionHeader>
                  <BenefitsGrid>
                    {currentService.benefits.map((benefit, idx) => (
                      <BenefitCard
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <BenefitIcon>
                          <FaCheckCircle />
                        </BenefitIcon>
                        <BenefitText>{benefit}</BenefitText>
                      </BenefitCard>
                    ))}
                  </BenefitsGrid>
                </Section>

                <CTASection
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <CTATitle>Ready to Get Started?</CTATitle>
                  <CTAText>
                    Contact us today for a free consultation and learn how we can help secure your organization with our {currentService.title} service.
                  </CTAText>
                  <CTAButton>
                    <FaRocket /> Request Assessment <FaArrowRight />
                  </CTAButton>
                </CTASection>
              </motion.div>
            ) : (
              <EmptyState>
                <EmptyIcon>🔒</EmptyIcon>
                <EmptyText>Select a service to view details</EmptyText>
              </EmptyState>
            )}
          </AnimatePresence>
        </ContentArea>
      </SplitContainer>
    </PageContainer>
  );
};

export default CyberSecurityServices;
