import { Button } from 'semantic-ui-react';
import styles from '../../../styles/items/notes/note_detail.module.css';

export default function NoteDetail({ note }) {
  const { title } = note;

  return (
    <div className={styles.wrap}>
      <div className={styles.index}>
        <div className={styles.index_title}>{title}</div>
        <div className={styles.index_index}>
          <div className={styles.index_topic}>
            <ul>
              <li>Topic</li>
              <li>Topic</li>
              <li>Topic</li>
              <li>Topic</li>
              <li>Topic</li>
              <li>Topic</li>
              <li>Topic</li>
            </ul>
          </div>
          <div className={styles.index_mini_title}>
            <ul>
              <li>디자인 패턴이란 무엇인가?</li>
              <li>내가 보고 있는 PAGE</li>
              <li>PAGE_PAGE</li>
              <li>PAGE</li>
              <li>PAGE</li>
              <li>PAGE</li>
              <li>PAGE</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.info_item}>
          <strong className={styles.tit_item}>{title}</strong>
          <p>description</p>
        </div>
        <span as="h3" className={styles.span}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
            aspernatur non. Placeat excepturi voluptatibus quo tempora est sint
            quidem assumenda architecto, facere eveniet amet maiores totam
            explicabo modi. Odio, illo? Lorem ipsumda, aspernatur non. Placeat
            excepturi voluptatibus quo tempora est sint quidem assumenda
            architecto, facere eveniet amet maiores totam explicabo modi. Odio,
            illo? Lorem ipsumda, aspernatur non. Placeat excepturi voluptatibus
            quo tempora est sint quidem assumenda architecto, facere eveniet
            amet maiores totam explicabo modi. Odio, illo? Lorem ipsum Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
            aspernatur non. Placeat excepturi voluptatibus quo tempora est sint
            quidem assumenda architecto, facere eveniet amet maiores totam
            explicabo modi. Odio, illo? Lorem ipsumda, aspernatur non. Placeat
            excepturi voluptatibus quo tempora est sint quidem assumenda
            architecto, facere eveniet amet maiores totam explicabo modi. Odio,
            illo? Lorem ipsumda, aspernatur non. Placeat excepturi voluptatibus
            quo tempora est sint quidem assumenda architecto, facere eveniet
            amet maiores totam explicabo modi. Odio, illo? Lorem ipsum Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
            aspernatur non. Placeat excepturi voluptatibus quo tempora est sint
            quidem assumenda architecto, facere eveniet amet maiores totam
            explicabo modi. Odio, illo? Lorem ipsumda, aspernatur non. Placeat
            excepturi voluptatibus quo tempora est sint quidem assumenda
            architecto, facere eveniet amet maiores totam explicabo modi. Odio,
            illo? Lorem ipsumda, aspernatur non. Placeat excepturi voluptatibus
            quo tempora est sint quidem assumenda architecto, facere eveniet
            amet maiores totam explicabo modi. Odio, illo? Lorem ipsum Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
            aspernatur non. Placeat excepturi voluptatibus quo tempora est sint
            quidem assumenda architecto, facere eveniet amet maiores totam
            explicabo modi. Odio, illo? Lorem ipsumda, aspernatur non. Placeat
            excepturi voluptatibus quo tempora est sint quidem assumenda
            architecto, facere eveniet amet maiores totam explicabo modi. Odio,
            illo? Lorem ipsumda, aspernatur non. Placeat excepturi voluptatibus
            quo tempora est sint quidem assumenda architecto, facere eveniet
            amet maiores totam explicabo modi. Odio, illo? Lorem ipsum Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
            aspernatur non. Placeat excepturi voluptatibus quo tempora est sint
            quidem assumenda architecto, facere eveniet amet maiores totam
            explicabo modi. Odio, illo? Lorem ipsumda, aspernatur non. Placeat
            excepturi voluptatibus quo tempora est sint quidem assumenda
            architecto, facere eveniet amet maiores totam explicabo modi. Odio,
            illo? Lorem ipsumda, aspernatur non. Placeat excepturi voluptatibus
            quo tempora est sint quidem assumenda architecto, facere eveniet
            amet maiores totam explicabo modi. Odio, illo? Lorem ipsum
          </p>
        </span>
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
    </div>
  );
}
