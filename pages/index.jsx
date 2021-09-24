import React from 'react';
import Head from 'next/head';
import Main from '../src/components/layout/main';

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>HOME | Ctrl_F</title>
        <meta name="description" content="Ctrl_F 홈입니다."></meta>
      </Head>
      <Main />
    </React.Fragment>
  );
}
