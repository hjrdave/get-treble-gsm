

// gatsby-browser.js
import React from 'react';
import "prismjs/themes/prism-tomorrow.css";
import Layout from './src/components/layout';
import Treble from 'treble-gsm';
import Store from './src/Store';

export const wrapRootElement = ({ element }) => {
  return (
    <>
      <Treble store={Store}>
        <Layout>
          {element}
        </Layout>
      </Treble>
    </>
  );
}

