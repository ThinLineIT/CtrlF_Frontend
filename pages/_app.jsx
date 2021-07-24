import '../src/styles/globals.css';
import 'semantic-ui-css/semantic.min.css';
import { RecoilRoot } from 'recoil';
import React from 'react';

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <React.Fragment>
        <Component {...pageProps} />
      </React.Fragment>
    </RecoilRoot>
  );
}
export default MyApp;
