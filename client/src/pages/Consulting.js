import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  FaUserShield, FaHandshake, FaArrowRight, FaPlay, FaLock, FaGraduationCap, FaClipboardCheck
} from 'react-icons/fa';

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
`;

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const PageContainer = styled.div`
  min-height: 100vh;
  padding-top: 0;
  background: #ffffff;
  overflow-x: hidden;
`;

const HeroSection = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #0a1128 0%, #1e3a8a 50%, #1e40af 100%);
  overflow: hidden;

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

const HeroBlob = styled.div`
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
  background: linear-gradient(45deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
  backdrop-filter: blur(30px);
  animation: ${float} 6s ease-in-out infinite;
  
  &:nth-child(1) {
    top: 10%;
    left: 10%;
    animation-delay: 0s;
  }
  
  &:nth-child(2) {
    bottom: 10%;
    right: 10%;
    animation-delay: 2s;
  }
`;

const HeroContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }
`;

const HeroLeft = styled.div``;

const HeroTitle = styled(motion.h1)`
  font-size: 4rem;
  font-weight: 700;
  color: white;
  line-height: 1.3;
  margin-bottom: 24px;
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

const HeroDescription = styled(motion.p)`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.8;
  margin-bottom: 40px;
`;

const HeroButtons = styled(motion.div)`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;

  @media (max-width: 968px) {
    justify-content: center;
  }
`;

const Button = styled(motion.button)`
  padding: 18px 40px;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  border: none;
  transition: all 0.3s ease;

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(5px);
  }
`;

const PrimaryButton = styled(Button)`
  background: white;
  color: #667eea;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);

  &:hover {
    box-shadow: 0 15px 50px rgba(0, 0, 0, 0.3);
    transform: translateY(-2px);
  }
`;

const SecondaryButton = styled(Button)`
  background: transparent;
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.5);

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: white;
  }
`;

const HeroRight = styled.div`
  position: relative;
`;

const HeroCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(30px);
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 30px;
  box-shadow: 
    0 20px 50px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  position: relative;
  overflow: hidden;
  max-width: 400px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent);
  }

  &::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, transparent 70%);
    animation: ${rotate} 15s linear infinite;
  }

  @media (max-width: 968px) {
    max-width: 100%;
  }
`;

const CardTitle = styled.h3`
  color: white;
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 18px;
  text-align: center;
  position: relative;
  z-index: 1;
  letter-spacing: -0.3px;
  
  &::after {
    content: '';
    display: block;
    width: 35px;
    height: 3px;
    background: linear-gradient(90deg, #60a5fa, #3b82f6);
    margin: 10px auto 0;
    border-radius: 2px;
  }
`;

const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  position: relative;
  z-index: 1;
`;

const StatItem = styled(motion.div)`
  text-align: center;
  padding: 14px 10px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 100%);
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  &:hover {
    transform: translateY(-3px) scale(1.03);
    border-color: rgba(255, 255, 255, 0.3);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    
    &::before {
      opacity: 1;
    }
  }
`;

const StatNumber = styled.div`
  font-size: 1.8rem;
  font-weight: 900;
  background: linear-gradient(135deg, #ffffff 0%, #60a5fa 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 4px;
  line-height: 1;
`;

const StatLabel = styled.div`
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.85);
  text-transform: uppercase;
  letter-spacing: 0.8px;
  font-weight: 600;
`;

const ServicesSection = styled.section`
  padding: 120px 40px;
  background: white;
  position: relative;
`;

const SectionHeader = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 80px;
`;

const SectionBadge = styled(motion.span)`
  display: inline-block;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 8px 20px;
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 20px;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 3.5rem;
  font-weight: 900;
  color: #1a202c;
  margin-bottom: 20px;
  letter-spacing: -2px;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const SectionSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: #64748b;
  line-height: 1.8;
`;

const BentoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 24px;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

