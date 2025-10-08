import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  FaShieldAlt, FaChartLine, FaCloud, FaMobileAlt, FaLock, FaUsers,
  FaBuilding, FaBalanceScale, FaNetworkWired, FaUserTie, FaClipboardCheck, FaCogs
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

const Section = styled.section`
  padding: 100px 40px;
  background: ${props => props.$bg || '#ffffff'};
  position: relative;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 3rem;
  font-weight: 800;
  text-align: center;
  color: ${props => props.$white ? '#ffffff' : 'var(--text-primary)'};
  margin-bottom: 20px;
  letter-spacing: -1px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SectionSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: ${props => props.$white ? 'rgba(255, 255, 255, 0.9)' : 'var(--text-secondary)'};
  text-align: center;
  max-width: 700px;
  margin: 0 auto 60px;
  line-height: 1.7;
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProductCard = styled(motion.div)`
  background: white;
  border-radius: 24px;
  padding: 40px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  border: 2px solid transparent;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${props => props.$gradient || 'linear-gradient(90deg, #3b82f6, #2563eb)'};
  }

  &:hover {
    transform: translateY(-10px);
    border-color: var(--primary-color);
    box-shadow: 0 20px 60px rgba(30, 64, 175, 0.15);
  }
`;

const ProductIcon = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 18px;
  background: ${props => props.$gradient || 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: white;
  margin-bottom: 24px;
  box-shadow: 0 8px 24px rgba(59, 130, 246, 0.3);
`;

const ProductTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 16px;
`;

const ProductDescription = styled.p`
  font-size: 1.05rem;
  color: var(--text-secondary);
  line-height: 1.7;
`;

const ImpactSection = styled(Section)`
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  text-align: center;
  overflow: hidden;
  padding: 60px 40px;
`;

const ImpactTitle = styled(motion.h2)`
  font-size: 3.5rem;
  font-weight: 900;
  color: white;
  margin-bottom: 40px;
  letter-spacing: -1px;

  @media (max-width: 768px) {
    font-size: 2.2rem;
    margin-bottom: 30px;
  }
`;

const SliderContainer = styled.div`
  position: relative;
  max-width: 1400px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 24px;
`;

const SliderTrack = styled(motion.div)`
  display: flex;
  gap: 30px;
  padding: 20px 0;
`;

const SlideCard = styled(motion.div)`
  min-width: 600px;
  height: 400px;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
  cursor: pointer;
  flex-shrink: 0;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.7) 100%);
  }

  @media (max-width: 968px) {
    min-width: 400px;
    height: 300px;
  }

  @media (max-width: 600px) {
    min-width: 280px;
    height: 220px;
  }
`;

const SlideImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${props => props.$image});
  background-size: cover;
  background-position: center;
  transition: transform 0.6s ease;

  ${SlideCard}:hover & {
    transform: scale(1.1);
  }
`;

const SlideContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 40px;
  z-index: 1;

  @media (max-width: 600px) {
    padding: 24px;
  }
`;

const SlideTitle = styled.h3`
  font-size: 2rem;
  font-weight: 800;
  color: white;
  margin-bottom: 12px;
  letter-spacing: -0.5px;

  @media (max-width: 600px) {
    font-size: 1.3rem;
  }
`;

const SlideDescription = styled.p`
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

const StakeholdersSection = styled(Section)`
  background: linear-gradient(180deg, #0f172a 0%, #1e293b 100%);
`;

const StakeholdersWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: auto auto auto auto;
  gap: 20px;
  align-items: start;

  @media (max-width: 968px) {
    grid-template-columns: 0.8fr 1.5fr 0.8fr;
    gap: 12px;
    padding: 0 10px;
  }

  @media (max-width: 600px) {
    grid-template-columns: 0.7fr 1.3fr 0.7fr;
    gap: 8px;
  }
`;

const CenterImageSpace = styled.div`
  grid-column: 2;
  grid-row: 2 / 4;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 2px dashed rgba(59, 130, 246, 0.4);
  border-radius: 20px;
  min-height: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.6);
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding: 40px;

  @media (max-width: 968px) {
    min-height: 200px;
    padding: 20px;
    font-size: 0.85rem;
    letter-spacing: 1px;
  }

  @media (max-width: 600px) {
    min-height: 150px;
    padding: 15px;
    font-size: 0.7rem;
  }
