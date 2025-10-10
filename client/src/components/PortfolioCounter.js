import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { FaUserTie, FaBriefcase, FaClock } from 'react-icons/fa';

const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

const CounterContainer = styled.section`
  padding: 80px 0;
  background: linear-gradient(135deg, #0a1128 0%, #1e3a8a 50%, #1e40af 100%);
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
      radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.2) 0%, transparent 50%),
      radial-gradient(circle at 80% 50%, rgba(96, 165, 250, 0.15) 0%, transparent 50%);
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 60px 0;
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

const CounterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const CounterItem = styled(motion.div)`
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  border: 2px solid rgba(255, 255, 255, 0.15);
  border-radius: 24px;
  padding: 50px 40px;
  text-align: center;
  position: relative;
  overflow: hidden;
  transition: all 0.4s ease;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #fbbf24 0%, #f59e0b 100%);
  }

  &:hover {
    transform: translateY(-10px);
    background: rgba(255, 255, 255, 0.12);
    border-color: rgba(251, 191, 36, 0.5);
    box-shadow: 0 20px 60px rgba(251, 191, 36, 0.3);
  }

  @media (max-width: 768px) {
    padding: 40px 30px;
  }
`;

const IconWrapper = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 auto 24px;
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  color: #1a1a1a;
  box-shadow: 0 10px 30px rgba(251, 191, 36, 0.4);
  animation: ${float} 3s ease-in-out infinite;

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
    font-size: 2rem;
    margin-bottom: 20px;
  }
`;

const CounterNumber = styled.div`
  font-size: 4.5rem;
  font-weight: 900;
  background: linear-gradient(135deg, #ffffff 0%, #fbbf24 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 16px;
  line-height: 1;
  animation: ${pulse} 2s ease-in-out infinite;

  @media (max-width: 768px) {
    font-size: 3.5rem;
  }
`;

const CounterLabel = styled.div`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.95);
  font-weight: 600;
  line-height: 1.4;
  letter-spacing: 0.5px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const PortfolioCounter = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const counters = [
    { 
      icon: <FaUserTie />,
      number: 19, 
      suffix: '+', 
      label: 'Cyber Experts' 
    },
    { 
      icon: <FaBriefcase />,
      number: 50, 
      suffix: '+', 
      label: 'Clients' 
    },
    { 
      icon: <FaClock />,
      number: 100, 
      suffix: '+', 
      label: 'Collective Cyber Experience in Years' 
    }
  ];

  return (
    <CounterContainer ref={ref}>
      <Container>
        <CounterGrid>
          {counters.map((counter, index) => (
            <CounterItem
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: index * 0.2, type: 'spring', stiffness: 100 }}
              whileHover={{ scale: 1.05 }}
            >
              <IconWrapper>
                {counter.icon}
              </IconWrapper>
              <CounterNumber>
                {inView && (
                  <CountUp
                    end={counter.number}
                    duration={2.5}
                    suffix={counter.suffix}
                  />
                )}
              </CounterNumber>
              <CounterLabel>{counter.label}</CounterLabel>
            </CounterItem>
          ))}
        </CounterGrid>
      </Container>
    </CounterContainer>
  );
};

export default PortfolioCounter;

