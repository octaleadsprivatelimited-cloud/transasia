import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  FaShieldAlt, 
  FaFacebook, 
  FaTwitter, 
  FaLinkedin, 
  FaYoutube, 
  FaGithub,
  FaArrowRight,
  FaRocket,
  FaBrain,
  FaEye,
  FaUsers
} from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
  border-top: 1px solid rgba(0, 255, 136, 0.1);
  padding: 80px 0 40px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 0%, rgba(0, 255, 136, 0.05) 0%, transparent 70%);
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 60px 0 30px;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    padding: 0 15px;
  }
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  gap: 60px;
  margin-bottom: 60px;

  @media (max-width: 968px) {
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
    margin-bottom: 40px;
  }
`;

const BrandSection = styled(motion.div)`
  @media (max-width: 968px) {
    grid-column: 1 / -1;
  }
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--primary-color);
  font-size: 28px;
  font-weight: 800;
  letter-spacing: -1px;
  margin-bottom: 24px;

  svg {
    margin-right: 12px;
    font-size: 32px;
  }

  @media (max-width: 768px) {
    font-size: 24px;
    
    svg {
      font-size: 28px;
      margin-right: 10px;
    }
  }
`;

const BrandDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 30px;
  max-width: 400px;

  @media (max-width: 768px) {
    max-width: none;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 16px;
`;

const SocialLink = styled.a`
  width: 44px;
  height: 44px;
  background: rgba(0, 255, 136, 0.1);
  border: 1px solid rgba(0, 255, 136, 0.2);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-color);
  font-size: 18px;
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    background: rgba(0, 255, 136, 0.2);
    border-color: rgba(0, 255, 136, 0.4);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 16px;
  }
`;

const FooterSection = styled(motion.div)`
  @media (max-width: 968px) {
    &:nth-child(2) {
      grid-column: 1;
    }
    &:nth-child(3) {
      grid-column: 2;
    }
    &:nth-child(4) {
      grid-column: 1;
    }
    &:nth-child(5) {
      grid-column: 2;
    }
  }

  @media (max-width: 768px) {
    &:nth-child(2),
    &:nth-child(3),
    &:nth-child(4),
    &:nth-child(5) {
      grid-column: 1;
    }
  }
`;

const SectionTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 24px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 30px;
    height: 2px;
    background: var(--gradient-primary);
  }

  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 20px;
  }
`;

const LinkList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const LinkItem = styled.li`
  a {
    color: var(--text-secondary);
    text-decoration: none;
    font-size: 14px;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 8px;

    &:hover {
      color: var(--primary-color);
      transform: translateX(5px);
    }

    svg {
      font-size: 12px;
    }
  }
`;


const NewsletterSection = styled(motion.div)`
  background: rgba(26, 26, 26, 0.5);
  border: 1px solid rgba(0, 255, 136, 0.1);
  border-radius: 16px;
  padding: 40px;
  margin-bottom: 60px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 30px 20px;
    margin-bottom: 40px;
  }
`;

const NewsletterTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 12px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const NewsletterSubtitle = styled.p`
  color: var(--text-secondary);
  margin-bottom: 30px;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const NewsletterForm = styled.form`
  display: flex;
  gap: 16px;
  max-width: 400px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
  }
`;

const NewsletterInput = styled.input`
  flex: 1;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(0, 255, 136, 0.2);
  border-radius: 8px;
  padding: 14px 16px;
  color: var(--text-primary);
  font-size: 14px;
  transition: all 0.3s ease;

  &::placeholder {
    color: var(--text-muted);
  }

  &:focus {
    outline: none;
    border-color: rgba(0, 255, 136, 0.5);
    background: rgba(255, 255, 255, 0.08);
  }

  @media (max-width: 768px) {
    padding: 12px 14px;
  }
`;

const NewsletterButton = styled.button`
  background: var(--gradient-primary);
  border: none;
  border-radius: 8px;
  padding: 14px 24px;
  color: #000000;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  white-space: nowrap;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(0, 255, 136, 0.3);
  }

  @media (max-width: 768px) {
    padding: 12px 20px;
    justify-content: center;
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid rgba(0, 255, 136, 0.1);
  padding-top: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 16px;
    padding-top: 30px;
  }
`;

