
import * as React from "react"
import Link from "./base/link";
import styled from 'styled-components';
import { colors } from '../styles/color';

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
  padding-bottom: 20px;
  border-top: 1px solid ${colors.black};
`;
const Nav = styled.nav`
  display: flex;
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

const Footer = () => {
  return (
    <FooterEl className="container">
      <Nav>
        <p>projects I developed:</p>
        <NavUl>
          {links.map(link => <NavLi key={link.link}><Link link={link.link} linkText={link.linkText}/></NavLi>)}
        </NavUl>
      </Nav>
    </FooterEl>
  );
}

export default Footer;