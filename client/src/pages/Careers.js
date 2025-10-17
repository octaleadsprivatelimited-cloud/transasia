import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaBriefcase, FaMapMarkerAlt, FaClock, FaDollarSign, FaUsers, FaHeart, FaRocket, FaGraduationCap, FaCheckCircle } from 'react-icons/fa';

const PageContainer = styled.div`
  min-height: 100vh;
  padding-top: 0;
  background: var(--bg-primary);
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
  padding: 180px 20px 80px;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    width: 200%;
    height: 200%;
    top: -50%;
    left: -50%;
    background: 
      radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
      radial-gradient(circle at 80% 50%, rgba(96, 165, 250, 0.1) 0%, transparent 50%);
  }
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 24px;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.9);
  max-width: 800px;
  margin: 0 auto 40px;
  position: relative;
  z-index: 1;
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
  background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  color: #64748b;
  text-align: center;
  margin-bottom: 60px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-bottom: 80px;
`;

const ValueCard = styled(motion.div)`
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

const ValueIcon = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: white;
  margin: 0 auto 20px;
`;

const ValueTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 12px;
`;

const ValueDescription = styled.p`
  font-size: 1rem;
  color: #64748b;
  line-height: 1.6;
`;

const JobsGrid = styled.div`
  display: grid;
  gap: 30px;
`;

const JobCard = styled(motion.div)`
  background: white;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(30, 64, 175, 0.1);
  transition: all 0.3s ease;
  border-left: 4px solid var(--primary-color);

  &:hover {
    transform: translateX(10px);
    box-shadow: 0 12px 40px rgba(30, 64, 175, 0.2);
  }
`;

const JobHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const JobInfo = styled.div`
  flex: 1;
`;

const JobTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 12px;
`;

const JobMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 20px;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--text-secondary);
  font-size: 0.95rem;

  svg {
    color: var(--primary-color);
  }
`;

const JobDescription = styled.p`
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 20px;
`;

const RequirementsList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 24px;
`;

const RequirementItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 12px;
  color: var(--text-secondary);
  font-size: 0.95rem;

  svg {
    color: var(--primary-color);
    margin-top: 4px;
    flex-shrink: 0;
  }
`;

const ApplyButton = styled(motion.button)`
  background: var(--gradient-primary);
  color: white;
  border: none;
  padding: 14px 32px;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(30, 64, 175, 0.3);
  }
`;

const BenefitsSection = styled.div`
  background: white;
  padding: 60px 40px;
  border-radius: 24px;
  box-shadow: 0 4px 20px rgba(30, 64, 175, 0.1);
  margin-top: 80px;
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin-top: 40px;
`;

const BenefitItem = styled.div`
  display: flex;
  gap: 16px;
`;

const BenefitIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background: var(--bg-tertiary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: var(--primary-color);
  flex-shrink: 0;
`;

const BenefitContent = styled.div`
  flex: 1;
`;

const BenefitTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 8px;
`;

const BenefitDescription = styled.p`
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.6;
`;

const Careers = () => {
  const values = [
    {
      icon: <FaRocket />,
      title: 'Innovation First',
      description: 'We encourage creative thinking and embrace new technologies to stay ahead'
    },
    {
      icon: <FaUsers />,
      title: 'Team Collaboration',
      description: 'Success comes from working together and supporting each other'
    },
    {
      icon: <FaHeart />,
      title: 'Work-Life Balance',
      description: 'We believe in flexible work arrangements and employee wellbeing'
    },
    {
      icon: <FaGraduationCap />,
      title: 'Continuous Learning',
      description: 'Invest in your growth with training, certifications, and conferences'
    }
  ];

  const jobs = [
    {
      title: 'Senior Security Engineer',
      location: 'Singapore / Remote',
      type: 'Full-time',
      salary: '$120k - $160k',
      description: 'Lead security architecture design and implementation for enterprise clients. Work with cutting-edge technologies to protect critical infrastructure.',
      requirements: [
        '5+ years experience in cybersecurity',
        'Strong knowledge of network security and cloud platforms',
        'Certifications: CISSP, CEH, or equivalent',
        'Experience with SIEM, IDS/IPS, and security automation',
        'Excellent communication and leadership skills'
      ]
    },
    {
      title: 'Penetration Tester',
      location: 'Singapore',
      type: 'Full-time',
      salary: '$90k - $130k',
      description: 'Conduct comprehensive penetration testing and vulnerability assessments for our clients. Identify security weaknesses and provide remediation guidance.',
      requirements: [
        '3+ years of penetration testing experience',
        'Proficiency in tools like Metasploit, Burp Suite, Nmap',
        'Strong understanding of OWASP Top 10',
        'Certifications: OSCP, GPEN, or similar',
        'Excellent report writing skills'
      ]
    },
    {
      title: 'Security Operations Center (SOC) Analyst',
      location: 'Singapore',
      type: 'Full-time',
      salary: '$60k - $85k',
      description: 'Monitor security events, investigate incidents, and respond to threats in our 24/7 Security Operations Center.',
      requirements: [
        '2+ years SOC or security monitoring experience',
        'Knowledge of SIEM platforms (Splunk, QRadar, etc.)',
        'Understanding of threat intelligence and incident response',
        'Security+ or equivalent certification',
        'Ability to work in shifts (24/7 coverage)'
      ]
    },
    {
      title: 'Cloud Security Architect',
      location: 'Remote',
      type: 'Full-time',
      salary: '$140k - $180k',
      description: 'Design and implement secure cloud architectures for enterprise customers across AWS, Azure, and GCP platforms.',
      requirements: [
        '7+ years in cloud security and architecture',
        'Deep expertise in AWS, Azure, or GCP security',
        'Experience with Infrastructure as Code (Terraform, CloudFormation)',
        'Cloud security certifications (AWS Security Specialty, etc.)',
        'Strong understanding of compliance frameworks'
      ]
    },
    {
      title: 'Cybersecurity Consultant',
      location: 'Singapore / Hybrid',
      type: 'Full-time',
      salary: '$100k - $140k',
      description: 'Provide strategic cybersecurity consulting to clients, conduct risk assessments, and develop security roadmaps.',
      requirements: [
        '5+ years in cybersecurity consulting',
        'Experience with risk assessment methodologies',
        'Knowledge of compliance frameworks (ISO 27001, NIST, etc.)',
        'Excellent presentation and client management skills',
        'Relevant certifications (CISM, CRISC, etc.)'
      ]
    },
    {
      title: 'Incident Response Specialist',
      location: 'Singapore',
      type: 'Full-time',
      salary: '$95k - $125k',
      description: 'Lead incident response efforts, conduct digital forensics investigations, and help clients recover from security breaches.',
      requirements: [
        '4+ years in incident response or digital forensics',
        'Experience with forensic tools (EnCase, FTK, Volatility)',
        'Strong understanding of malware analysis',
        'Certifications: GCIH, GCFA, or equivalent',
        'Ability to work under pressure during incidents'
      ]
    }
  ];

  const benefits = [
    {
      icon: <FaDollarSign />,
      title: 'Competitive Salary',
      description: 'Industry-leading compensation packages with performance bonuses'
    },
    {
      icon: <FaHeart />,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, dental, and wellness programs'
    },
    {
      icon: <FaGraduationCap />,
      title: 'Learning Budget',
      description: '$5,000 annual budget for training, certifications, and conferences'
    },
    {
      icon: <FaClock />,
      title: 'Flexible Hours',
      description: 'Work-life balance with flexible schedules and remote options'
    },
    {
      icon: <FaRocket />,
      title: 'Career Growth',
      description: 'Clear career progression paths and mentorship programs'
    },
    {
      icon: <FaUsers />,
      title: 'Team Events',
      description: 'Regular team building activities and company retreats'
    }
  ];

  return (
    <PageContainer>
      <HeroSection>
        <Title>Join Our Team</Title>
        <Subtitle>
          Build your career in cybersecurity with a team that's protecting the digital world
        </Subtitle>
      </HeroSection>

      <Section>
        <SectionTitle>Our Values</SectionTitle>
        <SectionSubtitle>
          The principles that guide everything we do
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

        <SectionTitle>Open Positions</SectionTitle>
        <SectionSubtitle>
          Find your next opportunity in cybersecurity
        </SectionSubtitle>
        <JobsGrid>
          {jobs.map((job, index) => (
            <JobCard
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <JobHeader>
                <JobInfo>
                  <JobTitle>{job.title}</JobTitle>
                  <JobMeta>
                    <MetaItem>
                      <FaMapMarkerAlt />
                      {job.location}
                    </MetaItem>
                    <MetaItem>
                      <FaBriefcase />
                      {job.type}
                    </MetaItem>
                    <MetaItem>
                      <FaDollarSign />
                      {job.salary}
                    </MetaItem>
                  </JobMeta>
                </JobInfo>
                <ApplyButton whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  Apply Now
                </ApplyButton>
              </JobHeader>
              <JobDescription>{job.description}</JobDescription>
              <RequirementsList>
                {job.requirements.map((req, idx) => (
                  <RequirementItem key={idx}>
                    <FaCheckCircle />
                    <span>{req}</span>
                  </RequirementItem>
                ))}
              </RequirementsList>
            </JobCard>
          ))}
        </JobsGrid>

        <BenefitsSection>
          <SectionTitle>Benefits & Perks</SectionTitle>
          <SectionSubtitle>
            We invest in our team's success and wellbeing
          </SectionSubtitle>
          <BenefitsGrid>
            {benefits.map((benefit, index) => (
              <BenefitItem key={index}>
                <BenefitIcon>{benefit.icon}</BenefitIcon>
                <BenefitContent>
                  <BenefitTitle>{benefit.title}</BenefitTitle>
                  <BenefitDescription>{benefit.description}</BenefitDescription>
                </BenefitContent>
              </BenefitItem>
            ))}
          </BenefitsGrid>
        </BenefitsSection>
      </Section>
    </PageContainer>
  );
};

export default Careers;
