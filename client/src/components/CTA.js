import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
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
  background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
  border-radius: 32px;
  padding: 80px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 30px 80px rgba(30, 58, 138, 0.3);
  border: 3px solid rgba(251, 191, 36, 0.3);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 50%, rgba(251, 191, 36, 0.15) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.2) 0%, transparent 50%);
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(251, 191, 36, 0.1) 0%, transparent 70%);
    animation: ${rotate} 15s linear infinite;
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
  background: linear-gradient(135deg, #ffffff 0%, #fbbf24 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 24px;
  letter-spacing: -2px;
  line-height: 1.1;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const CTASubtitle = styled.p`
  font-size: 1.4rem;
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: 50px;
  line-height: 1.7;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  font-weight: 400;

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
  padding: 18px 24px;
  background: rgba(255, 255, 255, 0.98);
  border: 2px solid rgba(255, 255, 255, 0.4);
  border-radius: 14px;
  font-size: 1rem;
  color: #1e3a8a;
  transition: all 0.3s ease;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 500;

  &::placeholder {
    color: rgba(30, 58, 138, 0.5);
  }

  &:focus {
    outline: none;
    border-color: #fbbf24;
    background: #ffffff;
    box-shadow: 0 0 0 4px rgba(251, 191, 36, 0.2);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 16px 20px;
    font-size: 0.95rem;
  }
`;

const SubmitButton = styled.button`
  padding: 20px 50px;
  background: #fbbf24;
  color: #000000;
  border: none;
  border-radius: 14px;
  font-size: 1.15rem;
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
