import styles from '../../../styles/items/button/button.module.css';

export default function ButtonMiddle({ text, methods }) {
  const clickMethod = () => {
    methods();
  };
  return (
    <input
      type="button"
      value={text}
      onClick={clickMethod}
      className={styles.middle}
    />
  );
}
