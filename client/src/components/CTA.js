import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaArrowRight, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';

const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
`;

const shimmer = keyframes`
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
`;

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const CTAContainer = styled.section`
  padding: 120px 0;
  background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
  position: relative;
  overflow: hidden;

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
  border-radius: 40px;
  padding: 80px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 30px 80px rgba(30, 58, 138, 0.3);
  border: 3px solid rgba(251, 191, 36, 0.3);

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: 
      radial-gradient(circle at 20% 50%, rgba(251, 191, 36, 0.15) 0%, transparent 40%),
      radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.2) 0%, transparent 40%);
    animation: ${rotate} 20s linear infinite;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><circle cx="1" cy="1" r="1" fill="rgba(251,191,36,0.3)"/></svg>');
    background-size: 50px 50px;
    opacity: 0.1;
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 60px 30px;
  }
`;

const FloatingShape = styled.div`
  position: absolute;
  border-radius: 50%;
  background: ${props => props.color || 'rgba(251, 191, 36, 0.2)'};
  filter: blur(40px);
  pointer-events: none;
  animation: ${float} ${props => props.duration || '6s'} ease-in-out infinite;
  animation-delay: ${props => props.delay || '0s'};

  &:nth-child(1) {
    width: 300px;
    height: 300px;
    top: -150px;
    right: -100px;
  }

  &:nth-child(2) {
    width: 200px;
    height: 200px;
    bottom: -100px;
    left: -50px;
  }

  &:nth-child(3) {
    width: 150px;
    height: 150px;
    top: 50%;
    left: 10%;
  }
`;

const CTAContent = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 60px;
  align-items: center;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 50px;
  }
`;

const LeftSection = styled.div``;

const CTALabel = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: rgba(251, 191, 36, 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(251, 191, 36, 0.4);
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 700;
  color: #fbbf24;
  margin-bottom: 24px;
  text-transform: uppercase;
  letter-spacing: 1.2px;
`;

const CTATitle = styled(motion.h2)`
  font-size: 4rem;
  font-weight: 900;
  background: linear-gradient(135deg, #ffffff 0%, #fbbf24 50%, #ffffff 100%);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 24px;
  letter-spacing: -2px;
  line-height: 1.1;
  animation: ${shimmer} 3s ease-in-out infinite;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    letter-spacing: -1px;
  }
`;

const CTASubtitle = styled(motion.p)`
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: 40px;
  line-height: 1.7;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 1.15rem;
  }
`;

const FeatureList = styled(motion.ul)`
  list-style: none;
  padding: 0;
  margin-bottom: 30px;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 16px;
  font-weight: 500;

  svg {
    color: #fbbf24;
    font-size: 1.2rem;
    flex-shrink: 0;
  }
`;

const RightSection = styled.div``;

const ContactForm = styled(motion.form)`
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 45px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.5);

  @media (max-width: 768px) {
    padding: 35px 25px;
  }
`;

const FormTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #1e3a8a;
  margin-bottom: 24px;
  text-align: center;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: ${props => props.columns || '1fr'};
  gap: 16px;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FormInput = styled.input`
  padding: 18px 24px;
  background: #f8fafc;
  border: 2px solid #e2e8f0;
  border-radius: 14px;
  font-size: 1rem;
  color: #1e3a8a;
  transition: all 0.3s ease;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 500;

  &::placeholder {
    color: #94a3b8;
  }

  &:focus {
    outline: none;
    border-color: #3b82f6;
    background: #ffffff;
    box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 16px 20px;
    font-size: 0.95rem;
  }
`;

const FormTextarea = styled.textarea`
  padding: 18px 24px;
  background: #f8fafc;
  border: 2px solid #e2e8f0;
  border-radius: 14px;
  font-size: 1rem;
  color: #1e3a8a;
  transition: all 0.3s ease;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 500;
  resize: vertical;
  min-height: 120px;

  &::placeholder {
    color: #94a3b8;
  }

  &:focus {
    outline: none;
    border-color: #3b82f6;
    background: #ffffff;
    box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 16px 20px;
    font-size: 0.95rem;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 20px 50px;
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  color: #000000;
  border: none;
  border-radius: 14px;
  font-size: 1.15rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  letter-spacing: 0.5px;
  box-shadow: 0 8px 24px rgba(251, 191, 36, 0.4);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
    transition: left 0.5s;
  }

  &:hover::before {
    left: 100%;
  }

  &:hover {
    transform: translateY(-3px);
    background: linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%);
    box-shadow: 0 15px 50px rgba(251, 191, 36, 0.6);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(5px);
  }

  @media (max-width: 768px) {
    padding: 16px 32px;
    font-size: 1rem;
  }
`;

const SuccessMessage = styled(motion.div)`
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  padding: 20px;
  border-radius: 14px;
  text-align: center;
  font-size: 1.1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  box-shadow: 0 10px 30px rgba(16, 185, 129, 0.3);

  svg {
    font-size: 1.5rem;
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
    company: '',
    phone: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: ''
      });
    }, 3000);
  };

  const features = [
    "Free security assessment included",
    "24/7 expert support & monitoring",
    "No credit card required for demo",
    "Trusted by 500+ enterprises"
  ];

  return (
    <CTAContainer ref={ref}>
      <Container>
        <CTABox
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <FloatingShape color="rgba(251, 191, 36, 0.2)" duration="8s" delay="0s" />
          <FloatingShape color="rgba(59, 130, 246, 0.2)" duration="10s" delay="1s" />
          <FloatingShape color="rgba(251, 191, 36, 0.15)" duration="12s" delay="2s" />

          <CTAContent>
            <LeftSection>
              <CTALabel
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <FaPaperPlane />
                Get Started Today
              </CTALabel>

              <CTATitle
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Ready to Secure Your Future?
              </CTATitle>

              <CTASubtitle
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Join industry leaders protecting their digital assets with TransAsia's cutting-edge cybersecurity solutions
              </CTASubtitle>

              <FeatureList
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                {features.map((feature, index) => (
                  <FeatureItem key={index}>
                    <FaCheckCircle />
                    {feature}
                  </FeatureItem>
                ))}
              </FeatureList>
            </LeftSection>

            <RightSection>
              <ContactForm
                onSubmit={handleSubmit}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {!submitted ? (
                  <>
                    <FormTitle>Request a Demo</FormTitle>
                    
                    <FormRow columns="1fr 1fr">
                      <FormInput
                        type="text"
                        name="name"
                        placeholder="Full Name *"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                      <FormInput
                        type="email"
                        name="email"
                        placeholder="Work Email *"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </FormRow>

                    <FormRow columns="1fr 1fr">
                      <FormInput
                        type="text"
                        name="company"
                        placeholder="Company Name *"
                        value={formData.company}
                        onChange={handleChange}
                        required
                      />
                      <FormInput
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </FormRow>

                    <FormRow>
                      <FormTextarea
                        name="message"
                        placeholder="Tell us about your security needs..."
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </FormRow>

                    <SubmitButton type="submit">
                      Get Your Free Demo <FaArrowRight />
                    </SubmitButton>
                  </>
                ) : (
                  <SuccessMessage
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <FaCheckCircle />
                    Thank you! We'll be in touch soon.
                  </SuccessMessage>
                )}
              </ContactForm>
            </RightSection>
          </CTAContent>
        </CTABox>
      </Container>
    </CTAContainer>
  );
};

export default CTA;
