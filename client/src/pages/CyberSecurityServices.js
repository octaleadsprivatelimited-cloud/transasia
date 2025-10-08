import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaUserShield, FaRocket, FaLaptopCode, FaServer, FaRobot, FaLock, FaDatabase, FaSearch, FaGraduationCap, FaCheckCircle, FaTimes, FaArrowRight
} from 'react-icons/fa';

const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
`;

const shimmer = keyframes`
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
`;

const PageContainer = styled.div`
  min-height: 100vh;
  padding-top: 80px;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
  position: relative;
  overflow-x: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 600px;
    background: radial-gradient(circle at 50% 0%, rgba(59, 130, 246, 0.15) 0%, transparent 70%);
    pointer-events: none;
  }
`;

const HeroSection = styled.section`
  padding: 80px 40px 60px;
  text-align: center;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 60px 20px 40px;
  }
`;

const HeroTitle = styled(motion.h1)`
  font-size: 4.5rem;
  font-weight: 900;
  background: linear-gradient(135deg, #ffffff 0%, #60a5fa 50%, #a78bfa 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 24px;
  letter-spacing: -3px;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    letter-spacing: -1px;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.7);
  max-width: 700px;
  margin: 0 auto 40px;
  line-height: 1.7;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const BentoGrid = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px 100px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 24px;
  position: relative;
  z-index: 1;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(6, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px 60px;
    gap: 20px;
  }
`;

const BentoCard = styled(motion.div)`
  grid-column: span ${props => props.span || 4};
  min-height: ${props => props.height || '400px'};
  border-radius: 24px;
  padding: 40px;
  background: ${props => props.gradient || 'rgba(30, 41, 59, 0.5)'};
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.4s ease;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${props => props.bgImage ? `url(${props.bgImage}) center/cover` : 'none'};
    opacity: ${props => props.bgImage ? '0.08' : '0'};
    transition: opacity 0.4s ease, transform 0.4s ease;
  }

  &:hover {
    transform: translateY(-8px);
    border-color: rgba(59, 130, 246, 0.5);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(59, 130, 246, 0.3);

    &::before {
      opacity: ${props => props.bgImage ? '0.15' : '0'};
      transform: scale(1.1);
    }
  }

  @media (max-width: 1024px) {
    grid-column: span ${props => props.spanTablet || 6};
  }

  @media (max-width: 768px) {
    grid-column: span 1;
    min-height: 350px;
    padding: 30px;
  }
`;

const CardHeader = styled.div`
  position: relative;
  z-index: 1;
`;

const CardIcon = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.2rem;
  color: white;
  margin-bottom: 24px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  animation: ${float} 4s ease-in-out infinite;

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
    font-size: 1.8rem;
  }
`;

const CardTag = styled.span`
  display: inline-block;
  padding: 6px 14px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  color: white;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 16px;
`;

const CardTitle = styled.h3`
  font-size: 2rem;
  font-weight: 800;
  color: white;
  margin-bottom: 16px;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const CardDescription = styled.p`
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.7;
  margin-bottom: 24px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const CardFooter = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const LearnMoreLink = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1.05rem;
  font-weight: 600;
  color: white;
  transition: gap 0.3s ease;

  svg {
    transition: transform 0.3s ease;
  }

  ${BentoCard}:hover & {
    gap: 12px;

    svg {
      transform: translateX(4px);
    }
  }
`;

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(12px);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  overflow-y: auto;
`;

const ModalContent = styled(motion.div)`
  background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
  border-radius: 32px;
  max-width: 1000px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 25px 100px rgba(0, 0, 0, 0.5);

  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(59, 130, 246, 0.3);
    border-radius: 10px;

    &:hover {
      background: rgba(59, 130, 246, 0.5);
    }
  }
`;

const ModalHeader = styled.div`
  padding: 60px;
  background: ${props => props.gradient};
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url(${props => props.bgImage}) center/cover;
    opacity: 0.1;
  }

  @media (max-width: 768px) {
    padding: 40px 30px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 30px;
  right: 30px;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.15);
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
    background: rgba(255, 255, 255, 0.25);
    transform: rotate(90deg);
  }
`;

const ModalIconTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
`;

const ModalIcon = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: white;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
    font-size: 2.5rem;
  }
`;

