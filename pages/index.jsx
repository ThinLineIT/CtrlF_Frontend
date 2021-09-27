import React, { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useSetRecoilState } from 'recoil';
import { isJwtActive } from '../src/store/atom';
import Head from 'next/head';
import Main from '../src/components/layout/main';

export default function Home() {
  const setJwt = useSetRecoilState(isJwtActive);
  const [cookies, setCookie, removeCookie] = useCookies(['token']);

  useEffect(() => {
    cookies.token !== undefined ? setJwt(true) : setJwt(false);
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
