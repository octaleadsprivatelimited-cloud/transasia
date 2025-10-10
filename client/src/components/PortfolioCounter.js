import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { FaUserTie, FaBriefcase, FaClock, FaStar } from 'react-icons/fa';

const shimmer = keyframes`
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
`;

const glow = keyframes`
  0%, 100% { 
    box-shadow: 0 0 30px rgba(59, 130, 246, 0.4),
                0 0 60px rgba(59, 130, 246, 0.2),
                inset 0 0 20px rgba(59, 130, 246, 0.1);
  }
  50% { 
    box-shadow: 0 0 50px rgba(59, 130, 246, 0.6),
                0 0 100px rgba(59, 130, 246, 0.3),
                inset 0 0 30px rgba(59, 130, 246, 0.2);
  }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(5deg); }
`;

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const CounterContainer = styled.section`
  padding: 120px 0;
  background: linear-gradient(180deg, #0a0e27 0%, #1a1f3a 50%, #0a0e27 100%);
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
      radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
      radial-gradient(circle at 80% 70%, rgba(147, 51, 234, 0.12) 0%, transparent 50%),
      radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.08) 0%, transparent 60%);
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px),
      linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px);
    background-size: 50px 50px;
    pointer-events: none;
    opacity: 0.5;
  }

  @media (max-width: 768px) {
    padding: 80px 0;
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
  gap: 50px;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const CounterItem = styled(motion.div)`
  background: linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.8) 100%);
  backdrop-filter: blur(30px);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 30px;
  padding: 60px 40px;
  text-align: center;
  position: relative;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);

  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, 
      #3b82f6 0%, 
      #8b5cf6 25%, 
      #ec4899 50%, 
      #f59e0b 75%, 
      #3b82f6 100%);
    border-radius: 30px;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.5s ease;
    background-size: 300% 300%;
    animation: ${shimmer} 3s linear infinite;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 50% 0%, rgba(59, 130, 246, 0.15) 0%, transparent 70%);
    opacity: 0;
    transition: opacity 0.5s ease;
  }

  &:hover {
    transform: translateY(-15px) scale(1.02);
    border-color: rgba(59, 130, 246, 0.5);
    box-shadow: 
      0 30px 80px rgba(59, 130, 246, 0.3),
      0 0 60px rgba(139, 92, 246, 0.2),
      inset 0 0 30px rgba(59, 130, 246, 0.1);
    
    &::before {
      opacity: 1;
    }

    &::after {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    padding: 50px 30px;
  }
`;

const IconWrapper = styled.div`
  width: 100px;
  height: 100px;
  margin: 0 auto 30px;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: #ffffff;
  position: relative;
  animation: ${float} 4s ease-in-out infinite;

  &::before {
    content: '';
    position: absolute;
    inset: -3px;
    background: linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899, #f59e0b);
    border-radius: 25px;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.5s ease;
    animation: ${rotate} 3s linear infinite;
  }

  ${CounterItem}:hover & {
    animation: ${glow} 2s ease-in-out infinite;
    
    &::before {
      opacity: 0.7;
    }
  }

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
    font-size: 2.5rem;
    margin-bottom: 25px;
  }
`;

const CounterNumber = styled.div`
  font-size: 5.5rem;
  font-weight: 900;
  background: linear-gradient(135deg, #ffffff 0%, #3b82f6 50%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 20px;
  line-height: 1;
  position: relative;
  filter: drop-shadow(0 0 20px rgba(59, 130, 246, 0.5));

  @media (max-width: 768px) {
    font-size: 4rem;
  }
`;

const CounterLabel = styled.div`
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(59, 130, 246, 0.9) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const StatsTitle = styled(motion.div)`
  text-align: center;
  margin-bottom: 80px;

  @media (max-width: 768px) {
    margin-bottom: 60px;
  }
`;

const Badge = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%);
  border: 1px solid rgba(59, 130, 246, 0.3);
  padding: 12px 24px;
  border-radius: 50px;
  font-size: 14px;
  font-weight: 600;
  color: #3b82f6;
  margin-bottom: 20px;
  backdrop-filter: blur(10px);

  svg {
    animation: ${rotate} 3s linear infinite;
  }
`;

const Title = styled(motion.h2)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 900;
  background: linear-gradient(135deg, #ffffff 0%, #3b82f6 50%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 20px;
  line-height: 1.2;
  filter: drop-shadow(0 0 30px rgba(59, 130, 246, 0.3));
`;

const Subtitle = styled(motion.p)`
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.7);
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
`;

const PortfolioCounter = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
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
        <StatsTitle>
          <Badge
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <FaStar /> Our Achievements
          </Badge>
          
          <Title
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Trusted by Industry Leaders
          </Title>
          
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Delivering excellence in cybersecurity with proven expertise and unwavering commitment to protecting your digital assets
          </Subtitle>
        </StatsTitle>

        <CounterGrid>
          {counters.map((counter, index) => (
            <CounterItem
              key={index}
              initial={{ opacity: 0, y: 60, scale: 0.8 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: 0.6 + index * 0.15, 
                type: 'spring', 
                stiffness: 100 
              }}
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

