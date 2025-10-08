import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  FaRobot, FaNetworkWired, FaShieldAlt, FaChartBar, FaCubes, FaLink, FaTachometerAlt, FaCloud
} from 'react-icons/fa';

const Wrapper = styled.section`
  padding: 120px 0;
  background: var(--gradient-light);
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Pill = styled.span`
  display: inline-block;
  background: rgba(0, 102, 255, 0.08);
  border: 1px solid rgba(0, 102, 255, 0.2);
  color: var(--primary-color);
  padding: 6px 12px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: .4px;
`;

const Title = styled.h1`
  font-size: clamp(36px, 6vw, 56px);
  font-weight: 900;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 12px 0 16px;
`;

const Subtitle = styled.p`
  color: var(--text-secondary);
  max-width: 820px;
  line-height: 1.8;
  margin-bottom: 40px;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: 800;
  margin: 32px 0 16px;
  color: var(--text-primary);
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

const List = styled.ul`
  margin: 12px 0 0;
  padding-left: 18px;
  color: var(--text-secondary);
  line-height: 1.8;
`;

const CyberProducts = () => {
  return (
    <Wrapper>
      <Helmet>
        <title>Cybersecurity Products | Transasia</title>
        <meta name="description" content="Platform products across AI agents, exposure management, CRQ, and integrations." />
      </Helmet>
      <Container>
        <Pill>Products</Pill>
        <Title>Cybersecurity Platform</Title>
        <Subtitle>
          Modular products to discover exposure, quantify risk, and automate response. Built for
          rapid integration and real-time insights.
        </Subtitle>

        <SectionTitle>Product Suite</SectionTitle>
        <Grid>
          <Card whileHover={{ y: -6 }}>
            <FaNetworkWired size={28} color="#0066ff" />
            <CardTitle>External Attack Surface</CardTitle>
            <CardText>Continuous asset discovery, misconfigurations, leaked creds, and risky services.</CardText>
            <List>
              <li>Cloud/SaaS/Internet asset inventory</li>
              <li>Exposure severity and remediation</li>
              <li>Portfolio-level risk heatmaps</li>
            </List>
          </Card>

          <Card whileHover={{ y: -6 }}>
            <FaChartBar size={28} color="#00a8ff" />
            <CardTitle>Cyber Risk Quantification</CardTitle>
            <CardText>Translate technical risk to financial impact with CRQ-aligned models.</CardText>
            <List>
              <li>Scenario libraries and loss curves</li>
              <li>Board-ready KPIs/KRIs</li>
              <li>Budget justification and prioritization</li>
            </List>
          </Card>

          <Card whileHover={{ y: -6 }}>
            <FaRobot size={28} color="#0047cc" />
            <CardTitle>AI Security Agents</CardTitle>
            <CardText>Automate enrichment, triage, and playbooks with domain-specific agents.</CardText>
            <List>
              <li>IR assistant and threat intel analyst</li>
              <li>Compliance documentation assistant</li>
              <li>Ticketing and workflow automation</li>
            </List>
          </Card>

          <Card whileHover={{ y: -6 }}>
            <FaShieldAlt size={28} color="#0066ff" />
            <CardTitle>Threat Protection</CardTitle>
            <CardText>Detections mapped to real threats with correlation and prioritization.</CardText>
            <List>
              <li>Use‑case catalog and MITRE ATT&CK</li>
              <li>Noise reduction and alert quality</li>
              <li>Response integrations and SOAR</li>
            </List>
          </Card>
        </Grid>

        <SectionTitle style={{ marginTop: 40 }}>Platform & Integrations</SectionTitle>
        <Grid>
          <Card whileHover={{ y: -6 }}>
            <FaCubes size={28} color="#0066ff" />
            <CardTitle>Extensible Modules</CardTitle>
            <CardText>Add products incrementally and tailor dashboards, KPIs, and workflows.</CardText>
          </Card>
          <Card whileHover={{ y: -6 }}>
            <FaLink size={28} color="#00a8ff" />
            <CardTitle>APIs & Connectors</CardTitle>
            <CardText>Out-of-the-box connectors for SIEM, EDR, ticketing, IAM, and data lakes.</CardText>
          </Card>
          <Card whileHover={{ y: -6 }}>
            <FaTachometerAlt size={28} color="#0047cc" />
            <CardTitle>Performance & Scale</CardTitle>
            <CardText>Stream processing and caching for low-latency analytics at scale.</CardText>
          </Card>
          <Card whileHover={{ y: -6 }}>
            <FaCloud size={28} color="#0066ff" />
            <CardTitle>Cloud Native</CardTitle>
            <CardText>Secure multi-tenant architecture with granular RBAC and auditability.</CardText>
          </Card>
        </Grid>
      </Container>
    </Wrapper>
  );
};

export default CyberProducts;