const ModalTitle = styled.h2`
  font-size: 3rem;
  font-weight: 800;
  color: white;
  margin: 0;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ModalBody = styled.div`
  padding: 60px;

  @media (max-width: 768px) {
    padding: 40px 30px;
  }
`;

const ModalDescription = styled.p`
  font-size: 1.15rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.8;
  margin-bottom: 50px;
`;

const Section = styled.div`
  margin-bottom: 50px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const SectionTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  color: white;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 12px;

  &::before {
    content: '';
    width: 5px;
    height: 36px;
    background: linear-gradient(180deg, #3b82f6 0%, #8b5cf6 100%);
    border-radius: 3px;
  }

  @media (max-width: 768px) {
    font-size: 1.6rem;

    &::before {
      height: 30px;
    }
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 30px;
`;

const ItemsGrid = styled.div`
  display: grid;
  gap: 20px;
`;

const Item = styled.div`
  padding: 24px 28px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
  display: flex;
  gap: 20px;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(59, 130, 246, 0.5);
    transform: translateX(5px);
  }
`;

const ItemNumber = styled.div`
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
  flex-shrink: 0;
`;

const ItemContent = styled.div`
  flex: 1;
`;

const ItemTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 700;
  color: white;
  margin-bottom: 8px;
`;

const ItemDesc = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin: 0;
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
`;

const BenefitItem = styled.div`
  padding: 28px;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 16px;
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(59, 130, 246, 0.5);
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(59, 130, 246, 0.2);
  }
`;

const BenefitIconWrapper = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  color: white;
  font-size: 1.3rem;
`;

const BenefitTitle = styled.h5`
  font-size: 1.1rem;
  font-weight: 700;
  color: white;
  margin-bottom: 8px;
`;

const BenefitDesc = styled.p`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin: 0;
`;

const CTASection = styled.div`
  margin-top: 50px;
  padding: 50px;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  border-radius: 24px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 40px 30px;
  }
`;

const CTATitle = styled.h4`
  font-size: 2rem;
  font-weight: 700;
  color: white;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const CTAText = styled.p`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: 30px;
  line-height: 1.7;
