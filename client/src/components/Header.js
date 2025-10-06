import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaShieldAlt, FaChevronDown } from 'react-icons/fa';

const HeaderContainer = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(10, 10, 10, 0.95);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(0, 255, 136, 0.1);
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

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--primary-color);
  font-size: 24px;
  font-weight: 800;
  letter-spacing: -1px;

  svg {
    margin-right: 10px;
    font-size: 28px;
  }

  @media (max-width: 768px) {
    font-size: 20px;
    
    svg {
      font-size: 24px;
      margin-right: 8px;
    }
  }
`;

const NavMenu = styled(motion.nav)`
  display: flex;
  align-items: center;
  gap: 40px;

  @media (max-width: 768px) {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background: rgba(10, 10, 10, 0.98);
    backdrop-filter: blur(20px);
    flex-direction: column;
    padding: 40px 20px;
    gap: 30px;
    border-bottom: 1px solid rgba(0, 255, 136, 0.1);
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;

    &.active {
      transform: translateY(0);
      opacity: 1;
      visibility: visible;
    }
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

  @media (max-width: 768px) {
    font-size: 18px;
    padding: 10px 0;
  }
`;

const Dropdown = styled.div`
  position: relative;

  &:hover .dropdown-content {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
`;

const DropdownContent = styled(motion.div)`
  position: absolute;
  top: 100%;
  left: 0;
  background: rgba(26, 26, 26, 0.95);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(0, 255, 136, 0.1);
  border-radius: 8px;
  padding: 20px;
  min-width: 250px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(10px);
  transition: all 0.3s ease;
  z-index: 1001;

  @media (max-width: 768px) {
    position: static;
    background: transparent;
    border: none;
    padding: 10px 0 0 20px;
    min-width: auto;
    opacity: 1;
    visibility: visible;
    transform: none;
  }
`;

const DropdownItem = styled(Link)`
  display: block;
  color: var(--text-secondary);
  text-decoration: none;
  padding: 10px 0;
  font-size: 14px;
  transition: all 0.3s ease;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);

  &:hover {
    color: var(--primary-color);
    padding-left: 10px;
  }

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const CTAButton = styled(Link)`
  background: var(--gradient-primary);
  color: #000000;
  padding: 12px 24px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-hover);
  }

  @media (max-width: 768px) {
    padding: 15px 30px;
    font-size: 16px;
    text-align: center;
    margin-top: 20px;
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

  @media (max-width: 768px) {
    display: block;
  }
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
  };

  return (
    <HeaderContainer
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        background: isScrolled ? 'rgba(10, 10, 10, 0.98)' : 'rgba(10, 10, 10, 0.95)'
      }}
    >
      <NavContainer>
        <Logo to="/">
          <FaShieldAlt />
          CyberSecure
        </Logo>

        <NavMenu className={isMenuOpen ? 'active' : ''}>
          <NavLink to="/" onClick={closeMenu}>Home</NavLink>
          
          <Dropdown>
            <NavLink to="/solutions" onClick={closeMenu}>
              Solutions
              <FaChevronDown size={12} />
            </NavLink>
            <DropdownContent className="dropdown-content">
              <DropdownItem to="/threat-protection" onClick={closeMenu}>
                Threat Protection
              </DropdownItem>
              <DropdownItem to="/risk-management" onClick={closeMenu}>
                Risk Management
              </DropdownItem>
              <DropdownItem to="/compliance" onClick={closeMenu}>
                Compliance
              </DropdownItem>
              <DropdownItem to="/incident-response" onClick={closeMenu}>
                Incident Response
              </DropdownItem>
            </DropdownContent>
          </Dropdown>

          <NavLink to="/platform" onClick={closeMenu}>Platform</NavLink>
          <NavLink to="/resources" onClick={closeMenu}>Resources</NavLink>
          <NavLink to="/company" onClick={closeMenu}>Company</NavLink>
          
          <CTAButton to="/demo" onClick={closeMenu}>
            Get Demo
          </CTAButton>
        </NavMenu>

        <MobileMenuButton onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuButton>
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header;
