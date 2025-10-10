import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { FaLinkedin, FaFacebook, FaInstagram, FaRocket } from 'react-icons/fa';

const gradientShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #0a0e27 0%, #1a1f3a 25%, #2d1b4e 50%, #1a1f3a 75%, #0a0e27 100%);
  background-size: 400% 400%;
  animation: ${gradientShift} 15s ease infinite;
  color: #ffffff;
  padding: 60px 0 0;
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
      radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
      radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.1) 0%, transparent 60%);
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px),
      linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px);
    background-size: 50px 50px;
    pointer-events: none;
  }
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 80px;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 0 30px;
  }
`;

const CTASection = styled.div`
  padding: 80px 0;
  border-bottom: 2px solid;
  border-image: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.5), rgba(139, 92, 246, 0.5), transparent) 1;
  text-align: center;

  @media (max-width: 768px) {
    padding: 60px 0;
  }
`;

const CTATitle = styled.h2`
  font-size: 3.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, #ffffff 0%, #3b82f6 30%, #8b5cf6 60%, #ec4899 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 40px;
  letter-spacing: -0.5px;
  filter: drop-shadow(0 0 30px rgba(59, 130, 246, 0.3));

  @media (max-width: 768px) {
    font-size: 2.2rem;
    margin-bottom: 30px;
  }
`;

const CTAButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 20px 50px;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%);
  background-size: 200% 200%;
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.4s ease;
  box-shadow: 
    0 10px 40px rgba(59, 130, 246, 0.4),
    0 0 60px rgba(139, 92, 246, 0.3);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, #ec4899 0%, #8b5cf6 50%, #3b82f6 100%);
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  &::after {
    content: '';
    position: absolute;
    inset: -2px;
    background: linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899, #f59e0b);
    border-radius: 50px;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.4s ease;
    filter: blur(10px);
  }

  &:hover {
    transform: translateY(-5px) scale(1.05);
    box-shadow: 
      0 20px 60px rgba(59, 130, 246, 0.6),
      0 0 100px rgba(139, 92, 246, 0.5);
    
    &::before {
      opacity: 1;
    }

    &::after {
      opacity: 0.7;
    }
  }

  svg {
    animation: ${float} 2s ease-in-out infinite;
  }
`;

const FooterMain = styled.div`
  padding: 60px 0;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  gap: 60px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const FooterColumn = styled.div``;

const CompanyInfo = styled.div``;

const CompanyName = styled.h3`
  font-size: 1.8rem;
  font-weight: 800;
  background: linear-gradient(135deg, #ffffff 0%, #3b82f6 50%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 20px;
  filter: drop-shadow(0 0 20px rgba(59, 130, 246, 0.3));
`;

const CompanyDescription = styled.p`
  font-size: 1rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 30px;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
`;

const SocialLink = styled.a`
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%);
  border: 2px solid rgba(59, 130, 246, 0.3);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.4rem;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%);
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  &:hover {
    transform: translateY(-5px) scale(1.1);
    border-color: transparent;
    box-shadow: 
      0 10px 30px rgba(59, 130, 246, 0.5),
      0 0 40px rgba(139, 92, 246, 0.4);
    
    &::before {
      opacity: 1;
    }
  }

  svg {
    position: relative;
    z-index: 1;
  }
`;

const ColumnTitle = styled.h4`
  font-size: 1rem;
  font-weight: 800;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin-bottom: 25px;
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FooterLink = styled(Link)`
  display: block;
  color: rgba(255, 255, 255, 0.85);
  text-decoration: none;
  font-size: 1rem;
  padding: 10px 0;
  transition: all 0.3s ease;
  position: relative;
  padding-left: 15px;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #3b82f6, #8b5cf6);
    transition: width 0.3s ease;
  }

  &:hover {
    color: #ffffff;
    padding-left: 25px;
    
    &::before {
      width: 12px;
    }
  }
`;

const FooterBottom = styled.div`
  padding: 30px 0;
  border-top: 2px solid;
  border-image: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.3), rgba(139, 92, 246, 0.3), transparent) 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 25px 0;
  }
`;

const Copyright = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
  font-weight: 500;
`;

const LegalLinks = styled.div`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const LegalLink = styled(Link)`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  font-weight: 500;

  &::after {
    content: '';
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #3b82f6, #8b5cf6);
    transition: width 0.3s ease;
  }

  &:hover {
    color: #ffffff;
    
    &::after {
      width: 100%;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <CTASection>
          <CTATitle>Let's shape the future together</CTATitle>
          <CTAButton to="/contact">
            Contact Us <FaRocket />
          </CTAButton>
        </CTASection>

        <FooterMain>
          <FooterColumn>
            <CompanyInfo>
              <CompanyName>Trans Asia Tech</CompanyName>
              <CompanyDescription>
                Providing Risk Management Solutions to different sectors. We leverage our domain expertise 
                in comprehensive solutions through technology while addressing key concerns of various industries.
              </CompanyDescription>
              <SocialLinks>
                <SocialLink 
                  href="https://www.instagram.com/transasia/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </SocialLink>
                <SocialLink 
                  href="https://www.linkedin.com/company/transasia-softtech/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </SocialLink>
                <SocialLink 
                  href="https://www.facebook.com/p/TransAsia-SoftTech-100069516170641/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </SocialLink>
              </SocialLinks>
            </CompanyInfo>
          </FooterColumn>

          <FooterColumn>
            <ColumnTitle>Solutions</ColumnTitle>
            <LinkList>
              <li><FooterLink to="/insurtech">Insurtech</FooterLink></li>
              <li><FooterLink to="/products">Cybersecurity Products</FooterLink></li>
              <li><FooterLink to="/services">Cybersecurity Services</FooterLink></li>
              <li><FooterLink to="/consulting">Consulting</FooterLink></li>
            </LinkList>
          </FooterColumn>

          <FooterColumn>
            <ColumnTitle>Company</ColumnTitle>
            <LinkList>
              <li><FooterLink to="/about">About Us</FooterLink></li>
              <li><FooterLink to="/team">Our Team</FooterLink></li>
              <li><FooterLink to="/careers">Careers</FooterLink></li>
              <li><FooterLink to="/press">Press Release</FooterLink></li>
            </LinkList>
          </FooterColumn>

          <FooterColumn>
            <ColumnTitle>Resources</ColumnTitle>
            <LinkList>
              <li><FooterLink to="/blog">Blog</FooterLink></li>
              <li><FooterLink to="/gallery">Gallery</FooterLink></li>
              <li><FooterLink to="/contact">Contact Us</FooterLink></li>
            </LinkList>
          </FooterColumn>

          <FooterColumn>
            <ColumnTitle>Location</ColumnTitle>
            <LinkList>
              <li style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.95rem', lineHeight: '1.8' }}>
                93, 49 Harrington Road<br />
                Shenoy Nagar<br />
                Chennai, Tamil Nadu 600030<br />
                India
              </li>
            </LinkList>
          </FooterColumn>
        </FooterMain>

        <FooterBottom>
          <Copyright>Copyright © Trans Asia Tech 2025. All rights reserved.</Copyright>
          <LegalLinks>
            <LegalLink to="/privacy">Privacy</LegalLink>
            <LegalLink to="/terms">Terms and Conditions</LegalLink>
            <LegalLink to="/contact">Contact Us</LegalLink>
          </LegalLinks>
        </FooterBottom>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
