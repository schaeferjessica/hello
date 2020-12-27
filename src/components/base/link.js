import * as React from "react";
import styled from 'styled-components';
import { devices } from '../../styles/breakpoints';

const StyledLink = styled.a`
  color: #222;
  font-weight: 400;
  font-size: 20px;
  text-decoration: none;

  @media ${devices.tablet} { 
    font-size: 12px;
  }
`;

const Link = ({link, linkText}) => <StyledLink href={link} target="_blank" rel="noopener noreferrer">{linkText}</StyledLink>;

export default Link;