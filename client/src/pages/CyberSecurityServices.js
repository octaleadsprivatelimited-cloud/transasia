import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaUserShield, FaRocket, FaLaptopCode, FaServer, FaRobot, FaLock, FaDatabase, FaSearch, FaGraduationCap, FaCheckCircle, FaChevronDown, FaArrowRight
} from 'react-icons/fa';

const pulse = keyframes`
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.05); opacity: 0.8; }
`;

const lineGrow = keyframes`
  from { height: 0; }
  to { height: 100%; }
`;

const PageContainer = styled.div`
  min-height: 100vh;
  padding-top: 80px;
  background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
`;

const HeroSection = styled.section`
  padding: 80px 40px 60px;
  text-align: center;
  background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);

  @media (max-width: 768px) {
    padding: 60px 20px 40px;
  }
`;

const HeroTitle = styled(motion.h1)`
  font-size: 4rem;
  font-weight: 900;
  color: #0f172a;
  margin-bottom: 20px;
  letter-spacing: -2px;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    letter-spacing: -1px;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.3rem;
  color: #64748b;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.7;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const TimelineContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 40px 100px;
  position: relative;

  @media (max-width: 768px) {
    padding: 60px 20px 80px;
  }
`;

const TimelineLine = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  width: 3px;
  height: 100%;
  background: linear-gradient(180deg, transparent 0%, #e2e8f0 10%, #e2e8f0 90%, transparent 100%);
  transform: translateX(-50%);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 0;
    background: linear-gradient(180deg, #3b82f6 0%, #8b5cf6 100%);
    animation: ${lineGrow} 2s ease-out forwards;
  }

  @media (max-width: 768px) {
    left: 30px;
  }
`;

const TimelineItem = styled(motion.div)`
  display: flex;
  align-items: center;
  margin-bottom: 80px;
  position: relative;

  &:nth-child(even) {
    flex-direction: row-reverse;

    @media (max-width: 768px) {
      flex-direction: row;
    }
  }

  @media (max-width: 768px) {
    margin-bottom: 60px;
  }
`;

const TimelineDot = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  border: 5px solid #ffffff;
  box-shadow: 0 0 0 8px rgba(59, 130, 246, 0.1), 0 8px 24px rgba(59, 130, 246, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: white;
  z-index: 2;
  animation: ${pulse} 2s ease-in-out infinite;

  @media (max-width: 768px) {
    left: 30px;
    width: 50px;
    height: 50px;
    font-size: 1.2rem;
  }
`;

const TimelineContent = styled.div`
  width: calc(50% - 60px);
  padding: ${props => props.isLeft ? '0 60px 0 0' : '0 0 0 60px'};

  @media (max-width: 768px) {
    width: calc(100% - 80px);
    padding: 0 0 0 50px;
  }
`;

const ServiceCard = styled(motion.div)`
  background: #ffffff;
  border-radius: 24px;
  padding: 40px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid #e2e8f0;
  cursor: pointer;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: ${props => props.gradient};
    transition: height 0.4s ease;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 40px rgba(59, 130, 246, 0.15);
    border-color: #3b82f6;

    &::before {
      height: 100%;
      opacity: 0.05;
    }
  }

  @media (max-width: 768px) {
    padding: 30px;
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  margin-bottom: 20px;
`;

const CardIcon = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 18px;
  background: ${props => props.gradient};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: white;
  flex-shrink: 0;
  box-shadow: 0 8px 24px rgba(59, 130, 246, 0.3);

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
    font-size: 1.6rem;
  }
`;

const CardHeaderText = styled.div`
  flex: 1;
