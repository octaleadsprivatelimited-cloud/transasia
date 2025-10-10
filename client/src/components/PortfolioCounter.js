import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

const CounterContainer = styled.section`
  padding: 60px 0;
  background: #ffffff;
  position: relative;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const CounterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 60px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const CounterItem = styled(motion.div)`
  text-align: center;
`;

const CounterNumber = styled.div`
  font-size: 4rem;
  font-weight: 900;
  color: var(--primary-color);
  margin-bottom: 12px;
  line-height: 1;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const CounterLabel = styled.div`
  font-size: 1.1rem;
  color: var(--text-secondary);
  font-weight: 500;
  line-height: 1.4;

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
    { number: 19, suffix: '+', label: 'Cyber Experts' },
    { number: 50, suffix: '+', label: 'Clients' },
    { number: 100, suffix: '+', label: 'Collective Cyber Experience in Years' }
  ];

  return (
    <CounterContainer ref={ref}>
      <Container>
        <CounterGrid>
          {counters.map((counter, index) => (
            <CounterItem
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
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

