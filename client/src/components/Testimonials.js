import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaQuoteLeft,
  FaStar,
  FaChevronLeft,
  FaChevronRight
} from 'react-icons/fa';

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
`;

const TestimonialsContainer = styled.section`
  padding: 100px 0;
  background: #ffffff;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 300px;
    background: linear-gradient(180deg, #3b82f6 0%, transparent 100%);
    opacity: 0.03;
  }

  @media (max-width: 768px) {
    padding: 60px 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
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
  margin-bottom: 40px;
`;

const Title = styled(motion.h2)`
  font-size: 3.5rem;
  font-weight: 900;
  color: #1e3a8a;
  margin-bottom: 20px;
  letter-spacing: -2px;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100px;
    height: 5px;
    background: linear-gradient(90deg, #3b82f6 0%, #fbbf24 100%);
    border-radius: 3px;
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: #64748b;
  max-width: 700px;
  margin: 30px auto 0;
  line-height: 1.7;
`;

const CarouselContainer = styled.div`
  position: relative;
  max-width: 900px;
  margin: 0 auto;
`;

const TestimonialCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(30px);
  border: 2px solid #fbbf24;
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, #fbbf24 0%, #3b82f6 100%);
    border-radius: 16px 16px 0 0;
  }

  @media (max-width: 768px) {
    padding: 15px 10px;
  }
`;

const QuoteIcon = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  color: white;
  margin: 0 auto 15px;
  box-shadow: 0 8px 25px rgba(251, 191, 36, 0.4);
  animation: ${float} 3s ease-in-out infinite;
`;

const TestimonialText = styled.p`
  font-size: 0.75rem;
  line-height: 1.6;
  color: #1e3a8a;
  text-align: center;
  margin-bottom: 20px;
  font-style: italic;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 0.6rem;
  }
`;

const Rating = styled.div`
  display: flex;
  justify-content: center;
  gap: 4px;
  margin-bottom: 15px;
`;

const Star = styled.div`
  color: #fbbf24;
  font-size: 0.65rem;
`;

const AuthorSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding-top: 15px;
  border-top: 1px solid #e5e7eb;
`;

const AuthorAvatar = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: linear-gradient(135deg, #3b82f6 0%, #1e3a8a 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  font-weight: 700;
  color: white;
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
`;

const AuthorInfo = styled.div`
  text-align: left;
`;

const AuthorName = styled.div`
  font-size: 0.6rem;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 2px;
`;

const AuthorTitle = styled.div`
  font-size: 0.5rem;
  color: #64748b;
`;

const AuthorCompany = styled.div`
  font-size: 0.48rem;
  color: #3b82f6;
  font-weight: 600;
`;

const Navigation = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 25px;
`;

const NavButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #fbbf24;
  backdrop-filter: blur(10px);
  border: 1px solid #fbbf24;
  color: white;
  font-size: 0.65rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(251, 191, 36, 0.3);

  &:hover {
    background: #f59e0b;
    border-color: #f59e0b;
    transform: scale(1.1);
    box-shadow: 0 6px 16px rgba(251, 191, 36, 0.4);
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;

    &:hover {
      transform: none;
    }
  }
`;

const Dots = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 30px;
`;

const Dot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${props => props.active ? '#3b82f6' : 'rgba(255, 255, 255, 0.3)'};
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: ${props => props.active ? '0 0 20px rgba(59, 130, 246, 0.6)' : 'none'};

  &:hover {
    background: ${props => props.active ? '#3b82f6' : 'rgba(255, 255, 255, 0.5)'};
    transform: scale(1.3);
  }
`;

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const testimonials = [
    {
      text: "Trans Asia Tech has revolutionized our security posture. The AI-powered threat detection has prevented multiple sophisticated attacks that would have cost us millions.",
      rating: 5,
      author: {
        name: "Sarah Johnson",
        title: "CISO",
        company: "TechCorp Global",
        avatar: "SJ"
      }
    },
    {
      text: "The platform's intuitive interface and powerful analytics have transformed how we approach cybersecurity. We now have complete visibility across our infrastructure.",
      rating: 5,
      author: {
        name: "Michael Chen",
        title: "Security Director",
        company: "FinanceFirst Bank",
        avatar: "MC"
      }
    },
    {
      text: "Trans Asia Tech's third-party risk management has streamlined our vendor assessment process. We can now monitor our entire supply chain in real-time.",
      rating: 5,
      author: {
        name: "David Thompson",
        title: "Compliance Director",
        company: "Manufacturing Plus",
        avatar: "DT"
      }
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <TestimonialsContainer ref={ref}>
      <Container>
        <SectionHeader>
          <Title
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            Trusted by Industry Leaders
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            See what our clients say about protecting their digital assets
          </Subtitle>
        </SectionHeader>

        <CarouselContainer>
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

              <AuthorSection>
                <AuthorAvatar>
                  {testimonials[currentIndex].author.avatar}
                </AuthorAvatar>
                <AuthorInfo>
                  <AuthorName>{testimonials[currentIndex].author.name}</AuthorName>
                  <AuthorTitle>{testimonials[currentIndex].author.title}</AuthorTitle>
                  <AuthorCompany>{testimonials[currentIndex].author.company}</AuthorCompany>
                </AuthorInfo>
              </AuthorSection>
            </TestimonialCard>
          </AnimatePresence>

          <Navigation>
            <NavButton onClick={prevTestimonial}>
              <FaChevronLeft />
            </NavButton>
            <NavButton onClick={nextTestimonial}>
              <FaChevronRight />
            </NavButton>
          </Navigation>

          <Dots>
            {testimonials.map((_, index) => (
              <Dot
                key={index}
                active={currentIndex === index}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </Dots>
        </CarouselContainer>
      </Container>
    </TestimonialsContainer>
  );
};

export default Testimonials;
