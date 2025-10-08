import React from 'react';
import styled from 'styled-components';
import AppleCardsCarousel from './AppleCardsCarousel';

const HeroContainer = styled.section`
  padding: 100px 0 40px;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Hero = () => {
  const items = [
    { title: 'Financial Services', subtitle: 'Reduce sector risk with CRQ', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop' },
    { title: 'Healthcare', subtitle: 'Protect PHI and meet HIPAA', image: 'https://images.unsplash.com/photo-1581594693700-99c0b2c8b4e5?q=80&w=1200&auto=format&fit=crop' },
    { title: 'Technology', subtitle: 'Secure cloud-native at speed', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop' },
    { title: 'Retail', subtitle: 'Safeguard payments and PII', image: 'https://images.unsplash.com/photo-1515165562835-c3b8c8a8e2d9?q=80&w=1200&auto=format&fit=crop' },
    { title: 'Manufacturing', subtitle: 'OT/IT convergence security', image: 'https://images.unsplash.com/photo-1581093588401-16f8c585d6eb?q=80&w=1200&auto=format&fit=crop' }
  ];

  return (
    <HeroContainer>
      <HeroContent>
        <AppleCardsCarousel items={items} />
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
