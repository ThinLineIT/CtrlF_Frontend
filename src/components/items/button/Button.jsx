import { useRef, useEffect } from 'react';
import styles from '../../../styles/items/button/button.module.css';

export default function Button({ text, methods, width }) {
  const button = useRef(null);
  const clickMethod = () => {
    methods();
  };

  useEffect(() => {
    button.current.style.width = width;
  }, []);
  return (
    <input
      ref={button}
      type="button"
      value={text}
      onClick={clickMethod}
      className={styles.button}
    />
  );
}
