import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaImages, FaTimes, FaAward, FaBuilding, FaUsers, FaLaptopCode } from 'react-icons/fa';

const PageContainer = styled.div`
  min-height: 100vh;
  padding-top: 0;
  background: var(--bg-primary);
`;

const HeroSection = styled.section`
  background: var(--gradient-hero);
  padding: 180px 20px 80px;
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
  max-width: 1400px;
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
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    border-color: var(--primary-color);
    background: ${props => props.active ? 'var(--primary-dark)' : 'var(--bg-tertiary)'};
  }
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const GalleryCard = styled(motion.div)`
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(30, 64, 175, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 40px rgba(30, 64, 175, 0.2);
  }
`;

const GalleryImage = styled.div`
  width: 100%;
  height: 250px;
  background: var(--gradient-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  color: white;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(30, 64, 175, 0.8) 0%, rgba(59, 130, 246, 0.8) 100%);
  }

  svg {
    position: relative;
    z-index: 1;
  }
`;

const GalleryContent = styled.div`
  padding: 24px;
`;

const GalleryCategory = styled.span`
  display: inline-block;
  background: var(--bg-tertiary);
  color: var(--primary-color);
  padding: 6px 16px;
  border-radius: 16px;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 12px;
`;

const GalleryTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 12px;
`;

const GalleryDescription = styled.p`
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.6;
`;

const Modal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
`;

const ModalContent = styled(motion.div)`
  background: white;
  border-radius: 24px;
  max-width: 900px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
`;

const ModalClose = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--primary-color);
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  z-index: 10;
  transition: all 0.3s ease;

  &:hover {
    background: var(--primary-dark);
    transform: rotate(90deg);
  }
`;

const ModalImage = styled.div`
  width: 100%;
  height: 400px;
  background: var(--gradient-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 6rem;
  color: white;
  border-radius: 24px 24px 0 0;
`;

const ModalBody = styled.div`
  padding: 40px;
`;

const ModalTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 16px;
`;

const ModalMeta = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
  flex-wrap: wrap;
`;

const ModalDescription = styled.p`
  font-size: 1.1rem;
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 24px;
`;

const ModalDetails = styled.div`
  background: var(--bg-tertiary);
  padding: 24px;
  border-radius: 16px;
`;