`;

const StakeholderBox = styled(motion.div)`
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  border: 2px solid rgba(59, 130, 246, 0.3);
  border-radius: 16px;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 16px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.12);
    border-color: rgba(59, 130, 246, 0.6);
    transform: translateX(${props => props.$side === 'left' ? '10px' : props.$side === 'right' ? '-10px' : '0'});
    box-shadow: 0 8px 32px rgba(59, 130, 246, 0.3);
  }

  @media (max-width: 968px) {
    padding: 12px;
    gap: 10px;
    border-radius: 12px;

    &:hover {
      transform: translateX(${props => props.$side === 'left' ? '5px' : props.$side === 'right' ? '-5px' : '0'});
    }
  }

  @media (max-width: 600px) {
    padding: 10px;
    gap: 8px;
  }
`;

const StakeholderIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: white;
  flex-shrink: 0;
  box-shadow: 0 4px 16px rgba(59, 130, 246, 0.4);

  @media (max-width: 968px) {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
    border-radius: 10px;
  }

  @media (max-width: 600px) {
    width: 32px;
    height: 32px;
    font-size: 1rem;
    border-radius: 8px;
  }
`;

const StakeholderName = styled.h4`
  font-size: 0.95rem;
  font-weight: 700;
  color: white;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  flex: 1;
  text-align: left;

  @media (max-width: 968px) {
    font-size: 0.75rem;
    letter-spacing: 0.3px;
  }

  @media (max-width: 600px) {
    font-size: 0.6rem;
    letter-spacing: 0.2px;
  }
`;

