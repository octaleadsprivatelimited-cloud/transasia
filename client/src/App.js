import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import Header from './components/Header';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import Testimonials from './components/Testimonials';
import IndustryLeaders from './components/IndustryLeaders';
import Geographies from './components/Geographies';
import CTA from './components/CTA';
import Footer from './components/Footer';
import BackgroundAnimation from './components/BackgroundAnimation';
import ScrollToTop from './components/ScrollToTop';
import Insurtech from './pages/Insurtech';
import Consulting from './pages/Consulting';
import CyberProducts from './pages/CyberProducts';
import CyberServices from './pages/CyberServices';
import CyberSecurityProducts from './pages/CyberSecurityProducts';
import CyberSecurityServices from './pages/CyberSecurityServices';
import PressRelease from './pages/PressRelease';
import Gallery from './pages/Gallery';
import Careers from './pages/Careers';
import About from './pages/About';
import Team from './pages/Team';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Insights from './pages/Insights';
import ArticleDetail from './pages/ArticleDetail';
import PressReleaseDetail from './pages/PressReleaseDetail';
import NotFound from './pages/NotFound';
import { BasicPage } from './pages';
import { routes as dynamicRoutes } from './routes/config';

// Suppress unused variable warnings - these are used in Routes
/* eslint-disable no-unused-vars */

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
        <title>Trans Asia Tech - Advanced Cybersecurity Platform</title>
        <meta name="description" content="Revolutionary AI-powered cybersecurity platform for autonomous threat protection, risk management, and next-gen security solutions." />
        <meta name="keywords" content="cybersecurity, threat protection, risk management, AI security, cyber risk quantification, third-party risk management, security platform" />
      </Helmet>
      
      <BackgroundAnimation />
      <ScrollToTop />
      <Header />
      
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Solutions />
            <Testimonials />
            <IndustryLeaders />
            <Geographies />
            <CTA />
          </>
        } />
        <Route path="/insurtech" element={<Insurtech />} />
        <Route path="/consulting" element={<Consulting />} />
        <Route path="/cybersecurity/products" element={<CyberProducts />} />
        <Route path="/cybersecurity/services" element={<CyberServices />} />
        <Route path="/products" element={<CyberSecurityProducts />} />
        <Route path="/services" element={<CyberSecurityServices />} />
        <Route path="/press" element={<PressRelease />} />
        <Route path="/press/:id" element={<PressReleaseDetail />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/insights/:id" element={<ArticleDetail />} />
        <Route path="/contact" element={<Contact />} />
        {dynamicRoutes.map(r => (
          <Route key={r.path} path={r.path} element={<BasicPage pill={r.pill} title={r.title} description={r.description} />} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
      
      <Footer />
    </AppContainer>
  );
};

export default App;
