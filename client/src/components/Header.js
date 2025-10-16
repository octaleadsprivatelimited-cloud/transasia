import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

const HeaderContainer = styled(motion.header)`
  position: ${props => props.$scrolled ? 'fixed' : 'absolute'};
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${props => props.$scrolled ? '#1e3a8a' : 'transparent'};
  backdrop-filter: ${props => props.$scrolled ? 'blur(12px)' : 'none'};
  border-bottom: ${props => props.$scrolled ? '1px solid rgba(0, 102, 255, 0.1)' : 'none'};
  transition: all 0.3s ease;
  box-shadow: ${props => props.$scrolled ? '0 4px 20px rgba(0, 0, 0, 0.1)' : 'none'};
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

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  font-size: 24px;
  font-weight: 800;
  color: var(--text-primary);
  transition: all 0.3s ease;

  img {
    height: 70px;
    width: auto;
    object-fit: contain;
  }

  &:hover {
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    font-size: 20px;
    
    img {
      height: 50px;
    }
  }
`;

const NavMenu = styled(motion.nav)`
  display: flex;
  align-items: center;
  gap: 28px;
  margin-left: auto;
  margin-right: 20px;

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
    margin-left: 0;
    margin-right: 0;

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

  @media (max-width: 968px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  font-size: 16px;
  position: relative;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 5px;

  &:hover {
    color: #ffffff;
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

const CompanyDropdown = styled(motion.div)`
  position: absolute;
  top: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  opacity: ${props => props.$open ? 1 : 0};
  visibility: ${props => props.$open ? 'visible' : 'hidden'};
  pointer-events: ${props => props.$open ? 'auto' : 'none'};
  transition: all 0.2s ease;
  z-index: 1001;
  min-width: 240px;
  border: 1px solid rgba(0, 0, 0, 0.05);

  @media (max-width: 968px) {
    position: static;
    background: transparent;
    border: none;
    box-shadow: none;
    min-width: auto;
    opacity: 1;
    visibility: visible;
    transform: none;
    pointer-events: auto;
    display: ${props => props.$open ? 'block' : 'none'};
  }
`;

const CompanyList = styled.div`
  padding: 8px 0;
  display: flex;
  flex-direction: column;

  @media (max-width: 968px) {
    padding: 0;
    padding-left: 20px;
  }
`;

const CompanyItem = styled(Link)`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 20px;
  text-decoration: none;
  transition: all 0.15s ease;
  color: #1e293b;
  font-size: 0.95rem;
  font-weight: 500;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 3px;
    background: #3b82f6;
    transform: scaleY(0);
    transition: transform 0.15s ease;
  }

  &:hover {
    background: #f8fafc;
    color: #3b82f6;
  }

  &:hover::before {
    transform: scaleY(1);
  }

  @media (max-width: 968px) {
    color: #ffffff;
    padding: 14px 0;

    &::before {
      display: none;
    }

    &:hover {
      background: transparent;
      color: #60a5fa;
    }
  }
`;

const CompanyItemIcon = styled.div`
  font-size: 1.2rem;
  flex-shrink: 0;
  width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #64748b;
  transition: all 0.15s ease;

  ${CompanyItem}:hover & {
    color: #3b82f6;
  }

  @media (max-width: 968px) {
    display: none;
  }
`;

const CompanyItemContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
`;

const CompanyItemTitle = styled.div`
  font-size: 0.95rem;
  font-weight: 500;
  color: inherit;
  line-height: 1.3;
`;

const CompanyItemDesc = styled.div`
  font-size: 0.8rem;
  color: #64748b;
  line-height: 1.3;

  ${CompanyItem}:hover & {
    color: #94a3b8;
  }

  @media (max-width: 968px) {
    display: none;
  }
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
    padding-left: 20px;
    margin: 0;
    min-width: auto;
    opacity: 1;
    visibility: visible;
    transform: none;
    pointer-events: auto;
    box-shadow: none;
    display: ${props => props.$open ? 'block' : 'none'};
  }
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
    display: none;
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
    display: none;
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
  color: #1e3a8a;
  font-weight: 700;
  font-size: 15px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(255, 255, 255, 0.5);

  ${MegaCard}:hover & {
    transform: translateY(-4px);
    background: rgba(255, 255, 255, 1);
    color: #1e40af;
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
  }
`;

const CTAButton = styled(Link)`
  background: #fbbf24;
  color: #1a1a1a;
  padding: 8px 20px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  font-size: 13px;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  white-space: nowrap;
  box-shadow: none;

  &:hover {
    background: #f59e0b;
  }

  @media (max-width: 968px) {
    padding: 10px 18px;
    font-size: 12px;
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
    color: #ffffff;
  }
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
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
      $scrolled={isScrolled}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
        <NavContainer>
          <Logo to="/">
            <img src="/insurtech/top_logo.png" alt="Trans Asia Tech Logo" />
          </Logo>

          <NavMenu className={isMenuOpen ? 'active' : ''}>
          <NavLink to="/" onClick={closeMenu}>Home</NavLink>
          <NavLink to="/insurtech" onClick={closeMenu}>Insurtech</NavLink>
          <NavLink to="/products" onClick={closeMenu}>Products</NavLink>
          <NavLink to="/consulting" onClick={closeMenu}>Consulting</NavLink>
          <NavLink to="/services" onClick={closeMenu}>Services</NavLink>

          <Dropdown>
            <NavLink to="#" onClick={(e) => { e.preventDefault(); setActiveMenu(activeMenu === 'company' ? '' : 'company'); }}>
              Company
              <FaChevronDown size={12} />
            </NavLink>
            <CompanyDropdown $open={activeMenu === 'company'}>
              <CompanyList>
                <CompanyItem to="/press" onClick={closeMenu}>
                  <CompanyItemContent>
                    <CompanyItemTitle>Media</CompanyItemTitle>
                    <CompanyItemDesc>Press releases & news</CompanyItemDesc>
                  </CompanyItemContent>
                </CompanyItem>
                <CompanyItem to="/gallery" onClick={closeMenu}>
                  <CompanyItemContent>
                    <CompanyItemTitle>Event Gallery</CompanyItemTitle>
                    <CompanyItemDesc>Photos & highlights</CompanyItemDesc>
                  </CompanyItemContent>
                </CompanyItem>
                <CompanyItem to="/about" onClick={closeMenu}>
                  <CompanyItemContent>
                    <CompanyItemTitle>Our Story</CompanyItemTitle>
                    <CompanyItemDesc>Company history</CompanyItemDesc>
                  </CompanyItemContent>
                </CompanyItem>
                <CompanyItem to="/team" onClick={closeMenu}>
                  <CompanyItemContent>
                    <CompanyItemTitle>Team</CompanyItemTitle>
                    <CompanyItemDesc>Meet our experts</CompanyItemDesc>
                  </CompanyItemContent>
                </CompanyItem>
                <CompanyItem to="/insights" onClick={closeMenu}>
                  <CompanyItemContent>
                    <CompanyItemTitle>Articles/Blogs</CompanyItemTitle>
                    <CompanyItemDesc>Latest insights</CompanyItemDesc>
                  </CompanyItemContent>
                </CompanyItem>
              </CompanyList>
            </CompanyDropdown>
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
