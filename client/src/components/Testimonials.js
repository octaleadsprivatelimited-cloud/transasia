import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaQuoteLeft, 
  FaStar, 
  FaChevronLeft, 
  FaChevronRight,
  FaBuilding
} from 'react-icons/fa';

const TestimonialsContainer = styled.section`
  padding: 120px 0;
  background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 30% 20%, rgba(0, 102, 255, 0.05) 0%, transparent 70%);
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 80px 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    padding: 0 15px;
  }
`;

const SectionHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 80px;

  @media (max-width: 768px) {
    margin-bottom: 60px;
  }
`;

const Badge = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(0, 102, 255, 0.1);
  border: 1px solid rgba(0, 102, 255, 0.3);
  padding: 8px 16px;
  border-radius: 50px;
  font-size: 14px;
  font-weight: 500;
  color: var(--secondary-color);
  margin-bottom: 20px;
`;

const Title = styled(motion.h2)`
  font-size: clamp(36px, 6vw, 48px);
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 20px;
  background: linear-gradient(135deg, #ffffff 0%, #0066ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Subtitle = styled(motion.p)`
  font-size: 18px;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const TestimonialsWrapper = styled.div`
  position: relative;
  margin-bottom: 60px;
`;

const TestimonialSlider = styled.div`
  display: flex;
  overflow: hidden;
  border-radius: 20px;
`;

const TestimonialCard = styled(motion.div)`
  min-width: 100%;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(0, 102, 255, 0.1);
  box-shadow: 0 4px 20px rgba(0, 102, 255, 0.1);
  border-radius: 20px;
  padding: 60px 50px;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(0, 102, 255, 0.05), transparent);
    transition: left 0.5s;
  }

  &:hover::before {
    left: 100%;
  }

  @media (max-width: 768px) {
    padding: 40px 30px;
  }
`;

const QuoteIcon = styled.div`
  width: 60px;
  height: 60px;
  background: var(--gradient-secondary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 30px;
  font-size: 24px;
  color: #ffffff;

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    font-size: 20px;
    margin-bottom: 20px;
  }
`;

const TestimonialText = styled.blockquote`
  font-size: 24px;
  line-height: 1.6;
  color: var(--text-primary);
  margin-bottom: 30px;
  font-style: italic;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 20px;
  }
`;

const Rating = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const Star = styled.div`
  color: #ffd700;
  font-size: 20px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const AuthorAvatar = styled.div`
  width: 60px;
  height: 60px;
  background: var(--gradient-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: #000000;
  font-weight: 700;

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    font-size: 20px;
  }
`;

const AuthorDetails = styled.div`
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const AuthorName = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 4px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const AuthorTitle = styled.div`
  font-size: 14px;
  color: var(--text-secondary);
  margin-bottom: 2px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const AuthorCompany = styled.div`
  font-size: 14px;
  color: var(--primary-color);
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const NavigationButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 60px;
`;

const NavButton = styled.button`
  width: 50px;
  height: 50px;
  background: rgba(26, 26, 26, 0.5);
  border: 1px solid rgba(0, 102, 255, 0.3);
  border-radius: 50%;
  color: var(--secondary-color);
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: rgba(0, 102, 255, 0.1);
    border-color: rgba(0, 102, 255, 0.5);
    transform: scale(1.1);
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
    transform: none;
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 14px;
  }
`;

const Dots = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const Dot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: ${props => props.active ? 'var(--secondary-color)' : 'rgba(255, 255, 255, 0.3)'};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: var(--secondary-color);
    transform: scale(1.2);
  }
`;

const LogosSection = styled(motion.div)`
  background: rgba(26, 26, 26, 0.3);
  border: 1px solid rgba(0, 102, 255, 0.1);
  border-radius: 20px;
  padding: 40px;
  margin-top: 60px;

  @media (max-width: 768px) {
    padding: 30px 20px;
    margin-top: 40px;
  }
`;

const LogosTitle = styled.h3`
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  color: var(--text-secondary);
  margin-bottom: 30px;
`;

const LogosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 30px;
  align-items: center;
  justify-items: center;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
