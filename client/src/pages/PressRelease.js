import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaNewspaper, FaCalendar, FaDownload, FaExternalLinkAlt } from 'react-icons/fa';

const PageContainer = styled.div`
  min-height: 100vh;
  padding-top: 80px;
  background: var(--bg-primary);
`;

const HeroSection = styled.section`
  background: var(--gradient-hero);
  padding: 120px 20px 80px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: 24px;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.3rem;
  color: var(--text-secondary);
  max-width: 800px;
  margin: 0 auto;
`;

const Section = styled.section`
  padding: 80px 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const FilterSection = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 60px;
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  padding: 12px 24px;
  border-radius: 24px;
  border: 2px solid ${props => props.active ? 'var(--primary-color)' : 'var(--border-color)'};
  background: ${props => props.active ? 'var(--primary-color)' : 'white'};
  color: ${props => props.active ? 'white' : 'var(--text-secondary)'};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--primary-color);
    background: ${props => props.active ? 'var(--primary-dark)' : 'var(--bg-tertiary)'};
  }
`;

const PressGrid = styled.div`
  display: grid;
  gap: 40px;
`;

const PressCard = styled(motion.article)`
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(30, 64, 175, 0.1);
  transition: all 0.3s ease;
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 30px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(30, 64, 175, 0.2);
  }

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

const PressImage = styled.div`
  background: var(--gradient-primary);
  min-height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  color: white;

  @media (max-width: 968px) {
    min-height: 200px;
  }
`;

const PressContent = styled.div`
  padding: 30px 30px 30px 0;

  @media (max-width: 968px) {
    padding: 30px;
  }
`;

const PressCategory = styled.span`
  display: inline-block;
  background: var(--bg-tertiary);
  color: var(--primary-color);
  padding: 6px 16px;
  border-radius: 16px;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

const PressTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 12px;
  line-height: 1.3;
`;

const PressDate = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--text-muted);
  font-size: 0.95rem;
  margin-bottom: 16px;

  svg {
    color: var(--primary-color);
  }
`;

const PressExcerpt = styled.p`
  font-size: 1.05rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 24px;
`;

const PressActions = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;

const ActionButton = styled.button`
  padding: 10px 20px;
  border-radius: 8px;
  border: 2px solid var(--primary-color);
  background: ${props => props.primary ? 'var(--primary-color)' : 'transparent'};
  color: ${props => props.primary ? 'white' : 'var(--primary-color)'};
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.primary ? 'var(--primary-dark)' : 'var(--primary-color)'};
    color: white;
  }
`;

const MediaSection = styled.div`
  background: white;
  padding: 60px 40px;
  border-radius: 24px;
  box-shadow: 0 4px 20px rgba(30, 64, 175, 0.1);
  margin-top: 60px;
`;

const MediaTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 40px;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const MediaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
`;

const MediaCard = styled(motion.div)`
  text-align: center;
  padding: 30px;
  background: var(--bg-tertiary);
  border-radius: 16px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    background: white;
    box-shadow: 0 8px 24px rgba(30, 64, 175, 0.15);
  }
`;

const MediaLogo = styled.div`
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--primary-color);
  margin-bottom: 16px;
`;

const MediaName = styled.h4`
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 8px;
`;

const MediaDescription = styled.p`
  font-size: 0.95rem;
  color: var(--text-secondary);
