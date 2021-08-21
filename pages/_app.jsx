import React from 'react';
import '../src/styles/globals.css';
import { RecoilRoot } from 'recoil';
import { CookiesProvider } from 'react-cookie';
import 'semantic-ui-css/semantic.min.css';
import Topbar from '../src/components/layout/topbar';
import Footer from '../src/components/layout/footer';
import styles from '../src/styles/Home.module.css';

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <RecoilRoot>
        <CookiesProvider>
          <section className={styles.layout}>
            <Topbar />
            <Component {...pageProps} />
            <Footer />
          </section>
        </CookiesProvider>
      </RecoilRoot>
    </React.Fragment>
  );
}
export default MyApp;
