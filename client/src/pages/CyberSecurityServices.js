import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaUserShield, FaRocket, FaLaptopCode, FaServer, FaRobot, FaLock, FaDatabase, FaSearch, FaGraduationCap, FaCheckCircle, FaArrowRight
} from 'react-icons/fa';

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
`;

const PageContainer = styled.div`
  min-height: 100vh;
  padding-top: 80px;
  background: #ffffff;
`;

const HeroSection = styled.section`
  padding: 80px 40px 60px;
  background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
  text-align: center;

  @media (max-width: 768px) {
    padding: 60px 20px 40px;
  }
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  color: #0f172a;
  margin-bottom: 20px;
  letter-spacing: -2px;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.3rem;
  color: #64748b;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.7;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const TabsContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px 80px;

  @media (max-width: 768px) {
    padding: 0 20px 60px;
  }
`;

const TabsHeader = styled.div`
  display: flex;
  gap: 8px;
  padding: 8px;
  background: #f1f5f9;
  border-radius: 16px;
  overflow-x: auto;
  margin-bottom: 40px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);

  /* Hide scrollbar for cleaner look */
  &::-webkit-scrollbar {
    height: 4px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #cbd5e1;
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    gap: 6px;
    padding: 6px;
  }
`;

const Tab = styled.button`
  flex: 1;
  min-width: fit-content;
  padding: 16px 24px;
  background: ${props => props.active ? '#ffffff' : 'transparent'};
  border: none;
  border-radius: 12px;
  font-size: 0.95rem;
  font-weight: ${props => props.active ? '600' : '500'};
  color: ${props => props.active ? '#0f172a' : '#64748b'};
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  box-shadow: ${props => props.active ? '0 2px 8px rgba(0, 0, 0, 0.08)' : 'none'};

  &:hover {
    color: #0f172a;
    background: ${props => props.active ? '#ffffff' : 'rgba(255, 255, 255, 0.5)'};
  }

  svg {
    font-size: 1.1rem;
  }

  @media (max-width: 768px) {
    padding: 12px 16px;
    font-size: 0.85rem;

    svg {
      font-size: 1rem;
    }
  }
`;

const TabContent = styled(motion.div)`
  background: #ffffff;
  border-radius: 24px;
  padding: 60px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  border: 1px solid #f1f5f9;

  @media (max-width: 768px) {
    padding: 40px 30px;
    border-radius: 20px;
  }
`;

const ContentHeader = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

const ContentIcon = styled.div`
  width: 100px;
  height: 100px;
  margin: 0 auto 30px;
  border-radius: 24px;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: white;
  box-shadow: 0 20px 60px rgba(59, 130, 246, 0.3);
  animation: ${float} 4s ease-in-out infinite;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
    font-size: 2.5rem;
  }
`;

const ContentTitle = styled.h2`
  font-size: 2.8rem;
  font-weight: 800;
  color: #0f172a;
  margin-bottom: 20px;
  letter-spacing: -1px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ContentDescription = styled.p`
  font-size: 1.15rem;
  color: #64748b;
  line-height: 1.8;
  max-width: 900px;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Section = styled.section`
  margin-bottom: 60px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const SectionHeader = styled.div`
  margin-bottom: 35px;
`;

const SectionTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 12px;
  display: inline-block;
  position: relative;
  padding-bottom: 12px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 4px;
    background: linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%);
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.05rem;
  color: #64748b;
  margin-top: 15px;
`;

const MethodologyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const MethodologyCard = styled(motion.div)`
  padding: 32px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  transition: all 0.3s ease;

  &:hover {
    background: #ffffff;
    border-color: #3b82f6;
    box-shadow: 0 8px 30px rgba(59, 130, 246, 0.12);
    transform: translateY(-4px);
  }
`;

const CardNumber = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  font-weight: 700;
  color: white;
  margin-bottom: 20px;
  box-shadow: 0 4px 16px rgba(59, 130, 246, 0.3);
`;

const CardTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 12px;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: #64748b;
  line-height: 1.7;
  margin: 0;
`;

const BenefitsSection = styled.div`
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  border-radius: 20px;
  padding: 50px;
  margin-top: 60px;

  @media (max-width: 768px) {
    padding: 40px 30px;
  }
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 30px;
  margin-top: 35px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const BenefitCard = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 28px;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
    transform: translateY(-5px);
  }
