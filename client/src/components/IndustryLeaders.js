import React from 'react';
import styled, { keyframes } from 'styled-components';

const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const LeadersContainer = styled.section`
  padding: 60px 0;
  background: #ffffff;
  position: relative;
  overflow: hidden;
  border-top: 1px solid #f1f5f9;
  border-bottom: 1px solid #f1f5f9;

  @media (max-width: 768px) {
    padding: 40px 0;
  }
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1e293b;
  text-align: center;
  margin-bottom: 40px;
  letter-spacing: -0.5px;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 30px;
  }
`;

const ScrollWrapper = styled.div`
  overflow: hidden;
  position: relative;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    width: 100px;
    height: 100%;
    z-index: 2;
    pointer-events: none;
  }

  &::before {
    left: 0;
    background: linear-gradient(to right, #ffffff 0%, transparent 100%);
  }

  &::after {
    right: 0;
    background: linear-gradient(to left, #ffffff 0%, transparent 100%);
  }

  @media (max-width: 768px) {
    &::before,
    &::after {
      width: 50px;
    }
  }
`;

const ScrollTrack = styled.div`
  display: flex;
  animation: ${scroll} 30s linear infinite;
  width: fit-content;
  
  &:hover {
    animation-play-state: paused;
  }
`;

const LogoGroup = styled.div`
  display: flex;
  gap: 60px;
  padding-right: 60px;
  align-items: center;

  @media (max-width: 768px) {
    gap: 40px;
    padding-right: 40px;
  }
`;

const LogoItem = styled.div`
  min-width: 180px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  background: #ffffff;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
    border-color: #cbd5e1;
  }

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    display: block;
  }

  @media (max-width: 768px) {
    min-width: 150px;
    height: 70px;
    padding: 6px 10px;
  }
`;

const IndustryLeaders = () => {
  const leaders = [
    { name: 'HDFC Bank', logo: '/insurtech/leaders/hdfcbank.png' },
    { name: 'TVS', logo: '/insurtech/leaders/tvs.png' },
    { name: 'HP', logo: '/insurtech/leaders/hp.png' },
    { name: 'GVK', logo: '/insurtech/leaders/gvk.png' },
    { name: 'Redington', logo: '/insurtech/leaders/redington.png' },
    { name: 'Sona Comstar', logo: '/insurtech/leaders/sona_comstar.png' },
    { name: 'Sri Lanka Telecom', logo: '/insurtech/leaders/srilanka_telecom.png' },
    { name: 'Persistent', logo: '/insurtech/leaders/presistent.png' },
    { name: 'Mediassist', logo: '/insurtech/leaders/mediassist.png' },
    { name: 'Latent View', logo: '/insurtech/leaders/latent view.png' },
    { name: 'IndoSpace', logo: '/insurtech/leaders/indospace.png' },
    { name: 'Fyndna', logo: '/insurtech/leaders/fyndna.png' },
    { name: 'Games 24x7', logo: '/insurtech/leaders/games_24_seven.png' },
    { name: 'Pro Connect', logo: '/insurtech/leaders/pro_connect.png' },
    { name: 'Writer', logo: '/insurtech/leaders/writer.png' },
  ];

  return (
    <LeadersContainer>
      <Container>
        <Title>Trusted by Industry Leaders</Title>
      </Container>
      
      <ScrollWrapper>
        <ScrollTrack>
          <LogoGroup>
            {leaders.map((leader, index) => (
              <LogoItem key={index}>
                <img src={leader.logo} alt={leader.name} />
              </LogoItem>
            ))}
          </LogoGroup>
          {/* Duplicate for seamless loop */}
          <LogoGroup>
            {leaders.map((leader, index) => (
              <LogoItem key={`duplicate-${index}`}>
                <img src={leader.logo} alt={leader.name} />
              </LogoItem>
            ))}
          </LogoGroup>
        </ScrollTrack>
      </ScrollWrapper>
    </LeadersContainer>
  );
};

export default IndustryLeaders;