`;

const CardTag = styled.span`
  display: inline-block;
  padding: 6px 14px;
  background: linear-gradient(135deg, #dbeafe 0%, #e0e7ff 100%);
  color: #3b82f6;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 12px;
`;

const CardTitle = styled.h3`
  font-size: 2rem;
  font-weight: 800;
  color: #0f172a;
  margin: 0 0 12px 0;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const CardDescription = styled.p`
  font-size: 1.05rem;
  color: #64748b;
  line-height: 1.7;
  margin: 0 0 24px 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
  border-top: 1px solid #e2e8f0;
`;

const ExpandButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  svg {
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(59, 130, 246, 0.4);

    svg {
      transform: translateX(4px);
    }
  }
`;

const ExpandedContent = styled(motion.div)`
  margin-top: 30px;
  padding-top: 30px;
  border-top: 2px solid #e2e8f0;
`;

const Section = styled.div`
  margin-bottom: 40px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const SectionTitle = styled.h4`
  font-size: 1.6rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 12px;

  &::before {
    content: '';
    width: 4px;
    height: 28px;
    background: linear-gradient(180deg, #3b82f6 0%, #8b5cf6 100%);
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 1.3rem;

    &::before {
      height: 24px;
    }
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1rem;
  color: #64748b;
  margin-bottom: 24px;
  line-height: 1.6;
`;

const MethodologyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const MethodologyItem = styled.div`
  padding: 24px;
  background: #f8fafc;
  border-radius: 16px;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;

  &:hover {
    background: #ffffff;
    border-color: #3b82f6;
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(59, 130, 246, 0.1);
  }
`;

const MethodologyNumber = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  font-weight: 700;
  color: white;
  margin-bottom: 16px;
`;

const MethodologyTitle = styled.h5`
  font-size: 1.1rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 8px;
`;

const MethodologyDesc = styled.p`
  font-size: 0.95rem;
  color: #64748b;
  line-height: 1.6;
  margin: 0;
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const BenefitItem = styled.div`
  padding: 24px;
  background: linear-gradient(135deg, #dbeafe 0%, #e0e7ff 100%);
  border-radius: 16px;
  border: 1px solid #bfdbfe;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(59, 130, 246, 0.2);
  }
`;

const BenefitIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  margin-bottom: 16px;
`;

const BenefitTitle = styled.h5`
  font-size: 1.05rem;
  font-weight: 700;
  color: #1e40af;
  margin-bottom: 8px;
`;

const BenefitDesc = styled.p`
  font-size: 0.95rem;
  color: #1e40af;
  line-height: 1.6;
  margin: 0;
  opacity: 0.8;
`;

const CTASection = styled.div`
  margin-top: 40px;
  padding: 40px;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  border-radius: 20px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 30px 24px;
  }
`;

const CTATitle = styled.h4`
  font-size: 1.8rem;
  font-weight: 700;
  color: white;
  margin-bottom: 12px;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const CTAText = styled.p`
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: 24px;
  line-height: 1.6;
`;

const CTAButton = styled.button`
  padding: 16px 40px;
  background: white;
  color: #3b82f6;
  border: none;
  border-radius: 12px;
  font-size: 1.05rem;
  font-weight: 700;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }
`;

