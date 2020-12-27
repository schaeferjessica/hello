import * as React from "react";
import Layout from '../components/layout/layout';
import Header from '../components/header';
import Main from '../components/main';
import Footer from '../components/footer';

// markup
const IndexPage = () => {
  return (
    <Layout>
      <Header/>
      <Main/>
      <Footer/>
    </Layout>
  )
}

export default IndexPage
