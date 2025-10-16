import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaCalendar, FaDownload, FaArrowRight, FaCheckCircle, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const PageContainer = styled.div`
  min-height: 100vh;
  padding-top: 0;
  background: #f8fafc;
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
  padding: 140px 20px 60px;
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
      radial-gradient(circle at 30% 40%, rgba(96, 165, 250, 0.2) 0%, transparent 50%),
      radial-gradient(circle at 70% 60%, rgba(59, 130, 246, 0.15) 0%, transparent 50%);
  }
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const Category = styled(motion.span)`
  display: inline-block;
  padding: 8px 20px;
  background: rgba(251, 191, 36, 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(251, 191, 36, 0.4);
  color: #fbbf24;
  border-radius: 4px;
  font-size: 0.85rem;
  font-weight: 700;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 1.2px;
`;

const Title = styled(motion.h1)`
  font-size: 3.8rem;
  font-weight: 900;
  color: #ffffff;
  margin-bottom: 24px;
  line-height: 1.15;
  letter-spacing: -1.5px;

  @media (max-width: 968px) {
    font-size: 2.8rem;
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
    letter-spacing: -1px;
  }
`;

const Meta = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 30px;
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.95rem;
  flex-wrap: wrap;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;

  svg {
    color: #fbbf24;
  }
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 60px 20px 100px;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 380px;
  gap: 50px;
  align-items: start;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
    gap: 50px;
  }
`;

const MainContent = styled.div`
  background: #ffffff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
`;

const ArticleContent = styled.div`
  padding: 50px 60px;

  @media (max-width: 768px) {
    padding: 35px 25px;
  }
`;

const Content = styled.div`
  font-size: 1.1rem;
  line-height: 1.85;
  color: #334155;
  font-weight: 400;

  h2 {
    font-size: 2.2rem;
    font-weight: 800;
    color: #1e293b;
    margin: 45px 0 20px;
    line-height: 1.3;
    letter-spacing: -0.5px;
  }

  h3 {
    font-size: 1.6rem;
    font-weight: 700;
    color: #1e293b;
    margin: 35px 0 16px;
  }

  p {
    margin-bottom: 20px;
  }

  ul, ol {
    margin: 20px 0;
    padding-left: 28px;
  }

  li {
    margin-bottom: 10px;
    line-height: 1.7;
  }

  strong {
    font-weight: 700;
    color: #1e293b;
  }

  blockquote {
    border-left: 4px solid #3b82f6;
    padding: 20px 24px;
    margin: 30px 0;
    font-style: italic;
    color: #475569;
    font-size: 1.25rem;
    background: #f8fafc;
    border-radius: 0 8px 8px 0;
  }
`;

const ActionSection = styled.div`
  margin-top: 50px;
  padding-top: 30px;
  border-top: 2px solid #e2e8f0;
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

const ShareText = styled.div`
  font-weight: 600;
  color: #64748b;
  font-size: 0.95rem;
`;

const ShareButtons = styled.div`
  display: flex;
  gap: 10px;
`;

const ShareButton = styled.button`
  width: 44px;
  height: 44px;
  background: #f8fafc;
  border: 2px solid #e2e8f0;
  border-radius: 50%;
  color: #64748b;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    background: #3b82f6;
    border-color: #3b82f6;
    color: #ffffff;
    transform: translateY(-3px);
  }

  svg {
    font-size: 1.1rem;
  }
`;

const DownloadButton = styled.button`
  padding: 12px 24px;
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  color: #ffffff;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(59, 130, 246, 0.3);
  }
`;

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 1100px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactForm = styled.div`
  background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%);
  border-radius: 4px;
  padding: 35px 28px;
  box-shadow: 0 10px 40px rgba(30, 58, 138, 0.25);
  position: sticky;
  top: 100px;

  @media (max-width: 1100px) {
    position: static;
    top: auto;
  }
`;

const FormTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 10px;
  letter-spacing: -0.5px;
`;

const FormSubtitle = styled.p`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 28px;
  line-height: 1.5;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const FormInput = styled.input`
  padding: 14px 16px;
  background: #ffffff;
  border: none;
  border-radius: 2px;
  font-size: 0.9rem;
  color: #1e3a8a;
  transition: all 0.2s ease;
  font-weight: 500;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  &::placeholder {
    color: #94a3b8;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(251, 191, 36, 0.3), 0 4px 12px rgba(0, 0, 0, 0.1);
    transform: translateY(-1px);
  }
`;

const FormTextarea = styled.textarea`
  padding: 14px 16px;
  background: #ffffff;
  border: none;
  border-radius: 2px;
  font-size: 0.9rem;
  color: #1e3a8a;
  transition: all 0.2s ease;
  font-weight: 500;
  resize: vertical;
  min-height: 100px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  &::placeholder {
    color: #94a3b8;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(251, 191, 36, 0.3), 0 4px 12px rgba(0, 0, 0, 0.1);
    transform: translateY(-1px);
  }
