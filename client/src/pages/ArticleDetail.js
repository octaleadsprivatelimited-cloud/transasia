import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaCalendar, FaClock, FaUser, FaLinkedin, FaTwitter, FaFacebook, FaArrowRight, FaCheckCircle } from 'react-icons/fa';

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

const FeaturedImage = styled.div`
  width: 100%;
  height: 480px;
  background: url(${props => props.image}) center/cover;
  border-radius: 12px;
  margin-bottom: 50px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);

  @media (max-width: 768px) {
    height: 280px;
    margin-bottom: 35px;
  }
`;

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

const ShareBar = styled.div`
  margin-top: 50px;
  padding-top: 32px;
  border-top: 1px solid #e2e8f0;
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
`;

const ShareLabel = styled.span`
  font-weight: 600;
  color: #64748b;
  font-size: 0.95rem;
`;

const ShareButtonGroup = styled.div`
  display: flex;
  gap: 12px;
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

const RelatedSection = styled.div`
  margin-top: 60px;
  padding-top: 50px;
  border-top: 1px solid #e2e8f0;
`;

const SectionTitle = styled.h3`
  font-size: 1.75rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 28px;
  font-family: 'Times New Roman', Times, serif;
`;

const RelatedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const RelatedCard = styled(Link)`
  display: block;
  padding: 24px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    background: #ffffff;
    border-color: #3b82f6;
    box-shadow: 0 4px 16px rgba(59, 130, 246, 0.12);
    transform: translateY(-2px);
  }
`;

const RelatedTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: #0f172a;
  margin-bottom: 8px;
  line-height: 1.4;
`;

const RelatedExcerpt = styled.p`
  font-size: 0.9rem;
  color: #64748b;
  line-height: 1.5;
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

const AuthorWidget = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

const AuthorAvatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: #ffffff;
  font-size: 1.2rem;
`;

const AuthorInfo = styled.div`
  flex: 1;
`;

const AuthorName = styled.div`
  font-weight: 600;
  color: #0f172a;
  margin-bottom: 4px;
  font-size: 0.95rem;
`;

const AuthorRole = styled.div`
  font-size: 0.85rem;
  color: #64748b;
`;

const TagCloud = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tag = styled.button`
  padding: 6px 12px;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  color: #64748b;
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #3b82f6;
    border-color: #3b82f6;
    color: #ffffff;
  }
`;

const SocialShareWidget = styled.div`
  display: flex;
  gap: 10px;
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

  const articles = {
    '1': {
      title: 'Quantifying Cyber Risk: A Board-Level Perspective',
      category: 'Risk Management',
      author: 'Trans Asia Team',
      authorInitials: 'TA',
      date: 'January 15, 2025',
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
      author: 'Security Research Team',
      authorInitials: 'SR',
      date: 'January 10, 2025',
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
      authorInitials: 'CT',
      date: 'January 5, 2025',
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
    { id: '2', title: 'Zero-Day Ransomware Detection Strategies', excerpt: 'Learn advanced techniques for protecting against unknown threats' },
    { id: '3', title: 'Complete Regulatory Compliance Guide', excerpt: 'Navigate complex compliance requirements efficiently' }
  ].filter(a => a.id !== id);

  return (
    <PageContainer>
      <Helmet>
        <title>{article.title} | TransAsia Insights</title>
        <meta name="description" content={article.title} />
      </Helmet>

      <HeroSection>
        <HeroContainer>
          <Breadcrumb>
            <Link to="/">Home</Link> / <Link to="/insights">Insights</Link> / Article
          </Breadcrumb>
          <Category>{article.category}</Category>
          <Title>{article.title}</Title>
          <MetaBar>
            <MetaItem>
              <FaCalendar />
              {article.date}
            </MetaItem>
            <MetaItem>
              <FaClock />
              {article.readTime}
            </MetaItem>
            <MetaItem>
              <FaUser />
              {article.author}
            </MetaItem>
          </MetaBar>
        </HeroContainer>
      </HeroSection>

      <Container>
        <MainGrid>
          <ArticleMain>
            <FeaturedImage image={article.image} />
            
            <ArticleContent dangerouslySetInnerHTML={{ __html: article.content }} />

            <ShareBar>
              <ShareLabel>Share this article:</ShareLabel>
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
            </ShareBar>

            <RelatedSection>
              <SectionTitle>Related Articles</SectionTitle>
              <RelatedGrid>
                {relatedArticles.map(related => (
                  <RelatedCard key={related.id} to={`/insights/${related.id}`}>
                    <RelatedTitle>{related.title}</RelatedTitle>
                    <RelatedExcerpt>{related.excerpt}</RelatedExcerpt>
                  </RelatedCard>
                ))}
              </RelatedGrid>
            </RelatedSection>
          </ArticleMain>

          <Sidebar>
            <ContactWidget>
              <ContactTitle>Get in Touch</ContactTitle>
              <ContactSubtitle>
                Questions? Our experts can help.
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
                  Message sent successfully!
                </SuccessMsg>
              )}
            </ContactWidget>

            <SidebarWidget>
              <WidgetTitle>About the Author</WidgetTitle>
              <AuthorWidget>
                <AuthorAvatar>{article.authorInitials}</AuthorAvatar>
                <AuthorInfo>
                  <AuthorName>{article.author}</AuthorName>
                  <AuthorRole>Security Expert</AuthorRole>
                </AuthorInfo>
              </AuthorWidget>
            </SidebarWidget>

            <SidebarWidget>
              <WidgetTitle>Topics</WidgetTitle>
              <TagCloud>
                <Tag>Cybersecurity</Tag>
                <Tag>Risk Analysis</Tag>
                <Tag>Compliance</Tag>
                <Tag>AI Security</Tag>
                <Tag>Best Practices</Tag>
              </TagCloud>
            </SidebarWidget>

            <SidebarWidget>
              <WidgetTitle>Share</WidgetTitle>
              <SocialShareWidget>
                <SocialButton color="#0077b5">
                  <FaLinkedin />
                </SocialButton>
                <SocialButton color="#1da1f2">
                  <FaTwitter />
                </SocialButton>
                <SocialButton color="#1877f2">
                  <FaFacebook />
                </SocialButton>
              </SocialShareWidget>
            </SidebarWidget>
          </Sidebar>
        </MainGrid>
      </Container>
    </PageContainer>
  );
};

export default ArticleDetail;
