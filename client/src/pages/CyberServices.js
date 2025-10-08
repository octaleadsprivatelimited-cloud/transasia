import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FaHandsHelping, FaBug, FaShieldAlt, FaClipboardList } from 'react-icons/fa';

const Wrapper = styled.section`
  padding: 120px 0;
  background: var(--gradient-hero);
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Title = styled.h1`
  font-size: clamp(36px, 6vw, 56px);
  font-weight: 900;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 16px;
`;

const Subtitle = styled.p`
  color: var(--text-secondary);
  max-width: 720px;
  line-height: 1.7;
  margin-bottom: 40px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
`;

const Card = styled(motion.div)`
  background: #ffffff;
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 8px 30px rgba(0, 102, 255, 0.08);
`;

const CardTitle = styled.h3`
  font-size: 18px;
  margin: 14px 0 8px;
`;

const CardText = styled.p`
  color: var(--text-secondary);
`;

const CyberServices = () => {
  return (
    <Wrapper>
      <Helmet>
        <title>Cybersecurity Services | CyberSecure</title>
        <meta name="description" content="Managed security, incident response, red teaming, and compliance operations for enterprises." />
      </Helmet>
      <Container>
        <Title>Cybersecurity Services</Title>
        <Subtitle>
          Expert services to operationalize your cyber program: managed operations, incident response,
          offensive testing, and compliance operations.
        </Subtitle>
        <Grid>
          <Card whileHover={{ y: -6 }}>
            <FaHandsHelping size={28} color="#0066ff" />
            <CardTitle>Managed Security</CardTitle>
            <CardText>24/7 monitoring, triage, and response with tailored runbooks and SLAs.</CardText>
          </Card>
          <Card whileHover={{ y: -6 }}>
            <FaBug size={28} color="#00a8ff" />
            <CardTitle>Red & Purple Teaming</CardTitle>
            <CardText>Adversary emulation, breach simulations, and continuous control validation.</CardText>
          </Card>
          <Card whileHover={{ y: -6 }}>
            <FaShieldAlt size={28} color="#0047cc" />
            <CardTitle>Incident Response</CardTitle>
            <CardText>Retainer-based IR, forensics, and crisis communications support.</CardText>
          </Card>
          <Card whileHover={{ y: -6 }}>
            <FaClipboardList size={28} color="#0066ff" />
            <CardTitle>Compliance Operations</CardTitle>
            <CardText>Policy management, evidence automation, and audit readiness as-a-service.</CardText>
          </Card>
        </Grid>
      </Container>
    </Wrapper>
  );
};

export default CyberServices;


