import React from 'react';
import Layout from '../components/layout/layout';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styled from 'styled-components';
import { graphql, Link } from 'gatsby';

const Wrapper = styled.div`
  min-height: 100vh;
  margin: 20px 0;

  p {
    font-size: 14px;
  }

  a {
    text-decoration-thickness: 1px;
    text-underline-offset: 4px;
  }

  h1,
  h2 {
    margin-bottom: 20px;
  }
`;

const ImpressumLink = styled(Link)`
  margin: 10px 0;
  display: inline-block;
  text-decoration: none;
`;

// markup
const ImpressumPage = ({ data }) => {
  return (
    <Layout>
      <Wrapper className="container">
        <ImpressumLink to="/">{'<<'}</ImpressumLink>
        {documentToReactComponents(
          JSON.parse(data.contentfulImpressum.text.raw)
        )}
      </Wrapper>
    </Layout>
  );
};

export default ImpressumPage;

export const query = graphql`
  query {
    contentfulImpressum {
      text {
        raw
      }
    }
  }
`;
