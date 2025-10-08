import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: #1a1a1a;
  color: #ffffff;
  padding: 60px 0 0;
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 80px;

  @media (max-width: 768px) {
    padding: 0 30px;
  }
`;

const CTASection = styled.div`
  padding: 80px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;

  @media (max-width: 768px) {
    padding: 60px 0;
  }
`;

const CTATitle = styled.h2`
  font-size: 3rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 40px;
  letter-spacing: -0.5px;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 30px;
  }
`;

const CTAButton = styled.button`
  padding: 18px 45px;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.05rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #2563eb;
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(59, 130, 246, 0.3);
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
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 20px;
`;

const CompanyDescription = styled.p`
  font-size: 0.95rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 30px;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
`;

const SocialLink = styled.a`
  width: 45px;
  height: 45px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.3rem;
  transition: all 0.3s ease;

  &:hover {
    background: #3b82f6;
    color: white;
    transform: translateY(-3px);
  }
`;

const ColumnTitle = styled.h4`
  font-size: 0.9rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.6);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 25px;
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FooterLink = styled(Link)`
  display: block;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 0.95rem;
  padding: 8px 0;
  transition: all 0.3s ease;

  &:hover {
    color: #60a5fa;
    padding-left: 5px;
  }
`;

const FooterBottom = styled.div`
  padding: 30px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
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
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
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
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #60a5fa;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <CTASection>
          <CTATitle>Let's shape the future together</CTATitle>
          <CTAButton>Contact Us</CTAButton>
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
