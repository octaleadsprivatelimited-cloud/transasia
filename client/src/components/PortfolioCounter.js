import React, { useRef, useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, useScroll, useTransform } from 'framer-motion';
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
  min-height: 300vh;
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
    min-height: 250vh;
  }
`;

const StickyContainer = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  padding: 0 40px;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const CardsStack = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    height: 500px;
  }
`;

const CounterItem = styled(motion.div)`
  position: absolute;
  width: 100%;
  max-width: 800px;
  background: linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.9) 100%);
  backdrop-filter: blur(30px);
  border: 1px solid rgba(59, 130, 246, 0.3);
  border-radius: 40px;
  padding: 80px 60px;
  text-align: center;
  overflow: hidden;
  box-shadow: 
    0 20px 60px rgba(0, 0, 0, 0.5),
    0 0 40px rgba(59, 130, 246, 0.2),
    inset 0 0 30px rgba(59, 130, 246, 0.05);

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
    border-radius: 40px;
    z-index: -1;
    opacity: 0.8;
    background-size: 300% 300%;
    animation: ${shimmer} 4s linear infinite;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 50% 0%, rgba(59, 130, 246, 0.2) 0%, transparent 70%);
  }

  @media (max-width: 768px) {
    padding: 60px 40px;
    max-width: 90%;
  }
`;

const IconWrapper = styled.div`
  width: 120px;
  height: 120px;
  margin: 0 auto 40px;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3.5rem;
  color: #ffffff;
  position: relative;
  box-shadow: 
    0 20px 40px rgba(59, 130, 246, 0.4),
    0 0 60px rgba(139, 92, 246, 0.3);

  &::before {
    content: '';
    position: absolute;
    inset: -4px;
    background: linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899, #f59e0b);
    border-radius: 30px;
    z-index: -1;
    opacity: 0.6;
    animation: ${rotate} 4s linear infinite;
  }

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
    font-size: 3rem;
    margin-bottom: 30px;
  }
`;

const CounterNumber = styled.div`
  font-size: 7rem;
  font-weight: 900;
  background: linear-gradient(135deg, #ffffff 0%, #3b82f6 50%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 30px;
  line-height: 1;
  position: relative;
  filter: drop-shadow(0 0 30px rgba(59, 130, 246, 0.6));

  @media (max-width: 768px) {
    font-size: 5rem;
    margin-bottom: 20px;
  }
`;

const CounterLabel = styled.div`
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.95);
  font-weight: 700;
  line-height: 1.5;
  letter-spacing: 1px;
  text-transform: uppercase;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(59, 130, 246, 0.95) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 1.2rem;
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

const CardItem = ({ counter, index, scrollYProgress, showCounters, totalCards }) => {
  const cardProgress = useTransform(
    scrollYProgress,
    [index * 0.25, (index + 1) * 0.25],
    [1, 0]
  );
  
  const scale = useTransform(
    scrollYProgress,
    [index * 0.25, (index + 1) * 0.25],
    [1, 0.9]
  );
  
  const y = useTransform(
    scrollYProgress,
    [index * 0.25, (index + 1) * 0.25],
    [0, -100]
  );
  
  const rotate = useTransform(
    scrollYProgress,
    [index * 0.25, (index + 1) * 0.25],
    [0, -5]
  );

  return (
    <CounterItem
      style={{
        opacity: cardProgress,
        scale: scale,
        y: y,
        rotate: rotate,
        zIndex: totalCards - index,
      }}
    >
      <IconWrapper>
        {counter.icon}
      </IconWrapper>
      <CounterNumber>
        {showCounters && (
          <CountUp
            end={counter.number}
            duration={2.5}
            suffix={counter.suffix}
          />
        )}
      </CounterNumber>
      <CounterLabel>{counter.label}</CounterLabel>
    </CounterItem>
  );
};

const PortfolioCounter = () => {
  const containerRef = useRef(null);
  const [showCounters, setShowCounters] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const counters = [
    { 
      icon: <FaUserTie />,
      number: 19, 
      suffix: '+', 
      label: 'Cyber Experts',
      color: '#3b82f6'
    },
    { 
      icon: <FaBriefcase />,
      number: 50, 
      suffix: '+', 
      label: 'Clients',
      color: '#8b5cf6'
    },
    { 
      icon: <FaClock />,
      number: 100, 
      suffix: '+', 
      label: 'Collective Cyber Experience in Years',
      color: '#ec4899'
    }
  ];

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      if (latest > 0.1) {
        setShowCounters(true);
      }
    });
    
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <CounterContainer ref={containerRef}>
      <StickyContainer>
        <Container>
          <StatsTitle>
            <Badge
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <FaStar /> Our Achievements
            </Badge>
            
            <Title
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Trusted by Industry Leaders
            </Title>
            
            <Subtitle
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Delivering excellence in cybersecurity with proven expertise and unwavering commitment to protecting your digital assets
            </Subtitle>
          </StatsTitle>

          <CardsStack>
            {counters.map((counter, index) => (
              <CardItem
                key={index}
                counter={counter}
                index={index}
                scrollYProgress={scrollYProgress}
                showCounters={showCounters}
                totalCards={counters.length}
              />
            ))}
          </CardsStack>
        </Container>
      </StickyContainer>
    </CounterContainer>
  );
};

export default PortfolioCounter;

