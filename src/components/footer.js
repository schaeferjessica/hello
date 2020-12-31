import React, { useContext } from 'react';
import Link from './base/link';
import styled, { keyframes } from 'styled-components';
import ThemeContext from '../styles/themecontext';
import { devices } from '../styles/breakpoints';
import { colorTransition } from '../styles/color';
import { footerLinks } from '../../static/data/data';

// styles
const FooterEl = styled.footer`
  padding-right: 0;
  padding-left: 0;
  margin-top: 100px;

  @media ${devices.mobile} {
    margin-top: 50px;
  }

  > p {
    white-space: nowrap;
    font-size: 16px;
    padding-left: 30px;
    padding-bottom: 20px;
    font-weight: 500;
    color: ${(props) => props.color};
    ${colorTransition}

    @media ${devices.mobile} {
      padding-left: 20px;
    }
  }
`;
const Nav = styled.nav`
  display: flex;
  align-items: center;
  position: relative;
  border-top: 1px solid ${(props) => props.color};
  transition: border 0.6s ease-in-out;
  padding-top: 10px;
  padding-bottom: 10px;
`;
const TickerWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 50px;

  &:hover ul {
    animation-play-state: paused;
  }
`;

const ticker = keyframes`
  0% { transform: translate(0%, -50%); }
  100% {transform: translate(-100%, -50%); }
`;
const tickerShadow = keyframes`
  0% { transform: translate(100%, -50%); }
  100% {transform: translate(0%, -50%); }
`;
const animationDuration = 20;
const NavUl = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  white-space: nowrap;
  position: absolute;
  top: 50%;
  transform: translate(0%, -50%);
  animation: ${ticker} ${animationDuration}s linear infinite;
`;
const NavUlShadow = styled(NavUl)`
  transform: translate(100%, -50%);
  animation: ${tickerShadow} ${animationDuration}s linear infinite;
`;
const NavLi = styled.li`
  display: flex;
  align-items: center;
  margin-left: 20px;

  &::before {
    content: '';
    width: 10px;
    height: 4px;
    background-color: ${(props) => props.color};
    display: block;
    margin-right: 20px;
    ${colorTransition}
  }

  a {
    white-space: nowrap;
    padding: 5px;

    @media ${devices.mobile} {
      padding: 0;
    }

    &:focus-visible {
      outline: 1px solid ${(props) => props.color};
    }
  }
`;

const Footer = () => {
  const { color } = useContext(ThemeContext);

  return (
    <FooterEl className="container" color={color.foreground}>
      <p>Projects:</p>
      <Nav color={color.foreground}>
        <TickerWrapper>
          <NavUl>
            {footerLinks.map((link) => (
              <NavLi key={link.link} color={color.foreground}>
                <Link link={link.link} linkText={link.linkText} />
              </NavLi>
            ))}
          </NavUl>
          <NavUlShadow>
            {footerLinks.map((link) => (
              <NavLi key={link.link} color={color.foreground}>
                <Link link={link.link} linkText={link.linkText} />
              </NavLi>
            ))}
          </NavUlShadow>
        </TickerWrapper>
      </Nav>
    </FooterEl>
  );
};

export default Footer;
