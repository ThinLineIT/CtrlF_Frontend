import Axios from 'axios';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Loader } from 'semantic-ui-react';
import ItemList from '../src/component/item_list';
import SideBar from '../src/component/SideBar';
import styles from './index.module.css';

export default function Home() {
  const [list, setList] = useState();
  const [length, setLength] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const API_URL = 'https://yts.mx/api/v2/list_movies.json?sort_by=rating';

  async function getData() {
    const {
      data: {
        data: { movies },
      },
    } = await Axios.get(API_URL);
    setList(movies);
    setIsLoading(false);
    setLength(movies.length);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>HOME | Ctrl_F</title>
        <meta name="description" content="Ctrl_F 홈입니다."></meta>
      </Head>
      {isLoading && (
        <div className={styles.loading}>
          <Loader inline="centered" active>
            Loading
          </Loader>
        </div>
      )}
      {!isLoading && (
        <>
          <div className={styles.header}>
            {`현재 모아진 아이디어 ${length}`}
          </div>
          <div className={styles.body}>
            <ItemList list={list} />
            <div className={styles.side_bar}>
              <SideBar />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
