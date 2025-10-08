import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

const HeaderContainer = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(248, 250, 252, 0.95);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(0, 102, 255, 0.1);
  transition: all 0.3s ease;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;

  @media (max-width: 768px) {
    padding: 0 15px;
    height: 70px;
  }
`;

// Logo removed by request

const NavMenu = styled(motion.nav)`
  display: flex;
  align-items: center;
  gap: 28px;
  flex: 1;
  justify-content: flex-start;

  @media (max-width: 968px) {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, #0f172a 0%, #1e293b 100%);
    backdrop-filter: blur(20px);
    flex-direction: column;
    align-items: flex-start;
    padding: 30px 20px;
    gap: 20px;
    transform: translateX(100%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    overflow-y: auto;
    z-index: 999;

    &.active {
      transform: translateX(0);
      opacity: 1;
      visibility: visible;
    }
  }
`;

const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-left: auto;

  @media (max-width: 968px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: var(--text-primary);
  text-decoration: none;
  font-weight: 500;
  font-size: 16px;
  position: relative;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 5px;

  &:hover {
    color: var(--primary-color);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--gradient-primary);
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }

  @media (max-width: 968px) {
    color: #ffffff;
    font-size: 18px;
    padding: 12px 0;
    width: 100%;

    &:hover {
      color: #60a5fa;
    }
  }
`;

const Dropdown = styled.div`
  position: relative;
`;

const DropdownContent = styled(motion.div)`
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  background: ${props => props.$blue ? 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #3b82f6 100%)' : 'rgba(255, 255, 255, 0.98)'};
  ${props => props.$blue 
    ? css`
        backdrop-filter: blur(30px) saturate(180%);
        box-shadow: 0 20px 60px rgba(30, 64, 175, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1) inset;
        &, * {
          color: #ffffff !important;
        }
      `
    : css`
        backdrop-filter: blur(30px) saturate(180%);
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.05) inset;
      `}
  border-top: 1px solid ${props => props.$blue ? 'rgba(255, 255, 255, 0.2)' : 'rgba(30, 64, 175, 0.1)'};
  border-radius: 0 0 24px 24px;
  padding: 48px 0 60px;
  min-width: 420px;
  opacity: ${props => props.$open ? 1 : 0};
  visibility: ${props => props.$open ? 'visible' : 'hidden'};
  pointer-events: ${props => props.$open ? 'auto' : 'none'};
  transform: translateY(${props => props.$open ? '0' : '-20px'}) scale(${props => props.$open ? '1' : '0.95'});
  transform-origin: top center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1001;

  /* Ensure readable contrast in blue mode */
  ${props => props.$blue && css`
    color: #ffffff;
    a { color: #ffffff !important; }
    h1, h2, h3, h4, h5, h6 { color: #ffffff !important; }
    svg { color: #ffffff !important; }
  `}

  /* Modern overlay effect */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: ${props => props.$blue 
      ? 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent)' 
      : 'linear-gradient(90deg, transparent, rgba(30, 64, 175, 0.5), transparent)'};
    opacity: ${props => props.$open ? 1 : 0};
    transition: opacity 0.6s ease;
  }

  @media (max-width: 968px) {
    position: static;
    background: transparent;
    backdrop-filter: none;
    border: none;
    padding: 0;
    margin: 8px 0;
    min-width: auto;
    opacity: 1;
    visibility: visible;
    transform: none;
    pointer-events: auto;
    box-shadow: none;
  }
`;

const DropdownGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(180px, 1fr));
  gap: 12px 24px;
`;

const MegaContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
`;

const MegaHeader = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 24px;
  margin-bottom: 24px;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

const MegaTitle = styled.h3`
  margin: 0 0 12px 0;
  color: var(--text-primary);
  font-size: 28px;
  font-weight: 800;
  letter-spacing: -0.5px;
  line-height: 1.2;
  background: linear-gradient(135deg, #ffffff 0%, rgba(255, 255, 255, 0.9) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const MegaSubtitle = styled.p`
  margin: 0;
  color: rgba(255, 255, 255, 0.85);
  font-size: 15px;
  line-height: 1.6;
  font-weight: 400;
`;

const MegaGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;

  @media (max-width: 968px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const MegaCard = styled(motion(Link))`
  position: relative;
  display: block;
  overflow: hidden;
  border-radius: 20px;
  background: rgba(255,255,255,0.95);
  border: 2px solid rgba(255,255,255,0.2);
  min-height: 200px;
  text-decoration: none;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 24px 64px rgba(0, 0, 0, 0.2);
    border-color: rgba(255, 255, 255, 0.4);
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, transparent 0%, rgba(30, 64, 175, 0.1) 100%);
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  &:hover::after {
    opacity: 1;
  }

  @media (max-width: 968px) {
    min-height: 150px;
  }
`;

const MegaImage = styled.div`
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  filter: saturate(1.1) contrast(1.05) brightness(0.95);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);

  ${MegaCard}:hover & {
    transform: scale(1.1);
    filter: saturate(1.3) contrast(1.1) brightness(1);
  }