const CyberSecurityServices = () => {
  const [expandedService, setExpandedService] = useState(null);

  const services = [
    {
      id: 'red-team',
      icon: <FaUserShield />,
      title: 'Red Team Assessment',
      tag: 'Advanced',
      gradient: 'linear-gradient(135deg, #dc2626 0%, #991b1b 100%)',
      shortDesc: 'Simulate real-world cyber attacks to test your security defenses and identify vulnerabilities before malicious actors do.',
      description: 'Red teaming is a security assessment methodology where a team acts like an adversary, attempting to bypass your defenses and achieve specific objectives. This approach provides a holistic view of your security posture.',
      methodology: {
        title: 'MITRE ATT&CK Methodology',
        subtitle: 'A red team assessment using MITRE ATT&CK typically follows these stages:',
        items: [
          { title: 'Planning and Scoping', desc: 'Define objectives, rules of engagement, and success criteria for the assessment' },
          { title: 'Reconnaissance', desc: 'Gather intelligence and establish initial access to the target environment' },
          { title: 'Lateral Movement', desc: 'Navigate through the network to reach high-value targets' },
          { title: 'C2 Communication', desc: 'Deploy persistence mechanisms and establish command channels' },
          { title: 'Actions on Objectives', desc: 'Execute mission goals such as data exfiltration' }
        ]
      },
      benefits: [
        { title: 'Real Attacker View', desc: 'Experience how adversaries would approach your systems' },
        { title: 'Improved Security Posture', desc: 'Identify and fix weaknesses before real attackers exploit them' },
        { title: 'Enhanced Threat Detection', desc: 'Test and improve your monitoring and response capabilities' },
        { title: 'Proactive Risk Management', desc: 'Stay ahead of threats with actionable intelligence' }
      ]
    },
    {
      id: 'app-security',
      icon: <FaLaptopCode />,
      title: 'Application Security',
      tag: 'Essential',
      gradient: 'linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%)',
      shortDesc: 'Comprehensive security testing using OWASP 2023 methodology to identify and fix application vulnerabilities.',
      description: 'An Application Security Assessment (ASA) is a systematic process of identifying, evaluating, and documenting vulnerabilities in software applications using OWASP Testing Guide methodology.',
      methodology: {
        title: 'OWASP 2023 Methodology',
        subtitle: 'Phases of an OWASP-based Application Security Assessment:',
        items: [
          { title: 'Preparation', desc: 'Define scope, gather requirements, and establish testing parameters' },
          { title: 'Information Gathering', desc: 'Collect data about the application architecture and technologies' },
          { title: 'Threat Modeling', desc: 'Identify potential threats and attack vectors' },
          { title: 'Vulnerability Scanning', desc: 'Use automated tools to discover common security weaknesses' },
          { title: 'Manual Testing', desc: 'Perform hands-on testing to validate vulnerabilities' },
          { title: 'Reporting', desc: 'Document findings with risk ratings and remediation recommendations' }
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
      title: 'Infrastructure Security',
      tag: 'Critical',
      gradient: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
      shortDesc: 'Comprehensive evaluation using NIST framework to identify infrastructure security gaps and misconfigurations.',
      description: 'Infrastructure Security Assessment (ISA) is a comprehensive evaluation to identify vulnerabilities, security misconfigurations, and potential attack vectors using NIST Special Publication 800-30.',
      methodology: {
        title: 'NIST Framework Methodology',
        subtitle: 'Following a structured approach ensures a thorough and effective ISA:',
        items: [
          { title: 'Planning and Scoping', desc: 'Identify high-risk assets and prioritize them for testing' },
          { title: 'Information Gathering', desc: 'Collect data about network topology and security controls' },
          { title: 'Vulnerability Scanning', desc: 'Identify misconfigurations and vulnerabilities' },
          { title: 'Data Analysis', desc: 'Evaluate findings and assess potential impact' },
          { title: 'Remediation', desc: 'Provide actionable recommendations and support' }
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
      title: 'OT and IoT Security',
      tag: 'Specialized',
      gradient: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
      shortDesc: 'Specialized security assessments for Operational Technology and IoT environments ensuring operational safety.',
      description: 'OT and IoT cyber assessments are crucial for understanding and mitigating the risks associated with interconnected systems in industrial environments.',
      methodology: {
        title: 'Key Assessment Areas',
        subtitle: 'Comprehensive evaluation covering six critical areas:',
        items: [
          { title: 'Asset Discovery', desc: 'Identify all devices and systems, understanding their criticality' },
          { title: 'Vulnerability Assessment', desc: 'Identify and prioritize vulnerabilities in devices and firmware' },
          { title: 'Threat Modeling', desc: 'Analyze potential threats, attack vectors, and insider risks' },
          { title: 'Risk Assessment', desc: 'Evaluate likelihood and impact of potential security incidents' },
          { title: 'Security Controls', desc: 'Assess effectiveness of firewalls, IDS, and access controls' },
          { title: 'Compliance Review', desc: 'Ensure compliance with NIST, NERC CIP, and relevant standards' }
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
      tag: 'High Priority',
      gradient: 'linear-gradient(135deg, #d97706 0%, #b45309 100%)',
      shortDesc: 'Comprehensive ransomware preparedness assessment using MITRE ATT&CK to test defenses and response capabilities.',
      description: 'Anti-Ransomware Readiness Assessment (ARRA) leverages the MITRE ATT&CK framework to simulate real-world ransomware attacks and test your organization\'s preparedness.',
      methodology: {
        title: 'ARRA Methodology',
        subtitle: 'An ARRA leverages MITRE ATT&CK for targeted ransomware simulation:',
        items: [
          { title: 'Preparation', desc: 'Define scope and identify critical assets requiring ransomware protection' },
          { title: 'Emulation', desc: 'Simulate ransomware tactics and techniques based on real-world attack patterns' },
          { title: 'Detection and Response', desc: 'Test your detection capabilities and incident response procedures' },
          { title: 'Remediation', desc: 'Provide prioritized recommendations to mitigate ransomware risk' }
        ]
      },
      benefits: [
        { title: 'Targeted Ransomware Focus', desc: 'Specifically address ransomware attack methods' },
        { title: 'Real-world Simulation', desc: 'Experience how ransomware operators would attack' },
        { title: 'Holistic Testing', desc: 'Test people, processes, and technology together' },
        { title: 'Prioritized Recommendations', desc: 'Get actionable steps ranked by impact' }
      ]
    },
    {
      id: 'data-breach',
      icon: <FaDatabase />,
      title: 'Data Breach Assessment',
      tag: 'Intelligence',
      gradient: 'linear-gradient(135deg, #db2777 0%, #be185d 100%)',
      shortDesc: 'Monitor deep and dark web for stolen data and map findings to MITRE ATT&CK for proactive threat intelligence.',
      description: 'Deep Dark Web monitoring to identify stolen data from breaches and map findings to MITRE ATT&CK framework for understanding attacker tactics.',
      methodology: {
        title: 'Monitoring Process',
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
      title: 'Cyber Forensics',
      tag: 'Investigation',
      gradient: 'linear-gradient(135deg, #0891b2 0%, #0e7490 100%)',
      shortDesc: 'Systematic investigation to identify, collect, analyze, and preserve digital evidence using NIST framework.',
      description: 'Cyber forensic assessment is a systematic investigation to identify, collect, analyze, and preserve digital evidence using NIST CyberSecurity Framework.',
      methodology: {
        title: 'NIST Framework Functions',
        subtitle: 'The NIST Cybersecurity Framework outlines five core functions:',
        items: [
          { title: 'Identify', desc: 'Develop understanding of systems, assets, and capabilities to manage risk' },
          { title: 'Protect', desc: 'Implement appropriate safeguards to ensure delivery of critical services' },
          { title: 'Detect', desc: 'Develop and implement activities to identify cybersecurity events' },
          { title: 'Respond', desc: 'Take action regarding a detected cybersecurity incident' },
          { title: 'Recover', desc: 'Maintain plans for resilience and restore impaired capabilities' }
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
      title: 'Security Training',
      tag: 'Essential',
      gradient: 'linear-gradient(135deg, #0d9488 0%, #0f766e 100%)',
      shortDesc: 'Customized cybersecurity training programs designed to empower your workforce and build strong security culture.',
      description: 'Comprehensive customized Cybersecurity Training Programs designed to address the unique needs of your organization and build a strong security culture.',
      methodology: {
        title: 'Training Approach',
        subtitle: 'Our training methodology ensures maximum effectiveness:',
        items: [
          { title: 'Needs Assessment', desc: 'Evaluate current security awareness levels and identify knowledge gaps' },
          { title: 'Content Development', desc: 'Create targeted training materials specific to your organization\'s risks' },
          { title: 'Delivery Options', desc: 'Choose from online, in-person, or hybrid training formats' },
          { title: 'Hands-on Exercises', desc: 'Practice responding to simulated security incidents' },
          { title: 'Certification', desc: 'Measure learning outcomes and provide completion certificates' }
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

  const toggleService = (id) => {
    setExpandedService(expandedService === id ? null : id);
  };

  return (
    <PageContainer>
      <Helmet>
        <title>Cybersecurity Services - TransAsia Soft Tech</title>
        <meta name="description" content="Comprehensive cybersecurity assessment and training services" />
      </Helmet>

      <HeroSection>
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
          Comprehensive security assessments and training programs designed to protect your organization
        </HeroSubtitle>
      </HeroSection>

      <TimelineContainer>
        <TimelineLine />
        {services.map((service, index) => (
          <TimelineItem
            key={service.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            <TimelineDot>{service.icon}</TimelineDot>
            <TimelineContent isLeft={index % 2 === 0}>
              <ServiceCard gradient={service.gradient}>
                <CardHeader>
                  <CardIcon gradient={service.gradient}>{service.icon}</CardIcon>
                  <CardHeaderText>
                    <CardTag>{service.tag}</CardTag>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeaderText>
                </CardHeader>
                <CardDescription>{service.shortDesc}</CardDescription>
                <CardFooter>
                  <ExpandButton onClick={() => toggleService(service.id)}>
                    {expandedService === service.id ? 'Show Less' : 'Learn More'} 
                    <FaArrowRight style={{ 
                      transform: expandedService === service.id ? 'rotate(-90deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease'
                    }} />
                  </ExpandButton>
                </CardFooter>

                <AnimatePresence>
                  {expandedService === service.id && (
                    <ExpandedContent
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Section>
                        <p style={{ fontSize: '1.05rem', color: '#64748b', lineHeight: '1.7', marginBottom: '30px' }}>
                          {service.description}
                        </p>
                      </Section>

                      <Section>
                        <SectionTitle>{service.methodology.title}</SectionTitle>
                        <SectionSubtitle>{service.methodology.subtitle}</SectionSubtitle>
                        <MethodologyGrid>
                          {service.methodology.items.map((item, idx) => (
                            <MethodologyItem key={idx}>
                              <MethodologyNumber>{idx + 1}</MethodologyNumber>
                              <MethodologyTitle>{item.title}</MethodologyTitle>
                              <MethodologyDesc>{item.desc}</MethodologyDesc>
                            </MethodologyItem>
                          ))}
                        </MethodologyGrid>
                      </Section>

                      <Section>
                        <SectionTitle>Key Benefits</SectionTitle>
                        <BenefitsGrid>
                          {service.benefits.map((benefit, idx) => (
                            <BenefitItem key={idx}>
                              <BenefitIcon>
                                <FaCheckCircle />
                              </BenefitIcon>
                              <BenefitTitle>{benefit.title}</BenefitTitle>
                              <BenefitDesc>{benefit.desc}</BenefitDesc>
                            </BenefitItem>
                          ))}
                        </BenefitsGrid>
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
                    </ExpandedContent>
                  )}
                </AnimatePresence>
              </ServiceCard>
            </TimelineContent>
          </TimelineItem>
        ))}
      </TimelineContainer>
    </PageContainer>
  );
};

export default CyberSecurityServices;
