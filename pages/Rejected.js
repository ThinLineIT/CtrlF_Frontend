import Axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';
import ItemList from '../src/component/item_list';
import SideBar from '../src/component/SideBar';
import styles from './index.module.css';

export default function Home({ list, length }) {
  const router = useRouter();
  const handleApprove = () => {
    router.push('/Approved');
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>HOME | Ctrl_F</title>
        <meta name="description" content="Ctrl_F 홈입니다."></meta>
      </Head>
      <>
        <div
          className={styles.header}
          onClick={handleApprove}
          style={{ cursor: 'pointer' }}
        >{`승인되지 않은 노트 ${length - 12}`}</div>
        <div className={styles.body}>
          <ItemList list={list.slice(12)} />
          <div className={styles.side_bar}>
            <SideBar />
          </div>
        </div>
      </>
    </div>
  );
}

export async function getStaticProps() {
  const apiUrl = process.env.apiUrl;
  const res = await Axios.get(apiUrl);
  const data = res.data.data.movies;

  return {
    props: {
      list: data,
      length: data.length,
      name: process.env.name,
    },
  };
}
