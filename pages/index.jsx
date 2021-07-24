import React from 'react';
import Axios from 'axios';
import Head from 'next/head';
import Topbar from '../src/component/layout/topbar';
import Main from '../src/component/layout/main';
import Footer from '../src/component/layout/Footer';
import styles from '../src/styles/Home.module.css';
import { useState } from 'react';

export default function Home({ list, length }) {
  const [lists, setLists] = useState(list);

  const handleMain = (list) => {
    setLists((lists) => {
      const newList = [...list];
      const approveList = newList.filter((item) => item);
      return approveList;
    });
  };

  return (
    <React.Fragment>
      <Head>
        <title>HOME | Ctrl_F</title>
        <meta name="description" content="Ctrl_F 홈입니다."></meta>
      </Head>
      <layout className={styles.layout}>
        <Topbar list={list} goMain={handleMain} />
        <Main lists={lists} length={length} />
        <Footer />
      </layout>
    </React.Fragment>
  );
}

export async function getStaticProps() {
  const apiUrl = process.env.apiUrl;
  const res = await Axios.get(apiUrl);
  const data = res.data.notes;

  return {
    props: {
      list: data,
      length: data.length,
      name: process.env.name,
    },
  };
}
