import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';
import { FaCalendar, FaClock, FaShareAlt, FaArrowRight, FaCheckCircle } from 'react-icons/fa';

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
  max-width: 1400px;
  margin: 0 auto;
  padding: 80px 20px;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 60px;
  align-items: start;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const MainContent = styled.div`
  max-width: 900px;
`;

const FeaturedImage = styled.div`
  width: 100%;
  height: 500px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  margin-bottom: 60px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);

  @media (max-width: 768px) {
    height: 300px;
  }
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

  code {
    background: #f1f5f9;
    padding: 2px 8px;
    border-radius: 4px;
    font-family: monospace;
    font-size: 0.95em;
  }
`;

const ShareSection = styled.div`
  margin-top: 60px;
  padding-top: 40px;
  border-top: 2px solid #e2e8f0;
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

const RelatedArticles = styled.div`
  margin-top: 80px;
  padding-top: 60px;
  border-top: 2px solid #e2e8f0;
`;

const RelatedTitle = styled.h2`
  font-size: 2rem;
  font-weight: 800;
  color: #1e293b;
  margin-bottom: 40px;
`;

const RelatedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const RelatedCard = styled(Link)`
  display: block;
  text-decoration: none;
  padding: 24px;
  background: #f8fafc;
  border-radius: 16px;
  transition: all 0.3s ease;
  border: 2px solid transparent;

  &:hover {
    background: #ffffff;
    border-color: #3b82f6;
    transform: translateY(-4px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
`;

const RelatedCardTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 8px;
`;

const RelatedCardExcerpt = styled.p`
  font-size: 0.95rem;
  color: #64748b;
  line-height: 1.6;
`;

const SidebarForm = styled.div`
  position: sticky;
  top: 100px;
  background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%);
  border-radius: 4px;
  padding: 40px 30px;
  box-shadow: 0 10px 40px rgba(30, 58, 138, 0.3);
  border: 3px solid #1e3a8a;

  @media (max-width: 1024px) {
    position: static;
    top: 0;
  }
`;

const ContactFormContent = styled.div`
  position: relative;
  z-index: 1;
`;

const ContactFormTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 12px;
  letter-spacing: -0.5px;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const ContactFormSubtitle = styled.p`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 30px;
  line-height: 1.5;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const FormInput = styled.input`
  padding: 14px 18px;
  background: #ffffff;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 2px;
  font-size: 0.9rem;
  color: #1e3a8a;
  transition: all 0.2s ease;
  font-weight: 500;

  &::placeholder {
    color: #94a3b8;
  }

  &:focus {
    outline: none;
    border-color: #fbbf24;
    box-shadow: 0 0 0 3px rgba(251, 191, 36, 0.15);
  }
`;

const FormTextarea = styled.textarea`
  padding: 14px 18px;
  background: #ffffff;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 2px;
  font-size: 0.9rem;
  color: #1e3a8a;
  transition: all 0.2s ease;
  font-weight: 500;
  resize: vertical;
  min-height: 100px;

  &::placeholder {
    color: #94a3b8;
  }

  &:focus {
    outline: none;
    border-color: #fbbf24;
    box-shadow: 0 0 0 3px rgba(251, 191, 36, 0.15);
  }
`;

const SubmitButton = styled.button`
  padding: 16px 32px;
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  color: #000000;
  border: none;
  border-radius: 2px;
  font-size: 1rem;
  font-weight: 700;
  font-family: 'Times New Roman', Times, serif;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 24px rgba(251, 191, 36, 0.4);
  display: inline-flex;
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
    box-shadow: 0 12px 32px rgba(251, 191, 36, 0.6);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(4px);
  }
`;

const SuccessMessage = styled.div`
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  padding: 20px;
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

const ArticleDetail = () => {
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

  // Article data - in a real app, this would come from an API
  const articles = {
    '1': {
      title: 'Quantifying Cyber Risk: A Board-Level Perspective',
      category: 'Risk Management',
      author: 'Trans Asia Team',
      date: 'Jan 15, 2025',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
      content: `
        <h2>Understanding Financial Impact of Cyber Threats</h2>
        <p>In today's digital landscape, cybersecurity is no longer just an IT concern—it's a critical business risk that demands board-level attention. The challenge lies in translating complex technical threats into financial metrics that board members can understand and act upon.</p>

        <p>This comprehensive guide explores how organizations can quantify cyber risks in financial terms, enabling informed decision-making at the highest levels of corporate governance.</p>

        <h2>Key Metrics for Board Reporting</h2>
        <p>Effective cyber risk quantification requires focusing on metrics that matter to board members:</p>

        <ul>
          <li><strong>Probable Maximum Loss (PML):</strong> The maximum financial impact of a worst-case cyber incident</li>
          <li><strong>Annual Loss Expectancy (ALE):</strong> Expected annual financial impact from all cyber risks</li>
          <li><strong>Return on Security Investment (ROSI):</strong> Financial justification for security spending</li>
          <li><strong>Risk Transfer Costs:</strong> Insurance premiums and coverage gaps</li>
        </ul>

        <blockquote>"The board needs to see cyber risk in the same language they use for other business risks—dollars and probabilities."</blockquote>

        <h2>Building a Risk Quantification Framework</h2>
        <p>A robust framework for cyber risk quantification should include:</p>

        <ol>
          <li>Asset identification and valuation</li>
          <li>Threat modeling and scenario analysis</li>
          <li>Vulnerability assessment</li>
          <li>Impact calculation</li>
          <li>Control effectiveness measurement</li>
        </ol>

        <h3>Implementation Best Practices</h3>
        <p>Organizations that successfully implement cyber risk quantification share several common practices. They maintain current asset inventories, regularly update threat intelligence, and conduct tabletop exercises with board members.</p>

        <p>The key is to make cyber risk discussions a regular part of board meetings, not just an annual compliance checkbox.</p>

        <h2>Conclusion</h2>
        <p>Quantifying cyber risk for board-level discussions is essential for modern corporate governance. By translating technical threats into financial metrics, CISOs can secure the resources and support needed to protect their organizations effectively.</p>
      `
    },
    '2': {
      title: 'Zero-Day Ransomware: Advanced Detection Strategies',
      category: 'Cybersecurity',
      author: 'Security Research',
      date: 'Jan 10, 2025',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=80',
      content: `
        <h2>The Growing Threat of Unknown Ransomware</h2>
        <p>Zero-day ransomware attacks represent one of the most dangerous threats to modern organizations. Unlike known malware variants, these attacks exploit previously unknown vulnerabilities, making traditional signature-based detection methods ineffective.</p>

        <h2>Advanced Detection Techniques</h2>
        <p>Protecting against zero-day ransomware requires a multi-layered approach combining behavioral analysis, machine learning, and proactive threat hunting.</p>

        <h3>Behavioral Analysis</h3>
        <p>Monitor for suspicious patterns such as rapid file encryption, unusual network traffic, and unauthorized privilege escalation.</p>

        <h3>Machine Learning Models</h3>
        <p>Deploy AI-powered systems that can identify ransomware behavior even when the specific variant is unknown.</p>

        <blockquote>"The best defense against zero-day attacks is understanding normal behavior and detecting anomalies in real-time."</blockquote>

        <h2>Prevention Strategies</h2>
        <ul>
          <li>Implement network segmentation</li>
          <li>Maintain offline backups</li>
          <li>Deploy endpoint detection and response (EDR)</li>
          <li>Conduct regular security awareness training</li>
          <li>Establish incident response procedures</li>
        </ul>

        <h2>Conclusion</h2>
        <p>While zero-day ransomware poses significant challenges, organizations can significantly reduce their risk through advanced detection strategies and comprehensive security programs.</p>
      `
    },
    '3': {
      title: 'Compliance Made Easy: Navigating Regulatory Frameworks',
      category: 'Compliance',
      author: 'Compliance Team',
      date: 'Jan 5, 2025',
      readTime: '12 min read',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80',
      content: `
        <h2>Understanding the Compliance Landscape</h2>
        <p>Modern organizations face a complex web of regulatory requirements spanning multiple jurisdictions and industries. From GDPR to HIPAA, from PCI DSS to SOC 2, the compliance landscape continues to expand.</p>

        <h2>Common Regulatory Frameworks</h2>
        <p>Key frameworks that organizations commonly need to address:</p>

        <ul>
          <li><strong>GDPR:</strong> European data protection and privacy</li>
          <li><strong>CCPA:</strong> California consumer privacy rights</li>
          <li><strong>HIPAA:</strong> Healthcare information protection</li>
          <li><strong>PCI DSS:</strong> Payment card data security</li>
          <li><strong>SOC 2:</strong> Service organization controls</li>
        </ul>

        <h2>Streamlining Compliance Management</h2>
        <p>Effective compliance management requires a systematic approach that leverages automation and centralized documentation.</p>

        <h3>Implementation Framework</h3>
        <ol>
          <li>Identify applicable regulations</li>
          <li>Map controls to requirements</li>
          <li>Implement automated monitoring</li>
          <li>Maintain evidence collection</li>
          <li>Conduct regular audits</li>
        </ol>

        <blockquote>"Compliance should be built into your processes, not bolted on afterwards."</blockquote>

        <h2>Best Practices</h2>
        <p>Organizations that excel at compliance management treat it as an ongoing program rather than a one-time project. They invest in automation, maintain clear documentation, and foster a culture of compliance awareness.</p>
      `
    }
  };

  const article = articles[id] || articles['1'];

  const relatedArticles = [
    { id: '2', title: 'Zero-Day Ransomware Detection', excerpt: 'Advanced strategies for protecting against unknown threats' },
    { id: '3', title: 'Regulatory Compliance Guide', excerpt: 'Navigate complex compliance requirements with confidence' }
  ].filter(a => a.id !== id);

  return (
    <PageContainer>
      <Helmet>
        <title>{article.title} | TransAsia Insights</title>
        <meta name="description" content={article.title} />
      </Helmet>

      <HeroSection>
        <HeroContent>
          <Category>{article.category}</Category>
          <Title>{article.title}</Title>
          <Meta>
            <MetaItem>
              <FaCalendar />
              {article.date}
            </MetaItem>
            <MetaItem>
              <FaClock />
              {article.readTime}
            </MetaItem>
            <MetaItem>
              By {article.author}
            </MetaItem>
          </Meta>
        </HeroContent>
      </HeroSection>

      <Container>
        <ContentWrapper>
          <MainContent>
            <FeaturedImage image={article.image} />
            
            <Content dangerouslySetInnerHTML={{ __html: article.content }} />

            <ShareSection>
              <ShareText>
                <FaShareAlt />
                Share this article:
              </ShareText>
              <ShareButtons>
                <ShareButton>LinkedIn</ShareButton>
                <ShareButton>Twitter</ShareButton>
                <ShareButton>Email</ShareButton>
              </ShareButtons>
            </ShareSection>

            <RelatedArticles>
              <RelatedTitle>Related Articles</RelatedTitle>
              <RelatedGrid>
                {relatedArticles.map(related => (
                  <RelatedCard key={related.id} to={`/insights/${related.id}`}>
                    <RelatedCardTitle>{related.title}</RelatedCardTitle>
                    <RelatedCardExcerpt>{related.excerpt}</RelatedCardExcerpt>
                  </RelatedCard>
                ))}
              </RelatedGrid>
            </RelatedArticles>
          </MainContent>

          <SidebarForm>
            <ContactFormContent>
              <ContactFormTitle>Get Expert Insights</ContactFormTitle>
              <ContactFormSubtitle>
                Have questions? Our cybersecurity experts are ready to help.
              </ContactFormSubtitle>

              {!submitted ? (
                <Form onSubmit={handleSubmit}>
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
                    placeholder="Your Message *"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                  <SubmitButton type="submit">
                    Send <FaArrowRight />
                  </SubmitButton>
                </Form>
              ) : (
                <SuccessMessage>
                  <FaCheckCircle />
                  Message sent!
                </SuccessMessage>
              )}
            </ContactFormContent>
          </SidebarForm>
        </ContentWrapper>
      </Container>
    </PageContainer>
  );
};

export default ArticleDetail;