`;

const LogoItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.6;
  transition: all 0.3s ease;
  font-size: 24px;
  font-weight: 700;
  color: var(--text-secondary);

  &:hover {
    opacity: 1;
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const testimonials = [
  {
    text: "CyberSecure has revolutionized our security posture. The AI-powered threat detection has prevented multiple sophisticated attacks that would have cost us millions.",
    rating: 5,
    author: {
      name: "Sarah Johnson",
      title: "CISO",
      company: "TechCorp Global",
      avatar: "SJ"
    }
  },
  {
    text: "The autonomous response capabilities have reduced our incident response time by 90%. Our security team can now focus on strategic initiatives rather than firefighting.",
    rating: 5,
    author: {
      name: "Michael Chen",
      title: "Head of Security",
      company: "FinanceFirst Inc",
      avatar: "MC"
    }
  },
  {
    text: "The risk quantification feature has been invaluable for our board presentations. We can now clearly demonstrate the ROI of our security investments.",
    rating: 5,
    author: {
      name: "Emily Rodriguez",
      title: "Risk Manager",
      company: "Healthcare Solutions",
      avatar: "ER"
    }
  },
  {
    text: "CyberSecure's third-party risk management has streamlined our vendor assessment process. We can now monitor our entire supply chain in real-time.",
    rating: 5,
    author: {
      name: "David Thompson",
      title: "Compliance Director",
      company: "Manufacturing Plus",
      avatar: "DT"
    }
  }
];

const companyLogos = [
  "TechCorp Global",
  "FinanceFirst Inc",
  "Healthcare Solutions",
  "Manufacturing Plus",
  "RetailMax",
  "EnergyCorp",
  "MediaGroup",
  "EduTech"
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <TestimonialsContainer ref={ref}>
      <Container>
        <SectionHeader>
          <Badge
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <FaQuoteLeft />
            Customer Success
          </Badge>

          <Title
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            What Our Clients
            <br />
            Say
          </Title>

          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Don't just take our word for it. Hear from industry leaders who have 
            transformed their security posture with CyberSecure.
          </Subtitle>
        </SectionHeader>

        <TestimonialsWrapper>
          <NavigationButtons>
            <NavButton onClick={goToPrevious}>
              <FaChevronLeft />
            </NavButton>
            <NavButton onClick={goToNext}>
              <FaChevronRight />
            </NavButton>
          </NavigationButtons>

          <TestimonialSlider>
            <AnimatePresence mode="wait">
              <TestimonialCard
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <QuoteIcon>
                  <FaQuoteLeft />
                </QuoteIcon>
                
                <TestimonialText>
                  "{testimonials[currentIndex].text}"
                </TestimonialText>

                <Rating>
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i}>
                      <FaStar />
                    </Star>
                  ))}
                </Rating>

                <AuthorInfo>
                  <AuthorAvatar>
                    {testimonials[currentIndex].author.avatar}
                  </AuthorAvatar>
                  <AuthorDetails>
                    <AuthorName>{testimonials[currentIndex].author.name}</AuthorName>
                    <AuthorTitle>{testimonials[currentIndex].author.title}</AuthorTitle>
                    <AuthorCompany>{testimonials[currentIndex].author.company}</AuthorCompany>
                  </AuthorDetails>
                </AuthorInfo>
              </TestimonialCard>
            </AnimatePresence>
          </TestimonialSlider>

          <Dots>
            {testimonials.map((_, index) => (
              <Dot
                key={index}
                active={index === currentIndex}
                onClick={() => goToSlide(index)}
              />
            ))}
          </Dots>
        </TestimonialsWrapper>

        <LogosSection
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <LogosTitle>Trusted by Industry Leaders</LogosTitle>
          <LogosGrid>
            {companyLogos.map((logo, index) => (
              <LogoItem key={index}>
                <FaBuilding />
                <span style={{ marginLeft: '8px' }}>{logo}</span>
              </LogoItem>
            ))}
          </LogosGrid>
        </LogosSection>
      </Container>
    </TestimonialsContainer>
  );
};

export default Testimonials;