`;

const PressRelease = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const pressReleases = [
    {
      id: 1,
      category: 'Product Launch',
      title: 'TransAsia Launches Next-Gen AI-Powered Threat Detection Platform',
      date: 'October 5, 2025',
      excerpt: 'TransAsia Technologies unveils revolutionary AI-powered cybersecurity platform that reduces threat detection time by 90% and provides real-time protection against zero-day attacks.',
      filter: 'product'
    },
    {
      id: 2,
      category: 'Partnership',
      title: 'Strategic Partnership with Global Cloud Provider Announced',
      date: 'September 28, 2025',
      excerpt: 'TransAsia forms strategic alliance with leading cloud infrastructure provider to deliver integrated security solutions for enterprise customers across Asia-Pacific region.',
      filter: 'partnership'
    },
    {
      id: 3,
      category: 'Award',
      title: 'TransAsia Named "Cybersecurity Company of the Year" 2025',
      date: 'September 15, 2025',
      excerpt: 'Industry recognition for innovation in cybersecurity solutions and outstanding customer service. The award acknowledges our commitment to protecting businesses from evolving cyber threats.',
      filter: 'award'
    },
    {
      id: 4,
      category: 'Company News',
      title: 'TransAsia Expands Operations with New Security Operations Center',
      date: 'August 30, 2025',
      excerpt: 'Opening of state-of-the-art 24/7 Security Operations Center in Singapore to support growing customer base and provide enhanced threat monitoring capabilities.',
      filter: 'company'
    },
    {
      id: 5,
      category: 'Research',
      title: 'Annual Cyber Threat Report 2025 Released',
      date: 'August 15, 2025',
      excerpt: 'Comprehensive analysis of global cyber threat landscape reveals 45% increase in ransomware attacks and emerging threats in cloud environments. Report includes actionable recommendations.',
      filter: 'research'
    },
    {
      id: 6,
      category: 'Product Launch',
      title: 'New Compliance Automation Suite for Financial Services',
      date: 'July 22, 2025',
      excerpt: 'TransAsia introduces specialized compliance automation platform designed for financial institutions, supporting ISO 27001, SOC 2, PCI DSS, and regional regulatory requirements.',
      filter: 'product'
    },
    {
      id: 7,
      category: 'Company News',
      title: 'TransAsia Achieves ISO 27001 and SOC 2 Type II Certification',
      date: 'July 10, 2025',
      excerpt: 'Successful completion of rigorous security audits demonstrates our commitment to maintaining the highest standards of information security and data protection.',
      filter: 'company'
    },
    {
      id: 8,
      category: 'Partnership',
      title: 'Collaboration with Leading Universities for Cybersecurity Research',
      date: 'June 28, 2025',
      excerpt: 'TransAsia establishes research partnerships with top universities to advance cybersecurity innovation and develop next-generation security professionals.',
      filter: 'partnership'
    }
  ];

  const mediaOutlets = [
    { name: 'TechCrunch', description: 'Featured in multiple articles' },
    { name: 'Forbes', description: 'Cybersecurity innovation coverage' },
    { name: 'Reuters', description: 'Business and technology news' },
    { name: 'Bloomberg', description: 'Financial and tech reporting' },
    { name: 'The Wall Street Journal', description: 'Enterprise technology coverage' },
    { name: 'CyberScoop', description: 'Cybersecurity industry news' }
  ];

  const filteredReleases = activeFilter === 'all' 
    ? pressReleases 
    : pressReleases.filter(release => release.filter === activeFilter);

  return (
    <PageContainer>
      <HeroSection>
        <Title>Press & Media</Title>
        <Subtitle>
          Latest news, announcements, and media coverage from TransAsia Technologies
        </Subtitle>
      </HeroSection>

      <Section>
        <FilterSection>
          <FilterButton 
            active={activeFilter === 'all'} 
            onClick={() => setActiveFilter('all')}
          >
            All News
          </FilterButton>
          <FilterButton 
            active={activeFilter === 'product'} 
            onClick={() => setActiveFilter('product')}
          >
            Product Launches
          </FilterButton>
          <FilterButton 
            active={activeFilter === 'partnership'} 
            onClick={() => setActiveFilter('partnership')}
          >
            Partnerships
          </FilterButton>
          <FilterButton 
            active={activeFilter === 'award'} 
            onClick={() => setActiveFilter('award')}
          >
            Awards
          </FilterButton>
          <FilterButton 
            active={activeFilter === 'company'} 
            onClick={() => setActiveFilter('company')}
          >
            Company News
          </FilterButton>
          <FilterButton 
            active={activeFilter === 'research'} 
            onClick={() => setActiveFilter('research')}
          >
            Research
          </FilterButton>
        </FilterSection>

        <PressGrid>
          {filteredReleases.map((release, index) => (
            <PressCard
              key={release.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <PressImage>
                <FaNewspaper />
              </PressImage>
              <PressContent>
                <PressCategory>{release.category}</PressCategory>
                <PressTitle>{release.title}</PressTitle>
                <PressDate>
                  <FaCalendar />
                  {release.date}
                </PressDate>
                <PressExcerpt>{release.excerpt}</PressExcerpt>
                <PressActions>
                  <ActionButton primary>
                    Read Full Release <FaExternalLinkAlt />
                  </ActionButton>
                  <ActionButton>
                    Download PDF <FaDownload />
                  </ActionButton>
                </PressActions>
              </PressContent>
            </PressCard>
          ))}
        </PressGrid>

        <MediaSection>
          <MediaTitle>Featured In</MediaTitle>
          <MediaGrid>
            {mediaOutlets.map((outlet, index) => (
              <MediaCard
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <MediaLogo>{outlet.name.charAt(0)}</MediaLogo>
                <MediaName>{outlet.name}</MediaName>
                <MediaDescription>{outlet.description}</MediaDescription>
              </MediaCard>
            ))}
          </MediaGrid>
        </MediaSection>
      </Section>
    </PageContainer>
  );
};

export default PressRelease;
