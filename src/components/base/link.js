import React, { useContext } from 'react';
import styled from 'styled-components';
import ThemeContext from '../../styles/themecontext';
import { colorTransition } from '../../styles/color';
import { devices } from '../../styles/breakpoints';

export const StyledLink = styled.a`
  color: ${(props) => props.color.foreground};
  text-decoration: none;
  padding: 5px;
  ${colorTransition}

  @media ${devices.mobile} {
    padding: 0;
  }

  &:focus-visible {
    outline: 1px solid ${(props) => props.color.foreground};
  }
`;

const Link = ({ link, linkText, linkType = 'extern' }) => {
  const { color } = useContext(ThemeContext);
  return (
    <StyledLink
      color={color}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      data-linktype={linkType}
    >
      {linkText}
    </StyledLink>
  );
};

export default Link;
