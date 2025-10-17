import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaQuoteLeft,
  FaStar,
  FaChevronLeft,
  FaChevronRight
} from 'react-icons/fa';


const TestimonialsContainer = styled.section`
  padding: 80px 0;
  background: #fafafa;
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
  font-size: 1.75rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 8px;
  letter-spacing: -0.5px;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const CarouselWrapper = styled.div`
  position: relative;
  overflow: hidden;
  padding: 0 60px;

  @media (max-width: 768px) {
    padding: 0 50px;
  }
`;

const CarouselTrack = styled(motion.div)`
  display: flex;
  gap: 20px;
`;

const TestimonialCard = styled(motion.div)`
  min-width: calc(33.333% - 14px);
  background: #ffffff;
  border-radius: 8px;
  padding: 35px;
  border: 1px solid #e5e7eb;
  transition: all 0.3s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
    border-color: #cbd5e1;
  }

  @media (max-width: 768px) {
    min-width: 100%;
    padding: 30px;
  }
`;

const QuoteIcon = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 6px;
  background: #f1f5f9;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  color: #3b82f6;
  margin-bottom: 20px;
`;

const TestimonialText = styled.p`
  font-size: 0.95rem;
  line-height: 1.65;
  color: #334155;
  margin-bottom: 24px;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const AuthorSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding-top: 20px;
  border-top: 1px solid #f1f5f9;
`;

const AuthorImage = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: ${props => props.bgColor || 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: 600;
  color: white;
  flex-shrink: 0;
`;

const AuthorInfo = styled.div`
  flex: 1;
`;

const AuthorName = styled.div`
  font-size: 0.9rem;
  font-weight: 600;
  color: #0f172a;
  margin-bottom: 2px;
`;

const AuthorRole = styled.div`
  font-size: 0.8rem;
  color: #64748b;
  line-height: 1.4;
`;

const RatingStars = styled.div`
  display: flex;
  gap: 2px;
  margin-top: 6px;

  svg {
    color: #fbbf24;
    font-size: 0.7rem;
  }
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  color: #475569;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  z-index: 10;

  &:hover:not(:disabled) {
    background: #0f172a;
    color: white;
    border-color: #0f172a;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  &.prev {
    left: 0;
  }

  &.next {
    right: 0;
  }

  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
    font-size: 0.9rem;
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
    },
    {
      text: "TransAsia's cyber risk quantification has been instrumental in our digital transformation journey. Their platform provides real-time insights that help us stay ahead of emerging threats. Exceptional service and expertise!",
      author: "Rajesh Kumar",
      role: "Chief Technology Officer",
      company: "Leading Indian Conglomerate",
      rating: 5,
      initials: "RK",
      bgColor: "linear-gradient(135deg, #10b981 0%, #34d399 100%)"
    },
    {
      text: "The comprehensive vulnerability assessment and penetration testing services have significantly improved our security posture. TransAsia's team is highly professional and delivers results that matter. Highly recommend their services!",
      author: "Priya Sharma",
      role: "Head of Information Security",
      company: "Mumbai Financial Services",
      rating: 5,
      initials: "PS",
      bgColor: "linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)"
    },
    {
      text: "Working with TransAsia has given us confidence in our cybersecurity strategy. Their risk management framework is comprehensive and their support team is always available. Best decision we made for our organization!",
      author: "Amit Patel",
      role: "VP of Operations",
      company: "Tech Solutions India",
      rating: 5,
      initials: "AP",
      bgColor: "linear-gradient(135deg, #06b6d4 0%, #22d3ee 100%)"
    },
    {
      text: "TransAsia's GRC platform has streamlined our compliance processes and made audits much easier. Their expertise in the Indian regulatory landscape is invaluable. Outstanding partnership!",
      author: "Sneha Reddy",
      role: "Compliance Director",
      company: "Bangalore IT Services",
      rating: 5,
      initials: "SR",
      bgColor: "linear-gradient(135deg, #a855f7 0%, #c084fc 100%)"
    },
    {
      text: "The dark web monitoring and threat intelligence services have helped us prevent multiple potential breaches. TransAsia's proactive approach to security is exactly what we needed. Fantastic team and technology!",
      author: "Vikram Singh",
      role: "Security Operations Lead",
      company: "Delhi Enterprise Solutions",
      rating: 5,
      initials: "VS",
      bgColor: "linear-gradient(135deg, #ef4444 0%, #f87171 100%)"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const cardWidth = typeof window !== 'undefined' && window.innerWidth <= 768 ? 100 : 33.333;

  return (
    <TestimonialsContainer ref={ref}>
      <Container>
        <SectionHeader>
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            What Our Clients Say About Us
          </Title>
        </SectionHeader>

        <CarouselWrapper>
          <NavButton className="prev" onClick={prevTestimonial}>
            <FaChevronLeft />
          </NavButton>

          <CarouselTrack
            animate={{ x: `-${currentIndex * (cardWidth + (20 / 3))}%` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index}>
                <QuoteIcon>
                  <FaQuoteLeft />
                </QuoteIcon>

                <TestimonialText>
                  "{testimonial.text}"
                </TestimonialText>

                <AuthorSection>
                  <AuthorImage bgColor={testimonial.bgColor}>
                    {testimonial.initials}
                  </AuthorImage>
                  
                  <AuthorInfo>
                    <AuthorName>
                      {testimonial.author}
                    </AuthorName>
                    <AuthorRole>
                      {testimonial.role}
                    </AuthorRole>
                    <RatingStars>
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </RatingStars>
                  </AuthorInfo>
                </AuthorSection>
              </TestimonialCard>
            ))}
          </CarouselTrack>

          <NavButton className="next" onClick={nextTestimonial}>
            <FaChevronRight />
          </NavButton>
        </CarouselWrapper>
      </Container>
    </TestimonialsContainer>
  );
};

export default Testimonials;
