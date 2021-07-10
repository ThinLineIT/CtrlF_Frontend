import React from 'react';
import Image from 'next/image';
import styles from '/styles/Home.module.css';

export default function Footer() {
  return (
    <div
      style={{
        marginTop: 40,
        padding: '40px 0',
        borderTop: '1px solid #999',
        textAlign: 'center',
      }}
    >
      <a
        href="https://github.com/ThinLineIT"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{' '}
        <span className={styles.logo}>
          <Image src="/Ctrl_F.svg" alt="Ctrl_F Logo" width={17} height={16} />
          <Image src="/한끗차IT.svg" alt="Ctrl_F Logo" width={72} height={16} />
        </span>
      </a>
    </div>
  );
}
