import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display",
      "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #f8fafc;
    color: #1e293b;
    line-height: 1.6;
    overflow-x: hidden;
  }

  code {
    font-family: 'JetBrains Mono', source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  ::selection {
    background-color: #00ff88;
    color: #000000;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f5f9;
  }

  ::-webkit-scrollbar-thumb {
    background: #0066ff;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #0047cc;
  }

  /* Custom CSS Variables - Thick Blue Theme */
  :root {
    --primary-color: #1e40af; /* Thick blue */
    --primary-dark: #1e3a8a;
    --primary-light: #3b82f6;
    --secondary-color: #60a5fa;
    --accent-color: #06b6d4;
    --bg-primary: #f0f9ff;
    --bg-secondary: #ffffff;
    --bg-tertiary: #e0f2fe;
    --text-primary: #0f172a;
    --text-secondary: #334155;
    --text-muted: #64748b;
    --border-color: #cbd5e1;
    --shadow: 0 12px 28px rgba(30, 64, 175, 0.15);
    --shadow-hover: 0 18px 48px rgba(30, 64, 175, 0.25);
    --gradient-primary: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
    --gradient-secondary: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
    --gradient-light: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
    --gradient-hero: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 50%, #93c5fd 100%);
    --gradient-fade: linear-gradient(180deg, rgba(30, 64, 175, 0.05) 0%, rgba(30, 64, 175, 0) 100%);
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    body {
      font-size: 14px;
    }
  }

  /* Animation Classes */
  .fade-in {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.6s ease;
  }

  .fade-in.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .slide-in-left {
    opacity: 0;
    transform: translateX(-50px);
    transition: all 0.6s ease;
  }

  .slide-in-left.visible {
    opacity: 1;
    transform: translateX(0);
  }

  .slide-in-right {
    opacity: 0;
    transform: translateX(50px);
    transition: all 0.6s ease;
  }

  .slide-in-right.visible {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 768px) {
    padding: 0 15px;
  }
`;

export const Section = styled.section`
  padding: 100px 0;
  position: relative;

  @media (max-width: 768px) {
    padding: 60px 0;
  }
`;

export const Button = styled.button`
  background: var(--gradient-primary);
  border: none;
  padding: 15px 30px;
  border-radius: 8px;
  color: #000000;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-hover);
  }

  &:active {
    transform: translateY(0);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.5s;
  }

  &:hover::before {
    left: 100%;
  }

  @media (max-width: 768px) {
    padding: 12px 24px;
    font-size: 14px;
  }
`;

export const SecondaryButton = styled(Button)`
  background: transparent;
  border: 2px solid var(--primary-color);
  color: var(--primary-color);

  &:hover {
    background: var(--primary-color);
    color: #000000;
  }
`;
