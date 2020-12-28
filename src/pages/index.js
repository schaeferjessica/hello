import React from 'react';
import Layout from '../components/layout/layout';
import Header from '../components/header';
import Main from '../components/main';
import Footer from '../components/footer';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto 1fr auto;
  gap: 0px 0px;
  width: 100%;
  min-height: 100vh;
  grid-template-areas:
    'header'
    'main'
    'footer';

  header {
    width: 100%;
    grid-area: header;
  }
  main {
    width: 100%;
    grid-area: main;
  }
  footer {
    width: 100%;
    grid-area: footer;
  }
`;

// markup
const IndexPage = () => {
  return (
    <Layout>
      <Wrapper>
        <Header />
        <Main />
        <Footer />
      </Wrapper>
    </Layout>
  );
};

export default IndexPage;
