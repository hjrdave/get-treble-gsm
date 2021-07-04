

// gatsby-browser.js
import React from 'react';
import "prismjs/themes/prism-tomorrow.css";
import Helmet from 'react-helmet';
import Layout from './src/layout';
import Treble from 'treble-gsm';
import Store from './src/Store';

export const wrapRootElement = ({ element }) => {

  return (
    <>
      <Helmet>
        <script src="https://kit.fontawesome.com/bc8edc6f62.js" crossOrigin="anonymous"></script>
      </Helmet>
      <Treble store={Store}>
        <Layout>
          {element}
        </Layout>
      </Treble>
    </>
  );
}

