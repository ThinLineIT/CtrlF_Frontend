import React from 'react';
import TopbarLogo from '../../../public/images/Ctrl_F.svg';
import LogoTitle from '../../../public/images/logotitle.svg';
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
          <img
            src="/images/Ctrl_F.svg"
            alt="Ctrl_F Logo"
            width="20"
            height="16"
          />
          <img
            src="/images/logotitle.svg"
            alt="Ctrl_F Logo"
            width="50"
            height="14"
          />
        </span>
      </a>
    </div>
  );
}