const BentoCard = styled(motion.div)`
  background: ${props => props.$gradient || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'};
  border-radius: 32px;
  padding: 50px;
  position: relative;
  overflow: hidden;
  grid-column: ${props => props.$span || 'span 6'};
  min-height: ${props => props.$height || '400px'};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 30px 80px rgba(0, 0, 0, 0.15);
  }

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  &:hover::before {
    opacity: 1;
  }

  @media (max-width: 968px) {
    grid-column: span 1;
    min-height: 350px;
    padding: 40px;
  }
`;

const BentoIcon = styled.div`
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
  margin-bottom: 30px;
`;

const BentoTitle = styled.h3`
  font-size: 2rem;
  font-weight: 800;
  color: white;
  margin-bottom: 16px;
  letter-spacing: -1px;
`;

const BentoDescription = styled.p`
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.7;
  margin-bottom: 30px;
`;

const BentoList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const BentoListItem = styled.li`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.85);
  padding: 12px 0;
  padding-left: 28px;
  position: relative;
  line-height: 1.6;

  &::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: white;
    font-weight: 700;
    font-size: 1.1rem;
  }
`;

const ProcessSection = styled.section`
  padding: 120px 40px;
  background: linear-gradient(180deg, #f8fafc 0%, #e2e8f0 100%);
  position: relative;
`;