const Insurtech = () => {

  const impactSlides = [
    {
      image: '/insurtech/100001.png',
      title: 'Financial Loss',
      description: 'Average cost of data breach: $4.35M with long-term revenue impact'
    },
    {
      image: '/insurtech/100002.png',
      title: 'Operational Disruption',
      description: 'Business downtime, productivity loss, and service interruption'
    },
    {
      image: '/insurtech/100003.png',
      title: 'Reputation Damage',
      description: 'Customer trust erosion, brand value decline, market share loss'
    },
    {
      image: '/insurtech/100004.png',
      title: 'Legal & Compliance',
      description: 'Regulatory fines, lawsuits, compliance violations, and penalties'
    }
  ];

  const products = [
    {
      icon: <FaShieldAlt />,
      title: 'CYBERCAT',
      description: 'A leading RISK monitoring Platform to evaluate Cyber Risk Resilience & Quantify Cyber Exposure for any given entity.',
      gradient: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)'
    },
    {
      icon: <FaChartLine />,
      title: 'CASUALTYCAT',
      description: 'A Cloud based SaaS Application to Quantify Management & Professional decision for Risks, Project & Product execution Risks.',
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)'
    },
    {
      icon: <FaMobileAlt />,
      title: 'DIGIRISK - CYBER RETAIL',
      description: 'To manage Retail Cyber Insurance operations from Risk Assessment, Mobile Forensics, Claim Settlements.',
      gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
    },
    {
      icon: <FaLock />,
      title: 'Sunshine Retail Anti Ransomware',
      description: 'Purchase of Sunshine Retail Anti Ransomware solution license to protect your Mobile from Ransomware.',
      gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)'
    },
    {
      icon: <FaCloud />,
      title: 'Retail Cyber Insurance',
      description: 'Purchase of Retail cyber insurance to cover digital Asset.',
      gradient: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)'
    },
    {
      icon: <FaClipboardCheck />,
      title: 'CTRACK',
      description: 'Integrated SaaS Web & Mobile Application to handle Insurance claim requests, Fraud analysis & on-field Verification.',
      gradient: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)'
    }
  ];

  return (
    <PageContainer>
      <Helmet>
        <title>Insurtech Solutions | TransAsia</title>
        <meta name="description" content="Leading insurtech platforms for cyber risk monitoring and insurance operations" />
      </Helmet>

      <HeroSection>
        <HeroContent>
          <HeroTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Insurtech Solutions
            <span>Risk Monitoring & Cyber Insurance</span>
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Comprehensive platforms to evaluate, quantify, and manage cyber risks with cutting-edge technology
          </HeroSubtitle>
        </HeroContent>
      </HeroSection>

      <ImpactSection>
        <ImpactTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Business Impacts of Cyber Attack
        </ImpactTitle>

        <SliderContainer>
          <SliderTrack
            animate={{
              x: [0, -2520]
            }}
            transition={{
              duration: 25,
              ease: "linear",
              repeat: Infinity
            }}
          >
            {[...impactSlides, ...impactSlides].map((slide, index) => (
              <SlideCard
                key={index}
                whileHover={{ scale: 1.02 }}
              >
                <SlideImage $image={slide.image} />
                <SlideContent>
                  <SlideTitle>{slide.title}</SlideTitle>
                  <SlideDescription>{slide.description}</SlideDescription>
                </SlideContent>
              </SlideCard>
            ))}
          </SliderTrack>
        </SliderContainer>
      </ImpactSection>

      <Section>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Products & Solutions
        </SectionTitle>
        <SectionSubtitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Comprehensive suite of insurtech platforms designed to protect and empower your business
        </SectionSubtitle>

        <ProductsGrid>
          {products.map((product, index) => (
            <ProductCard
              key={index}
              $gradient={product.gradient}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <ProductIcon $gradient={product.gradient}>
                {product.icon}
              </ProductIcon>
              <ProductTitle>{product.title}</ProductTitle>
              <ProductDescription>{product.description}</ProductDescription>
            </ProductCard>
          ))}
        </ProductsGrid>
      </Section>

      <StakeholdersSection>
        <SectionTitle
          $white
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Engaging Cyber Stakeholders
        </SectionTitle>
        <SectionSubtitle
          $white
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Connecting all key decision-makers in your organization's cyber risk management
        </SectionSubtitle>

        <StakeholdersWrapper>
          {/* Top Row - 3 stakeholders */}
          <StakeholderBox
            $side="left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <StakeholderIcon><FaUsers /></StakeholderIcon>
            <StakeholderName>PEOPLE</StakeholderName>
          </StakeholderBox>

          <StakeholderBox
            style={{ gridColumn: '2', justifyContent: 'center' }}
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <StakeholderIcon><FaCogs /></StakeholderIcon>
            <StakeholderName>OPERATIONS</StakeholderName>
          </StakeholderBox>

          <StakeholderBox
            $side="right"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <StakeholderIcon><FaShieldAlt /></StakeholderIcon>
            <StakeholderName>CISO</StakeholderName>
          </StakeholderBox>

          {/* Left Column - 2 stakeholders */}
          <StakeholderBox
            $side="left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <StakeholderIcon><FaBalanceScale /></StakeholderIcon>
            <StakeholderName>LEGAL</StakeholderName>
          </StakeholderBox>

          <StakeholderBox
            $side="left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <StakeholderIcon><FaNetworkWired /></StakeholderIcon>
            <StakeholderName>SUPPLY CHAIN</StakeholderName>
          </StakeholderBox>

          {/* Center Image Space */}
          <CenterImageSpace
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            VALUE AT RISK
          </CenterImageSpace>

          {/* Right Column - 2 stakeholders */}
          <StakeholderBox
            $side="right"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <StakeholderIcon><FaUserTie /></StakeholderIcon>
            <StakeholderName>CTO</StakeholderName>
          </StakeholderBox>

          <StakeholderBox
            $side="right"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <StakeholderIcon><FaBuilding /></StakeholderIcon>
            <StakeholderName>BOARD OF DIRECTORS</StakeholderName>
          </StakeholderBox>

          {/* Bottom Row - 3 stakeholders */}
          <StakeholderBox
            $side="left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            <StakeholderIcon><FaChartLine /></StakeholderIcon>
            <StakeholderName>FINANCE</StakeholderName>
          </StakeholderBox>

          <StakeholderBox
            style={{ gridColumn: '2', justifyContent: 'center' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <StakeholderIcon><FaClipboardCheck /></StakeholderIcon>
            <StakeholderName>COMPLIANCE</StakeholderName>
          </StakeholderBox>

          <StakeholderBox
            $side="right"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 }}
          >
            <StakeholderIcon><FaShieldAlt /></StakeholderIcon>
            <StakeholderName>CRO</StakeholderName>
          </StakeholderBox>
        </StakeholdersWrapper>
      </StakeholdersSection>
    </PageContainer>
  );
};

export default Insurtech;