`;

const MegaLabel = styled.div`
  position: absolute;
  left: 16px;
  bottom: 16px;
  right: 16px;
  padding: 14px 18px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px) saturate(180%);
  color: var(--text-primary);
  font-weight: 700;
  font-size: 15px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(255, 255, 255, 0.5);

  ${MegaCard}:hover & {
    transform: translateY(-4px);
    background: rgba(255, 255, 255, 1);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
  }
`;

const DropdownItem = styled(Link)`
  display: block;
  color: var(--text-secondary);
  text-decoration: none;
  padding: 12px 16px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 10px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 3px;
    height: 0;
    background: var(--gradient-primary);
    transition: height 0.3s ease;
    border-radius: 0 2px 2px 0;
  }

  &:hover {
    color: var(--primary-color);
    transform: translateX(8px);
    background: rgba(30, 64, 175, 0.05);
    
    &::before {
      height: 60%;
    }
  }

  @media (max-width: 968px) {
    color: #ffffff;
    padding: 12px 20px;
    border-radius: 0;
    font-size: 16px;

    &:hover {
      background: rgba(59, 130, 246, 0.2);
      color: #60a5fa;
      transform: translateX(0);
    }

    &::before {
      display: none;
    }
  }
`;

const CTAButton = styled(Link)`
  background: var(--gradient-primary);
  color: white;
  padding: 12px 28px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 15px;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  white-space: nowrap;
  box-shadow: 0 4px 12px rgba(30, 64, 175, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(30, 64, 175, 0.4);
    background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
  }

  @media (max-width: 968px) {
    padding: 14px 24px;
    font-size: 14px;
  }