const DetailItem = styled.div`
  margin-bottom: 16px;
  
  &:last-child {
    margin-bottom: 0;
  }

  strong {
    color: var(--text-primary);
    display: block;
    margin-bottom: 4px;
  }

  span {
    color: var(--text-secondary);
  }
`;

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);

  const galleryItems = [
    {
      id: 1,
      category: 'Case Study',
      title: 'Global Bank Security Transformation',
      description: 'Complete security infrastructure overhaul for a leading international bank',
      icon: <FaBuilding />,
      filter: 'case-study',
      details: {
        client: 'Fortune 500 Financial Institution',
        duration: '12 months',
        team: '25 security professionals',
        challenge: 'Legacy systems with multiple security vulnerabilities and compliance gaps',
        solution: 'Implemented zero-trust architecture, advanced threat detection, and compliance automation',
        results: '99.9% threat detection rate, 60% reduction in security incidents, full regulatory compliance'
      }
    },
    {
      id: 2,
      category: 'Project',
      title: 'Healthcare Data Protection Initiative',
      description: 'HIPAA-compliant security solution for multi-hospital network',
      icon: <FaLaptopCode />,
      filter: 'project',
      details: {
        client: 'Regional Healthcare Network',
        duration: '8 months',
        team: '15 security specialists',
        challenge: 'Protecting sensitive patient data across 12 hospitals and 50+ clinics',
        solution: 'Deployed comprehensive encryption, access controls, and monitoring systems',
        results: 'Zero data breaches, 100% HIPAA compliance, 40% faster incident response'
      }
    },
    {
      id: 3,
      category: 'Award',
      title: 'Cybersecurity Excellence Award 2025',
      description: 'Recognition for innovation in threat detection technology',
      icon: <FaAward />,
      filter: 'award',
      details: {
        award: 'Best Cybersecurity Innovation',
        organization: 'International Cybersecurity Alliance',
        date: 'September 2025',
        achievement: 'Revolutionary AI-powered threat detection platform',
        impact: 'Setting new industry standards for proactive security'
      }
    },
    {
      id: 4,
      category: 'Case Study',
      title: 'E-Commerce Platform Security',
      description: 'Securing high-traffic online marketplace against cyber threats',
      icon: <FaBuilding />,
      filter: 'case-study',
      details: {
        client: 'Leading E-Commerce Platform',
        duration: '6 months',
        team: '20 security experts',
        challenge: 'Protecting customer data and payment information for 10M+ users',
        solution: 'Implemented PCI DSS compliant infrastructure with real-time fraud detection',
        results: '99.99% uptime, zero payment fraud incidents, customer trust increased by 45%'
      }
    },
    {
      id: 5,
      category: 'Project',
      title: 'Cloud Migration Security',
      description: 'Secure migration of enterprise workloads to multi-cloud environment',
      icon: <FaLaptopCode />,
      filter: 'project',
      details: {
        client: 'Manufacturing Corporation',
        duration: '10 months',
        team: '18 cloud security specialists',
        challenge: 'Migrating 500+ applications to cloud while maintaining security',
        solution: 'Designed and implemented secure cloud architecture with automated compliance',
        results: '30% cost reduction, enhanced security posture, seamless migration'
      }
    },
    {
      id: 6,
      category: 'Event',
      title: 'Annual Cybersecurity Summit 2025',
      description: 'Industry-leading conference with 1000+ security professionals',
      icon: <FaUsers />,
      filter: 'event',
      details: {
        event: 'TransAsia Cybersecurity Summit',
        date: 'August 2025',
        attendees: '1000+ security professionals',
        speakers: '50+ industry experts',
        topics: 'AI in Security, Zero Trust, Cloud Security, Threat Intelligence',
        impact: 'Knowledge sharing and networking for cybersecurity community'
      }
    },
    {
      id: 7,
      category: 'Case Study',
      title: 'Government Agency Security Audit',
      description: 'Comprehensive security assessment and remediation for federal agency',
      icon: <FaBuilding />,
      filter: 'case-study',
      details: {
        client: 'Federal Government Agency',
        duration: '14 months',
        team: '30 certified security auditors',
        challenge: 'Meeting stringent government security standards and compliance',
        solution: 'Conducted thorough audit and implemented multi-layered security controls',
        results: 'Achieved FedRAMP High authorization, enhanced national security posture'
      }
    },
    {
      id: 8,
      category: 'Project',
      title: 'IoT Security Framework',
      description: 'Securing connected devices for smart city infrastructure',
      icon: <FaLaptopCode />,
      filter: 'project',
      details: {
        client: 'Smart City Initiative',
        duration: '9 months',
        team: '22 IoT security specialists',
        challenge: 'Securing 50,000+ IoT devices across city infrastructure',
        solution: 'Developed comprehensive IoT security framework with continuous monitoring',
        results: 'Zero IoT-related security incidents, scalable security architecture'
      }
    },
    {
      id: 9,
      category: 'Award',
      title: 'Partner of the Year 2025',
      description: 'Recognized by leading cloud provider for security excellence',
      icon: <FaAward />,
      filter: 'award',
      details: {
        award: 'Security Partner of the Year',
        organization: 'Global Cloud Provider',
        date: 'July 2025',
        achievement: 'Outstanding customer success and security innovation',
        impact: 'Strengthened partnership and expanded service offerings'
      }
    }
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.filter === activeFilter);

  return (
    <PageContainer>
      <HeroSection>
        <Title>Project Gallery</Title>
        <Subtitle>
          Explore our successful projects, case studies, and achievements in cybersecurity
        </Subtitle>
      </HeroSection>

      <Section>
        <FilterSection>
          <FilterButton 
            active={activeFilter === 'all'} 
            onClick={() => setActiveFilter('all')}
          >
            <FaImages /> All
          </FilterButton>
          <FilterButton 
            active={activeFilter === 'case-study'} 
            onClick={() => setActiveFilter('case-study')}
          >
            <FaBuilding /> Case Studies
          </FilterButton>
          <FilterButton 
            active={activeFilter === 'project'} 
            onClick={() => setActiveFilter('project')}
          >
            <FaLaptopCode /> Projects
          </FilterButton>
          <FilterButton 
            active={activeFilter === 'award'} 
            onClick={() => setActiveFilter('award')}
          >
            <FaAward /> Awards
          </FilterButton>
          <FilterButton 
            active={activeFilter === 'event'} 
            onClick={() => setActiveFilter('event')}
          >
            <FaUsers /> Events
          </FilterButton>
        </FilterSection>

        <GalleryGrid>
          {filteredItems.map((item, index) => (
            <GalleryCard
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedItem(item)}
            >
              <GalleryImage>
                {item.icon}
              </GalleryImage>
              <GalleryContent>
                <GalleryCategory>{item.category}</GalleryCategory>
                <GalleryTitle>{item.title}</GalleryTitle>
                <GalleryDescription>{item.description}</GalleryDescription>
              </GalleryContent>
            </GalleryCard>
          ))}
        </GalleryGrid>
      </Section>

      <AnimatePresence>
        {selectedItem && (
          <Modal
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
          >
            <ModalContent
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              <ModalClose onClick={() => setSelectedItem(null)}>
                <FaTimes />
              </ModalClose>
              <ModalImage>
                {selectedItem.icon}
              </ModalImage>
              <ModalBody>
                <ModalMeta>
                  <GalleryCategory>{selectedItem.category}</GalleryCategory>
                </ModalMeta>
                <ModalTitle>{selectedItem.title}</ModalTitle>
                <ModalDescription>{selectedItem.description}</ModalDescription>
                <ModalDetails>
                  {Object.entries(selectedItem.details).map(([key, value]) => (
                    <DetailItem key={key}>
                      <strong>{key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}:</strong>
                      <span>{value}</span>
                    </DetailItem>
                  ))}
                </ModalDetails>
              </ModalBody>
            </ModalContent>
          </Modal>
        )}
      </AnimatePresence>
    </PageContainer>
  );
};

export default Gallery;
