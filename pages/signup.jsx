import React from 'react';
import { useRouter } from 'next/router';

export default function Signup() {
  const router = useRouter();

  const handleRouter = () => {
    router.push('/');
  };

  return (
    <div>
      <h1>Hello, Im Login</h1>
      <button
        onClick={handleRouter}
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
