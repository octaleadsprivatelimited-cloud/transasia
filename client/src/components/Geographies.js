import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const GeographiesContainer = styled.section`
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

const GeographyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 968px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

const GeographyCard = styled(motion.div)`
  background: #ffffff;
  border-radius: 8px;
  padding: 30px 20px;
  border: 1px solid #e5e7eb;
  transition: all 0.3s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  text-align: center;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    border-color: #cbd5e1;
  }

  @media (max-width: 768px) {
    padding: 25px 15px;
  }
`;

const FlagContainer = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 auto 20px;
  border-radius: 8px;
  overflow: hidden;
  border: 3px solid #f1f5f9;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
  }
`;

const CountryName = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: #0f172a;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Geographies = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const geographies = [
    {
      name: 'India',
      flag: 'https://flagcdn.com/w320/in.png'
    },
    {
      name: 'Bangladesh',
      flag: 'https://flagcdn.com/w320/bd.png'
    },
    {
      name: 'UAE',
      flag: 'https://flagcdn.com/w320/ae.png'
    },
    {
      name: 'Sri Lanka',
      flag: 'https://flagcdn.com/w320/lk.png'
    }
  ];

  return (
    <GeographiesContainer ref={ref}>
      <Container>
        <SectionHeader>
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Expanding Geographies
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Our global presence continues to grow
          </Subtitle>
        </SectionHeader>

        <GeographyGrid>
          {geographies.map((geography, index) => (
            <GeographyCard
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <FlagContainer>
                <img src={geography.flag} alt={`${geography.name} flag`} />
              </FlagContainer>
              <CountryName>{geography.name}</CountryName>
            </GeographyCard>
          ))}
        </GeographyGrid>
      </Container>
    </GeographiesContainer>
  );
};

export default Geographies;

