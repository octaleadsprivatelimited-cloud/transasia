import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';
import { FaCalendar, FaShareAlt, FaArrowRight, FaCheckCircle, FaDownload } from 'react-icons/fa';

const PageContainer = styled.div`
  min-height: 100vh;
  padding-top: 0;
  background: #ffffff;
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
  padding: 160px 20px 80px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.2) 0%, transparent 70%);
  }
`;

const HeroContent = styled.div`
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const Category = styled.span`
  display: inline-block;
  padding: 8px 16px;
  background: rgba(251, 191, 36, 0.2);
  color: #fbbf24;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 900;
  color: #ffffff;
  margin-bottom: 24px;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const Meta = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.95rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  svg {
    color: #fbbf24;
  }
`;

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 80px 20px;
`;

const Content = styled.div`
  font-size: 1.15rem;
  line-height: 1.8;
  color: #334155;

  h2 {
    font-size: 2rem;
    font-weight: 800;
    color: #1e293b;
    margin: 50px 0 24px;
    line-height: 1.3;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    color: #1e293b;
    margin: 40px 0 20px;
  }

  p {
    margin-bottom: 24px;
  }

  ul, ol {
    margin: 24px 0;
    padding-left: 30px;
  }

  li {
    margin-bottom: 12px;
  }

  strong {
    font-weight: 700;
    color: #1e293b;
  }

  blockquote {
    border-left: 4px solid #3b82f6;
    padding-left: 24px;
    margin: 30px 0;
    font-style: italic;
    color: #64748b;
    font-size: 1.2rem;
  }
`;

const ActionSection = styled.div`
  margin-top: 60px;
  padding-top: 40px;
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
  gap: 20px;
`;

const ShareText = styled.div`
  font-weight: 600;
  color: #1e293b;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ShareButtons = styled.div`
  display: flex;
  gap: 12px;
`;

const ShareButton = styled.button`
  padding: 10px 20px;
  background: #f8fafc;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-weight: 600;
  color: #64748b;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #3b82f6;
    border-color: #3b82f6;
    color: #ffffff;
  }
`;

const DownloadButton = styled.button`
  padding: 12px 24px;
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  color: #ffffff;
  border: none;
  border-radius: 8px;
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

const ContactFormSection = styled.div`
  margin-top: 80px;
  padding: 60px;
  background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%);
  border-radius: 20px;
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
      radial-gradient(circle at 20% 30%, rgba(96, 165, 250, 0.2) 0%, transparent 50%),
      radial-gradient(circle at 80% 70%, rgba(59, 130, 246, 0.2) 0%, transparent 50%);
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 40px 30px;
  }
`;

const ContactFormContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 600px;
  margin: 0 auto;
`;

const ContactFormTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 900;
  color: #ffffff;
  margin-bottom: 16px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ContactFormSubtitle = styled.p`
  font-size: 1.15rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 40px;
  text-align: center;
  line-height: 1.6;
`;

const Form = styled.form`
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
  background: rgba(255, 255, 255, 0.95);
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  font-size: 0.95rem;
  color: #1e3a8a;
  transition: all 0.3s ease;
  font-weight: 500;

  &::placeholder {
    color: #64748b;
  }

  &:focus {
    outline: none;
    border-color: #fbbf24;
    background: #ffffff;
    box-shadow: 0 0 0 4px rgba(251, 191, 36, 0.2);
  }
`;

const FormTextarea = styled.textarea`
  padding: 16px 20px;
  background: rgba(255, 255, 255, 0.95);
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  font-size: 0.95rem;
  color: #1e3a8a;
  transition: all 0.3s ease;
  font-weight: 500;
  resize: vertical;
  min-height: 120px;

  &::placeholder {
    color: #64748b;
  }

  &:focus {
    outline: none;
    border-color: #fbbf24;
    background: #ffffff;
    box-shadow: 0 0 0 4px rgba(251, 191, 36, 0.2);
  }
`;

const SubmitButton = styled.button`
  padding: 18px 40px;
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  color: #000000;
  border: none;
  border-radius: 10px;
  font-size: 1.1rem;
  font-weight: 700;
  font-family: 'Times New Roman', Times, serif;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(251, 191, 36, 0.4);
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
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.5s;
  }

  &:hover::before {
    left: 100%;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 15px 40px rgba(251, 191, 36, 0.6);
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
`;

const SuccessMessage = styled.div`
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  padding: 24px;
  border-radius: 12px;
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
          <Category>{release.category}</Category>
          <Title>{release.title}</Title>
          <Meta>
            <MetaItem>
              <FaCalendar />
              {release.date}
            </MetaItem>
          </Meta>
        </HeroContent>
      </HeroSection>

      <Container>
        <Content dangerouslySetInnerHTML={{ __html: release.content }} />

        <ActionSection>
          <ShareSection>
            <ShareText>
              <FaShareAlt />
              Share:
            </ShareText>
            <ShareButtons>
              <ShareButton>LinkedIn</ShareButton>
              <ShareButton>Twitter</ShareButton>
              <ShareButton>Email</ShareButton>
            </ShareButtons>
          </ShareSection>
          <DownloadButton>
            <FaDownload />
            Download PDF
          </DownloadButton>
        </ActionSection>

        <ContactFormSection>
          <ContactFormContent>
            <ContactFormTitle>Media Inquiries</ContactFormTitle>
            <ContactFormSubtitle>
              For press inquiries, interviews, or additional information about this release, please contact our media relations team.
            </ContactFormSubtitle>

            {!submitted ? (
              <Form onSubmit={handleSubmit}>
                <FormRow columns="1fr 1fr">
                  <FormInput
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <FormInput
                    type="email"
                    name="email"
                    placeholder="Your Email *"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </FormRow>

                <FormRow>
                  <FormInput
                    type="text"
                    name="subject"
                    placeholder="Subject *"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </FormRow>

                <FormRow>
                  <FormTextarea
                    name="message"
                    placeholder="Your Message *"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </FormRow>

                <SubmitButton type="submit">
                  Send Message <FaArrowRight />
                </SubmitButton>
              </Form>
            ) : (
              <SuccessMessage>
                <FaCheckCircle />
                Thank you! We'll get back to you within 24 hours.
              </SuccessMessage>
            )}
          </ContactFormContent>
        </ContactFormSection>
      </Container>
    </PageContainer>
  );
};

export default PressReleaseDetail;