const Copyright = styled.div`
  color: var(--text-muted);
  font-size: 14px;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const LegalLinks = styled.div`
  display: flex;
  gap: 24px;

  @media (max-width: 768px) {
    gap: 16px;
  }
`;

const LegalLink = styled(Link)`
  color: var(--text-muted);
  text-decoration: none;
  font-size: 14px;
  transition: all 0.3s ease;

  &:hover {
    color: var(--primary-color);
  }

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const footerSections = [
  {
    title: "Solutions",
    links: [
      { name: "Threat Protection", href: "/threat-protection", icon: <FaShieldAlt /> },
      { name: "Risk Management", href: "/risk-management", icon: <FaBrain /> },
      { name: "Continuous Monitoring", href: "/monitoring", icon: <FaEye /> },
      { name: "Third-Party Risk", href: "/third-party", icon: <FaUsers /> }
    ]
  },
  {
    title: "Platform",
    links: [
      { name: "Features", href: "/features" },
      { name: "Integrations", href: "/integrations" },
      { name: "API Documentation", href: "/api-docs" },
      { name: "Security", href: "/security" }
    ]
  },
  {
    title: "Resources",
    links: [
      { name: "Blog", href: "/blog" },
      { name: "Case Studies", href: "/case-studies" },
      { name: "White Papers", href: "/whitepapers" },
      { name: "Webinars", href: "/webinars" }
    ]
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/contact" },
      { name: "Partners", href: "/partners" }
    ]
  }
];

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <FooterContent>
          <BrandSection
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Logo to="/">
              <FaShieldAlt />
              CyberSecure
            </Logo>
            <BrandDescription>
              Next-generation AI-powered cybersecurity platform that provides autonomous 
              threat protection and intelligent risk management for modern enterprises.
            </BrandDescription>
            <SocialLinks>
              <SocialLink href="#" aria-label="Facebook">
                <FaFacebook />
              </SocialLink>
              <SocialLink href="#" aria-label="Twitter">
                <FaTwitter />
              </SocialLink>
              <SocialLink href="#" aria-label="LinkedIn">
                <FaLinkedin />
              </SocialLink>
              <SocialLink href="#" aria-label="YouTube">
                <FaYoutube />
              </SocialLink>
              <SocialLink href="#" aria-label="GitHub">
                <FaGithub />
              </SocialLink>
            </SocialLinks>
          </BrandSection>

          {footerSections.map((section, index) => (
            <FooterSection
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <SectionTitle>{section.title}</SectionTitle>
              <LinkList>
                {section.links.map((link, linkIndex) => (
                  <LinkItem key={linkIndex}>
                    <Link to={link.href}>
                      {link.icon && link.icon}
                      {link.name}
                      {!link.icon && <FaArrowRight />}
                    </Link>
                  </LinkItem>
                ))}
              </LinkList>
            </FooterSection>
          ))}
        </FooterContent>

        <NewsletterSection
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <NewsletterTitle>Stay Updated</NewsletterTitle>
          <NewsletterSubtitle>
            Get the latest cybersecurity insights, threat intelligence, and platform updates delivered to your inbox.
          </NewsletterSubtitle>
          <NewsletterForm>
            <NewsletterInput
              type="email"
              placeholder="Enter your email address"
              required
            />
            <NewsletterButton type="submit">
              <FaRocket />
              Subscribe
            </NewsletterButton>
          </NewsletterForm>
        </NewsletterSection>

        <FooterBottom>
          <Copyright>
            © 2025 CyberSecure. All rights reserved.
          </Copyright>
          <LegalLinks>
            <LegalLink to="/privacy">Privacy Policy</LegalLink>
            <LegalLink to="/terms">Terms of Service</LegalLink>
            <LegalLink to="/cookies">Cookie Policy</LegalLink>
            <LegalLink to="/security">Security</LegalLink>
          </LegalLinks>
        </FooterBottom>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
