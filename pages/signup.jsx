import React from 'react';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { isJwtActive } from '../src/store/atom';

export default function Signup() {
  const router = useRouter();
  const [jwt, setJwt] = useRecoilState(isJwtActive);
  const USER_KEY = 'isUserActive';

  const goMainPageAndUserActive = () => {
    router.push('/');
    setJwt(true);
    localStorage.setItem(USER_KEY, true);
  };

  return (
    <div>
      <h1>Hello, Im Login</h1>
      <button
        onClick={goMainPageAndUserActive}
        style={{
          width: '70px',
          height: '70px',
          borderRadius: '10px',
          backgroundColor: '#4db7e6',
          color: 'white',
          margin: '5rem',
        }}
      >
        MainPage
      </button>
    </div>
  );
}
