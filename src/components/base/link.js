import React, { useContext } from "react"
import styled from 'styled-components';
import { devices } from '../../styles/breakpoints';
import ThemeContext from '../../styles/themecontext';

const StyledLink = styled.a`
  color: ${props => props.color.foreground};
  font-weight: 400;
  font-size: 20px;
  text-decoration: none;

  @media ${devices.tablet} { 
    font-size: 12px;
  }
`;

const Link = ({link, linkText}) => {
  const {color} = useContext(ThemeContext);
  return (<StyledLink color={color} href={link} target="_blank" rel="noopener noreferrer">{linkText}</StyledLink>)
};

export default Link;