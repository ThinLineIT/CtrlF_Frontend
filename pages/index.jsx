import React from 'react';
import Head from 'next/head';
import Main from '../src/component/layout/main';
import Topbar from '../src/component/layout/topbar';
import Footer from '../src/component/layout/footer';
import styles from '../src/styles/Home.module.css';

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>HOME | Ctrl_F</title>
        <meta name="description" content="Ctrl_F 홈입니다."></meta>
      </Head>
      <section className={styles.layout}>
        <Topbar />
        <Main />
        <Footer />
      </section>
    </React.Fragment>
  );
}
