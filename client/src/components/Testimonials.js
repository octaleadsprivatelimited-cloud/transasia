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
  padding: 60px 0;
  background: linear-gradient(135deg, #0a0e27 0%, #1a237e 50%, #0d47a1 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 80%, rgba(33, 150, 243, 0.2) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(100, 181, 246, 0.15) 0%, transparent 50%);
  }

  @media (max-width: 768px) {
    padding: 40px 0;
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
  font-size: 1rem;
  font-weight: 700;
  background: linear-gradient(135deg, #ffffff 0%, #60a5fa 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 8px;
  letter-spacing: -0.5px;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 0.5rem;
  color: rgba(255, 255, 255, 0.8);
  max-width: 400px;
  margin: 0 auto;
`;

const CarouselContainer = styled.div`
  position: relative;
  max-width: 900px;
  margin: 0 auto;
`;

const TestimonialCard = styled(motion.div)`
  background: rgba(30, 58, 138, 0.3);
  backdrop-filter: blur(30px);
  border: 1px solid rgba(59, 130, 246, 0.3);
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  position: relative;

  @media (max-width: 768px) {
    padding: 15px 10px;
  }
`;

const QuoteIcon = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  color: white;
  margin: 0 auto 15px;
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.5);
  animation: ${float} 3s ease-in-out infinite;
`;

const TestimonialText = styled.p`
  font-size: 0.75rem;
  line-height: 1.6;
  color: white;
  text-align: center;
  margin-bottom: 20px;
  font-style: italic;
  font-weight: 400;

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
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const AuthorAvatar = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  font-weight: 700;
  color: white;
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.4);
`;

const AuthorInfo = styled.div`
  text-align: left;
`;

const AuthorName = styled.div`
  font-size: 0.6rem;
  font-weight: 700;
  color: white;
  margin-bottom: 2px;
`;

const AuthorTitle = styled.div`
  font-size: 0.5rem;
  color: rgba(255, 255, 255, 0.7);
`;

const AuthorCompany = styled.div`
  font-size: 0.48rem;
  color: #60a5fa;
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
  background: rgba(59, 130, 246, 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(59, 130, 246, 0.4);
  color: white;
  font-size: 0.65rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(59, 130, 246, 0.4);
    border-color: rgba(59, 130, 246, 0.6);
    transform: scale(1.1);
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
