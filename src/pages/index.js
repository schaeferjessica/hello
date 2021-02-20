import React from 'react';
import Layout from '../components/layout/layout';
import Main from '../components/main';
import styled from 'styled-components';

const Wrapper = styled.div`
  min-height: 100vh;
`;

// markup
const IndexPage = () => {
  return (
    <Layout>
      <Wrapper>
        <Main />
      </Wrapper>
    </Layout>
  );
};

export default IndexPage;
