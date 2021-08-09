import React, { useEffect } from 'react';
import Head from 'next/head';
import Main from '../src/components/layout/main';
import { isJwtActive } from '../src/store/atom';
import { useRecoilState } from 'recoil';
import { useCookies } from 'react-cookie';

export default function Home() {
  const USER_KEY = 'isUserActive';
  const [jwt, setJwt] = useRecoilState(isJwtActive);
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
