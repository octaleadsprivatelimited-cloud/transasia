import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaArrowRight, FaArrowDown } from 'react-icons/fa';

const DiagramContainer = styled.div`
  padding: 60px 0;
  background: ${props => props.background || 'transparent'};
`;

const DiagramWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const DiagramTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 50px;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: ${props => props.vertical ? '1fr' : 'repeat(auto-fit, minmax(250px, 1fr))'};
  gap: ${props => props.vertical ? '20px' : '30px'};
  position: relative;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const StepCard = styled(motion.div)`
  background: white;
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(30, 64, 175, 0.1);
  position: relative;
  border: 2px solid transparent;
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--primary-color);
    box-shadow: 0 8px 30px rgba(30, 64, 175, 0.2);
    transform: translateY(-5px);
  }
`;

const StepNumber = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--gradient-primary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 20px;
`;

const StepIcon = styled.div`
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 20px;
`;

const StepTitle = styled.h4`
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 12px;
`;

const StepDescription = styled.p`
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.6;
`;

const Arrow = styled.div`
  position: absolute;
  color: var(--primary-color);
  font-size: 2rem;
  
  ${props => props.vertical ? `
    bottom: -35px;
    left: 50%;
    transform: translateX(-50%);
  ` : `
    right: -45px;
    top: 50%;
    transform: translateY(-50%);
  `}
  
  @media (max-width: 768px) {
    ${props => props.vertical ? `
      bottom: -30px;
    ` : `
      display: none;
    `}
  }
`;

const CircularFlow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 40px;
  position: relative;
  padding: 40px;
`;

const CircularStep = styled(motion.div)`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: white;
  box-shadow: 0 4px 20px rgba(30, 64, 175, 0.15);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  text-align: center;
  border: 3px solid var(--primary-color);
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 8px 30px rgba(30, 64, 175, 0.25);
  }

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;

const LifecycleDiagram = ({ title, steps, type = 'horizontal', background }) => {
  const renderHorizontalFlow = () => (
    <StepsGrid>
      {steps.map((step, index) => (
        <div key={index} style={{ position: 'relative' }}>
          <StepCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {step.number && <StepNumber>{step.number}</StepNumber>}
            {step.icon && <StepIcon>{step.icon}</StepIcon>}
            <StepTitle>{step.title}</StepTitle>
            <StepDescription>{step.description}</StepDescription>
          </StepCard>
          {index < steps.length - 1 && (
            <Arrow>
              <FaArrowRight />
            </Arrow>
          )}
        </div>
      ))}
    </StepsGrid>
  );

  const renderVerticalFlow = () => (
    <StepsGrid vertical>
      {steps.map((step, index) => (
        <div key={index} style={{ position: 'relative' }}>
          <StepCard
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {step.number && <StepNumber>{step.number}</StepNumber>}
            {step.icon && <StepIcon>{step.icon}</StepIcon>}
            <StepTitle>{step.title}</StepTitle>
            <StepDescription>{step.description}</StepDescription>
          </StepCard>
          {index < steps.length - 1 && (
            <Arrow vertical>
              <FaArrowDown />
            </Arrow>
          )}
        </div>
      ))}
    </StepsGrid>
  );

  const renderCircularFlow = () => (
    <CircularFlow>
      {steps.map((step, index) => (
        <CircularStep
          key={index}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          {step.icon && <StepIcon>{step.icon}</StepIcon>}
          <StepTitle style={{ fontSize: '1rem', marginBottom: '8px' }}>{step.title}</StepTitle>
          <StepDescription style={{ fontSize: '0.85rem' }}>{step.description}</StepDescription>
        </CircularStep>
      ))}
    </CircularFlow>
  );

  return (
    <DiagramContainer background={background}>
      <DiagramWrapper>
        {title && <DiagramTitle>{title}</DiagramTitle>}
        {type === 'horizontal' && renderHorizontalFlow()}
        {type === 'vertical' && renderVerticalFlow()}
        {type === 'circular' && renderCircularFlow()}
      </DiagramWrapper>
    </DiagramContainer>
  );
};

export default LifecycleDiagram;
