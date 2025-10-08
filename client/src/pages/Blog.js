import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaNewspaper, FaCalendar, FaUser, FaClock, FaArrowRight } from 'react-icons/fa';

const PageContainer = styled.div`
  min-height: 100vh;
  padding-top: 80px;
  background: var(--bg-primary);
`;

const HeroSection = styled.section`
  background: var(--gradient-hero);
  padding: 120px 20px 80px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: 24px;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.3rem;
  color: var(--text-secondary);
  max-width: 800px;
  margin: 0 auto;
`;

const Section = styled.section`
  padding: 80px 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const FilterSection = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 60px;
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  padding: 12px 24px;
  border-radius: 24px;
  border: 2px solid ${props => props.active ? 'var(--primary-color)' : 'var(--border-color)'};
  background: ${props => props.active ? 'var(--primary-color)' : 'white'};
  color: ${props => props.active ? 'white' : 'var(--text-secondary)'};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--primary-color);
    background: ${props => props.active ? 'var(--primary-dark)' : 'var(--bg-tertiary)'};
  }
`;

const FeaturedPost = styled(motion.article)`
  background: white;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(30, 64, 175, 0.1);
  margin-bottom: 60px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

const FeaturedImage = styled.div`
  background: var(--gradient-primary);
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 6rem;
  color: white;

  @media (max-width: 968px) {
    min-height: 300px;
  }
`;

const FeaturedContent = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 968px) {
    padding: 30px;
  }
`;

const FeaturedBadge = styled.span`
  display: inline-block;
  background: var(--primary-color);
  color: white;
  padding: 6px 16px;
  border-radius: 16px;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 16px;
  width: fit-content;
`;

const PostCategory = styled.span`
  display: inline-block;
  background: var(--bg-tertiary);
  color: var(--primary-color);
  padding: 6px 16px;
  border-radius: 16px;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

const PostTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 16px;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const PostMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 20px;
  color: var(--text-muted);
  font-size: 0.95rem;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  svg {
    color: var(--primary-color);
  }
`;

const PostExcerpt = styled.p`
  font-size: 1.05rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 24px;
`;

const ReadMoreButton = styled(motion.button)`
  background: var(--gradient-primary);
  color: white;
  border: none;
  padding: 14px 32px;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
  transition: all 0.3s ease;

  &:hover {
    transform: translateX(5px);
  }
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const BlogCard = styled(motion.article)`
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(30, 64, 175, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 40px rgba(30, 64, 175, 0.2);
  }
