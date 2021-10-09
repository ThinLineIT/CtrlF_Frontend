import styles from '../../src/styles/utils/useLoader.module.css';

export default function UseLoader() {
  return (
    <div className={styles.notes_modal}>
      <div className={styles.modal_overlay}>
        <img
          src="/images/loader.gif"
          alt="Ctrl_F Loader"
          width="105"
          height="44"
        />
      </div>
    </div>
  );
}
