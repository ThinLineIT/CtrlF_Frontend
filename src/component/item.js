import { Button } from 'semantic-ui-react';
import styles from './item.module.css';

export default function Item() {
  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.img_item}>
          <img src="/images/LOGO_SOLO 1.svg" alt="logo" />
        </div>
        <div className={styles.info_item}>
          <strong className={styles.tit_item}>title</strong>
          <Button
            color="orange"
            style={{
              width: '30rem',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            저장하기
          </Button>
        </div>
      </div>
      <div as="h3">description</div>
    </>
  );
}
