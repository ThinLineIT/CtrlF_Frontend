import React from 'react';
import '../src/styles/globals.css';
import { RecoilRoot } from 'recoil';
import 'semantic-ui-css/semantic.min.css';
import Topbar from '../src/component/layout/topbar';
import Footer from '../src/component/layout/footer';
import styles from '../src/styles/Home.module.css';

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <RecoilRoot>
        <section className={styles.layout}>
          <Topbar />
          <Component {...pageProps} />
          <Footer />
        </section>
      </RecoilRoot>
    </React.Fragment>
  );
}
export default MyApp;
