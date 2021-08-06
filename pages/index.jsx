import React, { useEffect } from 'react';
import Head from 'next/head';
import Main from '../src/component/layout/main';
import { isJwtActive } from '../src/store/atom';
import { useRecoilState } from 'recoil';

export default function Home() {
  const USER_KEY = 'isUserActive';
  const [jwt, setJwt] = useRecoilState(isJwtActive);

  useEffect(() => {
    localStorage.getItem(USER_KEY) ? setJwt(true) : setJwt(false);
  }, []);

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
