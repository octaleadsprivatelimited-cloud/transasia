import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGlobe } from 'react-icons/fa';

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

const CountriesContainer = styled.section`
  padding: 120px 0;
  background: linear-gradient(180deg, #0f172a 0%, #1e293b 100%);
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
      radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%);
    pointer-events: none;
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

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 80px;

  @media (max-width: 768px) {
    margin-bottom: 60px;
  }
`;

const Badge = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: rgba(59, 130, 246, 0.15);
  border: 1px solid rgba(59, 130, 246, 0.3);
  padding: 10px 20px;
  border-radius: 50px;
  font-size: 14px;
  font-weight: 600;
  color: #60a5fa;
  margin-bottom: 24px;
  backdrop-filter: blur(10px);
`;

const Title = styled(motion.h2)`
  font-size: clamp(40px, 6vw, 56px);
  font-weight: 900;
  line-height: 1.2;
  margin-bottom: 24px;
  background: linear-gradient(135deg, #ffffff 0%, #60a5fa 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -2px;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.8);
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.8;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const CountriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 32px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const CountryCard = styled(motion.div)`
  background: rgba(30, 58, 138, 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 20px;
  padding: 32px 24px;
  text-align: center;
  transition: all 0.4s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, transparent 100%);
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  &:hover {
    background: rgba(30, 58, 138, 0.3);
    border-color: rgba(59, 130, 246, 0.5);
    transform: translateY(-8px);
    box-shadow: 0 20px 60px rgba(59, 130, 246, 0.3);

    &::before {
      opacity: 1;
    }
  }
`;

const FlagImage = styled.div`
  width: 100px;
  height: 100px;
  margin: 0 auto 20px;
  border-radius: 50%;
  background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  box-shadow: 0 10px 30px rgba(59, 130, 246, 0.4);
  animation: ${float} 3s ease-in-out infinite;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }

  &::after {
    content: '';
    position: absolute;
    inset: -2px;
    border-radius: 50%;
    padding: 2px;
    background: linear-gradient(135deg, #60a5fa, #3b82f6);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0.5;
  }
`;

const CountryName = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 8px;
`;

const CountryRegion = styled.p`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
`;

const StatsSection = styled.div`
  margin-top: 80px;
  padding: 60px;
  background: rgba(30, 58, 138, 0.2);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 28px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
    padding: 50px 30px;
  }
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: 3rem;
  font-weight: 900;
  background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const StatLabel = styled.div`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 500;
`;

const Countries = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const countries = [
    {
      name: 'United States',
      region: 'North America',
      flag: '🇺🇸'
    },
    {
      name: 'United Kingdom',
      region: 'Europe',
      flag: '🇬🇧'
    },
    {
      name: 'India',
      region: 'Asia',
      flag: '🇮🇳'
    },
    {
      name: 'Singapore',
      region: 'Asia-Pacific',
      flag: '🇸🇬'
    },
    {
      name: 'United Arab Emirates',
      region: 'Middle East',
      flag: '🇦🇪'
    },
    {
      name: 'Australia',
      region: 'Oceania',
      flag: '🇦🇺'
    },
    {
      name: 'Germany',
      region: 'Europe',
      flag: '🇩🇪'
    },
    {
      name: 'Canada',
      region: 'North America',
      flag: '🇨🇦'
    },
    {
      name: 'Japan',
      region: 'Asia',
      flag: '🇯🇵'
    },
    {
      name: 'Brazil',
      region: 'South America',
      flag: '🇧🇷'
    }
  ];

  const stats = [
    { number: '50+', label: 'Countries' },
    { number: '500+', label: 'Global Clients' },
    { number: '24/7', label: 'Support Coverage' },
    { number: '99.9%', label: 'Uptime SLA' }
  ];

  return (
    <CountriesContainer ref={ref}>
      <Container>
        <SectionHeader>
          <Badge
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <FaGlobe />
            Global Presence
          </Badge>

          <Title
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Countries We Serve
          </Title>

          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Protecting organizations worldwide with enterprise-grade cybersecurity solutions 
            and 24/7 support across all major regions
          </Subtitle>
        </SectionHeader>

        <CountriesGrid>
          {countries.map((country, index) => (
            <CountryCard
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ scale: 1.05 }}
            >
              <FlagImage>
                <span style={{ fontSize: '4rem' }}>{country.flag}</span>
              </FlagImage>
              <CountryName>{country.name}</CountryName>
              <CountryRegion>{country.region}</CountryRegion>
            </CountryCard>
          ))}
        </CountriesGrid>

        <StatsSection>
          {stats.map((stat, index) => (
            <StatItem key={index}>
              <StatNumber>{stat.number}</StatNumber>
              <StatLabel>{stat.label}</StatLabel>
            </StatItem>
          ))}
        </StatsSection>
      </Container>
    </CountriesContainer>
  );
};

export default Countries;

