import React from 'react';
import { RecoilRoot } from 'recoil';
import '../src/styles/globals.css';
import 'semantic-ui-css/semantic.min.css';

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </React.Fragment>
  );
}
export default MyApp;
