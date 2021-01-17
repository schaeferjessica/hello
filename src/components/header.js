import React, { useContext } from 'react';
import Link from './base/link';
import styled from 'styled-components';
import ThemeContext from '../styles/themecontext';
import { devices } from '../styles/breakpoints';
import { colorTransition } from '../styles/color';
import { navLinks } from '../../static/data/data';

// styles
const NavHeader = styled.header`
  padding-right: 0;
  padding-left: 0;
`;
const Nav = styled.nav`
  p {
    font-size: 16px;
    font-weight: 500;
    color: ${(props) => props.color};
    padding: 20px 30px;
    ${colorTransition}

    @media ${devices.mobile} {
      padding-left: 20px;
      padding-right: 20px;
    }
  }
`;
const NavUl = styled.ul`
  display: block;
  list-style: none;
  margin: 0;
  padding: 0;
`;
const NavLi = styled.li`
  padding-top: 15px;
  padding-bottom: 15px;
  border-top: 1px solid ${(props) => props.color};
  transition: border 0.6s ease-in-out;
  padding-left: 30px;
  padding-right: 30px;

  @media ${devices.mobile} {
    padding-left: 20px;
    padding-right: 20px;
  }
  
  &:last-child {
    border-bottom: 1px solid ${(props) => props.color};
  }
`;

const Header = () => {
  const { color } = useContext(ThemeContext);

  return (
    <NavHeader className="container" color={color.foreground}>
      <Nav color={color.foreground}>
        <p>Contact me here:</p>

        <NavUl>
          {navLinks.map((link) => (
            <NavLi key={link.link} color={color.foreground}>
              <Link link={link.link} linkText={link.linkText} />
            </NavLi>
          ))}
        </NavUl>
      </Nav>
    </NavHeader>
  );
};

export default Header;
