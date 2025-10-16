import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaQuoteLeft,
  FaStar,
  FaChevronLeft,
  FaChevronRight,
  FaLinkedin
} from 'react-icons/fa';

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
`;

const shimmer = keyframes`
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
`;

const TestimonialsContainer = styled.section`
  padding: 120px 0;
  background: linear-gradient(180deg, #f8fafc 0%, #ffffff 50%, #f8fafc 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 10%;
    left: -5%;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(251, 191, 36, 0.08) 0%, transparent 70%);
    border-radius: 50%;
    animation: ${float} 8s ease-in-out infinite;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 10%;
    right: -5%;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%);
    border-radius: 50%;
    animation: ${float} 10s ease-in-out infinite;
  }

  @media (max-width: 768px) {
    padding: 80px 0;
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
  margin-bottom: 80px;
`;

const LabelBadge = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 24px;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(251, 191, 36, 0.1) 100%);
  border: 2px solid rgba(59, 130, 246, 0.2);
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 24px;
  text-transform: uppercase;
  letter-spacing: 1.5px;

  svg {
    color: #fbbf24;
  }
`;

const Title = styled(motion.h2)`
  font-size: 4.5rem;
  font-weight: 900;
  background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #fbbf24 100%);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 24px;
  letter-spacing: -3px;
  line-height: 1.1;
  animation: ${shimmer} 5s ease-in-out infinite;

  @media (max-width: 768px) {
    font-size: 2.8rem;
    letter-spacing: -1.5px;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.3rem;
  color: #64748b;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.8;
`;

const TestimonialSlider = styled.div`
  position: relative;
  max-width: 1100px;
  margin: 0 auto;
`;

const TestimonialCard = styled(motion.div)`
  background: #ffffff;
  border-radius: 32px;
  padding: 60px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
  border: 2px solid rgba(226, 232, 240, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 6px;
    background: linear-gradient(90deg, #3b82f6 0%, #fbbf24 100%);
  }

  @media (max-width: 768px) {
    padding: 40px 30px;
  }
`;

const QuoteIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 20px;
  background: linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: white;
  margin-bottom: 30px;
  box-shadow: 0 15px 40px rgba(59, 130, 246, 0.3);
  animation: ${float} 4s ease-in-out infinite;
`;

const TestimonialText = styled.p`
  font-size: 1.4rem;
  line-height: 1.9;
  color: #334155;
  margin-bottom: 40px;
  font-weight: 400;
  font-style: italic;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const AuthorSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding-top: 30px;
  border-top: 2px solid #e2e8f0;
`;

const AuthorImage = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: ${props => props.bgColor || 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  font-weight: 700;
  color: white;
  flex-shrink: 0;
  border: 3px solid #ffffff;
  box-shadow: 0 8px 24px rgba(59, 130, 246, 0.3);
`;

const AuthorInfo = styled.div`
  flex: 1;
`;

const AuthorName = styled.div`
  font-size: 1.3rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 6px;
  display: flex;
  align-items: center;
  gap: 10px;

  svg {
    color: #0077b5;
    cursor: pointer;
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.2);
    }
  }
`;

const AuthorRole = styled.div`
  font-size: 1rem;
  color: #64748b;
  margin-bottom: 8px;
`;

const RatingStars = styled.div`
  display: flex;
  gap: 6px;

  svg {
    color: #fbbf24;
    font-size: 1.1rem;
  }
`;

const NavigationButtons = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-top: 50px;
`;

const NavButton = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #ffffff;
  border: 2px solid #e2e8f0;
  color: #1e3a8a;
  font-size: 1.3rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);

  &:hover {
    background: linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%);
    color: white;
    border-color: #3b82f6;
    transform: scale(1.1);
    box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
    transform: scale(1);
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    font-size: 1.1rem;
  }
`;

const ProgressDots = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  margin-top: 40px;
`;

const Dot = styled.button`
  width: ${props => props.active ? '40px' : '12px'};
  height: 12px;
  border-radius: 6px;
  background: ${props => props.active ? 
    'linear-gradient(90deg, #3b82f6 0%, #fbbf24 100%)' : 
    '#cbd5e1'};
  border: none;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: ${props => props.active ? '0 4px 15px rgba(59, 130, 246, 0.4)' : 'none'};

  &:hover {
    background: ${props => props.active ? 
      'linear-gradient(90deg, #3b82f6 0%, #fbbf24 100%)' : 
      '#94a3b8'};
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
      text: "TransAsia has transformed our cybersecurity posture completely. Their risk quantification platform helped us justify our security spend to the board and make data-driven decisions. Absolutely exceptional!",
      author: "Sarah Johnson",
      role: "Chief Information Security Officer",
      company: "Fortune 500 Financial Services",
      rating: 5,
      initials: "SJ",
      bgColor: "linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)"
    },
    {
      text: "The AI-powered threat detection has caught multiple zero-day attacks before they could cause damage. The team's expertise and 24/7 monitoring give us complete peace of mind. Best investment we've made in security.",
      author: "Michael Chen",
      role: "VP of Technology",
      company: "Global Manufacturing Corp",
      rating: 5,
      initials: "MC",
      bgColor: "linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)"
    },
    {
      text: "Working with TransAsia's experts has been a game-changer. Their comprehensive approach to vulnerability management and risk quantification is unmatched in the industry. Highly recommended!",
      author: "Emily Rodriguez",
      role: "Director of IT Security",
      company: "Healthcare Technology Inc",
      rating: 5,
      initials: "ER",
      bgColor: "linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%)"
    },
    {
      text: "The executive dashboard provides clear, actionable insights that we present directly to our board. Finally, a security solution that speaks the language of business. Outstanding results!",
      author: "David Park",
      role: "Chief Risk Officer",
      company: "International Banking Group",
      rating: 5,
      initials: "DP",
      bgColor: "linear-gradient(135deg, #ec4899 0%, #f472b6 100%)"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

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
          <LabelBadge
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <FaStar />
            Testimonials
          </LabelBadge>

          <Title
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Trusted by Industry Leaders
          </Title>

          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            See what our clients say about their experience with TransAsia
          </Subtitle>
        </SectionHeader>

        <TestimonialSlider>
          <AnimatePresence mode="wait">
            <TestimonialCard
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <QuoteIcon>
                <FaQuoteLeft />
              </QuoteIcon>

              <TestimonialText>
                "{testimonials[currentIndex].text}"
              </TestimonialText>

              <AuthorSection>
                <AuthorImage bgColor={testimonials[currentIndex].bgColor}>
                  {testimonials[currentIndex].initials}
                </AuthorImage>
                
                <AuthorInfo>
                  <AuthorName>
                    {testimonials[currentIndex].author}
                    <FaLinkedin size={18} />
                  </AuthorName>
                  <AuthorRole>
                    {testimonials[currentIndex].role}
                  </AuthorRole>
                  <RatingStars>
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </RatingStars>
                </AuthorInfo>
              </AuthorSection>
            </TestimonialCard>
          </AnimatePresence>

          <NavigationButtons>
            <NavButton onClick={prevTestimonial}>
              <FaChevronLeft />
            </NavButton>
            <NavButton onClick={nextTestimonial}>
              <FaChevronRight />
            </NavButton>
          </NavigationButtons>

          <ProgressDots>
            {testimonials.map((_, index) => (
              <Dot
                key={index}
                active={currentIndex === index}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </ProgressDots>
        </TestimonialSlider>
      </Container>
    </TestimonialsContainer>
  );
};

export default Testimonials;
