import React from 'react';
import '../src/styles/globals.css';
import { RecoilRoot } from 'recoil';
import { CookiesProvider } from 'react-cookie';
import styles from '../src/styles/Home.module.css';
import Topbar from '../src/components/layout/topbar';
import Footer from '../src/components/layout/footer';

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <RecoilRoot>
        <CookiesProvider>
          <div className={styles.layout}>
            <Topbar />
            <Component {...pageProps} />
            <Footer />
          </div>
        </CookiesProvider>
      </RecoilRoot>
    </React.Fragment>
  );
}
export default MyApp;
