import Axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';
import ItemList from '../component/layout/item/itemlist';
import SideBar from '../component/layout/SideBar';
import styles from '../styles/Home.module.css';

export default function Rejected({ list, length }) {
  const router = useRouter();

  const handleApprove = () => {
    router.push('/approve');
  };

  return (
    <div>
      <Head>
        <title>Rejected | Ctrl_F</title>
        <meta name="description" content="Ctrl_F Rejected."></meta>
      </Head>
      <div className={styles.header}>
        <p onClick={handleApprove} style={{ cursor: 'pointer' }}>
          {`승인되지 않은 노트 ${length}`}
        </p>
      </div>
      <div className={styles.body}>
        <div className={styles.itemList}>
          <ItemList list={list} />
        </div>
        <div className={styles.side_bar}>
          <SideBar />
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const apiUrl = process.env.apiUrl;
  const res = await Axios.get(apiUrl);
  const data = res.data.notes.filter((item) => item.status === 'NOT_APPROVED');

  return {
    props: {
      list: data,
      length: data.length,
      name: process.env.name,
    },
  };
}