`;

const BenefitIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: white;
  font-size: 1.3rem;
  box-shadow: 0 4px 16px rgba(16, 185, 129, 0.3);
`;

const BenefitText = styled.div`
  flex: 1;
`;

const BenefitTitle = styled.h5`
  font-size: 1.1rem;
  font-weight: 600;
  color: #0f172a;
  margin: 0;
  line-height: 1.5;
`;

const CTASection = styled.div`
  margin-top: 60px;
  padding: 60px;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  border-radius: 24px;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
    animation: ${float} 6s ease-in-out infinite;
  }

  @media (max-width: 768px) {
    padding: 50px 30px;
  }
`;

const CTAContent = styled.div`
  position: relative;
  z-index: 1;
`;

const CTATitle = styled.h3`
  font-size: 2.2rem;
  font-weight: 700;
  color: white;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const CTAText = styled.p`
  font-size: 1.15rem;
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: 35px;
  line-height: 1.7;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const CTAButton = styled.button`
  padding: 18px 45px;
  background: white;
  color: #3b82f6;
  border: none;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.25);
  }

  &:active {
    transform: translateY(-1px);
  }
`;

const CyberSecurityServices = () => {
  const [activeTab, setActiveTab] = useState('red-team');

  const services = [
    {
      id: 'red-team',
      icon: <FaUserShield />,
      title: 'Red Team',
      fullTitle: 'Red Team Assessment',
      description: 'Red teaming is a security assessment methodology where a team acts like an adversary, attempting to bypass your defenses and achieve specific objectives. Unlike penetration testing that focuses on vulnerabilities, red teaming mimics the tactics, techniques, and procedures (TTPs) of real-world attackers. This approach provides a more holistic view of your security posture, identifying not just exploitable vulnerabilities but also weaknesses in detection, response, and recovery capabilities.',
      methodology: {
        title: 'Red Teaming Methodology with MITRE ATT&CK Framework',
        subtitle: 'A red team assessment using MITRE ATT&CK typically follows these stages:',
        items: [
          { title: 'Planning and Scoping', desc: 'Define objectives, rules of engagement, and success criteria for the assessment' },
          { title: 'Reconnaissance and Initial Compromise', desc: 'Gather intelligence and establish initial access to the target environment' },
          { title: 'Lateral Movement', desc: 'Navigate through the network to reach high-value targets and test detection capabilities' },
          { title: 'Installation of Tools and C2', desc: 'Deploy persistence mechanisms and establish command and control channels' },
          { title: 'Actions on Objectives', desc: 'Execute mission goals such as data exfiltration or system compromise' }
        ]
      },
      benefits: [
        { title: 'Get a Real Attacker View', desc: 'Experience how actual adversaries would approach your systems' },
        { title: 'Improved Security Posture', desc: 'Identify and fix weaknesses before real attackers exploit them' },
        { title: 'Enhanced Threat Detection', desc: 'Test and improve your security monitoring and response capabilities' },
        { title: 'Proactive Risk Management', desc: 'Stay ahead of threats with actionable intelligence and recommendations' }
      ]
    },
    {
      id: 'app-security',
      icon: <FaLaptopCode />,
      title: 'App Security',
      fullTitle: 'Application Security Assessment',
      description: 'An Application Security Assessment (ASA) is a systematic process of identifying, evaluating, and documenting vulnerabilities in software applications. It plays a crucial role in protecting applications from cyberattacks and data breaches. This assessment uses the Open Web Application Security Project (OWASP) Testing Guide methodology to ensure comprehensive coverage of potential security issues.',
      methodology: {
        title: 'OWASP 2023 Methodology',
        subtitle: 'Phases of an OWASP-based Application Security Assessment:',
        items: [
          { title: 'Preparation', desc: 'Define scope, gather requirements, and establish testing parameters' },
          { title: 'Information Gathering', desc: 'Collect data about the application architecture, technologies, and potential entry points' },
          { title: 'Threat Modeling', desc: 'Identify potential threats and attack vectors specific to the application' },
          { title: 'Vulnerability Scanning', desc: 'Use automated tools to discover common security weaknesses' },
          { title: 'Manual Penetration Testing', desc: 'Perform hands-on testing to validate and exploit vulnerabilities' },
          { title: 'Reporting', desc: 'Document findings with risk ratings and detailed remediation recommendations' }
        ]
      },
      benefits: [
        { title: 'Structured Approach', desc: 'Follow industry-standard methodology for comprehensive testing' },
        { title: 'Focus on Threats', desc: 'Prioritize real-world attack vectors that matter most' },
        { title: 'Flexibility', desc: 'Adapt methodology to fit your specific application needs' },
        { title: 'Community Resources', desc: 'Leverage global security community knowledge and tools' }
      ]
    },
    {
      id: 'infrastructure',
      icon: <FaServer />,
      title: 'Infrastructure',
      fullTitle: 'Infrastructure Security Assessment',
      description: 'An Infrastructure Security Assessment (ISA) is a comprehensive evaluation of an organization\'s IT infrastructure to identify vulnerabilities, security misconfigurations, and potential attack vectors. It plays a crucial role in safeguarding critical systems and data from cyber threats. This assessment draws upon methodologies from frameworks like NIST and penetration testing to provide a robust security posture.',
      methodology: {
        title: 'NIST Framework Methodology',
        subtitle: 'Following a structured approach ensures a thorough and effective ISA aligned with NIST SP 800-30:',
        items: [
          { title: 'Planning and Scoping', desc: 'Identify high-risk assets and prioritize them for comprehensive testing' },
          { title: 'Information Gathering', desc: 'Collect data about network topology, systems, and existing security controls' },
          { title: 'Vulnerability Scanning', desc: 'Identify misconfigurations and vulnerabilities across the entire infrastructure' },
          { title: 'Data Analysis and Reporting', desc: 'Evaluate findings and assess potential impact on the organization' },
          { title: 'Remediation and Follow-up', desc: 'Provide actionable recommendations and ongoing support' }
        ]
      },
      benefits: [
        { title: 'Improved Security Posture', desc: 'Strengthen defenses across your entire IT infrastructure' },
        { title: 'Regulatory Compliance', desc: 'Meet industry standards and regulatory requirements' },
        { title: 'Proactive Risk Management', desc: 'Identify and address risks before they become incidents' },
        { title: 'Enhanced Decision-making', desc: 'Make informed security investments based on real data' }
      ]
    },
    {
      id: 'ot-iot',
      icon: <FaRobot />,
      title: 'OT & IoT',
      fullTitle: 'OT and IoT Cyber Assessments',
      description: 'OT and IoT cyber assessments are crucial for understanding and mitigating the risks associated with these interconnected systems. Operational Technology (OT) systems control physical processes in industrial environments, while IoT devices form a vast network of interconnected sensors and devices. Both are increasingly connected to the internet, expanding their attack surface and requiring specialized security assessments.',
      methodology: {
        title: 'Key Areas of OT/IoT Assessment',
        subtitle: 'Comprehensive evaluation covering six critical areas:',
        items: [
          { title: 'Asset Discovery', desc: 'Identify all devices and systems, understanding their criticality and interdependencies' },
          { title: 'Vulnerability Assessment', desc: 'Identify and prioritize vulnerabilities in devices, software, and firmware' },
          { title: 'Threat Modeling', desc: 'Analyze potential threats, attack vectors, insider threats, and physical security risks' },
          { title: 'Risk Assessment', desc: 'Evaluate likelihood and impact of potential security incidents' },
          { title: 'Security Controls Evaluation', desc: 'Assess effectiveness of firewalls, IDS, and access controls' },
          { title: 'Compliance Review', desc: 'Ensure compliance with NIST, NERC CIP, and other relevant standards' }
        ]
      },
      benefits: [
        { title: 'Critical Infrastructure Protection', desc: 'Safeguard essential systems from cyber threats' },
        { title: 'Operational Safety', desc: 'Prevent disruptions that could cause safety hazards' },
        { title: 'Compliance Assurance', desc: 'Meet mandatory regulatory requirements' },
        { title: 'Reduced Attack Surface', desc: 'Minimize exposure to potential cyber attacks' }
      ]
    },
    {
      id: 'anti-ransomware',
      icon: <FaLock />,
      title: 'Anti-Ransomware',
      fullTitle: 'Anti-Ransomware Readiness Assessment',
      description: 'Ransomware Attacks pose a significant threat to organizations, disrupting operations and causing financial losses. To effectively combat this threat, a standard Vulnerability Assessment and Penetration Testing (VAPT) might not be sufficient. An Anti-Ransomware Readiness Assessment (ARRA) leverages the MITRE ATT&CK framework to provide a targeted assessment that simulates real-world ransomware attacks.',
      methodology: {
        title: 'ARRA Methodology based on MITRE ATT&CK',
        subtitle: 'An ARRA leverages MITRE ATT&CK for targeted ransomware simulation:',
        items: [
          { title: 'Preparation', desc: 'Define scope and identify critical assets that require ransomware protection' },
          { title: 'Emulation', desc: 'Simulate ransomware tactics and techniques based on real-world attack patterns' },
          { title: 'Detection and Response', desc: 'Test your detection capabilities and incident response procedures' },
          { title: 'Reporting and Remediation', desc: 'Provide prioritized recommendations to mitigate ransomware risk' }
        ]
      },
      benefits: [
        { title: 'Targeted Ransomware Focus', desc: 'Specifically address ransomware attack methods' },
        { title: 'Real-world Attack Simulation', desc: 'Experience how ransomware operators would attack' },
        { title: 'Holistic Testing', desc: 'Test people, processes, and technology together' },
        { title: 'Prioritized Recommendations', desc: 'Get actionable steps ranked by impact' }
      ]
    },
    {
      id: 'data-breach',
      icon: <FaDatabase />,
      title: 'Data Breach',
      fullTitle: 'Deep Dark Web Data Breach Assessment',
      description: 'The Deep and Dark Web are hidden corners of the internet not indexed by traditional search engines. These spaces can harbor criminal activity, including the sale of stolen data from data breaches. Organizations that have experienced a data breach can leverage deep dark web monitoring to assess the scope of the breach and potential impact. This assessment can then be mapped to the MITRE ATT&CK framework to understand the tactics and techniques attackers might use with the stolen data.',
      methodology: {
        title: 'Deep Dark Web Monitoring Process',
        subtitle: 'Comprehensive monitoring and analysis of compromised data:',
        items: [
          { title: 'Identify Data Leaks', desc: 'Monitor hidden marketplaces and forums for your organization\'s data' },
          { title: 'Gauge Breach Severity', desc: 'Assess the type, volume, and sensitivity of compromised data' },
          { title: 'Track Attacker Activity', desc: 'Monitor discussions and sale of stolen credentials' },
          { title: 'Map TTPs to Data', desc: 'Map findings to MITRE ATT&CK to understand exploitation methods' },
          { title: 'Develop Mitigation', desc: 'Create actionable plans to address identified risks' }
        ]
      },
      benefits: [
        { title: 'Improved Threat Intelligence', desc: 'Gain insights into attacker goals and methods' },
        { title: 'Proactive Defense', desc: 'Take action before stolen data is weaponized' },
        { title: 'Targeted Incident Response', desc: 'Focus response efforts on actual threats' },
        { title: 'Early Warning System', desc: 'Detect breaches before significant damage occurs' }
      ]
    },
    {
      id: 'cyber-forensic',
      icon: <FaSearch />,
      title: 'Forensics',
      fullTitle: 'Cyber Forensic Assessment',
      description: 'A Cyber forensic assessment is a systematic investigation conducted to identify, collect, analyze, and preserve digital evidence in the aftermath of a cyber security incident. This process is crucial for legal proceedings, determining the root cause of the incident, and implementing effective mitigation strategies. The National Institute of Standards and Technology (NIST) CyberSecurity Framework provides a methodology that can be effectively applied to cyber forensic assessments.',
      methodology: {
        title: 'NIST Framework Core Functions',
        subtitle: 'The NIST Cybersecurity Framework outlines five core functions:',
        items: [
          { title: 'Identify', desc: 'Develop understanding of systems, assets, data, and capabilities to manage cybersecurity risk' },
          { title: 'Protect', desc: 'Implement appropriate safeguards to ensure delivery of critical services' },
          { title: 'Detect', desc: 'Develop and implement activities to identify cybersecurity events in a timely manner' },
          { title: 'Respond', desc: 'Take action regarding a detected cybersecurity incident to minimize impact' },
          { title: 'Recover', desc: 'Maintain resilience plans and restore capabilities impaired during incidents' }
        ]
      },
      benefits: [
        { title: 'Structured Approach', desc: 'Follow proven framework for incident investigation' },
        { title: 'Focus on Threats', desc: 'Concentrate on actual security events and their impact' },
        { title: 'Flexibility', desc: 'Adapt methodology to different types of incidents' },
        { title: 'Community Resources', desc: 'Leverage industry best practices and tools' }
      ]
    },
    {
      id: 'training',
      icon: <FaGraduationCap />,
      title: 'Training',
      fullTitle: 'Cyber Security Training',
      description: 'In today\'s digital age, cyber threats are constantly evolving. Equipping your employees with the knowledge and skills to combat these threats is no longer optional, it\'s essential. TransAsia Soft Tech offers comprehensive customized Cybersecurity Training Programs designed to address the unique needs of your organization and build a strong security culture.',
      methodology: {
        title: 'Customized Training Approach',
        subtitle: 'Our training methodology ensures maximum effectiveness:',
        items: [
          { title: 'Needs Assessment', desc: 'Evaluate current security awareness levels and identify specific knowledge gaps' },
          { title: 'Content Development', desc: 'Create targeted training materials specific to your organization\'s risks and industry' },
          { title: 'Delivery Options', desc: 'Choose from online, in-person, or hybrid training formats that fit your schedule' },
          { title: 'Hands-on Exercises', desc: 'Practice responding to simulated security incidents in a safe environment' },
          { title: 'Assessment & Certification', desc: 'Measure learning outcomes and provide completion certificates' }
        ]
      },
      benefits: [
        { title: 'Reduced Risk of Cyberattacks', desc: 'Empower employees to identify and prevent security threats' },
        { title: 'Improved Data Security', desc: 'Build awareness of data protection best practices' },
        { title: 'Enhanced Compliance', desc: 'Meet training requirements for security regulations' },
        { title: 'Increased Productivity', desc: 'Reduce time lost to security incidents and recovery' }
      ]
    }
  ];

  const currentService = services.find(s => s.id === activeTab);

  return (
    <PageContainer>
      <Helmet>
        <title>Cybersecurity Services - TransAsia Soft Tech</title>
        <meta name="description" content="Comprehensive cybersecurity assessment and training services including Red Team, Application Security, Infrastructure Security, and more." />
      </Helmet>

      <HeroSection>
        <HeroTitle>Cybersecurity Services</HeroTitle>
        <HeroSubtitle>
          Comprehensive security assessments and training programs designed to protect your organization from evolving cyber threats
        </HeroSubtitle>
      </HeroSection>

      <TabsContainer>
        <TabsHeader>
          {services.map((service) => (
            <Tab
              key={service.id}
              active={activeTab === service.id}
              onClick={() => setActiveTab(service.id)}
            >
              {service.icon}
              {service.title}
            </Tab>
          ))}
        </TabsHeader>

        <AnimatePresence mode="wait">
          {currentService && (
            <TabContent
              key={currentService.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <ContentHeader>
                <ContentIcon>{currentService.icon}</ContentIcon>
                <ContentTitle>{currentService.fullTitle}</ContentTitle>
                <ContentDescription>{currentService.description}</ContentDescription>
              </ContentHeader>

              <Section>
                <SectionHeader>
                  <SectionTitle>{currentService.methodology.title}</SectionTitle>
                  <SectionSubtitle>{currentService.methodology.subtitle}</SectionSubtitle>
                </SectionHeader>
                <MethodologyGrid>
                  {currentService.methodology.items.map((item, idx) => (
                    <MethodologyCard
                      key={idx}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.08 }}
                    >
                      <CardNumber>{idx + 1}</CardNumber>
                      <CardTitle>{item.title}</CardTitle>
                      <CardDescription>{item.desc}</CardDescription>
                    </MethodologyCard>
                  ))}
                </MethodologyGrid>
              </Section>

              <BenefitsSection>
                <SectionTitle>Key Benefits</SectionTitle>
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
                      <BenefitText>
                        <BenefitTitle>{benefit.title}</BenefitTitle>
                      </BenefitText>
                    </BenefitCard>
                  ))}
                </BenefitsGrid>
              </BenefitsSection>

              <CTASection>
                <CTAContent>
                  <CTATitle>Ready to Get Started?</CTATitle>
                  <CTAText>
                    Contact us today for a free consultation and learn how we can help secure your organization with our {currentService.fullTitle} service.
                  </CTAText>
                  <CTAButton>
                    <FaRocket /> Request Assessment <FaArrowRight />
                  </CTAButton>
                </CTAContent>
              </CTASection>
            </TabContent>
          )}
        </AnimatePresence>
      </TabsContainer>
    </PageContainer>
  );
};

export default CyberSecurityServices;
