import Axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';
import ItemList from '../src/component/item_list';
import SideBar from '../src/component/SideBar';
import styles from './index.module.css';

export default function Approved({ list, length }) {
  const router = useRouter();

  const handleApprove = () => {
    router.push('/Rejected');
  };

  return (
    <div>
      <Head>
        <title>Approved | Ctrl_F</title>
        <meta name="description" content="Ctrl_F Approved."></meta>
      </Head>
      <div className={styles.header}>
        <p onClick={handleApprove} style={{ cursor: 'pointer' }}>
          {`승인된 아이디어 ${length}`}
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
  const data = res.data.notes.filter((item) => item.status === 'APPROVED');

  return {
    props: {
      list: data,
      length: data.length,
      name: process.env.name,
    },
  };
}
