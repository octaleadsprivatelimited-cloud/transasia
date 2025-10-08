import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaShieldAlt, FaChevronDown, FaCheckCircle, FaRocket, FaLeaf, FaSearch, FaSun, FaBolt, FaNetworkWired
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

const FAQSection = styled.section`
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

const FAQContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FAQItem = styled(motion.div)`
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

const FAQHeader = styled.div`
  padding: 32px 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 24px;
  background: ${props => props.$isOpen ? 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)' : 'white'};
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.$isOpen ? 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)' : 'rgba(59, 130, 246, 0.05)'};
  }

  @media (max-width: 768px) {
    padding: 24px 20px;
    gap: 16px;
  }
`;

const FAQIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 16px;
  background: ${props => props.$isOpen ? 'rgba(255, 255, 255, 0.2)' : props.$gradient};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  color: ${props => props.$isOpen ? 'white' : 'white'};
  flex-shrink: 0;
  box-shadow: 0 4px 16px ${props => props.$isOpen ? 'rgba(255, 255, 255, 0.3)' : 'rgba(59, 130, 246, 0.3)'};

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    font-size: 1.5rem;
  }
`;

const FAQTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${props => props.$isOpen ? 'white' : 'var(--text-primary)'};
  flex: 1;
  transition: color 0.3s ease;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const FAQChevron = styled(motion.div)`
  font-size: 1.5rem;
  color: ${props => props.$isOpen ? 'white' : 'var(--primary-color)'};
  transition: color 0.3s ease;
`;

const FAQContent = styled(motion.div)`
  padding: 0 40px 40px;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 0 20px 24px;
  }
`;

const FAQDescription = styled.p`
  font-size: 1.15rem;
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 30px;
  font-weight: 500;
`;

const FeaturesList = styled.div`
  display: grid;
  gap: 16px;
  margin-bottom: 30px;
`;

const FeatureItem = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 20px;
  background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);
  border-radius: 16px;
  border-left: 4px solid var(--primary-color);
`;

const FeatureNumber = styled.div`
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

const FeatureText = styled.p`
  font-size: 1.05rem;
  color: var(--text-primary);
  line-height: 1.7;
  flex: 1;
  font-weight: 500;
`;

const Highlight = styled.div`
  background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
  border: 2px solid rgba(59, 130, 246, 0.2);
  border-radius: 16px;
  padding: 24px;
  margin: 24px 0;
  font-size: 1.05rem;
  color: var(--text-primary);
  line-height: 1.7;
  font-style: italic;
  text-align: center;
  font-weight: 600;
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
  margin-top: 20px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 32px rgba(59, 130, 246, 0.4);
  }
