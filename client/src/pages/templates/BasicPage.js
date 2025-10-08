import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';

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
  background: rgba(10, 132, 255, 0.08);
  border: 1px solid rgba(10, 132, 255, 0.2);
  color: var(--primary-color);
  padding: 6px 12px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: .4px;
`;

const Title = styled.h1`
  font-size: clamp(32px, 5vw, 52px);
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
  margin-bottom: 24px;
`;

export default function BasicPage({ pill = '', title, description }) {
  return (
    <Wrapper>
      <Helmet>
        <title>{title} | Transasia</title>
        <meta name="description" content={description} />
      </Helmet>
      <Container>
        {pill ? <Pill>{pill}</Pill> : null}
        <Title>{title}</Title>
        {description ? <Subtitle>{description}</Subtitle> : null}
      </Container>
    </Wrapper>
  );
}


