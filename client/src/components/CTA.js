import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaArrowRight, FaCheckCircle, FaPhone, FaEnvelope } from 'react-icons/fa';

const shimmer = keyframes`
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
`;

const CTAContainer = styled.section`
  padding: 80px 0;
  background: #ffffff;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 60px 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const CTABox = styled(motion.div)`
  background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%);
  border-radius: 16px;
  padding: 60px 70px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(30, 58, 138, 0.25);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 80% 20%, rgba(96, 165, 250, 0.2) 0%, transparent 50%);
    pointer-events: none;
  }

  @media (max-width: 968px) {
    padding: 50px 40px;
  }

  @media (max-width: 768px) {
    padding: 40px 30px;
  }
`;

const CTAContent = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 50px;
  align-items: center;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 35px;
    text-align: center;
  }
`;

const LeftSection = styled.div``;

const CTATitle = styled(motion.h2)`
  font-size: 3rem;
  font-weight: 900;
  color: #ffffff;
  margin-bottom: 16px;
  letter-spacing: -1.5px;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2rem;
    letter-spacing: -1px;
  }
`;

const CTASubtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 24px;
  line-height: 1.6;
  max-width: 600px;

  @media (max-width: 968px) {
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 768px) {
    font-size: 1.05rem;
  }
`;

const FeatureList = styled(motion.ul)`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;

  @media (max-width: 968px) {
    justify-content: center;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.95);
  font-weight: 500;

  svg {
    color: #fbbf24;
    font-size: 1rem;
    flex-shrink: 0;
  }

  @media (max-width: 968px) {
    justify-content: center;
  }

  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 968px) {
    align-items: center;
  }
`;

const CTAButton = styled(motion.button)`
  padding: 18px 40px;
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  color: #000000;
  border: none;
  border-radius: 4px;
  font-size: 1.1rem;
  font-weight: 700;
  font-family: 'Times New Roman', Times, serif;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(251, 191, 36, 0.4);
  white-space: nowrap;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.5s;
  }

  &:hover::before {
    left: 100%;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 15px 40px rgba(251, 191, 36, 0.6);
  }

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(5px);
  }

  @media (max-width: 768px) {
    padding: 16px 35px;
    font-size: 1rem;
  }
`;

const SecondaryButton = styled(motion.button)`
  padding: 18px 40px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  color: #ffffff;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  font-size: 1.05rem;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: all 0.3s ease;
  white-space: nowrap;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.5);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 16px 35px;
    font-size: 1rem;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 8px;

  @media (max-width: 968px) {
    justify-content: center;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
    align-items: flex-start;
  }
`;

const ContactItem = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  color: rgba(255, 255, 255, 0.85);
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;

  svg {
    color: #fbbf24;
  }

  &:hover {
    color: #ffffff;
  }
`;

const CTA = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const features = [
    "Free Security Assessment",
    "24/7 Expert Support",
    "Enterprise-Grade Protection",
    "ROI-Focused Solutions"
  ];

  return (
    <CTAContainer ref={ref}>
      <Container>
        <CTABox
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <CTAContent>
            <LeftSection>
              <CTATitle
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Ready to Secure Your Future?
              </CTATitle>

              <CTASubtitle
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Join 500+ enterprises protecting their digital assets with TransAsia's cutting-edge cybersecurity solutions
              </CTASubtitle>

              <FeatureList
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {features.map((feature, index) => (
                  <FeatureItem key={index}>
                    <FaCheckCircle />
                    {feature}
                  </FeatureItem>
                ))}
              </FeatureList>

              <ContactInfo>
                <ContactItem href="tel:+1234567890">
                  <FaPhone size={14} />
                  +1 (234) 567-890
                </ContactItem>
                <ContactItem href="mailto:info@transasia.com">
                  <FaEnvelope size={14} />
                  info@transasia.com
                </ContactItem>
              </ContactInfo>
            </LeftSection>

            <RightSection>
              <CTAButton
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Started Now <FaArrowRight />
              </CTAButton>

              <SecondaryButton
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Schedule a Demo
              </SecondaryButton>
            </RightSection>
          </CTAContent>
        </CTABox>
      </Container>
    </CTAContainer>
  );
};

export default CTA;
