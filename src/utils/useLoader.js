import Image from 'next/image';
import styles from '../../src/styles/utils/useLoader.module.css';
import loader from '../../public//Loader.gif';

export default function UseLoader() {
  return (
    <div className={styles.notes_modal}>
      <div className={styles.modal_overlay}>
        <Image src={loader} alt="Ctrl_F Loader" width={20} height={16} />
      </div>
    </div>
  );
}
