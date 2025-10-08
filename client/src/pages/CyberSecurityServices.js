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

const shimmer = keyframes`
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
`;

const PageContainer = styled.div`
  min-height: 100vh;
  padding-top: 80px;
  background: linear-gradient(135deg, #0a1929 0%, #1a2332 50%, #0a1929 100%);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 500px;
    background: radial-gradient(circle at 50% 0%, rgba(30, 58, 138, 0.3) 0%, transparent 70%);
    pointer-events: none;
  }
`;

const HeroSection = styled.section`
  padding: 100px 40px 80px;
  text-align: center;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 80px 20px 60px;
  }
`;

const HeroTitle = styled.h1`
  font-size: 4.5rem;
  font-weight: 900;
  background: linear-gradient(135deg, #ffffff 0%, #60a5fa 50%, #3b82f6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 24px;
  letter-spacing: -3px;
  text-shadow: 0 0 80px rgba(59, 130, 246, 0.5);

  @media (max-width: 768px) {
    font-size: 2.8rem;
    letter-spacing: -1px;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.4rem;
  color: rgba(255, 255, 255, 0.8);
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.8;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const TabsContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px 100px;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 0 20px 80px;
  }
`;

const TabsHeader = styled.div`
  display: flex;
  gap: 10px;
  padding: 10px;
  background: rgba(30, 58, 138, 0.3);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 20px;
  overflow-x: auto;
  margin-bottom: 50px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);

  /* Custom scrollbar */
  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(59, 130, 246, 0.5);
    border-radius: 3px;

    &:hover {
      background: rgba(59, 130, 246, 0.7);
    }
  }

  @media (max-width: 768px) {
    gap: 8px;
    padding: 8px;
  }
`;

const Tab = styled.button`
  flex: 1;
  min-width: fit-content;
  padding: 18px 28px;
  background: ${props => props.active 
    ? 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)' 
    : 'transparent'};
  border: ${props => props.active 
    ? '1px solid rgba(59, 130, 246, 0.5)' 
    : '1px solid transparent'};
  border-radius: 14px;
  font-size: 1rem;
  font-weight: ${props => props.active ? '700' : '600'};
  color: ${props => props.active ? '#ffffff' : 'rgba(255, 255, 255, 0.6)'};
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  box-shadow: ${props => props.active 
    ? '0 4px 20px rgba(59, 130, 246, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)' 
    : 'none'};
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
    color: #ffffff;
    background: ${props => props.active 
      ? 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)' 
      : 'rgba(30, 58, 138, 0.5)'};
    border-color: rgba(59, 130, 246, 0.3);
    transform: translateY(-2px);

    &::before {
      left: 100%;
    }
  }

  svg {
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    padding: 14px 20px;
    font-size: 0.9rem;

    svg {
      font-size: 1rem;
    }
  }
`;

const TabContent = styled(motion.div)`
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 32px;
  padding: 70px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);

  @media (max-width: 768px) {
    padding: 50px 30px;
    border-radius: 24px;
  }
`;

const ContentHeader = styled.div`
  text-align: center;
  margin-bottom: 70px;
`;

const ContentIcon = styled.div`
  width: 120px;
  height: 120px;
  margin: 0 auto 40px;
  border-radius: 30px;
  background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3.5rem;
  color: white;
  box-shadow: 0 20px 60px rgba(59, 130, 246, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.2);
  animation: ${float} 4s ease-in-out infinite;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: -2px;
    border-radius: 30px;
    padding: 2px;
    background: linear-gradient(135deg, #3b82f6, #1e40af);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0.5;
  }

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
    font-size: 3rem;
  }
`;

const ContentTitle = styled.h2`
  font-size: 3.2rem;
  font-weight: 900;
  background: linear-gradient(135deg, #ffffff 0%, #60a5fa 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 24px;
  letter-spacing: -2px;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const ContentDescription = styled.p`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.9;
  max-width: 900px;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 1.05rem;
  }
`;

const Section = styled.section`
  margin-bottom: 70px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const SectionHeader = styled.div`
  margin-bottom: 40px;
`;

const SectionTitle = styled.h3`
  font-size: 2.2rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 16px;
  display: inline-block;
  position: relative;
  padding-bottom: 16px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 80px;
    height: 5px;
    background: linear-gradient(90deg, #3b82f6 0%, #60a5fa 100%);
    border-radius: 3px;
    box-shadow: 0 0 20px rgba(59, 130, 246, 0.6);
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.7);
  margin-top: 16px;
`;

const MethodologyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 28px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

