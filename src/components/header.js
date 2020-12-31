import React, { useContext } from 'react';
import Link from './base/link';
import styled, { keyframes } from 'styled-components';
import ThemeContext from '../styles/themecontext';
import { devices } from '../styles/breakpoints';
import { colorTransition } from '../styles/color';
import { navLinks } from '../../static/data/data';
import { StyledLink } from './base/link';

// styles
const NavHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.color};
  transition: border 0.6s ease-in-out;
  padding-top: 10px;
  padding-bottom: 10px;
`;
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    color: ${(props) => props.color};
    ${colorTransition}
  }

  @media ${devices.mobile} {
    p {
      display: none;
    }
  }
`;
const NavUl = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
`;
const NavLi = styled.li`
  margin-left: 40px;
  display: flex;
  align-items: center;

  @media ${devices.mobile} {
    margin-left: 20px;

    &:first-child {
      margin-left: 0;
    }
  }

  &::before {
    content: '';
    width: 10px;
    height: 4px;
    background-color: ${(props) => props.color};
    display: block;
    margin-right: 20px;
    ${colorTransition}

    @media ${devices.mobile} {
      margin-right: 15px;
    }
  }

  @media ${devices.mobile} {
    &:first-child::before {
      display: none;
    }
  }
`;

const rotate = keyframes`
  0% {
    transform: scaleX(1) scaleY(1) translateX(0px) translateY(0px) rotate(0deg);
  }

  50% {
    transform: scaleX(0.9) scaleY(0.9) translateX(0px) translateY(0px) rotate(-30deg);
  }

  100% {
    transform: scaleX(1) scaleY(1) translateX(0px) translateY(0px) rotate(0deg);
  }
`;
const NavMode = styled.button`
  display: flex;
  align-items: center;
  transform: scaleX(1) scaleY(1) translateX(0px) translateY(0px) rotate(0deg);
  animation: ${rotate} 5s ease-in-out infinite;

  &:focus-visible {
    outline: 1px solid ${(props) => props.color};
  }

  @media ${devices.mobile} {
    transform: scaleX(0.7) scaleY(0.7) translateX(0px) translateY(0px)
      rotate(0deg);
    animation: inherit;
  }

  path {
    ${colorTransition}
  }
`;

const spotify = keyframes`
  0% {
    height: 100%;
  }

  50% {
    height: 10%;
  }

  100% {
    height: 100%;
  }
`;
const NavSpotify = styled.a`
  display: flex;
  align-items: flex-end;
  height: 30px;
  margin-left: 40px;
  padding: 5px;

  &:focus-visible {
    outline: 1px solid ${(props) => props.color};
  }

  @media ${devices.mobile} {
    padding: 0;
    height: 20px;
    display: none;
  }

  .line {
    width: 2px;
    height: 100%;
    display: block;
    background-color: ${(props) => props.color};
    animation: ${spotify} 800ms ease-in-out infinite;
    ${colorTransition}

    &:not(:last-child) {
      margin-right: 4px;
    }

    &-1 {
      animation-delay: 70ms;
    }

    &-2 {
      animation-delay: 170ms;
    }

    &-3 {
      animation-delay: 120ms;
    }

    &-4 {
      animation-delay: 250ms;
    }
  }
`;

const Header = () => {
  const { color, toggleTheme } = useContext(ThemeContext);

  const jumpTo = (e) => {
    e.preventDefault();

    window.scrollTo({
      top: document.querySelector('#table-container').offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <NavHeader className="container" color={color.foreground}>
      <NavMode onClick={toggleTheme} color={color.foreground}>
        <span className="sr-only">toggle dark mode</span>
        <svg
          width="51"
          height="51"
          viewBox="0 0 51 51"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill={color.foreground}
            d="M26.5073 43.7835L25.3663 43.7688C22.6281 43.7336 19.9289 43.1151 17.4487 41.9544L15.2807 40.9399C6.84139 36.9907 3.20145 26.9479 7.15064 18.5086C9.64491 13.1784 14.7364 9.53315 20.5859 8.88945L25.2013 8.38157C33.0248 7.52065 40.4674 11.9641 43.4214 19.2595C45.2564 23.7912 45.0955 28.9381 43.0233 33.3663C40.0371 39.7476 33.5522 43.874 26.5073 43.7835Z"
          />
        </svg>
      </NavMode>
      <Nav color={color.foreground}>
        <p>contact me here:</p>

        <NavUl>
          <NavLi color={color.foreground}>
            <StyledLink
              href="#table-container"
              color={color}
              onClick={(e) => jumpTo(e)}
              data-linktype="intern"
            >
              resume
            </StyledLink>
          </NavLi>
          {navLinks.map((link) => (
            <NavLi key={link.link} color={color.foreground}>
              <Link link={link.link} linkText={link.linkText} />
            </NavLi>
          ))}
        </NavUl>

        <NavSpotify
          color={color.foreground}
          href="https://open.spotify.com/playlist/2k2VFAQUBw77Rv7niYMYIw?si=J7QrnQugTie05hf9S05JjQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="line line-1" aria-hidden="true"></span>
          <span className="line line-2" aria-hidden="true"></span>
          <span className="line line-3" aria-hidden="true"></span>
          <span className="line line-4" aria-hidden="true"></span>
          <span className="sr-only">open soptify playlist</span>
        </NavSpotify>
      </Nav>
    </NavHeader>
  );
};

export default Header;