`;

const CTAButton = styled.button`
  padding: 18px 45px;
  background: white;
  color: #3b82f6;
  border: none;
  border-radius: 14px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 12px;
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
      tag: 'Advanced',
      span: 6,
      spanTablet: 6,
      height: '500px',
      gradient: 'linear-gradient(135deg, rgba(220, 38, 38, 0.2) 0%, rgba(153, 27, 27, 0.3) 100%)',
      bgImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200',
      shortDesc: 'Simulate real-world cyber attacks to test your security defenses and identify vulnerabilities before malicious actors do.',
      description: 'Red teaming is a security assessment methodology where a team acts like an adversary, attempting to bypass your defenses and achieve specific objectives. This approach provides a holistic view of your security posture.',
      methodology: {
        title: 'MITRE ATT&CK Methodology',
        subtitle: 'A red team assessment using MITRE ATT&CK typically follows these stages:',
        items: [
          { title: 'Planning and Scoping', desc: 'Define objectives, rules of engagement, and success criteria' },
          { title: 'Reconnaissance', desc: 'Gather intelligence and establish initial access' },
          { title: 'Lateral Movement', desc: 'Navigate through the network to reach high-value targets' },
          { title: 'C2 Communication', desc: 'Deploy persistence and establish command channels' },
          { title: 'Actions on Objectives', desc: 'Execute mission goals like data exfiltration' }
        ]
      },
      benefits: [
        { title: 'Real Attacker View', desc: 'Experience how adversaries approach your systems' },
        { title: 'Improved Posture', desc: 'Identify and fix weaknesses before exploitation' },
        { title: 'Enhanced Detection', desc: 'Test monitoring and response capabilities' },
        { title: 'Risk Management', desc: 'Stay ahead with actionable intelligence' }
      ]
    },
    {
      id: 'app-security',
      icon: <FaLaptopCode />,
      title: 'Application Security',
      tag: 'Essential',
      span: 6,
      spanTablet: 6,
      height: '500px',
      gradient: 'linear-gradient(135deg, rgba(124, 58, 237, 0.2) 0%, rgba(91, 33, 182, 0.3) 100%)',
      bgImage: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1200',
      shortDesc: 'Comprehensive security testing using OWASP 2023 methodology to identify and fix application vulnerabilities.',
      description: 'An Application Security Assessment (ASA) is a systematic process of identifying, evaluating, and documenting vulnerabilities in software applications using OWASP Testing Guide methodology.',
      methodology: {
        title: 'OWASP 2023 Methodology',
        subtitle: 'Phases of an OWASP-based Application Security Assessment:',
        items: [
          { title: 'Preparation', desc: 'Define scope and establish testing parameters' },
          { title: 'Information Gathering', desc: 'Collect data about application architecture' },
          { title: 'Threat Modeling', desc: 'Identify potential threats and attack vectors' },
          { title: 'Vulnerability Scanning', desc: 'Use automated tools for common weaknesses' },
          { title: 'Manual Testing', desc: 'Hands-on validation and exploitation' },
          { title: 'Reporting', desc: 'Document findings with remediation steps' }
        ]
      },
      benefits: [
        { title: 'Structured Approach', desc: 'Follow industry-standard methodology' },
        { title: 'Focus on Threats', desc: 'Prioritize real-world attack vectors' },
        { title: 'Flexibility', desc: 'Adapt to your specific needs' },
        { title: 'Community Resources', desc: 'Leverage global security knowledge' }
      ]
    },
    {
      id: 'infrastructure',
      icon: <FaServer />,
      title: 'Infrastructure Security',
      tag: 'Critical',
      span: 4,
      spanTablet: 3,
      height: '450px',
      gradient: 'linear-gradient(135deg, rgba(37, 99, 235, 0.2) 0%, rgba(30, 64, 175, 0.3) 100%)',
      bgImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200',
      shortDesc: 'Comprehensive evaluation using NIST framework to identify infrastructure security gaps.',
      description: 'Infrastructure Security Assessment (ISA) is a comprehensive evaluation to identify vulnerabilities, misconfigurations, and attack vectors using NIST SP 800-30.',
      methodology: {
        title: 'NIST Framework',
        subtitle: 'Structured approach aligned with NIST Special Publication 800-30:',
        items: [
          { title: 'Planning', desc: 'Identify high-risk assets for testing' },
          { title: 'Information Gathering', desc: 'Collect network and system data' },
          { title: 'Scanning', desc: 'Identify misconfigurations and vulnerabilities' },
          { title: 'Analysis', desc: 'Evaluate findings and assess impact' },
          { title: 'Remediation', desc: 'Provide actionable recommendations' }
        ]
      },
      benefits: [
        { title: 'Security Posture', desc: 'Strengthen IT infrastructure defenses' },
        { title: 'Compliance', desc: 'Meet regulatory requirements' },
        { title: 'Risk Management', desc: 'Address risks proactively' },
        { title: 'Decision-making', desc: 'Make informed security investments' }
      ]
    },
    {
      id: 'ot-iot',
      icon: <FaRobot />,
      title: 'OT & IoT Security',
      tag: 'Specialized',
      span: 4,
      spanTablet: 3,
      height: '450px',
      gradient: 'linear-gradient(135deg, rgba(5, 150, 105, 0.2) 0%, rgba(4, 120, 87, 0.3) 100%)',
      bgImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200',
      shortDesc: 'Specialized assessments for OT and IoT environments ensuring operational safety.',
      description: 'OT and IoT cyber assessments are crucial for understanding risks in interconnected industrial systems and IoT devices.',
      methodology: {
        title: 'Assessment Areas',
        subtitle: 'Comprehensive evaluation covering six critical areas:',
        items: [
          { title: 'Asset Discovery', desc: 'Identify all devices and their criticality' },
          { title: 'Vulnerability Assessment', desc: 'Find and prioritize vulnerabilities' },
          { title: 'Threat Modeling', desc: 'Analyze threats and attack vectors' },
          { title: 'Risk Assessment', desc: 'Evaluate incident likelihood and impact' },
          { title: 'Security Controls', desc: 'Assess firewall and IDS effectiveness' },
          { title: 'Compliance', desc: 'Ensure NIST and NERC CIP compliance' }
        ]
      },
      benefits: [
        { title: 'Infrastructure Protection', desc: 'Safeguard essential systems' },
        { title: 'Operational Safety', desc: 'Prevent safety hazards' },
        { title: 'Compliance', desc: 'Meet regulatory requirements' },
        { title: 'Reduced Attack Surface', desc: 'Minimize exposure to threats' }
      ]
    },
    {
      id: 'anti-ransomware',
      icon: <FaLock />,
      title: 'Anti-Ransomware',
      tag: 'Priority',
      span: 4,
      spanTablet: 6,
      height: '450px',
      gradient: 'linear-gradient(135deg, rgba(217, 119, 6, 0.2) 0%, rgba(180, 83, 9, 0.3) 100%)',
      bgImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200',
      shortDesc: 'Test ransomware preparedness using MITRE ATT&CK framework simulation.',
      description: 'Anti-Ransomware Readiness Assessment (ARRA) leverages MITRE ATT&CK to simulate real-world ransomware attacks.',
      methodology: {
        title: 'ARRA Methodology',
        subtitle: 'Targeted assessment based on MITRE ATT&CK:',
        items: [
          { title: 'Preparation', desc: 'Define scope and identify critical assets' },
          { title: 'Emulation', desc: 'Simulate ransomware tactics and techniques' },
          { title: 'Detection', desc: 'Test detection and response procedures' },
          { title: 'Remediation', desc: 'Provide prioritized recommendations' }
        ]
      },
      benefits: [
        { title: 'Ransomware Focus', desc: 'Target specific attack methods' },
        { title: 'Real Simulation', desc: 'Experience actual attack scenarios' },
        { title: 'Holistic Testing', desc: 'Test people, processes, technology' },
        { title: 'Prioritized Steps', desc: 'Get actionable recommendations' }
      ]
    },
    {
      id: 'data-breach',
      icon: <FaDatabase />,
      title: 'Data Breach Assessment',
      tag: 'Intelligence',
      span: 4,
      spanTablet: 6,
      height: '450px',
      gradient: 'linear-gradient(135deg, rgba(219, 39, 119, 0.2) 0%, rgba(190, 24, 93, 0.3) 100%)',
      bgImage: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1200',
      shortDesc: 'Monitor deep/dark web for stolen data and map to MITRE ATT&CK.',
      description: 'Deep Dark Web monitoring to identify stolen data and map findings to MITRE ATT&CK for understanding attacker tactics.',
      methodology: {
        title: 'Monitoring Process',
        subtitle: 'Comprehensive monitoring and analysis:',
        items: [
          { title: 'Identify Leaks', desc: 'Monitor hidden marketplaces for your data' },
          { title: 'Gauge Severity', desc: 'Assess type and volume of compromise' },
          { title: 'Track Activity', desc: 'Monitor attacker discussions' },
          { title: 'Map TTPs', desc: 'Understand exploitation methods' },
          { title: 'Mitigation', desc: 'Develop actionable plans' }
        ]
      },
      benefits: [
        { title: 'Threat Intelligence', desc: 'Gain insights into attacker goals' },
        { title: 'Proactive Defense', desc: 'Act before data is weaponized' },
        { title: 'Targeted Response', desc: 'Focus on actual threats' },
        { title: 'Early Warning', desc: 'Detect breaches early' }
      ]
    },
    {
      id: 'cyber-forensic',
      icon: <FaSearch />,
      title: 'Cyber Forensics',
      tag: 'Investigation',
      span: 4,
      spanTablet: 6,
      height: '450px',
      gradient: 'linear-gradient(135deg, rgba(8, 145, 178, 0.2) 0%, rgba(14, 116, 144, 0.3) 100%)',
      bgImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200',
      shortDesc: 'Systematic investigation using NIST framework to preserve digital evidence.',
      description: 'Cyber forensic assessment is a systematic investigation using NIST CyberSecurity Framework to identify, collect, analyze, and preserve digital evidence.',
      methodology: {
        title: 'NIST Framework',
        subtitle: 'The NIST Cybersecurity Framework outlines five core functions:',
        items: [
          { title: 'Identify', desc: 'Understand systems and cybersecurity risk' },
          { title: 'Protect', desc: 'Implement safeguards for critical services' },
          { title: 'Detect', desc: 'Identify cybersecurity events timely' },
          { title: 'Respond', desc: 'Take action to minimize impact' },
          { title: 'Recover', desc: 'Restore impaired capabilities' }
        ]
      },
      benefits: [
        { title: 'Structured Approach', desc: 'Follow proven investigation framework' },
        { title: 'Focus on Threats', desc: 'Concentrate on actual security events' },
        { title: 'Flexibility', desc: 'Adapt to different incident types' },
        { title: 'Best Practices', desc: 'Leverage industry resources' }
      ]
    },
    {
      id: 'training',
      icon: <FaGraduationCap />,
      title: 'Security Training',
      tag: 'Essential',
      span: 4,
      spanTablet: 6,
      height: '450px',
      gradient: 'linear-gradient(135deg, rgba(13, 148, 136, 0.2) 0%, rgba(15, 118, 110, 0.3) 100%)',
      bgImage: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200',
      shortDesc: 'Customized training programs to empower your workforce and build security culture.',
      description: 'Comprehensive customized Cybersecurity Training Programs designed to address your organization\'s unique needs and build a strong security culture.',
      methodology: {
        title: 'Training Approach',
        subtitle: 'Our methodology ensures maximum effectiveness:',
        items: [
          { title: 'Needs Assessment', desc: 'Evaluate security awareness levels' },
          { title: 'Content Development', desc: 'Create targeted training materials' },
          { title: 'Delivery Options', desc: 'Online, in-person, or hybrid formats' },
          { title: 'Hands-on Exercises', desc: 'Practice with simulated incidents' },
          { title: 'Certification', desc: 'Measure outcomes and certify completion' }
        ]
      },
      benefits: [
        { title: 'Reduced Risk', desc: 'Empower employees to prevent threats' },
        { title: 'Data Security', desc: 'Build protection best practices' },
        { title: 'Compliance', desc: 'Meet training requirements' },
        { title: 'Productivity', desc: 'Reduce time lost to incidents' }
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

      <BentoGrid>
        {services.map((service, index) => (
          <BentoCard
            key={service.id}
            span={service.span}
            spanTablet={service.spanTablet}
            height={service.height}
            gradient={service.gradient}
            bgImage={service.bgImage}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            onClick={() => openModal(service)}
          >
            <CardHeader>
              <CardTag>{service.tag}</CardTag>
              <CardIcon>{service.icon}</CardIcon>
              <CardTitle>{service.title}</CardTitle>
              <CardDescription>{service.shortDesc}</CardDescription>
            </CardHeader>
            <CardFooter>
              <LearnMoreLink>
                View Details <FaArrowRight />
              </LearnMoreLink>
            </CardFooter>
          </BentoCard>
        ))}
      </BentoGrid>

      <AnimatePresence>
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
              <CloseButton onClick={closeModal}>
                <FaTimes />
              </CloseButton>

              <ModalHeader gradient={selectedService.gradient} bgImage={selectedService.bgImage}>
                <ModalIconTitle>
                  <ModalIcon>{selectedService.icon}</ModalIcon>
                  <ModalTitle>{selectedService.title}</ModalTitle>
                </ModalIconTitle>
              </ModalHeader>

              <ModalBody>
                <ModalDescription>{selectedService.description}</ModalDescription>

                <Section>
                  <SectionTitle>{selectedService.methodology.title}</SectionTitle>
                  <SectionSubtitle>{selectedService.methodology.subtitle}</SectionSubtitle>
                  <ItemsGrid>
                    {selectedService.methodology.items.map((item, idx) => (
                      <Item key={idx}>
                        <ItemNumber>{idx + 1}</ItemNumber>
                        <ItemContent>
                          <ItemTitle>{item.title}</ItemTitle>
                          <ItemDesc>{item.desc}</ItemDesc>
                        </ItemContent>
                      </Item>
                    ))}
                  </ItemsGrid>
                </Section>

                <Section>
                  <SectionTitle>Key Benefits</SectionTitle>
                  <BenefitsGrid>
                    {selectedService.benefits.map((benefit, idx) => (
                      <BenefitItem key={idx}>
                        <BenefitIconWrapper>
                          <FaCheckCircle />
                        </BenefitIconWrapper>
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
                    <FaRocket /> Request Assessment <FaArrowRight />
                  </CTAButton>
                </CTASection>
              </ModalBody>
            </ModalContent>
          </ModalOverlay>
        )}
      </AnimatePresence>
    </PageContainer>
  );
};

export default CyberSecurityServices;