const MethodologyCard = styled(motion.div)`
  padding: 36px;
  background: rgba(30, 58, 138, 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 20px;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.1), transparent);
    transition: left 0.6s;
  }

  &:hover {
    background: rgba(30, 58, 138, 0.3);
    border-color: rgba(59, 130, 246, 0.5);
    box-shadow: 0 12px 40px rgba(59, 130, 246, 0.2);
    transform: translateY(-6px);

    &::before {
      left: 100%;
    }
  }
`;

const CardNumber = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 14px;
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 800;
  color: white;
  margin-bottom: 24px;
  box-shadow: 0 8px 24px rgba(59, 130, 246, 0.4);
  position: relative;

  &::after {
    content: '';
    position: absolute;
    inset: -2px;
    border-radius: 14px;
    padding: 2px;
    background: linear-gradient(135deg, #60a5fa, #3b82f6);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0.6;
  }
`;

const CardTitle = styled.h4`
  font-size: 1.35rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 14px;
`;

const CardDescription = styled.p`
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.8;
  margin: 0;
`;

const BenefitsSection = styled.div`
  background: rgba(30, 58, 138, 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 28px;
  padding: 60px;
  margin-top: 70px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%);
    animation: ${float} 8s ease-in-out infinite;
  }

  @media (max-width: 768px) {
    padding: 50px 30px;
  }
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 32px;
  margin-top: 40px;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

const BenefitCard = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  gap: 24px;
  padding: 32px;
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  transition: all 0.4s ease;

  &:hover {
    background: rgba(15, 23, 42, 0.8);
    border-color: rgba(59, 130, 246, 0.5);
    box-shadow: 0 12px 40px rgba(59, 130, 246, 0.3);
    transform: translateY(-6px);
  }
`;

const BenefitIcon = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 14px;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: white;
  font-size: 1.5rem;
  box-shadow: 0 8px 24px rgba(16, 185, 129, 0.4);
`;

const BenefitText = styled.div`
  flex: 1;
`;

const BenefitTitle = styled.h5`
  font-size: 1.2rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 8px 0;
  line-height: 1.4;
`;

const CTASection = styled.div`
  margin-top: 70px;
  padding: 70px;
  background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
  border-radius: 32px;
  text-align: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(59, 130, 246, 0.4);

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
    animation: ${float} 10s ease-in-out infinite;
  }

  @media (max-width: 768px) {
    padding: 60px 40px;
  }
`;

const CTAContent = styled.div`
  position: relative;
  z-index: 1;
`;

const CTATitle = styled.h3`
  font-size: 2.6rem;
  font-weight: 800;
  color: white;
  margin-bottom: 20px;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const CTAText = styled.p`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: 40px;
  line-height: 1.8;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: 1.05rem;
  }
`;

const CTAButton = styled.button`
  padding: 20px 50px;
  background: white;
  color: #1e3a8a;
  border: none;
  border-radius: 14px;
  font-size: 1.15rem;
  font-weight: 800;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 14px;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
    background: #f8fafc;
  }

  &:active {
    transform: translateY(-2px);
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
          { title: 'Asset Discovery', desc: 'Identify all devices and systems within the OT/IoT environment and understand their criticality' },
          { title: 'Vulnerability Assessment', desc: 'Identify and prioritize known vulnerabilities in devices, software, and firmware' },
          { title: 'Threat Modeling', desc: 'Analyze potential threats, attack vectors, and consider insider threats' },
          { title: 'Risk Assessment', desc: 'Evaluate the likelihood and impact of potential security incidents' },
          { title: 'Security Controls', desc: 'Assess the effectiveness of firewalls, IDS, and access controls' },
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
          { title: 'Preparation', desc: 'Define scope and identify critical assets that need ransomware protection' },
          { title: 'Emulation', desc: 'Simulate ransomware tactics and techniques based on real-world attack patterns' },
          { title: 'Detection and Response', desc: 'Test detection capabilities and incident response procedures' },
          { title: 'Remediation Suggestions', desc: 'Provide prioritized recommendations to mitigate ransomware risk' }
        ]
      },
      benefits: [
        { title: 'Targeted Ransomware Focus', desc: 'Specifically address ransomware attack methods' },
        { title: 'Real-world Attack Simulation', desc: 'Experience how ransomware operators would attack' },
        { title: 'Tests People, Processes & Technology', desc: 'Holistic evaluation of your entire security ecosystem' },
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
          { title: 'Gauge Breach Severity', desc: 'Assess the type, volume, and sensitivity of data compromised' },
          { title: 'Track Attacker Activity', desc: 'Monitor attacker discussions and sale of stolen credentials' },
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
