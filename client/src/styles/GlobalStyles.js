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
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #0a0a0a;
    color: #ffffff;
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
    background: #1a1a1a;
  }

  ::-webkit-scrollbar-thumb {
    background: #0066ff;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #0047cc;
  }

  /* Custom CSS Variables */
  :root {
    --primary-color: #0066ff;
    --primary-dark: #0047cc;
    --secondary-color: #00a8ff;
    --accent-color: #ff3366;
    --bg-primary: #0a0a0a;
    --bg-secondary: #1a1a1a;
    --bg-tertiary: #2a2a2a;
    --text-primary: #ffffff;
    --text-secondary: #b0b0b0;
    --text-muted: #666666;
    --border-color: #333333;
    --shadow: 0 10px 30px rgba(0, 102, 255, 0.1);
    --shadow-hover: 0 20px 60px rgba(0, 102, 255, 0.2);
    --gradient-primary: linear-gradient(135deg, #0066ff 0%, #00a8ff 100%);
    --gradient-secondary: linear-gradient(135deg, #0066ff 0%, #0047cc 100%);
    --gradient-dark: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
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
