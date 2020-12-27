
import * as React from "react"
import Link from "./base/link";
import styled, { keyframes } from 'styled-components';
import { colors } from '../styles/color';

// data
const links = [
  {
    link: 'https://resoume.com/dashboard',
    linkText: 'resume',
  },
  {
    link: 'https://www.linkedin.com/in/jessicaschafer/',
    linkText: 'linkedin',
  },
  {
    link: 'https://github.com/schaeferjessica',
    linkText: 'github',
  },
]; 

// styles
const NavHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${colors.black};
  padding-top: 10px;
  padding-bottom: 10px;
`;
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const NavUl = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
`;
const NavLi = styled.li`
  margin-left: 20px;
  display: flex;
  align-items: center;

  &::before {
    content: '';
    width: 10px;
    height: 4px;
    background-color: ${colors.black};
    display: block;
    margin-right: 20px;
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
  margin-left: 20px;
  display: flex;
  align-items: center;
  transform: scaleX(1) scaleY(1) translateX(0px) translateY(0px) rotate(0deg);
  animation: ${rotate} 5s ease-in-out infinite;
`;

const Header = () => {
  return (
    <NavHeader className="container">
      <NavMode>
        <span className="sr-only">toggle dark mode</span>
        <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill={colors.black} d="M26.5073 43.7835L25.3663 43.7688C22.6281 43.7336 19.9289 43.1151 17.4487 41.9544L15.2807 40.9399C6.84139 36.9907 3.20145 26.9479 7.15064 18.5086C9.64491 13.1784 14.7364 9.53315 20.5859 8.88945L25.2013 8.38157C33.0248 7.52065 40.4674 11.9641 43.4214 19.2595C45.2564 23.7912 45.0955 28.9381 43.0233 33.3663C40.0371 39.7476 33.5522 43.874 26.5073 43.7835Z" />
        </svg>
      </NavMode>
      <Nav>
        <p>contact me here:</p>
        <NavUl>
          {links.map(link => <NavLi key={link.link}><Link link={link.link} linkText={link.linkText}/></NavLi>)}
        </NavUl>
      </Nav>
    </NavHeader>
  );
}

export default Header;