`;


const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: var(--text-primary);
  font-size: 24px;
  cursor: pointer;
  padding: 10px;
  z-index: 1002;

  @media (max-width: 968px) {
    display: block;
  }
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveMenu('');
  };

  return (
    <HeaderContainer
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        background: isScrolled ? 'rgba(248, 250, 252, 0.98)' : 'rgba(248, 250, 252, 0.95)'
      }}
    >
        <NavContainer>
          {/* Logo removed by request */}

          <NavMenu className={isMenuOpen ? 'active' : ''}>
          <NavLink to="/" onClick={closeMenu}>Home</NavLink>

          <Dropdown>
            <NavLink to="#" onClick={(e) => { e.preventDefault(); setActiveMenu(activeMenu === 'services' ? '' : 'services'); }}>
              Services
              <FaChevronDown size={12} />
            </NavLink>
            <DropdownContent className="dropdown-content" $open={activeMenu === 'services'}>
              <DropdownGrid>
                <DropdownItem to="/products" onClick={closeMenu}>Cybersecurity Products</DropdownItem>
                <DropdownItem to="/services" onClick={closeMenu}>Cybersecurity Services</DropdownItem>
                <DropdownItem to="/insurtech" onClick={closeMenu}>Insurtech Solutions</DropdownItem>
                <DropdownItem to="/consulting" onClick={closeMenu}>Consulting Services</DropdownItem>
              </DropdownGrid>
            </DropdownContent>
          </Dropdown>

          <Dropdown>
            <NavLink to="#" onClick={(e) => { e.preventDefault(); setActiveMenu(activeMenu === 'solutions' ? '' : 'solutions'); }}>
              Solutions
              <FaChevronDown size={12} />
            </NavLink>
            <DropdownContent className="dropdown-content" $open={activeMenu === 'solutions'} $blue initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
              <MegaContainer>
                <MegaHeader>
                  <div>
                    <MegaTitle>Enterprise Security Solutions</MegaTitle>
                    <MegaSubtitle>Explore by industry and use case. Rich visuals help you decide faster.</MegaSubtitle>
                  </div>
                  <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'12px'}}>
                    <DropdownItem to="/solutions/ransomware" onClick={closeMenu}>Ransomware Readiness</DropdownItem>
                    <DropdownItem to="/solutions/zero-trust" onClick={closeMenu}>Zero Trust Architecture</DropdownItem>
                    <DropdownItem to="/solutions/cloud-security" onClick={closeMenu}>Cloud Security</DropdownItem>
                    <DropdownItem to="/solutions/data-protection" onClick={closeMenu}>Data Protection</DropdownItem>
                  </div>
                </MegaHeader>
                <MegaGrid
                  initial="hidden"
                  animate={activeMenu === 'solutions' ? "visible" : "hidden"}
                  variants={{
                    visible: { transition: { staggerChildren: 0.08 } },
                    hidden: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
                  }}
                >
                  <MegaCard 
                    to="/solutions/financial-services" 
                    variants={{
                      hidden: { opacity: 0, y: 20, scale: 0.9 },
                      visible: { opacity: 1, y: 0, scale: 1 }
                    }}
                    transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                  >
                    <MegaImage style={{backgroundImage:`url('https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=1200')`}} />
                    <MegaLabel>Financial Services</MegaLabel>
                  </MegaCard>
                  <MegaCard 
                    to="/solutions/healthcare"
                    variants={{
                      hidden: { opacity: 0, y: 20, scale: 0.9 },
                      visible: { opacity: 1, y: 0, scale: 1 }
                    }}
                    transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                  >
                    <MegaImage style={{backgroundImage:`url('https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1200')`}} />
                    <MegaLabel>Healthcare</MegaLabel>
                  </MegaCard>
                  <MegaCard 
                    to="/solutions/technology"
                    variants={{
                      hidden: { opacity: 0, y: 20, scale: 0.9 },
                      visible: { opacity: 1, y: 0, scale: 1 }
                    }}
                    transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                  >
                    <MegaImage style={{backgroundImage:`url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200')`}} />
                    <MegaLabel>Technology</MegaLabel>
                  </MegaCard>
                  <MegaCard 
                    to="/solutions/manufacturing"
                    variants={{
                      hidden: { opacity: 0, y: 20, scale: 0.9 },
                      visible: { opacity: 1, y: 0, scale: 1 }
                    }}
                    transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                  >
                    <MegaImage style={{backgroundImage:`url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200')`}} />
                    <MegaLabel>Manufacturing</MegaLabel>
                  </MegaCard>
                </MegaGrid>
              </MegaContainer>
            </DropdownContent>
          </Dropdown>


          <Dropdown>
            <NavLink to="#" onClick={(e) => { e.preventDefault(); setActiveMenu(activeMenu === 'company' ? '' : 'company'); }}>
              Company
              <FaChevronDown size={12} />
            </NavLink>
            <DropdownContent className="dropdown-content" $open={activeMenu === 'company'} $blue initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
              <MegaContainer>
                <MegaHeader>
                  <div>
                    <MegaTitle>About TransAsia</MegaTitle>
                    <MegaSubtitle>Learn more about our company, team, and opportunities to join us.</MegaSubtitle>
                  </div>
                </MegaHeader>
                <MegaGrid 
                  style={{ gridTemplateColumns: 'repeat(3, minmax(0, 1fr))' }}
                  initial="hidden"
                  animate={activeMenu === 'company' ? "visible" : "hidden"}
                  variants={{
                    visible: { transition: { staggerChildren: 0.08 } },
                    hidden: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
                  }}
                >
                  <MegaCard 
                    to="/about" 
                    onClick={closeMenu}
                    variants={{
                      hidden: { opacity: 0, y: 20, scale: 0.9 },
                      visible: { opacity: 1, y: 0, scale: 1 }
                    }}
                    transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                  >
                    <MegaImage style={{backgroundImage:`url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200')`}} />
                    <MegaLabel>About Us</MegaLabel>
                  </MegaCard>
                  <MegaCard 
                    to="/team" 
                    onClick={closeMenu}
                    variants={{
                      hidden: { opacity: 0, y: 20, scale: 0.9 },
                      visible: { opacity: 1, y: 0, scale: 1 }
                    }}
                    transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                  >
                    <MegaImage style={{backgroundImage:`url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200')`}} />
                    <MegaLabel>Our Team</MegaLabel>
                  </MegaCard>
                  <MegaCard 
                    to="/careers" 
                    onClick={closeMenu}
                    variants={{
                      hidden: { opacity: 0, y: 20, scale: 0.9 },
                      visible: { opacity: 1, y: 0, scale: 1 }
                    }}
                    transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                  >
                    <MegaImage style={{backgroundImage:`url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1200')`}} />
                    <MegaLabel>Careers</MegaLabel>
                  </MegaCard>
                  <MegaCard 
                    to="/press" 
                    onClick={closeMenu}
                    variants={{
                      hidden: { opacity: 0, y: 20, scale: 0.9 },
                      visible: { opacity: 1, y: 0, scale: 1 }
                    }}
                    transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                  >
                    <MegaImage style={{backgroundImage:`url('https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1200')`}} />
                    <MegaLabel>Press Release</MegaLabel>
                  </MegaCard>
                  <MegaCard 
                    to="/gallery" 
                    onClick={closeMenu}
                    variants={{
                      hidden: { opacity: 0, y: 20, scale: 0.9 },
                      visible: { opacity: 1, y: 0, scale: 1 }
                    }}
                    transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                  >
                    <MegaImage style={{backgroundImage:`url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200')`}} />
                    <MegaLabel>Gallery</MegaLabel>
                  </MegaCard>
                  <MegaCard 
                    to="/blog" 
                    onClick={closeMenu}
                    variants={{
                      hidden: { opacity: 0, y: 20, scale: 0.9 },
                      visible: { opacity: 1, y: 0, scale: 1 }
                    }}
                    transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                  >
                    <MegaImage style={{backgroundImage:`url('https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1200')`}} />
                    <MegaLabel>Blog</MegaLabel>
                  </MegaCard>
                </MegaGrid>
              </MegaContainer>
            </DropdownContent>
          </Dropdown>

          <Dropdown>
            <NavLink to="#" onClick={(e) => { e.preventDefault(); setActiveMenu(activeMenu === 'support' ? '' : 'support'); }}>
              Support
              <FaChevronDown size={12} />
            </NavLink>
            <DropdownContent className="dropdown-content" $open={activeMenu === 'support'}>
              <DropdownGrid>
                <DropdownItem to="/support/help-center" onClick={closeMenu}>Help Center</DropdownItem>
                <DropdownItem to="/support/status" onClick={closeMenu}>Status</DropdownItem>
                <DropdownItem to="/support/security" onClick={closeMenu}>Security</DropdownItem>
                <DropdownItem to="/support/trust-center" onClick={closeMenu}>Trust Center</DropdownItem>
                <DropdownItem to="/support/legal/privacy" onClick={closeMenu}>Privacy</DropdownItem>
                <DropdownItem to="/support/legal/terms" onClick={closeMenu}>Terms</DropdownItem>
                <DropdownItem to="/support/legal/cookies" onClick={closeMenu}>Cookies</DropdownItem>
              </DropdownGrid>
            </DropdownContent>
          </Dropdown>
        </NavMenu>

        <NavActions>
          <CTAButton to="/contact" onClick={closeMenu}>
            Contact
          </CTAButton>
        </NavActions>

        <MobileMenuButton onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuButton>
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header;