`;

const CyberSecurityProducts = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const products = [
    {
      id: 'transgrc',
      icon: <FaLeaf />,
      title: 'TransGRC-ESG',
      gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
      description: 'TransGRC: Your All-in-One Compliance Dashboard. Ensure peace of mind with TransGRC, a comprehensive compliance management solution designed to streamline your security posture. Automate tasks, centralize data, and gain complete visibility into your compliance efforts, all within a user-friendly platform.',
      features: [
        'Effortless Compliance Management',
        'Complete Control Over Your Compliance Program',
        'Simplified Policy Creation',
        'Vendor Management Made Easy'
      ],
      esgFeatures: [
        'Generate comprehensive reports aligned with SEBI BRSR',
        'Track ESG compliance across locations for informed decision',
        'Foster transparency and communication with stakeholders',
        'Capture data across locations to continuously track ESG compliance at Head Office and Plants',
        'Supply chain data capture and reporting',
        'Sustainability suggestions through AI'
      ],
      highlight: 'Multi Tenant solution with Dashboard, compliance status, HO & Plant grouping, supply chain interlinkage and Auditors feedback. Editable Report with Visualization',
      cta: 'Sign up today and be among the first to revolutionize your Compliance approach!'
    },
    {
      id: 'huntercat',
      icon: <FaSearch />,
      title: 'HunterCat',
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
      description: 'Huntercat: Your Powerful Web Application Vulnerability Management Solution. Say goodbye to complex vulnerability management! Huntercat, designed by TransAsia Soft Tech Pvt. Ltd, is a comprehensive solution that simplifies and streamlines the entire web application vulnerability management lifecycle.',
      subtitle: 'Huntercat offers a powerful feature set designed to empower your security team and reduce your overall risk profile.',
      features: [
        'Effortless Asset Discovery',
        'In-depth Vulnerability Scanning and Assessment',
        'Unified Attack Surface Management',
        'Enhanced Security Observability',
        'Streamlined Vulnerability Reporting and Remediation',
        'Compliance Made Easy',
        'Security Audits Simplified',
        'Industry-Specific Security Solutions'
      ],
      benefits: [
        'Reduced Risk',
        'Improved Efficiency',
        'Cost Savings',
        'Enhanced Compliance',
        'Peace of Mind'
      ],
      highlight: 'Comprehensive web application vulnerability management with automated scanning and remediation',
      cta: 'Sign up today and be among the first to revolutionize your Compliance approach!'
    },
    {
      id: 'sunshine',
      icon: <FaSun />,
      title: 'Sunshine',
      gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
      description: 'Comprehensive security awareness and training platform. Sunshine illuminates your organization\'s security culture through engaging training modules, phishing simulations, and continuous security education programs.',
      features: [
        'Interactive Security Training Modules',
        'Phishing Simulation Campaigns',
        'Compliance Training & Certification',
        'Real-time Progress Tracking & Analytics'
      ],
      highlight: 'Transform your employees from security risks to security champions with gamified learning',
      cta: 'Brighten your security posture with Sunshine!'
    },
    {
      id: 'rudra',
      icon: <FaBolt />,
      title: 'R.U.D.R.A',
      gradient: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
      description: 'Rapid Unified Defense & Response Automation. R.U.D.R.A is your intelligent incident response platform that automates threat containment, orchestrates security workflows, and accelerates response times with military precision.',
      features: [
        'Automated Incident Response Playbooks',
        'Real-time Threat Containment',
        'Security Orchestration & Automation (SOAR)',
        'Forensic Analysis & Evidence Collection'
      ],
      highlight: 'Reduce incident response time from hours to minutes with intelligent automation',
      cta: 'Deploy R.U.D.R.A and respond at lightning speed!'
    },
    {
      id: 'vrma',
      icon: <FaNetworkWired />,
      title: 'V.R.M.A',
      gradient: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
      description: 'Vulnerability & Risk Management Automation. V.R.M.A provides continuous vulnerability assessment, intelligent risk prioritization, and automated remediation workflows to keep your infrastructure secure.',
      features: [
        'Continuous Vulnerability Scanning',
        'AI-Driven Risk Prioritization',
        'Automated Patch Management',
        'Compliance & Audit Reporting'
      ],
      highlight: 'Manage 10,000+ assets with automated vulnerability detection and remediation workflows',
      cta: 'Secure your infrastructure with V.R.M.A today!'
    }
  ];

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <PageContainer>
      <Helmet>
        <title>Cybersecurity Products | TransAsia</title>
        <meta name="description" content="Advanced cybersecurity products for enterprise protection" />
      </Helmet>

      <HeroSection>
        <HeroContent>
          <HeroTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Cybersecurity Products
            <span>Enterprise-Grade Protection</span>
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Comprehensive suite of security solutions designed to protect, detect, and respond to modern cyber threats
          </HeroSubtitle>
        </HeroContent>
      </HeroSection>

      <FAQSection>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Products
        </SectionTitle>
        <SectionSubtitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Explore our cutting-edge cybersecurity solutions
        </SectionSubtitle>

        <FAQContainer>
          {products.map((product, index) => (
            <FAQItem
              key={product.id}
              $isOpen={openFAQ === product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <FAQHeader
                $isOpen={openFAQ === product.id}
                onClick={() => toggleFAQ(product.id)}
              >
                <FAQIcon $gradient={product.gradient} $isOpen={openFAQ === product.id}>
                  {product.icon}
                </FAQIcon>
                <FAQTitle $isOpen={openFAQ === product.id}>
                  {product.title}
                </FAQTitle>
                <FAQChevron
                  $isOpen={openFAQ === product.id}
                  animate={{ rotate: openFAQ === product.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaChevronDown />
                </FAQChevron>
              </FAQHeader>

              <AnimatePresence>
                {openFAQ === product.id && (
                  <FAQContent
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                  >
                    <FAQDescription>{product.description}</FAQDescription>

                    {product.id === 'transgrc' && (
                      <>
                        <h4 style={{ fontSize: '1.4rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '20px' }}>
                          Here's how TransGRC empowers your business:
                        </h4>
                        <FeaturesList>
                          {product.features.map((feature, idx) => (
                            <FeatureItem
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                            >
                              <FeatureNumber>{idx + 1}</FeatureNumber>
                              <FeatureText>{feature}</FeatureText>
                            </FeatureItem>
                          ))}
                        </FeaturesList>

                        <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '30px' }}>
                          While the core functionality is exceptional, you might encounter some changes as we refine the platform to ensure maximum usability and performance. We are committed to continuous improvement, and your feedback is invaluable in shaping the future of TransGRC.
                        </p>

                        <h4 style={{ fontSize: '1.4rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '20px' }}>
                          Ready to take your compliance program to the next level?
                        </h4>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '30px' }}>
                          Get started with TransGRC today and experience the future of compliance management!
                        </p>

                        <h4 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '24px', marginTop: '40px' }}>
                          Environmental, Social and Governance (ESG) Key Features
                        </h4>
                        <FeaturesList>
                          {product.esgFeatures.map((feature, idx) => (
                            <FeatureItem
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.08 }}
                            >
                              <FeatureNumber>{idx + 1}</FeatureNumber>
                              <FeatureText>{feature}</FeatureText>
                            </FeatureItem>
                          ))}
                        </FeaturesList>

                        <Highlight>
                          {product.highlight}
                        </Highlight>

                        <div style={{ textAlign: 'center' }}>
                          <CTAButton
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <FaRocket /> {product.cta}
                          </CTAButton>
                        </div>
                      </>
                    )}

                    {product.id === 'huntercat' && (
                      <>
                        {product.subtitle && (
                          <p style={{ fontSize: '1.15rem', color: 'var(--text-primary)', lineHeight: '1.8', marginBottom: '30px', fontWeight: '600' }}>
                            {product.subtitle}
                          </p>
                        )}

                        <h4 style={{ fontSize: '1.4rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '20px' }}>
                          How Huntercat solves your real-world problems:
                        </h4>
                        <FeaturesList>
                          {product.features.map((feature, idx) => (
                            <FeatureItem
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.08 }}
                            >
                              <FeatureNumber>{idx + 1}</FeatureNumber>
                              <FeatureText>{feature}</FeatureText>
                            </FeatureItem>
                          ))}
                        </FeaturesList>

                        <h4 style={{ fontSize: '1.4rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '20px', marginTop: '40px' }}>
                          How Huntercat Benefits Your Organization:
                        </h4>
                        <FeaturesList>
                          {product.benefits.map((benefit, idx) => (
                            <FeatureItem
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.08 }}
                            >
                              <FeatureNumber>{idx + 1}</FeatureNumber>
                              <FeatureText>{benefit}</FeatureText>
                            </FeatureItem>
                          ))}
                        </FeaturesList>

                        <Highlight>
                          {product.highlight}
                        </Highlight>

                        <div style={{ textAlign: 'center' }}>
                          <CTAButton
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <FaRocket /> {product.cta}
                          </CTAButton>
                        </div>
                      </>
                    )}

                    {product.id !== 'transgrc' && product.id !== 'huntercat' && (
                      <>
                        <FeaturesList>
                          {product.features.map((feature, idx) => (
                            <FeatureItem
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                            >
                              <FaCheckCircle style={{ fontSize: '1.5rem', color: 'var(--primary-color)', flexShrink: 0 }} />
                              <FeatureText>{feature}</FeatureText>
                            </FeatureItem>
                          ))}
                        </FeaturesList>

                        <Highlight>
                          {product.highlight}
                        </Highlight>

                        <div style={{ textAlign: 'center' }}>
                          <CTAButton
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <FaRocket /> {product.cta}
                          </CTAButton>
                        </div>
                      </>
                    )}
                  </FAQContent>
                )}
              </AnimatePresence>
            </FAQItem>
          ))}
        </FAQContainer>
      </FAQSection>
    </PageContainer>
  );
};

export default CyberSecurityProducts;