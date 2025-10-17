import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaShieldAlt, 
  FaUsers, 
  FaBrain, 
  FaLock,
  FaArrowRight,
  FaCheckCircle
} from 'react-icons/fa';


const SolutionsContainer = styled.section`
  padding: 80px 0;
  background: #f9fafb;
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
  font-size: 2rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 10px;
  letter-spacing: -0.5px;
  line-height: 1.2;
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1rem;
  color: #6b7280;
  max-width: 650px;
  margin: 0 auto;
  line-height: 1.5;
  font-weight: 400;
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

const SolutionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const SolutionCard = styled(motion(Link))`
  position: relative;
  padding: 35px 25px;
  background: #ffffff;
  border-radius: 12px;
  cursor: pointer;
  overflow: hidden;
  border: 1px solid #e5e7eb;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    border-color: #3b82f6;
  }

  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

const IconWrapper = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 10px;
  background: #eff6ff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  color: #3b82f6;
  margin-bottom: 18px;
  transition: all 0.3s ease;

  ${SolutionCard}:hover & {
    background: #3b82f6;
    color: #ffffff;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 10px;
  line-height: 1.3;
  transition: color 0.3s ease;
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;

  @media (max-width: 768px) {
    font-size: 1.15rem;
  }
`;

const CardDescription = styled.p`
  font-size: 0.9rem;
  color: #6b7280;
  line-height: 1.5;
  margin-bottom: 16px;
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 18px;
  width: 100%;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 0.85rem;
  color: #4b5563;
  margin-bottom: 8px;
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;

  svg {
    color: #10b981;
    flex-shrink: 0;
    font-size: 0.75rem;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const CardLink = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.9rem;
  font-weight: 500;
  color: #3b82f6;
  transition: all 0.3s ease;
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
  margin-top: auto;
  padding-top: 10px;

  svg {
    transition: transform 0.3s ease;
    font-size: 0.8rem;
  }

  ${SolutionCard}:hover & {
    gap: 10px;
    
    svg {
      transform: translateX(3px);
    }
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;


const Solutions = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const solutions = [
    {
      icon: <FaShieldAlt />,
      title: "Insurtech",
      description: "Innovative insurance technology solutions for risk assessment, policy management, and claims automation",
      features: [
        "Cyber Risk Quantification",
        "Policy Management",
        "Claims Analytics & Forensics"
      ],
      featured: true,
      link: "/insurtech"
    },
    {
      icon: <FaLock />,
      title: "Products",
      description: "Enterprise-grade cybersecurity products including Sunshine, TransGRC, VRMA, HunterCat, and BlackNet",
      features: [
        "Vulnerability Management",
        "GRC Platform",
        "Dark Web Monitoring"
      ],
      featured: false,
      link: "/products"
    },
    {
      icon: <FaUsers />,
      title: "Consulting",
      description: "Expert consulting services in ESG, ERM, Cyber Insurance, Anti-Ransomware, and Risk Transfer",
      features: [
        "Strategic Guidance",
        "Risk Management",
        "Compliance Support"
      ],
      featured: false,
      link: "/consulting"
    },
    {
      icon: <FaBrain />,
      title: "Services",
      description: "Comprehensive cybersecurity services including Red-team, App-Sec, Infra VAPT, and Forensics",
      features: [
        "Penetration Testing",
        "Security Assessment",
        "Incident Response"
      ],
      featured: false,
      link: "/services"
    }
  ];

  return (
    <SolutionsContainer ref={ref}>
      <Container>
        <SectionHeader>

          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Our Solutions
          </Title>

          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Comprehensive solutions for your business needs
          </Subtitle>
        </SectionHeader>

        <SolutionsGrid>
          {solutions.map((solution, index) => (
            <SolutionCard
              key={index}
              to={solution.link}
              featured={solution.featured}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + (index * 0.1) }}
            >
              <IconWrapper featured={solution.featured}>
                {solution.icon}
              </IconWrapper>
              
              <CardTitle featured={solution.featured}>
                {solution.title}
              </CardTitle>
              
              <CardDescription>
                {solution.description}
              </CardDescription>

              <FeatureList>
                {solution.features.map((feature, idx) => (
                  <FeatureItem key={idx} featured={solution.featured}>
                    <FaCheckCircle size={16} />
                    {feature}
                  </FeatureItem>
                ))}
              </FeatureList>

              <CardLink featured={solution.featured}>
                Learn More <FaArrowRight size={16} />
              </CardLink>
            </SolutionCard>
          ))}
        </SolutionsGrid>
      </Container>
    </SolutionsContainer>
  );
};

export default Solutions;
