import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaArrowRight,
  FaCheck
} from 'react-icons/fa';

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const CTAContainer = styled.section`
  padding: 120px 0;
  background: #ffffff;
  position: relative;

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

const CTABox = styled(motion.div)`
  background-image: linear-gradient(rgba(10, 14, 39, 0.51), rgba(30, 58, 138, 0.51)), url('/insurtech/1.jpg');
  background-size: cover;
  background-position: center;
  border-radius: 40px;
  padding: 80px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 30px 100px rgba(59, 130, 246, 0.3);

  &::before {
    content: '';
    position: absolute;
    inset: -200%;
    background: conic-gradient(
      from 0deg,
      transparent,
      rgba(59, 130, 246, 0.3),
      transparent 30%
    );
    animation: ${rotate} 6s linear infinite;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 3px;
    background-image: linear-gradient(rgba(10, 14, 39, 0.51), rgba(30, 58, 138, 0.51)), url('/insurtech/1.jpg');
    background-size: cover;
    background-position: center;
    border-radius: 37px;
  }

  @media (max-width: 768px) {
    padding: 60px 30px;
  }
`;

const CTAContent = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
`;

const CTATitle = styled.h2`
  font-size: 4rem;
  font-weight: 900;
  color: white;
  margin-bottom: 24px;
  letter-spacing: -2px;
  line-height: 1.1;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const CTASubtitle = styled.p`
  font-size: 1.4rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 50px;
  line-height: 1.7;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: 1.15rem;
  }
`;

const ContactForm = styled.form`
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FormInput = styled.input`
  padding: 16px 24px;
  background: rgba(255, 255, 255, 0.95);
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  font-size: 1rem;
  color: #1a1a1a;
  transition: all 0.3s ease;
  font-family: 'Poppins', sans-serif;

  &::placeholder {
    color: rgba(0, 0, 0, 0.5);
  }

  &:focus {
    outline: none;
    border-color: #fbbf24;
    background: #ffffff;
    box-shadow: 0 0 0 4px rgba(251, 191, 36, 0.2);
  }

  @media (max-width: 768px) {
    padding: 14px 20px;
    font-size: 0.95rem;
  }
`;

const SubmitButton = styled.button`
  padding: 18px 40px;
  background: #fbbf24;
  color: #1a1a1a;
  border: none;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 8px 24px rgba(251, 191, 36, 0.4);

  &:hover {
    background: #f59e0b;
    box-shadow: 0 12px 32px rgba(251, 191, 36, 0.6);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    padding: 16px 32px;
    font-size: 1rem;
  }
`;

const Features = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  max-width: 900px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(59, 130, 246, 0.5);
    transform: translateX(5px);
  }
`;

const FeatureIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.3rem;
  flex-shrink: 0;
`;

const FeatureText = styled.div`
  font-size: 1.05rem;
  font-weight: 600;
  color: white;
  text-align: left;
`;

const CTA = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <CTAContainer ref={ref}>
      <Container>
        <CTABox
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <CTAContent>
            <CTATitle>
              Start Protecting Your
              <br />
              Organization Today
            </CTATitle>
            
            <CTASubtitle>
              Join 500+ enterprises worldwide who trust Trans Asia Tech for their cybersecurity needs
            </CTASubtitle>

            <ContactForm onSubmit={handleSubmit}>
              <FormRow>
                <FormInput
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <FormInput
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <FormInput
                  type="tel"
                  name="mobile"
                  placeholder="Mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                />
              </FormRow>
              <SubmitButton type="submit">
                Submit
              </SubmitButton>
            </ContactForm>
          </CTAContent>
        </CTABox>
      </Container>
    </CTAContainer>
  );
};

export default CTA;
