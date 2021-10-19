import styles from '../../styles/editors/buttons.module.css';

export default function Butotns() {
  return (
    <ul className={styles.buttonsContainer}>
      <li>
        <button>H</button>
      </li>
      <li>
        <button style={{ fontWeight: 'bold' }}>B</button>
      </li>
      <li>
        <button>I</button>
      </li>
      <li>
        <button>Q</button>
      </li>
      <li>
        <button>&#60; &#62;</button>
      </li>
    </ul>
  );
}
