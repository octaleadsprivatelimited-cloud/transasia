import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaLinkedin, FaFacebook, FaInstagram, FaArrowRight, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: linear-gradient(180deg, #0f172a 0%, #1e293b 100%);
  color: #ffffff;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.5), transparent);
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
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;

  @media (max-width: 968px) {
    flex-direction: column;
    text-align: center;
    padding: 60px 0;
  }
`;

const CTAContent = styled.div`
  flex: 1;
`;

const CTATitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 12px;
  letter-spacing: -0.5px;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const CTASubtitle = styled.p`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  max-width: 600px;

  @media (max-width: 968px) {
    margin: 0 auto;
  }
`;

const CTAButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 16px 32px;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;
  white-space: nowrap;

  &:hover {
    background: #2563eb;
    transform: translateX(5px);
    box-shadow: 0 10px 30px rgba(59, 130, 246, 0.3);
  }

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(5px);
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

const Logo = styled.img`
  height: 80px;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    height: 60px;
  }
`;

const CompanyName = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 16px;
  letter-spacing: -0.3px;
`;

const CompanyDescription = styled.p`
  font-size: 0.95rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.65);
  margin-bottom: 28px;
  max-width: 400px;
`;

const ContactInfo = styled.div`
  margin-bottom: 28px;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);

  svg {
    color: #3b82f6;
    font-size: 1rem;
  }

  a {
    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #3b82f6;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 12px;
`;

const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.2rem;
  transition: all 0.3s ease;

  &:hover {
    background: #3b82f6;
    border-color: #3b82f6;
    color: white;
    transform: translateY(-3px);
  }
`;

const ColumnTitle = styled.h4`
  font-size: 0.85rem;
  font-weight: 700;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  margin-bottom: 24px;
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FooterLink = styled(Link)`
  display: block;
  color: rgba(255, 255, 255, 0.65);
  text-decoration: none;
  font-size: 0.95rem;
  padding: 8px 0;
  transition: all 0.3s ease;

  &:hover {
    color: #3b82f6;
    padding-left: 8px;
  }
`;

const FooterBottom = styled.div`
  padding: 28px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 24px 0;
  }
`;

const Copyright = styled.p`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.5);
  margin: 0;
`;

const LegalLinks = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const LegalLink = styled(Link)`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #3b82f6;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <CTASection>
          <CTAContent>
            <CTATitle>Ready to Secure Your Digital Future?</CTATitle>
            <CTASubtitle>
              Partner with Trans Asia Tech for comprehensive cybersecurity solutions tailored to your business needs.
            </CTASubtitle>
          </CTAContent>
          <CTAButton to="/contact">
            Get Started <FaArrowRight />
          </CTAButton>
        </CTASection>

        <FooterMain>
          <FooterColumn>
            <CompanyInfo>
              <Logo src="/insurtech/top_logo.png" alt="Trans Asia Tech" />
              <CompanyDescription>
                Leading provider of cybersecurity solutions and risk management services. We help organizations protect their digital assets and navigate the complex landscape of cyber threats.
              </CompanyDescription>
              <ContactInfo>
                <ContactItem>
                  <FaMapMarkerAlt />
                  <span>93, 49 Harrington Road, Chennai, Tamil Nadu 600030</span>
                </ContactItem>
                <ContactItem>
                  <FaEnvelope />
                  <a href="mailto:info@transasiatech.com">info@transasiatech.com</a>
                </ContactItem>
                <ContactItem>
                  <FaPhone />
                  <a href="tel:+911234567890">+91 123 456 7890</a>
                </ContactItem>
              </ContactInfo>
              <SocialLinks>
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
                <SocialLink 
                  href="https://www.instagram.com/transasia/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Instagram"
                >
                  <FaInstagram />
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
              <li><FooterLink to="/insights">Insights</FooterLink></li>
              <li><FooterLink to="/gallery">Gallery</FooterLink></li>
              <li><FooterLink to="/contact">Contact Us</FooterLink></li>
            </LinkList>
          </FooterColumn>

          <FooterColumn>
            <ColumnTitle>Quick Links</ColumnTitle>
            <LinkList>
              <li><FooterLink to="/privacy">Privacy Policy</FooterLink></li>
              <li><FooterLink to="/terms">Terms of Service</FooterLink></li>
              <li><FooterLink to="/contact">Support</FooterLink></li>
              <li><FooterLink to="/blog">Blog</FooterLink></li>
            </LinkList>
          </FooterColumn>
        </FooterMain>

        <FooterBottom>
          <Copyright>© 2025 Trans Asia Tech. All rights reserved.</Copyright>
          <LegalLinks>
            <LegalLink to="/privacy">Privacy Policy</LegalLink>
            <LegalLink to="/terms">Terms of Service</LegalLink>
            <LegalLink to="/contact">Contact</LegalLink>
          </LegalLinks>
        </FooterBottom>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
