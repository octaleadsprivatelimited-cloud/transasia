import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaGlobe, FaUsers, FaAward, FaRocket, FaCheckCircle, FaChartLine } from 'react-icons/fa';

const PageContainer = styled.div`
  min-height: 100vh;
  padding-top: 0;
  background: var(--bg-primary);
`;

const HeroSection = styled.section`
  background: var(--gradient-hero);
  padding: 180px 20px 80px;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 50%, rgba(30, 64, 175, 0.1) 0%, transparent 70%);
  }
`;

const HeroContent = styled.div`
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
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
  line-height: 1.6;
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

const StorySection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  margin-bottom: 80px;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const StoryImage = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 24px;
  background: var(--gradient-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 6rem;
  color: white;
  box-shadow: 0 12px 40px rgba(30, 64, 175, 0.2);
`;

const StoryContent = styled.div``;

const StoryTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 20px;
`;

const StoryText = styled.p`
  font-size: 1.1rem;
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 16px;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin: 60px 0;
`;

const StatCard = styled(motion.div)`
  background: white;
  padding: 40px 30px;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(30, 64, 175, 0.1);
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 40px rgba(30, 64, 175, 0.2);
  }
`;

const StatIcon = styled.div`
  font-size: 3rem;
  color: var(--primary-color);
  margin-bottom: 16px;
`;

const StatNumber = styled.div`
  font-size: 3rem;
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: 8px;
`;

const StatLabel = styled.div`
  font-size: 1.1rem;
  color: var(--text-secondary);
`;

const MissionVisionGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-bottom: 80px;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

const MissionCard = styled(motion.div)`
  background: white;
  padding: 50px 40px;
  border-radius: 24px;
  box-shadow: 0 4px 20px rgba(30, 64, 175, 0.1);
  border-top: 4px solid var(--primary-color);
`;

const CardIcon = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 16px;
  background: var(--gradient-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: white;
  margin-bottom: 24px;
`;

const CardTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 16px;
`;

const CardText = styled.p`
  font-size: 1.05rem;
  color: var(--text-secondary);
  line-height: 1.8;
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
`;

const ValueCard = styled(motion.div)`
  background: white;
  padding: 40px 30px;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(30, 64, 175, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(30, 64, 175, 0.2);
  }
`;

const ValueIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  background: var(--bg-tertiary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  color: var(--primary-color);
  margin-bottom: 20px;
`;

const ValueTitle = styled.h4`
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 12px;
`;

const ValueDescription = styled.p`
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.6;
`;

const TimelineSection = styled.div`
  position: relative;
  padding: 40px 0;
  
  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: var(--primary-color);
    transform: translateX(-50%);

    @media (max-width: 768px) {
      left: 20px;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  margin-bottom: 60px;
  position: relative;

  &:nth-child(even) {
    direction: rtl;
    
    & > * {
      direction: ltr;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding-left: 60px;
    direction: ltr !important;
  }
`;

const TimelineDot = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: var(--primary-color);
  transform: translateX(-50%);
  z-index: 1;
  box-shadow: 0 0 0 4px white, 0 0 0 6px var(--primary-color);

  @media (max-width: 768px) {
    left: 20px;
  }
`;

const TimelineContent = styled.div`
  background: white;
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(30, 64, 175, 0.1);
`;

const TimelineYear = styled.div`
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--primary-color);
  margin-bottom: 12px;
