import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const GeographiesContainer = styled.section`
  padding: 80px 0;
  background: #ffffff;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('/insurtech/worldmap.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.18;
    z-index: 0;
  }

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
  border-radius: 12px;
  padding: 25px;
  border: 1px solid #e5e7eb;
  transition: all 0.3s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  text-align: center;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    border-color: #cbd5e1;
  }

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const FlagContainer = styled.div`
  width: 120px;
  height: 80px;
  margin: 0 auto 15px;
  border-radius: 6px;
  overflow: hidden;
  border: 2px solid #e5e7eb;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  background: #f8f9fa;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
  }

  @media (max-width: 768px) {
    width: 100px;
    height: 67px;
  }
`;

const CountryName = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #0f172a;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.95rem;
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