`;

const SubmitButton = styled.button`
  padding: 15px 28px;
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  color: #000000;
  border: none;
  border-radius: 2px;
  font-size: 1rem;
  font-weight: 700;
  font-family: 'Times New Roman', Times, serif;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 6px 20px rgba(251, 191, 36, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.5s;
  }

  &:hover::before {
    left: 100%;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(251, 191, 36, 0.5);
  }

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(4px);
  }
`;

const SuccessMessage = styled(motion.div)`
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  padding: 18px;
  border-radius: 2px;
  text-align: center;
  font-size: 0.95rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  svg {
    font-size: 1.2rem;
  }
`;

const SidebarSection = styled.div`
  background: #ffffff;
  border-radius: 4px;
  padding: 28px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
`;

const SidebarTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 800;
  color: #1e293b;
  margin-bottom: 20px;
  letter-spacing: -0.3px;
`;

const SocialShare = styled.div`
  display: flex;
  gap: 12px;
`;

const SocialButton = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 4px;
  border: none;
  background: ${props => props.color || '#3b82f6'};
  color: #ffffff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px ${props => props.color ? `${props.color}40` : 'rgba(59, 130, 246, 0.25)'};

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px ${props => props.color ? `${props.color}60` : 'rgba(59, 130, 246, 0.4)'};
  }

  svg {
    font-size: 1.2rem;
  }
`;

const InfoBox = styled.div`
  padding: 20px;
  background: #eff6ff;
  border-left: 4px solid #3b82f6;
  border-radius: 0 8px 8px 0;
`;

const InfoTitle = styled.div`
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 8px;
  font-size: 0.95rem;
`;

const InfoText = styled.div`
  color: #475569;
  font-size: 0.9rem;
  line-height: 1.6;
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

  // Press release data
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
        <title>{release.title} | TransAsia Press Release</title>
        <meta name="description" content={release.title} />
      </Helmet>

      <HeroSection>
        <HeroContent>
          <Category
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {release.category}
          </Category>
          <Title
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {release.title}
          </Title>
          <Meta
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <MetaItem>
              <FaCalendar />
              {release.date}
            </MetaItem>
          </Meta>
        </HeroContent>
      </HeroSection>

      <Container>
        <ContentWrapper>
          <MainContent>
            <ArticleContent>
              <Content dangerouslySetInnerHTML={{ __html: release.content }} />

              <ActionSection>
                <ShareSection>
                  <ShareText>Share:</ShareText>
                  <ShareButtons>
                    <ShareButton>
                      <FaLinkedin />
                    </ShareButton>
                    <ShareButton>
                      <FaTwitter />
                    </ShareButton>
                    <ShareButton>
                      <FaEnvelope />
                    </ShareButton>
                  </ShareButtons>
                </ShareSection>
                <DownloadButton>
                  <FaDownload />
                  Download PDF
                </DownloadButton>
              </ActionSection>
            </ArticleContent>
          </MainContent>

          <Sidebar>
            <ContactForm>
              <FormTitle>Media Inquiries</FormTitle>
              <FormSubtitle>
                Contact our PR team for more information.
              </FormSubtitle>

              {!submitted ? (
                <Form onSubmit={handleSubmit}>
                  <FormInput
                    type="text"
                    name="name"
                    placeholder="Name *"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <FormInput
                    type="email"
                    name="email"
                    placeholder="Email *"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <FormInput
                    type="text"
                    name="subject"
                    placeholder="Subject *"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                  <FormTextarea
                    name="message"
                    placeholder="Message *"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                  <SubmitButton type="submit">
                    Send <FaArrowRight />
                  </SubmitButton>
                </Form>
              ) : (
                <SuccessMessage
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <FaCheckCircle />
                  Message sent!
                </SuccessMessage>
              )}
            </ContactForm>

            <SidebarSection>
              <SidebarTitle>Share Release</SidebarTitle>
              <SocialShare>
                <SocialButton color="#0077b5">
                  <FaLinkedin />
                </SocialButton>
                <SocialButton color="#1da1f2">
                  <FaTwitter />
                </SocialButton>
                <SocialButton color="#ea4335">
                  <FaEnvelope />
                </SocialButton>
              </SocialShare>
            </SidebarSection>

            <SidebarSection>
              <SidebarTitle>Media Contact</SidebarTitle>
              <InfoBox>
                <InfoTitle>Press Relations</InfoTitle>
                <InfoText>
                  For media inquiries, please contact:<br/>
                  <strong>pr@transasia.com</strong><br/>
                  +1 (234) 567-890
                </InfoText>
              </InfoBox>
            </SidebarSection>
          </Sidebar>
        </ContentWrapper>
      </Container>
    </PageContainer>
  );
};

export default PressReleaseDetail;
