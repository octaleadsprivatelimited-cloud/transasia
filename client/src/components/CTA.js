import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaRocket, 
  FaShieldAlt, 
  FaBrain,
  FaCheck,
  FaPlay,
  FaPhone
} from 'react-icons/fa';

const CTAContainer = styled.section`
  padding: 120px 0;
  background: linear-gradient(180deg, #1e293b 0%, #0f172a 100%);
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
      radial-gradient(circle at 70% 30%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
      radial-gradient(circle at 30% 70%, rgba(96, 165, 250, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 80px 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    padding: 0 15px;
  }
`;

const CTAContent = styled(motion.div)`
  text-align: center;
  background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
  border: 1px solid rgba(59, 130, 246, 0.3);
  box-shadow: 0 20px 60px rgba(59, 130, 246, 0.4);
  border-radius: 32px;
  padding: 80px 60px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
    animation: rotate 20s linear infinite;
  }

  @keyframes rotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  @media (max-width: 768px) {
    padding: 60px 30px;
  }
`;

const Badge = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(0, 255, 136, 0.1);
  border: 1px solid rgba(0, 255, 136, 0.3);
  padding: 8px 16px;
  border-radius: 50px;
  font-size: 14px;
  font-weight: 500;
  color: var(--primary-color);
  margin-bottom: 30px;
  position: relative;
  z-index: 3;
`;

const Title = styled(motion.h2)`
  font-size: clamp(36px, 6vw, 56px);
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 24px;
  color: #ffffff;
  letter-spacing: -1px;
  position: relative;
  z-index: 3;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 20px;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  margin-bottom: 40px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  z-index: 3;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 30px;
  }
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 60px;
  position: relative;
  z-index: 3;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`;

const PrimaryButton = styled(Link)`
  background: white;
  color: #1e3a8a;
  padding: 20px 45px;
  border-radius: 14px;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.2), transparent);
    transition: left 0.5s;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
    background: #f8fafc;

    &::before {
      left: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 16px 35px;
    font-size: 1rem;
    width: 100%;
    justify-content: center;
  }
`;

const SecondaryButton = styled(Link)`
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: white;
  padding: 18px 40px;
  border-radius: 14px;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 10px;
  backdrop-filter: blur(10px);

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.5);
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(255, 255, 255, 0.1);
  }

  @media (max-width: 768px) {
    padding: 16px 35px;
    font-size: 1rem;
    width: 100%;
    justify-content: center;
  }
`;

const TertiaryButton = styled(Link)`
  background: transparent;
  border: 2px solid var(--secondary-color);
  color: var(--secondary-color);
  padding: 16px 32px;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 10px;

  &:hover {
    background: var(--secondary-color);
    color: #ffffff;
    transform: translateY(-3px);
  }

  @media (max-width: 768px) {
    padding: 14px 28px;
    font-size: 14px;
    width: 100%;
    justify-content: center;
  }
`;

const FeaturesList = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 60px;
  position: relative;
  z-index: 3;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
    margin-top: 40px;
  }
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 20px;
  background: rgba(0, 255, 136, 0.05);
  border: 1px solid rgba(0, 255, 136, 0.1);
  border-radius: 12px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 255, 136, 0.1);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const FeatureIcon = styled.div`
  width: 40px;
  height: 40px;
  background: var(--gradient-primary);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: #000000;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
    font-size: 14px;
  }
`;

const FeatureText = styled.div`
  color: var(--text-primary);
  font-weight: 500;
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const TrustIndicators = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin-top: 40px;
  padding-top: 40px;
  border-top: 1px solid rgba(0, 255, 136, 0.1);
  position: relative;
  z-index: 3;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    margin-top: 30px;
    padding-top: 30px;
  }
`;

const TrustItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--text-secondary);
  font-size: 14px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const TrustIcon = styled.div`
  color: var(--primary-color);
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const features = [
  {
    icon: <FaCheck />,
    text: "30-day free trial"
  },
  {
    icon: <FaCheck />,
    text: "No setup fees"
  },
  {
    icon: <FaCheck />,
    text: "24/7 expert support"
  },
  {
    icon: <FaCheck />,
    text: "Cancel anytime"
  }
];

const CTA = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <CTAContainer ref={ref}>
      <Container>
        <CTAContent
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Badge
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <FaRocket />
            Ready to Get Started?
          </Badge>

          <Title
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Transform Your Security
            <br />
            Posture Today
          </Title>

          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Join hundreds of enterprises already protecting their digital assets 
            with our AI-powered cybersecurity platform. Start your free trial today.
          </Subtitle>

          <ButtonGroup
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <PrimaryButton to="/signup">
              <FaRocket />
              Start Free Trial
            </PrimaryButton>
            <SecondaryButton to="/demo">
              <FaPlay />
              Watch Demo
            </SecondaryButton>
            <TertiaryButton to="/contact">
              <FaPhone />
              Talk to Sales
            </TertiaryButton>
          </ButtonGroup>

          <FeaturesList
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            {features.map((feature, index) => (
              <FeatureItem key={index}>
                <FeatureIcon>{feature.icon}</FeatureIcon>
                <FeatureText>{feature.text}</FeatureText>
              </FeatureItem>
            ))}
          </FeaturesList>

          <TrustIndicators
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <TrustItem>
              <TrustIcon>
                <FaShieldAlt />
              </TrustIcon>
              SOC 2 Type II Certified
            </TrustItem>
            <TrustItem>
              <TrustIcon>
                <FaBrain />
              </TrustIcon>
              GDPR Compliant
            </TrustItem>
            <TrustItem>
              <TrustIcon>
                <FaCheck />
              </TrustIcon>
              99.9% Uptime SLA
            </TrustItem>
          </TrustIndicators>
        </CTAContent>
      </Container>
    </CTAContainer>
  );
};

export default CTA;