`;

const TimelineTitle = styled.h4`
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 12px;
`;

const TimelineText = styled.p`
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.6;
`;

const About = () => {
  const stats = [
    { icon: <FaUsers />, number: '500+', label: 'Enterprise Clients' },
    { icon: <FaGlobe />, number: '25+', label: 'Countries Served' },
    { icon: <FaShieldAlt />, number: '10M+', label: 'Threats Blocked Daily' },
    { icon: <FaAward />, number: '50+', label: 'Industry Awards' }
  ];

  const values = [
    {
      icon: <FaShieldAlt />,
      title: 'Security First',
      description: 'We prioritize security in everything we do, ensuring our clients\' data and systems are always protected'
    },
    {
      icon: <FaRocket />,
      title: 'Innovation',
      description: 'Continuously pushing boundaries with cutting-edge technology and creative solutions'
    },
    {
      icon: <FaUsers />,
      title: 'Customer Success',
      description: 'Our clients\' success is our success. We go above and beyond to deliver exceptional results'
    },
    {
      icon: <FaCheckCircle />,
      title: 'Integrity',
      description: 'Operating with transparency, honesty, and ethical practices in all our business dealings'
    },
    {
      icon: <FaChartLine />,
      title: 'Excellence',
      description: 'Committed to delivering the highest quality services and maintaining industry-leading standards'
    },
    {
      icon: <FaGlobe />,
      title: 'Global Impact',
      description: 'Making the digital world safer for businesses and individuals across the globe'
    }
  ];

  const timeline = [
    {
      year: '2015',
      title: 'Company Founded',
      description: 'TransAsia Technologies was established with a vision to revolutionize cybersecurity in the Asia-Pacific region'
    },
    {
      year: '2017',
      title: 'First Major Client',
      description: 'Secured partnership with Fortune 500 financial institution, marking our entry into enterprise security'
    },
    {
      year: '2019',
      title: 'Regional Expansion',
      description: 'Opened offices in Singapore, Hong Kong, and Tokyo to better serve our growing client base'
    },
    {
      year: '2021',
      title: 'AI Platform Launch',
      description: 'Launched our revolutionary AI-powered threat detection platform, setting new industry standards'
    },
    {
      year: '2023',
      title: 'ISO 27001 Certified',
      description: 'Achieved ISO 27001 and SOC 2 Type II certifications, demonstrating our commitment to security excellence'
    },
    {
      year: '2025',
      title: 'Industry Leader',
      description: 'Named Cybersecurity Company of the Year, serving 500+ enterprise clients across 25 countries'
    }
  ];

  return (
    <PageContainer>
      <HeroSection>
        <HeroContent>
          <Title>About TransAsia</Title>
          <Subtitle>
            Leading cybersecurity innovator protecting businesses across the Asia-Pacific region 
            with cutting-edge technology and expert services since 2015
          </Subtitle>
        </HeroContent>
      </HeroSection>

      {/* Our Story */}
      <Section>
        <StorySection>
          <StoryImage>
            <FaShieldAlt />
          </StoryImage>
          <StoryContent>
            <StoryTitle>Our Story</StoryTitle>
            <StoryText>
              Founded in 2015, TransAsia Technologies emerged from a simple yet powerful vision: 
              to make the digital world safer for businesses of all sizes. What started as a small 
              team of passionate cybersecurity experts has grown into a leading security provider 
              serving Fortune 500 companies across the Asia-Pacific region.
            </StoryText>
            <StoryText>
              Today, we protect over 500 enterprise clients across 25 countries, blocking more than 
              10 million threats daily. Our innovative AI-powered platform and expert services have 
              earned us recognition as an industry leader and trusted partner for organizations 
              facing the most sophisticated cyber threats.
            </StoryText>
          </StoryContent>
        </StorySection>

        {/* Stats */}
        <StatsGrid>
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <StatIcon>{stat.icon}</StatIcon>
              <StatNumber>{stat.number}</StatNumber>
              <StatLabel>{stat.label}</StatLabel>
            </StatCard>
          ))}
        </StatsGrid>

        {/* Mission & Vision */}
        <SectionTitle>Mission & Vision</SectionTitle>
        <SectionSubtitle>
          Guiding principles that drive our commitment to cybersecurity excellence
        </SectionSubtitle>
        <MissionVisionGrid>
          <MissionCard
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <CardIcon><FaRocket /></CardIcon>
            <CardTitle>Our Mission</CardTitle>
            <CardText>
              To empower organizations with innovative cybersecurity solutions that protect their 
              digital assets, ensure business continuity, and enable secure digital transformation. 
              We strive to make advanced security accessible to businesses of all sizes through 
              cutting-edge technology and expert guidance.
            </CardText>
          </MissionCard>
          <MissionCard
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <CardIcon><FaGlobe /></CardIcon>
            <CardTitle>Our Vision</CardTitle>
            <CardText>
              To be the most trusted cybersecurity partner in the Asia-Pacific region, recognized 
              for innovation, excellence, and unwavering commitment to client success. We envision 
              a future where businesses can operate fearlessly in the digital realm, protected by 
              intelligent, proactive security solutions.
            </CardText>
          </MissionCard>
        </MissionVisionGrid>

        {/* Values */}
        <SectionTitle>Our Core Values</SectionTitle>
        <SectionSubtitle>
          The principles that guide our actions and define who we are
        </SectionSubtitle>
        <ValuesGrid>
          {values.map((value, index) => (
            <ValueCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ValueIcon>{value.icon}</ValueIcon>
              <ValueTitle>{value.title}</ValueTitle>
              <ValueDescription>{value.description}</ValueDescription>
            </ValueCard>
          ))}
        </ValuesGrid>
      </Section>

      {/* Timeline */}
      <Section>
        <SectionTitle>Our Journey</SectionTitle>
        <SectionSubtitle>
          Key milestones in our evolution as a cybersecurity leader
        </SectionSubtitle>
        <TimelineSection>
          {timeline.map((item, index) => (
            <TimelineItem
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <TimelineDot />
              <div></div>
              <TimelineContent>
                <TimelineYear>{item.year}</TimelineYear>
                <TimelineTitle>{item.title}</TimelineTitle>
                <TimelineText>{item.description}</TimelineText>
              </TimelineContent>
            </TimelineItem>
          ))}
        </TimelineSection>
      </Section>
    </PageContainer>
  );
};

export default About;
