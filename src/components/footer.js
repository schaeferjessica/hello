import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const FooterLink = styled(Link)`
  margin: 20px 0;
`;

const FooterContainer = styled.footer`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Footer = () => {
  return (
    <FooterContainer className="container">
      <FooterLink to="/impressum">Impressum</FooterLink>
    </FooterContainer>
  );
};

export default Footer;
