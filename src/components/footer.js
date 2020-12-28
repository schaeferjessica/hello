
import React, {useContext} from "react"
import Link from "./base/link";
import styled, { keyframes } from 'styled-components';
import ThemeContext from '../styles/themecontext';

// data
const links = [
  {
    link: 'https://www.sammlung-goetz.de/',
    linkText: 'Sammlung Goetz',
  },
  {
    link: 'https://3landesmuseen-braunschweig.de/',
    linkText: '3Landesmuseen',
  },
  {
    link: 'https://www.drogenbeauftragte.de/',
    linkText: 'Drogenbeauftragte',
  },
  {
    link: 'https://match.charite.de/',
    linkText: 'Charité - Match and Conect',
  },
  {
    link: 'https://www.spark-bih.de/',
    linkText: 'BIH - Spark',
  },
  {
    link: 'https://www.dhm.de/',
    linkText: 'Deutsches Historisches Museum',
  },
]; 

// styles
const FooterEl = styled.footer`
  padding-top: 20px;
  padding-right: 0;
  padding-bottom: 20px;
  border-top: 1px solid ${props => props.color};
`;
const Nav = styled.nav`
  display: flex;
  align-items: center;
  position: relative;

  > p {
    white-space: nowrap;
    margin-right: 20px;
  }
`;
const TickerWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 30px;

  &:hover ul {
    animation-play-state: paused;
  }
`;

const ticker = keyframes`
  0% { transform: translate(0%, 0); }
  100% {transform: translate(-100%, 0); }
`;
const tickerShadow = keyframes`
  0% { transform: translate(100%, 0); }
  100% {transform: translate(0%, 0); }
`;
const animationDuration = 20;
const NavUl = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  white-space: nowrap;
  position: absolute;
  top: 0;
  transform: translate(0%, 0);
  animation: ${ticker} ${animationDuration}s linear infinite;
`;
const NavUlShadow = styled(NavUl)`
  transform: translate(100%, 0);
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
    background-color: ${props => props.color};
    display: block;
    margin-right: 20px;
  }

  a {
    white-space: nowrap;
  }
`;

const Footer = () => {
  const {color} = useContext(ThemeContext);

  return (
    <FooterEl className="container" color={color.foreground}>
      <Nav>
        <p>projects I developed:</p>
        <TickerWrapper>
          <NavUl>
            {links.map(link => <NavLi key={link.link} color={color.foreground}><Link link={link.link} linkText={link.linkText}/></NavLi>)}
          </NavUl>
          <NavUlShadow>
            {links.map(link => <NavLi key={link.link} color={color.foreground}><Link link={link.link} linkText={link.linkText}/></NavLi>)}
          </NavUlShadow>
        </TickerWrapper>
      </Nav>
    </FooterEl>
  );
}

export default Footer;