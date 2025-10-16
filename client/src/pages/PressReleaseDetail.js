import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaCalendar, FaDownload, FaLinkedin, FaTwitter, FaFacebook, FaArrowRight, FaCheckCircle, FaPhone, FaEnvelope } from 'react-icons/fa';

const PageContainer = styled.div`
  min-height: 100vh;
  padding-top: 0;
  background: #ffffff;
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%);
  padding: 160px 0 80px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 30%, rgba(96, 165, 250, 0.15) 0%, transparent 70%);
  }
`;

const HeroContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const Breadcrumb = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  margin-bottom: 24px;

  a {
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;

    &:hover {
      color: #ffffff;
    }
  }
`;

const Category = styled.span`
  display: inline-block;
  padding: 6px 16px;
  background: rgba(251, 191, 36, 0.15);
  border: 1px solid rgba(251, 191, 36, 0.3);
  color: #fbbf24;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 28px;
  line-height: 1.2;
  letter-spacing: -1px;
  font-family: 'Times New Roman', Times, serif;

  @media (max-width: 968px) {
    font-size: 2.8rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const MetaBar = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.95rem;

  svg {
    color: #fbbf24;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 40px;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 360px;
  gap: 50px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const ArticleMain = styled.article``;

const ArticleContent = styled.div`
  font-size: 1.125rem;
  line-height: 1.8;
  color: #334155;
  font-family: 'Times New Roman', Times, serif;

  h2 {
    font-size: 2rem;
    font-weight: 700;
    color: #0f172a;
    margin: 48px 0 20px;
    letter-spacing: -0.3px;
    font-family: 'Times New Roman', Times, serif;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #1e293b;
    margin: 36px 0 16px;
    font-family: 'Times New Roman', Times, serif;
  }

  p {
    margin-bottom: 24px;
  }

  ul, ol {
    margin: 24px 0;
    padding-left: 24px;
  }

  li {
    margin-bottom: 12px;
  }

  strong {
    font-weight: 600;
    color: #0f172a;
  }

  blockquote {
    border-left: 3px solid #3b82f6;
    padding: 20px 28px;
    margin: 32px 0;
    background: #f8fafc;
    border-radius: 8px;
    font-style: italic;
    color: #475569;
    font-size: 1.2rem;
  }
`;

const ActionBar = styled.div`
  margin-top: 50px;
  padding-top: 32px;
  border-top: 1px solid #e2e8f0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
`;

const ShareSection = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const ShareLabel = styled.span`
  font-weight: 600;
  color: #64748b;
  font-size: 0.95rem;
`;

const ShareButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const SocialButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  background: #ffffff;
  color: ${props => props.color || '#64748b'};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${props => props.color || '#3b82f6'};
    color: #ffffff;
    border-color: ${props => props.color || '#3b82f6'};
    transform: translateY(-2px);
  }
`;

const DownloadBtn = styled.button`
  padding: 10px 20px;
  background: #3b82f6;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s ease;

  &:hover {
    background: #2563eb;
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
  }
`;

const Sidebar = styled.aside`
  @media (max-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SidebarWidget = styled.div`
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 28px;
  margin-bottom: 24px;

  @media (max-width: 1024px) {
    margin-bottom: 0;
  }
`;

const ContactWidget = styled.div`
  background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%);
  border-radius: 12px;
  padding: 32px 28px;
  margin-bottom: 24px;
  position: sticky;
  top: 100px;
  box-shadow: 0 4px 20px rgba(30, 58, 138, 0.2);

  @media (max-width: 1024px) {
    position: static;
    margin-bottom: 0;
  }
`;

const WidgetTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 20px;
  font-family: 'Times New Roman', Times, serif;
`;

const ContactTitle = styled.h4`
  font-size: 1.3rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 8px;
  font-family: 'Times New Roman', Times, serif;
`;

const ContactSubtitle = styled.p`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 24px;
  line-height: 1.5;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const Input = styled.input`
  padding: 12px 16px;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 0.9rem;
  color: #0f172a;
  transition: all 0.2s ease;

  &::placeholder {
    color: #94a3b8;
  }

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`;

const Textarea = styled.textarea`
  padding: 12px 16px;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 0.9rem;
  color: #0f172a;
  resize: vertical;
  min-height: 90px;
  transition: all 0.2s ease;

  &::placeholder {
    color: #94a3b8;
  }

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`;

const SubmitBtn = styled.button`
  padding: 14px 28px;
  background: #3b82f6;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 600;
  font-family: 'Times New Roman', Times, serif;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:hover {
    background: #2563eb;
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
  }

  &:active {
    transform: translateY(1px);
  }
`;

const SuccessMsg = styled(motion.div)`
  padding: 16px;
  background: #10b981;
  color: #ffffff;
  border-radius: 8px;
  text-align: center;
  font-size: 0.9rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 0.9rem;
  color: #475569;

  svg {
    color: #3b82f6;
  }

  strong {
    color: #0f172a;
  }
`;

const PressReleaseDetail = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
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
        subject: '',
        message: ''
      });
    }, 4000);
  };

  const pressReleases = {
    '1': {
      category: 'Product Launch',
      title: 'TransAsia Launches Next-Gen AI-Powered Threat Detection Platform',
      date: 'October 5, 2025',
      content: `
        <h2>Revolutionary AI Technology Transforms Cybersecurity Landscape</h2>
        <p>TransAsia Technologies today announced the launch of its next-generation AI-powered threat detection platform, marking a significant milestone in the company's mission to provide cutting-edge cybersecurity solutions.</p>

        <p>The new platform leverages advanced machine learning algorithms to reduce threat detection time by 90% compared to traditional security solutions, while providing real-time protection against zero-day attacks and emerging threats.</p>

        <h2>Key Features and Capabilities</h2>
        <p>The platform introduces several industry-first capabilities:</p>

        <ul>
          <li><strong>Real-Time Threat Detection:</strong> Identifies and responds to threats in milliseconds using advanced AI algorithms</li>
          <li><strong>Zero-Day Protection:</strong> Proactive defense against previously unknown vulnerabilities</li>
          <li><strong>Automated Response:</strong> Intelligent threat remediation without human intervention</li>
          <li><strong>Predictive Analytics:</strong> Forecast potential security incidents before they occur</li>
        </ul>

        <blockquote>"This launch represents years of research and development in artificial intelligence and cybersecurity. We're proud to deliver a solution that fundamentally changes how organizations protect their digital assets."</blockquote>

        <h2>Market Impact</h2>
        <p>According to industry analysts, the global cybersecurity market is expected to reach $500 billion by 2030, driven by increasing cyber threats and digital transformation initiatives. TransAsia's new platform addresses this growing need with innovative technology that sets new standards for threat detection and response.</p>

        <h2>Availability and Pricing</h2>
        <p>The platform is available immediately for enterprise customers across Asia-Pacific, with plans for global expansion in Q1 2026. Pricing starts at $10,000 per month for small to medium enterprises, with custom pricing available for large organizations.</p>

        <h2>About TransAsia Technologies</h2>
        <p>TransAsia Technologies is a leading provider of cybersecurity solutions, serving over 500 enterprise customers globally. The company specializes in AI-powered threat detection, risk quantification, and comprehensive security platform solutions.</p>
      `
    },
    '2': {
      category: 'Partnership',
      title: 'Strategic Partnership with Global Cloud Provider Announced',
      date: 'September 28, 2025',
      content: `
        <h2>Strengthening Cloud Security Across Asia-Pacific</h2>
        <p>TransAsia Technologies announced today a strategic partnership with a leading global cloud infrastructure provider to deliver integrated security solutions for enterprise customers across the Asia-Pacific region.</p>

        <p>This partnership combines TransAsia's advanced cybersecurity expertise with world-class cloud infrastructure to provide customers with comprehensive, seamlessly integrated security solutions.</p>

        <h2>Partnership Benefits</h2>
        <ul>
          <li>Integrated security solutions for cloud workloads</li>
          <li>24/7 threat monitoring and response</li>
          <li>Simplified security management for multi-cloud environments</li>
          <li>Enhanced compliance capabilities</li>
        </ul>

        <h2>Customer Impact</h2>
        <p>Enterprise customers will benefit from a unified security approach that protects both on-premises and cloud infrastructure through a single platform.</p>

        <blockquote>"This partnership enables us to deliver the most comprehensive cloud security solution available in the market today."</blockquote>

        <h2>Next Steps</h2>
        <p>Joint solutions will be available to customers starting Q4 2025, with a full product suite launching in early 2026.</p>
      `
    },
    '3': {
      category: 'Award',
      title: 'TransAsia Named "Cybersecurity Company of the Year" 2025',
      date: 'September 15, 2025',
      content: `
        <h2>Industry Recognition for Excellence</h2>
        <p>TransAsia Technologies has been honored with the prestigious "Cybersecurity Company of the Year 2025" award, recognizing the company's innovation in cybersecurity solutions and outstanding customer service.</p>

        <p>The award, presented at the Global Cybersecurity Summit, acknowledges TransAsia's commitment to protecting businesses from evolving cyber threats through cutting-edge technology and dedicated customer support.</p>

        <h2>Award Criteria</h2>
        <p>Winners were selected based on:</p>
        <ul>
          <li>Innovation in cybersecurity technology</li>
          <li>Customer satisfaction and retention</li>
          <li>Market impact and growth</li>
          <li>Thought leadership and industry contribution</li>
        </ul>

        <blockquote>"This award is a testament to our team's dedication and our customers' trust in our solutions."</blockquote>

        <h2>Looking Forward</h2>
        <p>TransAsia continues to invest in research and development, with plans to launch several new products and expand into new markets in 2026.</p>
      `
    }
  };

  const release = pressReleases[id] || pressReleases['1'];

  return (
    <PageContainer>
      <Helmet>
        <title>{release.title} | TransAsia Press</title>
        <meta name="description" content={release.title} />
      </Helmet>

      <HeroSection>
        <HeroContainer>
          <Breadcrumb>
            <Link to="/">Home</Link> / <Link to="/press">Press</Link> / Release
          </Breadcrumb>
          <Category>{release.category}</Category>
          <Title>{release.title}</Title>
          <MetaBar>
            <MetaItem>
              <FaCalendar />
              {release.date}
            </MetaItem>
          </MetaBar>
        </HeroContainer>
      </HeroSection>

      <Container>
        <MainGrid>
          <ArticleMain>
            <ArticleContent dangerouslySetInnerHTML={{ __html: release.content }} />

            <ActionBar>
              <ShareSection>
                <ShareLabel>Share:</ShareLabel>
                <ShareButtonGroup>
                  <SocialButton color="#0077b5">
                    <FaLinkedin />
                  </SocialButton>
                  <SocialButton color="#1da1f2">
                    <FaTwitter />
                  </SocialButton>
                  <SocialButton color="#1877f2">
                    <FaFacebook />
                  </SocialButton>
                </ShareButtonGroup>
              </ShareSection>
              <DownloadBtn>
                <FaDownload />
                Download PDF
              </DownloadBtn>
            </ActionBar>
          </ArticleMain>

          <Sidebar>
            <ContactWidget>
              <ContactTitle>Media Inquiries</ContactTitle>
              <ContactSubtitle>
                Contact our PR team.
              </ContactSubtitle>

              {!submitted ? (
                <ContactForm onSubmit={handleSubmit}>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                  <Textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                  <SubmitBtn type="submit">
                    Send Message <FaArrowRight />
                  </SubmitBtn>
                </ContactForm>
              ) : (
                <SuccessMsg
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <FaCheckCircle />
                  Message sent!
                </SuccessMsg>
              )}
            </ContactWidget>

            <SidebarWidget>
              <WidgetTitle>Media Contact</WidgetTitle>
              <ContactInfo>
                <ContactItem>
                  <FaEnvelope />
                  <strong>pr@transasia.com</strong>
                </ContactItem>
                <ContactItem>
                  <FaPhone />
                  <strong>+1 (234) 567-890</strong>
                </ContactItem>
              </ContactInfo>
            </SidebarWidget>

            <SidebarWidget>
              <WidgetTitle>Share Release</WidgetTitle>
              <ShareButtonGroup>
                <SocialButton color="#0077b5">
                  <FaLinkedin />
                </SocialButton>
                <SocialButton color="#1da1f2">
                  <FaTwitter />
                </SocialButton>
                <SocialButton color="#1877f2">
                  <FaFacebook />
                </SocialButton>
              </ShareButtonGroup>
            </SidebarWidget>
          </Sidebar>
        </MainGrid>
      </Container>
    </PageContainer>
  );
};

export default PressReleaseDetail;
