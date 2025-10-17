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
  padding: 100px 0;
  background: #ffffff;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 60px 0;
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
  margin-bottom: 60px;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 12px;
  letter-spacing: -1px;
  line-height: 1.2;
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;

  @media (max-width: 768px) {
    font-size: 2rem;
    letter-spacing: -0.5px;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.1rem;
  color: #64748b;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
  font-weight: 400;
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;

  @media (max-width: 768px) {
    font-size: 1rem;
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
  padding: 40px;
  background: #fafafa;
  border-radius: 16px;
  cursor: pointer;
  overflow: hidden;
  border: 1px solid #e5e7eb;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  transition: all 0.3s ease;
  text-decoration: none;
  display: block;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 32px rgba(30, 58, 138, 0.12);
    border-color: #cbd5e1;
    background: #ffffff;
  }

  @media (max-width: 768px) {
    padding: 35px;
  }
`;

const IconWrapper = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  background: linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  color: white;
  margin-bottom: 20px;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.2);
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #0f172a;
  margin-bottom: 12px;
  line-height: 1.3;
  transition: color 0.3s ease;
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;

  ${SolutionCard}:hover & {
    color: #3b82f6;
  }

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const CardDescription = styled.p`
  font-size: 0.95rem;
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.9rem;
  color: #475569;
  margin-bottom: 10px;
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;

  svg {
    color: #3b82f6;
    flex-shrink: 0;
    font-size: 0.8rem;
  }
`;

const CardLink = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.95rem;
  font-weight: 500;
  color: #3b82f6;
  transition: gap 0.3s ease;
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;

  svg {
    transition: transform 0.3s ease;
    font-size: 0.85rem;
  }

  ${SolutionCard}:hover & {
    gap: 12px;
    
    svg {
      transform: translateX(3px);
    }
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
