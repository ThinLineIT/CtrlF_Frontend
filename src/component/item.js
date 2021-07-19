import { Button } from 'semantic-ui-react';
import styles from './item.module.css';

export default function Item() {
  return (
    <div className={styles.wrap}>
      <div className={styles.img_item}>
        <img src="/images/ag.jpg" alt="Algorithm" style={{ width: '21%' }} />
      </div>
      <div className={styles.info_item}>
        <strong className={styles.tit_item}>title</strong>
        <Button
          color="linkedin"
          style={{
            width: '30rem',
            display: 'flex',
            justifyContent: 'center',
            margin: '30px auto',
          }}
        >
          저장하기
        </Button>
      </div>
      <div
        as="h3"
        style={{ fontSize: '1.1rem', width: '70%', margin: '0 auto' }}
      >
        <p style={{ fontSize: '2rem', fontWeight: 'bolder' }}>description</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
          aspernatur non. Placeat excepturi voluptatibus quo tempora est sint
          quidem assumenda architecto, facere eveniet amet maiores totam
          explicabo modi. Odio, illo? Lorem ipsumda, aspernatur non. Placeat
          excepturi voluptatibus quo tempora est sint quidem assumenda
          architecto, facere eveniet amet maiores totam explicabo modi. Odio,
          illo? Lorem ipsumda, aspernatur non. Placeat excepturi voluptatibus
          quo tempora est sint quidem assumenda architecto, facere eveniet amet
          maiores totam explicabo modi. Odio, illo? Lorem ipsum
        </p>
      </div>
    </div>
  );
}
