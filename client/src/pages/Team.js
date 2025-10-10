import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaEnvelope, FaUserTie } from 'react-icons/fa';

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
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 20px;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  color: var(--text-secondary);
  text-align: center;
  margin-bottom: 60px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  margin-bottom: 80px;
`;

const TeamCard = styled(motion.div)`
  background: white;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(30, 64, 175, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 40px rgba(30, 64, 175, 0.2);
  }
`;

const TeamImage = styled.div`
  width: 100%;
  height: 300px;
  background: var(--gradient-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 5rem;
  color: white;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(30, 64, 175, 0.9) 0%, rgba(59, 130, 246, 0.9) 100%);
  }

  svg {
    position: relative;
    z-index: 1;
  }
`;

const TeamContent = styled.div`
  padding: 30px;
`;

const TeamName = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 8px;
`;

const TeamRole = styled.div`
  font-size: 1rem;
  color: var(--primary-color);
  font-weight: 600;
  margin-bottom: 16px;
`;

const TeamBio = styled.p`
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 20px;
`;

const TeamSocial = styled.div`
  display: flex;
  gap: 12px;
`;

const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--bg-tertiary);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-color);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: var(--primary-color);
    color: white;
    transform: translateY(-3px);
  }
`;

const AdvisorsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
`;

const AdvisorCard = styled(motion.div)`
  background: white;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(30, 64, 175, 0.1);
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(30, 64, 175, 0.2);
  }
`;

const AdvisorImage = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: var(--gradient-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  color: white;
  margin: 0 auto 20px;
`;

const AdvisorName = styled.h4`
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 8px;
`;

const AdvisorRole = styled.div`
  font-size: 0.9rem;
  color: var(--primary-color);
  font-weight: 600;
  margin-bottom: 12px;
`;

const AdvisorBio = styled.p`
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.6;
`;

const Team = () => {
  const leadership = [
    {
      name: 'Michael Chen',
      role: 'Chief Executive Officer',
      bio: 'Former CISO at Fortune 500 companies with 20+ years in cybersecurity. Led security transformations for global enterprises.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'michael.chen@transasia.com'
      }
    },
    {
      name: 'Sarah Williams',
      role: 'Chief Technology Officer',
      bio: 'AI and machine learning expert with PhD from MIT. Pioneer in applying AI to cybersecurity threat detection.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'sarah.williams@transasia.com'
      }
    },
    {
      name: 'David Kumar',
      role: 'Chief Security Officer',
      bio: 'Certified ethical hacker and security researcher. Published author on advanced persistent threats and incident response.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'david.kumar@transasia.com'
      }
    },
    {
      name: 'Emily Zhang',
      role: 'Chief Operating Officer',
      bio: 'Operations excellence leader with experience scaling security service organizations across Asia-Pacific region.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'emily.zhang@transasia.com'
      }
    },
    {
      name: 'James Rodriguez',
      role: 'VP of Engineering',
      bio: 'Full-stack security engineer with expertise in building scalable security platforms. Former lead at major cloud providers.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'james.rodriguez@transasia.com'
      }
    },
    {
      name: 'Lisa Tanaka',
      role: 'VP of Customer Success',
      bio: 'Customer-focused leader ensuring client satisfaction and success. Expert in security consulting and relationship management.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'lisa.tanaka@transasia.com'
      }
    }
  ];

  const advisors = [
    {
      name: 'Dr. Robert Anderson',
      role: 'Security Advisor',
      bio: 'Former NSA Director with 30+ years in national cybersecurity'
    },
    {
      name: 'Jennifer Lee',
      role: 'Compliance Advisor',
      bio: 'ISO 27001 Lead Auditor and regulatory compliance expert'
    },
    {
      name: 'Prof. Alan Wong',
      role: 'Research Advisor',
      bio: 'Leading cybersecurity researcher at Stanford University'
    },
    {
      name: 'Maria Santos',
      role: 'Business Advisor',
      bio: 'Serial entrepreneur and venture capital investor in security'
    }
  ];

  return (
    <PageContainer>
      <HeroSection>
        <Title>Meet Our Team</Title>
        <Subtitle>
          World-class cybersecurity experts dedicated to protecting your business
        </Subtitle>
      </HeroSection>

      <Section>
        <SectionTitle>Leadership Team</SectionTitle>
        <SectionSubtitle>
          Experienced leaders driving innovation and excellence in cybersecurity
        </SectionSubtitle>
        <TeamGrid>
          {leadership.map((member, index) => (
            <TeamCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <TeamImage>
                <FaUserTie />
              </TeamImage>
              <TeamContent>
                <TeamName>{member.name}</TeamName>
                <TeamRole>{member.role}</TeamRole>
                <TeamBio>{member.bio}</TeamBio>
                <TeamSocial>
                  <SocialLink href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                  </SocialLink>
                  <SocialLink href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                    <FaTwitter />
                  </SocialLink>
                  <SocialLink href={`mailto:${member.social.email}`}>
                    <FaEnvelope />
                  </SocialLink>
                </TeamSocial>
              </TeamContent>
            </TeamCard>
          ))}
        </TeamGrid>

        <SectionTitle>Advisory Board</SectionTitle>
        <SectionSubtitle>
          Distinguished advisors providing strategic guidance and industry expertise
        </SectionSubtitle>
        <AdvisorsGrid>
          {advisors.map((advisor, index) => (
            <AdvisorCard
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <AdvisorImage>
                <FaUserTie />
              </AdvisorImage>
              <AdvisorName>{advisor.name}</AdvisorName>
              <AdvisorRole>{advisor.role}</AdvisorRole>
              <AdvisorBio>{advisor.bio}</AdvisorBio>
            </AdvisorCard>
          ))}
        </AdvisorsGrid>
      </Section>
    </PageContainer>
  );
};

export default Team;
