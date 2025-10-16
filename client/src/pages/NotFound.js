import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHome, FaArrowLeft } from 'react-icons/fa';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
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
      radial-gradient(circle at 20% 50%, rgba(251, 191, 36, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.2) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const Content = styled.div`
  text-align: center;
  position: relative;
  z-index: 1;
  padding: 40px;
`;

const ErrorCode = styled(motion.h1)`
  font-size: 10rem;
  font-weight: 900;
  color: #fbbf24;
  margin: 0;
  line-height: 1;
  text-shadow: 0 4px 20px rgba(251, 191, 36, 0.3);

  @media (max-width: 768px) {
    font-size: 6rem;
  }
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 700;
  color: #ffffff;
  margin: 30px 0 20px;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 40px;
  max-width: 600px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
`;

const Button = styled(Link)`
  padding: 16px 32px;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  transition: all 0.3s ease;
  background: ${props => props.$primary ? '#fbbf24' : 'rgba(255, 255, 255, 0.1)'};
  color: ${props => props.$primary ? '#000000' : '#ffffff'};
  border: 2px solid ${props => props.$primary ? '#fbbf24' : 'rgba(255, 255, 255, 0.3)'};
  box-shadow: ${props => props.$primary ? '0 4px 20px rgba(251, 191, 36, 0.3)' : 'none'};

  &:hover {
    transform: translateY(-3px);
    background: ${props => props.$primary ? '#f59e0b' : 'rgba(255, 255, 255, 0.2)'};
    box-shadow: 0 6px 25px rgba(251, 191, 36, 0.4);
  }
`;

const NotFound = () => {
  return (
    <Container>
      <Content>
        <ErrorCode
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          404
        </ErrorCode>
        
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Page Not Found
        </Title>
        
        <Description
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Sorry, the page you're looking for doesn't exist or has been moved. 
          Let's get you back on track.
        </Description>
        
        <ButtonGroup
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button to="/" $primary>
            <FaHome /> Go Home
          </Button>
          <Button to="javascript:history.back()" onClick={(e) => { e.preventDefault(); window.history.back(); }}>
            <FaArrowLeft /> Go Back
          </Button>
        </ButtonGroup>
      </Content>
    </Container>
  );
};

export default NotFound;

