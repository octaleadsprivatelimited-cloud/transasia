import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Solutions from './components/Solutions';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import BackgroundAnimation from './components/BackgroundAnimation';

const AppContainer = styled.div`
  min-height: 100vh;
  position: relative;
  background: var(--bg-primary);
  overflow-x: hidden;
`;

const App = () => {
  return (
    <AppContainer>
      <Helmet>
        <title>CyberSecure - Advanced Cybersecurity Platform</title>
        <meta name="description" content="Revolutionary AI-powered cybersecurity platform for autonomous threat protection, risk management, and next-gen security solutions." />
        <meta name="keywords" content="cybersecurity, threat protection, risk management, AI security, cyber risk quantification, third-party risk management, security platform" />
      </Helmet>
      
      <BackgroundAnimation />
      <Header />
      
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Features />
            <Solutions />
            <Stats />
            <Testimonials />
            <CTA />
          </>
        } />
      </Routes>
      
      <Footer />
    </AppContainer>
  );
};

export default App;
