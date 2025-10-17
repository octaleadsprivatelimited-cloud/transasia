import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaArrowRight, FaCheckCircle, FaPhone, FaEnvelope } from 'react-icons/fa';

const matrix = keyframes`
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 100% 100%;
  }
`;

const pulse = keyframes`
  0%, 100% {
    opacity: 0.3;
  }
  50% {
    opacity: 0.6;
  }
`;

const CTAContainer = styled.section`
  padding: 120px 0;
  background: #000000;
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
      linear-gradient(45deg, transparent 30%, rgba(0, 255, 65, 0.03) 30%, rgba(0, 255, 65, 0.03) 70%, transparent 70%),
      linear-gradient(-45deg, transparent 30%, rgba(0, 200, 255, 0.03) 30%, rgba(0, 200, 255, 0.03) 70%, transparent 70%);
    background-size: 60px 60px;
    animation: ${matrix} 20s linear infinite;
    opacity: 0.4;
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 800px;
    height: 800px;
    background: radial-gradient(circle, rgba(0, 100, 200, 0.15) 0%, transparent 70%);
    animation: ${pulse} 4s ease-in-out infinite;
  }

  @media (max-width: 768px) {
    padding: 80px 0;
  }
`;

const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 40px;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const CTABox = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 0;
  position: relative;
  overflow: hidden;
  z-index: 1;
`;

const CTAContent = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 0;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

const LeftSection = styled.div`
  padding: 60px 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 40px 30px;
  }
`;

const CTATitle = styled(motion.h2)`
  font-size: 4rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 16px;
  letter-spacing: -2px;
  line-height: 1.05;
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    letter-spacing: -1.2px;
  }
`;

const CTASubtitle = styled(motion.p)`
  font-size: 1.3rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.5;
  margin-bottom: 32px;
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const FeatureList = styled(motion.ul)`
  list-style: none;
  padding: 0;
  margin: 0 0 32px 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.95);
  font-weight: 500;

  svg {
    color: #fbbf24;
    font-size: 1.1rem;
    flex-shrink: 0;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
`;

const ContactItem = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  color: rgba(255, 255, 255, 0.85);
  text-decoration: none;
  font-size: 0.95rem;
  transition: all 0.3s ease;

  svg {
    color: #fbbf24;
  }

  &:hover {
    color: #ffffff;
    transform: translateX(3px);
  }
`;

const RightSection = styled.div`
  background: #ffffff;
  padding: 50px;
  border-radius: 0 20px 20px 0;

  @media (max-width: 968px) {
    border-radius: 0 0 20px 20px;
  }

  @media (max-width: 768px) {
    padding: 35px 25px;
  }
`;

const FormTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #1e3a8a;
  margin-bottom: 8px;
  letter-spacing: -0.5px;
`;

const FormSubtitle = styled.p`
  font-size: 0.95rem;
  color: #64748b;
  margin-bottom: 28px;
`;

const ContactForm = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: ${props => props.columns || '1fr'};
  gap: 18px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FormInput = styled.input`
  padding: 16px 20px;
  background: #f8fafc;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 0.95rem;
  color: #1e3a8a;
  transition: all 0.3s ease;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-weight: 500;

  &::placeholder {
    color: #94a3b8;
  }

  &:focus {
    outline: none;
    border-color: #3b82f6;
    background: #ffffff;
    box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1);
  }

  @media (max-width: 768px) {
    padding: 14px 18px;
    font-size: 0.9rem;
  }
`;

const FormTextarea = styled.textarea`
  padding: 16px 20px;
  background: #f8fafc;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 0.95rem;
  color: #1e3a8a;
  transition: all 0.3s ease;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-weight: 500;
  resize: vertical;
  min-height: 110px;

  &::placeholder {
    color: #94a3b8;
  }

  &:focus {
    outline: none;
    border-color: #3b82f6;
    background: #ffffff;
    box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1);
  }

  @media (max-width: 768px) {
    padding: 14px 18px;
    font-size: 0.9rem;
    min-height: 100px;
  }
`;

const SubmitButton = styled.button`
  padding: 14px 32px;
  background: #0071e3;
  color: #ffffff;
  border: none;
  border-radius: 980px;
  font-size: 1.05rem;
  font-weight: 400;
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  position: relative;
  overflow: hidden;

  &:hover {
    background: #0077ed;
    transform: scale(1.02);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(5px);
  }

  @media (max-width: 768px) {
    padding: 16px 35px;
    font-size: 1rem;
  }
`;

const SuccessMessage = styled(motion.div)`
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  font-size: 1.05rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  box-shadow: 0 10px 30px rgba(16, 185, 129, 0.3);

  svg {
    font-size: 1.4rem;
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
    }, 4000);
  };

  const features = [
    "Free Security Assessment Included",
    "24/7 Expert Support & Monitoring",
    "Enterprise-Grade Protection",
    "ROI-Focused Cybersecurity Solutions"
  ];

  return (
    <CTAContainer ref={ref}>
      <Container>
        <CTABox
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <CTAContent>
            <LeftSection>
              <CTATitle
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Ready to Secure Your Future?
              </CTATitle>

              <CTASubtitle
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Join 500+ enterprises protecting their digital assets with TransAsia's cutting-edge cybersecurity solutions.
              </CTASubtitle>

              <FeatureList
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {features.map((feature, index) => (
                  <FeatureItem key={index}>
                    <FaCheckCircle />
                    {feature}
                  </FeatureItem>
                ))}
              </FeatureList>

              <ContactInfo>
                <ContactItem href="tel:+1234567890">
                  <FaPhone size={15} />
                  +1 (234) 567-890
                </ContactItem>
                <ContactItem href="mailto:info@transasia.com">
                  <FaEnvelope size={15} />
                  info@transasia.com
                </ContactItem>
              </ContactInfo>
            </LeftSection>

            <RightSection>
              <FormTitle>Get Started Today</FormTitle>
              <FormSubtitle>Fill out the form and our team will contact you within 24 hours</FormSubtitle>

              {!submitted ? (
                <ContactForm
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.5 }}
                >
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
                </ContactForm>
              ) : (
                <SuccessMessage
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <FaCheckCircle />
                  Thank you! We'll contact you within 24 hours.
                </SuccessMessage>
              )}
            </RightSection>
          </CTAContent>
        </CTABox>
      </Container>
    </CTAContainer>
  );
};

export default CTA;