`;

const BlogImage = styled.div`
  width: 100%;
  height: 220px;
  background: var(--gradient-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  color: white;
`;

const BlogContent = styled.div`
  padding: 24px;
`;

const BlogTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 12px;
  line-height: 1.4;
`;

const BlogExcerpt = styled.p`
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 16px;
`;

const Blog = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const featuredPost = {
    category: 'Featured',
    title: 'The Future of AI in Cybersecurity: Predictions for 2026',
    author: 'Sarah Williams',
    date: 'October 1, 2025',
    readTime: '8 min read',
    excerpt: 'Explore how artificial intelligence and machine learning are revolutionizing threat detection, incident response, and security automation. Learn about the latest trends and what to expect in the coming year.',
    filter: 'ai-ml'
  };

  const blogPosts = [
    {
      id: 1,
      category: 'Threat Intelligence',
      title: 'Understanding Advanced Persistent Threats (APTs)',
      author: 'David Kumar',
      date: 'September 28, 2025',
      readTime: '6 min read',
      excerpt: 'Deep dive into APT tactics, techniques, and procedures. Learn how to detect and defend against sophisticated nation-state attacks.',
      filter: 'threat-intelligence'
    },
    {
      id: 2,
      category: 'Cloud Security',
      title: 'Securing Multi-Cloud Environments: Best Practices',
      author: 'James Rodriguez',
      date: 'September 25, 2025',
      readTime: '7 min read',
      excerpt: 'Comprehensive guide to implementing security controls across AWS, Azure, and GCP. Avoid common pitfalls and maintain compliance.',
      filter: 'cloud-security'
    },
    {
      id: 3,
      category: 'Compliance',
      title: 'ISO 27001 Certification: A Step-by-Step Guide',
      author: 'Jennifer Lee',
      date: 'September 22, 2025',
      readTime: '10 min read',
      excerpt: 'Everything you need to know about achieving ISO 27001 certification. From gap analysis to audit preparation.',
      filter: 'compliance'
    },
    {
      id: 4,
      category: 'Incident Response',
      title: 'Ransomware Response Playbook for 2025',
      author: 'Michael Chen',
      date: 'September 20, 2025',
      readTime: '9 min read',
      excerpt: 'Updated strategies for responding to ransomware attacks. Includes containment procedures, recovery steps, and prevention measures.',
      filter: 'incident-response'
    },
    {
      id: 5,
      category: 'Zero Trust',
      title: 'Implementing Zero Trust Architecture',
      author: 'Emily Zhang',
      date: 'September 18, 2025',
      readTime: '8 min read',
      excerpt: 'Practical guide to transitioning from perimeter-based security to zero trust. Real-world examples and implementation roadmap.',
      filter: 'zero-trust'
    },
    {
      id: 6,
      category: 'AI & ML',
      title: 'Machine Learning for Anomaly Detection',
      author: 'Sarah Williams',
      date: 'September 15, 2025',
      readTime: '7 min read',
      excerpt: 'How machine learning algorithms can identify unusual patterns and potential security threats in real-time.',
      filter: 'ai-ml'
    },
    {
      id: 7,
      category: 'Threat Intelligence',
      title: 'Threat Hunting: Proactive Security Approach',
      author: 'David Kumar',
      date: 'September 12, 2025',
      readTime: '6 min read',
      excerpt: 'Learn threat hunting methodologies and tools to proactively search for hidden threats in your environment.',
      filter: 'threat-intelligence'
    },
    {
      id: 8,
      category: 'Cloud Security',
      title: 'Container Security: Docker and Kubernetes',
      author: 'James Rodriguez',
      date: 'September 10, 2025',
      readTime: '8 min read',
      excerpt: 'Secure your containerized applications with best practices for Docker and Kubernetes security configurations.',
      filter: 'cloud-security'
    },
    {
      id: 9,
      category: 'Compliance',
      title: 'GDPR Compliance in 2025: What Changed',
      author: 'Lisa Tanaka',
      date: 'September 8, 2025',
      readTime: '7 min read',
      excerpt: 'Recent updates to GDPR regulations and how they impact your data protection strategies.',
      filter: 'compliance'
    }
  ];

  const filteredPosts = activeFilter === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.filter === activeFilter);

  return (
    <PageContainer>
      <HeroSection>
        <Title>Security Insights Blog</Title>
        <Subtitle>
          Expert perspectives, industry trends, and practical guidance from our cybersecurity team
        </Subtitle>
      </HeroSection>

      <Section>
        {/* Featured Post */}
        <FeaturedPost
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <FeaturedImage>
            <FaNewspaper />
          </FeaturedImage>
          <FeaturedContent>
            <FeaturedBadge>{featuredPost.category}</FeaturedBadge>
            <PostTitle>{featuredPost.title}</PostTitle>
            <PostMeta>
              <MetaItem>
                <FaUser />
                {featuredPost.author}
              </MetaItem>
              <MetaItem>
                <FaCalendar />
                {featuredPost.date}
              </MetaItem>
              <MetaItem>
                <FaClock />
                {featuredPost.readTime}
              </MetaItem>
            </PostMeta>
            <PostExcerpt>{featuredPost.excerpt}</PostExcerpt>
            <ReadMoreButton whileHover={{ x: 5 }}>
              Read Article <FaArrowRight />
            </ReadMoreButton>
          </FeaturedContent>
        </FeaturedPost>

        {/* Filter Buttons */}
        <FilterSection>
          <FilterButton 
            active={activeFilter === 'all'} 
            onClick={() => setActiveFilter('all')}
          >
            All Articles
          </FilterButton>
          <FilterButton 
            active={activeFilter === 'threat-intelligence'} 
            onClick={() => setActiveFilter('threat-intelligence')}
          >
            Threat Intelligence
          </FilterButton>
          <FilterButton 
            active={activeFilter === 'cloud-security'} 
            onClick={() => setActiveFilter('cloud-security')}
          >
            Cloud Security
          </FilterButton>
          <FilterButton 
            active={activeFilter === 'compliance'} 
            onClick={() => setActiveFilter('compliance')}
          >
            Compliance
          </FilterButton>
          <FilterButton 
            active={activeFilter === 'incident-response'} 
            onClick={() => setActiveFilter('incident-response')}
          >
            Incident Response
          </FilterButton>
          <FilterButton 
            active={activeFilter === 'zero-trust'} 
            onClick={() => setActiveFilter('zero-trust')}
          >
            Zero Trust
          </FilterButton>
          <FilterButton 
            active={activeFilter === 'ai-ml'} 
            onClick={() => setActiveFilter('ai-ml')}
          >
            AI & ML
          </FilterButton>
        </FilterSection>

        {/* Blog Grid */}
        <BlogGrid>
          {filteredPosts.map((post, index) => (
            <BlogCard
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <BlogImage>
                <FaNewspaper />
              </BlogImage>
              <BlogContent>
                <PostCategory>{post.category}</PostCategory>
                <BlogTitle>{post.title}</BlogTitle>
                <PostMeta>
                  <MetaItem>
                    <FaUser />
                    {post.author}
                  </MetaItem>
                  <MetaItem>
                    <FaClock />
                    {post.readTime}
                  </MetaItem>
                </PostMeta>
                <BlogExcerpt>{post.excerpt}</BlogExcerpt>
              </BlogContent>
            </BlogCard>
          ))}
        </BlogGrid>
      </Section>
    </PageContainer>
  );
};

export default Blog;
