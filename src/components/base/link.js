import React, { useContext } from 'react';
import styled from 'styled-components';
import ThemeContext from '../../styles/themecontext';
import { colorTransition } from '../../styles/color';

const StyledLink = styled.a`
  color: ${(props) => props.color.foreground};
  font-weight: 400;
  text-decoration: none;
  ${colorTransition}
`;

const Link = ({ link, linkText }) => {
  const { color } = useContext(ThemeContext);
  return (
    <StyledLink
      color={color}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {linkText}
    </StyledLink>
  );
};

export default Link;
