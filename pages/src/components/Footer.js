import React from 'react';
import Image from 'next/image';
import styles from '../../../styles/Home.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a
        href="https://github.com/ThinLineIT"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{' '}
        <span className={styles.logo}>
          <Image
            src="/images/Ctrl_F.svg"
            alt="Ctrl_F Logo"
            width={17}
            height={16}
          />
          <Image
            src="/images/한끗차IT.svg"
            alt="Ctrl_F Logo"
            width={72}
            height={16}
          />
        </span>
      </a>
    </footer>
  );
}
