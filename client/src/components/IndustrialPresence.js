import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const PresenceContainer = styled.section`
  padding: 80px 0;
  background: #ffffff;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 50px 0;
  }
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 50px;
`;

const Title = styled(motion.h2)`
  font-size: 1.75rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 8px;
  letter-spacing: -0.5px;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 0.95rem;
  color: #64748b;
  font-weight: 400;
`;

const IndustryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 25px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 968px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }
`;

const IndustryCard = styled(motion.div)`
  background: #ffffff;
  border-radius: 12px;
  padding: 30px 20px;
  border: 1px solid #e5e7eb;
  transition: all 0.3s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  text-align: center;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(30, 58, 138, 0.15);
    border-color: #3b82f6;
  }

  @media (max-width: 768px) {
    padding: 25px 15px;
    gap: 12px;
  }
`;

const EmojiContainer = styled.div`
  font-size: 3rem;
  animation: ${float} 3s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const IndustryName = styled.h3`
  font-size: 0.95rem;
  font-weight: 600;
  color: #0f172a;
  margin: 0;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

const IndustrialPresence = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const industries = [
    { name: 'BFSI', emoji: '🏦', delay: 0 },
    { name: 'LOGISTICS', emoji: '🚚', delay: 0.1 },
    { name: 'TECHNOLOGY', emoji: '💻', delay: 0.2 },
    { name: 'GAMING', emoji: '🎮', delay: 0.3 },
    { name: 'MANUFACTURING', emoji: '🏭', delay: 0.4 },
    { name: 'AVIATION', emoji: '✈️', delay: 0.5 },
    { name: 'REALTY & INFRA', emoji: '🏗️', delay: 0.6 },
    { name: 'PETROCHEMICAL', emoji: '⚗️', delay: 0.7 },
    { name: 'OIL & GAS', emoji: '🛢️', delay: 0.8 },
    { name: 'TELECOM', emoji: '📡', delay: 0.9 },
  ];

  return (
    <PresenceContainer ref={ref}>
      <Container>
        <SectionHeader>
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Our Industrial Presence
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Serving diverse industries with cutting-edge solutions
          </Subtitle>
        </SectionHeader>

        <IndustryGrid>
          {industries.map((industry, index) => (
            <IndustryCard
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <EmojiContainer delay={industry.delay}>
                {industry.emoji}
              </EmojiContainer>
              <IndustryName>{industry.name}</IndustryName>
            </IndustryCard>
          ))}
        </IndustryGrid>
      </Container>
    </PresenceContainer>
  );
};

export default IndustrialPresence;

