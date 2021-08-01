import { useRouter } from 'next/router';
import { Button } from 'semantic-ui-react';
import styles from '../../../styles/items/notes/note_detail.module.css';

export default function NoteDetail({ item }) {
  const { id, title, is_approved } = item;
  const router = useRouter();
  const handleRouter = () => {
    router.push('/signup');
  };

  return (
    <div className={styles.wrap}>
      <img
        className={styles.img_item}
        src="/images/algorithm.jpg"
        alt="Algorithm"
      />
      <div className={styles.info_item}>
        <strong className={styles.tit_item}>
          id: {id} {title}
        </strong>
      </div>
      <span as="h3" className={styles.span}>
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
      </span>
      <Button
        onClick={handleRouter}
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
  );
}