const ProcessTimeline = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 4px;
    background: linear-gradient(180deg, #667eea 0%, #764ba2 100%);
    transform: translateX(-50%);

    @media (max-width: 968px) {
      left: 30px;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 60px;
  margin-bottom: 80px;
  align-items: center;

  &:nth-child(even) {
    direction: rtl;
    
    > * {
      direction: ltr;
    }
  }

  @media (max-width: 968px) {
    grid-template-columns: auto 1fr;
    gap: 30px;
    direction: ltr !important;

    &:nth-child(even) {
      direction: ltr;
    }
  }
`;

const TimelineContent = styled.div`
  background: white;
  padding: 40px;
  border-radius: 24px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  border: 2px solid transparent;
  transition: all 0.3s ease;

  &:hover {
    border-color: #667eea;
    transform: scale(1.02);
  }

  @media (max-width: 968px) {
    &:first-child {
      display: none;
    }
  }
`;

const TimelineNumber = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 900;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
  position: relative;
  z-index: 2;
`;

const TimelineTitle = styled.h4`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a202c;
  margin-bottom: 12px;
`;

const TimelineDescription = styled.p`
  font-size: 1rem;
  color: #64748b;
  line-height: 1.7;
`;

const TestimonialsSection = styled.section`
  padding: 120px 40px;
  background: #1a202c;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 50%, rgba(102, 126, 234, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 50%, rgba(118, 75, 162, 0.1) 0%, transparent 50%);
  }
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  max-width: 1400px;
  margin: 60px auto 0;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

const TestimonialCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 40px;
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    transform: translateY(-5px);
  }
`;

const TestimonialQuote = styled.p`
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.8;
  margin-bottom: 30px;
  font-style: italic;
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const AuthorAvatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 1.2rem;
`;

const AuthorInfo = styled.div``;

const AuthorName = styled.div`
  font-size: 1rem;
  font-weight: 700;
  color: white;
  margin-bottom: 4px;
`;

const AuthorRole = styled.div`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.6);
`;

const CTASection = styled.section`
  padding: 120px 40px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    width: 150%;
    height: 150%;
    top: -25%;
    left: -25%;
    background: 
      radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
    animation: ${rotate} 20s linear infinite;
  }
`;

const CTAContent = styled.div`
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const CTATitle = styled(motion.h2)`
  font-size: 4rem;
  font-weight: 900;
  color: white;
  margin-bottom: 24px;
  letter-spacing: -2px;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const CTADescription = styled(motion.p)`
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 50px;
  line-height: 1.8;
`;

const CTAButton = styled(motion.button)`
  background: white;
  color: #667eea;
  border: none;
  padding: 22px 60px;
  border-radius: 50px;
  font-size: 1.2rem;
  font-weight: 700;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.3);

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(5px);
  }
`;

const Consulting = () => {
  const services = [
    {
      icon: <FaUserShield />,
      title: 'Consulting',
      description: 'Strategic cybersecurity consulting services tailored to your business needs. Expert guidance on security posture, compliance, and risk management.',
      gradient: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
      span: 'span 6',
      height: '500px',
      items: [
        'Security Architecture Review',
        'Compliance Strategy Development',
        'Risk Assessment & Analysis',
        'Security Program Development',
        'Executive Advisory Services'
      ]
    },
    {
      icon: <FaLock />,
      title: 'Anti-Ransomware',
      description: 'Specialized ransomware readiness assessment and defense strategies. Protect your organization from devastating ransomware attacks with proactive measures.',
      gradient: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
      span: 'span 6',
      height: '500px',
      items: [
        'Ransomware Risk Assessment',
        'Attack Simulation & Testing',
        'Backup & Recovery Planning',
        'Incident Response Preparation',
        'Employee Awareness Training'
      ]
    },
    {
      icon: <FaGraduationCap />,
      title: 'Training',
      description: 'Comprehensive cybersecurity training programs for all skill levels. Transform your team into security champions with hands-on, practical training.',
      gradient: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
      span: 'span 6',
      height: '500px',
      items: [
        'Security Awareness Training',
        'Phishing Simulation Campaigns',
        'Technical Security Training',
        'Compliance Training Programs',
        'Custom Training Development'
      ]
    },
    {
      icon: <FaClipboardCheck />,
      title: 'GRC',
      description: 'Governance, Risk, and Compliance solutions to streamline your security operations. Automate compliance, manage risks, and improve governance.',
      gradient: 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)',
      span: 'span 6',
      height: '500px',
      items: [
        'Compliance Management',
        'Policy & Procedure Development',
        'Vendor Risk Management',
        'Audit Support & Reporting',
        'GRC Platform Implementation'
      ]
    },
    {
      icon: <FaHandshake />,
      title: 'Risk Transfer',
      description: 'Cyber insurance advisory and risk transfer strategies. Optimize coverage and protect your organization from financial impacts of cyber incidents.',
      gradient: 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)',
      span: 'span 12',
      height: '450px',
      items: [
        'Cyber Insurance Policy Review',
        'Coverage Gap Analysis',
        'Risk Quantification for Insurance',
        'Claims Support & Management',
        'Insurance Broker Coordination'
      ]
    }
  ];

  const processSteps = [
    { number: '01', title: 'Discovery & Analysis', description: 'Deep dive into your business, risks, objectives, and current security posture' },
    { number: '02', title: 'Comprehensive Assessment', description: 'Thorough evaluation of vulnerabilities, threats, and compliance requirements' },
    { number: '03', title: 'Strategic Planning', description: 'Develop customized solutions, roadmaps, and implementation strategies' },
    { number: '04', title: 'Expert Implementation', description: 'Execute with precision, expertise, and continuous monitoring' },
    { number: '05', title: 'Ongoing Support', description: 'Continuous improvement, updates, and 24/7 expert assistance' }
  ];

  const testimonials = [
    { quote: "TransAsia's ESG consulting transformed our sustainability reporting. Their expertise in BRSR compliance is unmatched.", author: 'Sarah Chen', role: 'CSO, Global Finance Corp', initial: 'S' },
    { quote: "The cyber forensics team's rapid response saved us millions. Their ransomware negotiation skills are exceptional.", author: 'Michael Rodriguez', role: 'CISO, TechVentures Inc', initial: 'M' },
    { quote: "Outstanding ERM framework implementation. They identified risks we never considered and provided actionable solutions.", author: 'Priya Sharma', role: 'CEO, Innovation Labs', initial: 'P' }
  ];

  return (
    <PageContainer>
      <Helmet>
        <title>Consulting Services | TransAsia</title>
        <meta name="description" content="Expert consulting in ESG, ERM, Cyber Insurance, and Cyber Forensics" />
      </Helmet>

      <HeroSection>
        <HeroBlob />
        <HeroBlob />
        <HeroContent>
          <HeroLeft>
            <HeroTitle
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Transform Risk Into
              <span>Strategic Advantage</span>
            </HeroTitle>
            <HeroDescription
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Expert consulting across ESG, Enterprise Risk Management, Cyber Insurance, 
              and Incident Response. Protect your business and accelerate growth with proven strategies.
            </HeroDescription>
            <HeroButtons
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <PrimaryButton whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                Get Started <FaArrowRight />
              </PrimaryButton>
              <SecondaryButton whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <FaPlay /> Watch Demo
              </SecondaryButton>
            </HeroButtons>
          </HeroLeft>
          <HeroRight>
            <HeroCard
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <CardTitle>Trusted by Industry Leaders</CardTitle>
              <StatGrid>
                <StatItem
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <StatNumber>500+</StatNumber>
                  <StatLabel>Clients</StatLabel>
                </StatItem>
                <StatItem
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <StatNumber>98%</StatNumber>
                  <StatLabel>Success Rate</StatLabel>
                </StatItem>
                <StatItem
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <StatNumber>24/7</StatNumber>
                  <StatLabel>Support</StatLabel>
                </StatItem>
                <StatItem
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <StatNumber>15+</StatNumber>
                  <StatLabel>Years</StatLabel>
                </StatItem>
              </StatGrid>
            </HeroCard>
          </HeroRight>
        </HeroContent>
      </HeroSection>

      <ServicesSection>
        <SectionHeader>
          <SectionBadge
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Services
          </SectionBadge>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Comprehensive Solutions
          </SectionTitle>
          <SectionSubtitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            From ESG evaluation to cyber forensics, we provide end-to-end consulting services tailored to your needs
          </SectionSubtitle>
        </SectionHeader>

        <BentoGrid>
          {services.map((service, index) => (
            <BentoCard
              key={index}
              $gradient={service.gradient}
              $span={service.span}
              $height={service.height}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div>
                <BentoIcon>{service.icon}</BentoIcon>
                <BentoTitle>{service.title}</BentoTitle>
                <BentoDescription>{service.description}</BentoDescription>
              </div>
              <BentoList>
                {service.items.map((item, i) => (
                  <BentoListItem key={i}>{item}</BentoListItem>
                ))}
              </BentoList>
            </BentoCard>
          ))}
        </BentoGrid>
      </ServicesSection>

      <ProcessSection>
        <SectionHeader>
          <SectionBadge
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Process
          </SectionBadge>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            How We Work
          </SectionTitle>
        </SectionHeader>

        <ProcessTimeline>
          {processSteps.map((step, index) => (
            <TimelineItem
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <TimelineContent>
                <TimelineTitle>{step.title}</TimelineTitle>
                <TimelineDescription>{step.description}</TimelineDescription>
              </TimelineContent>
              <TimelineNumber>{step.number}</TimelineNumber>
              <TimelineContent>
                <TimelineTitle>{step.title}</TimelineTitle>
                <TimelineDescription>{step.description}</TimelineDescription>
              </TimelineContent>
            </TimelineItem>
          ))}
        </ProcessTimeline>
      </ProcessSection>

      <TestimonialsSection>
        <SectionHeader>
          <SectionBadge
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ background: 'rgba(255, 255, 255, 0.2)' }}
          >
            Testimonials
          </SectionBadge>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ color: 'white' }}
          >
            What Our Clients Say
          </SectionTitle>
        </SectionHeader>

        <TestimonialsGrid>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <TestimonialQuote>"{testimonial.quote}"</TestimonialQuote>
              <TestimonialAuthor>
                <AuthorAvatar>{testimonial.initial}</AuthorAvatar>
                <AuthorInfo>
                  <AuthorName>{testimonial.author}</AuthorName>
                  <AuthorRole>{testimonial.role}</AuthorRole>
                </AuthorInfo>
              </TestimonialAuthor>
            </TestimonialCard>
          ))}
        </TestimonialsGrid>
      </TestimonialsSection>

      <CTASection>
        <CTAContent>
          <CTATitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ready to Transform Your Business?
          </CTATitle>
          <CTADescription
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Schedule a consultation with our experts and discover how we can help you achieve your goals
          </CTADescription>
          <CTAButton
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule Consultation <FaArrowRight />
          </CTAButton>
        </CTAContent>
      </CTASection>
    </PageContainer>
  );
};

export default Consulting;