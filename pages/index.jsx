import Axios from 'axios';
import Head from 'next/head';
import React, { useState } from 'react';
import ItemList from '../component/layout/item/itemlist';
import SideBar from '../component/layout/sideBar';
import styles from '../styles/Home.module.css';

export default function Home({ list, length }) {
  const [lists, setLists] = useState(list);

  const handleApprove = () => {
    const newList = [...list];
    const approveList = newList.filter((item) => item.status === 'APPROVED');
    setLists(approveList);
  };

  const handleButtonApprove = () => {
    const newList = [...list];
    const approveList = newList.filter((item) => item.status === 'APPROVED');
    setLists(approveList);
  };

  const handleButtonReject = () => {
    const newList = [...list];
    const notApproveList = newList.filter(
      (item) => item.status === 'NOT_APPROVED'
    );
    setLists(notApproveList);
  };

  return (
    <div>
      <Head>
        <title>HOME | Ctrl_F</title>
        <meta name="description" content="Ctrl_F 홈입니다."></meta>
      </Head>
      <div className={styles.header}>
        <p onClick={handleApprove} style={{ cursor: 'pointer' }}>
          {`현재 모아진 아이디어 ${length}`}
        </p>
      </div>
      <div className={styles.body}>
        <div className={styles.itemList}>
          <ItemList lists={lists} />
        </div>
        <div className={styles.side_bar}>
          <SideBar
            lists={lists}
            buttonApprove={handleButtonApprove}
            buttonReject={handleButtonReject}
          />
        </div>
      </div>
    </div>
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
