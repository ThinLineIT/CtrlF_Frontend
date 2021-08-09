import React from 'react';
import Image from 'next/image';
import styles from '../../styles/layout/footer.module.css';

export default function Footer() {
  return (
    <div className={styles.container}>
      <a
        href="https://github.com/ThinLineIT"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{' '}
        <span>
          <Image src="/Ctrl_F.svg" alt="Ctrl_F Logo" width={20} height={16} />
          <Image
            src="/logotitle.svg"
            alt="Ctrl_F Logo"
            width={50}
            height={14}
          />
        </span>
      </a>
    </div>
  );
}
