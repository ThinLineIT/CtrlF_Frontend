import React, { useRef } from 'react';
import styles from '../../../styles/items/notes/note_detail.module.css';

export function RightClickSpan() {
  return (
    <div className={styles.rightClickSpan}>
      <span>이름 수정</span>
      <span>삭제 요청</span>
    </div>
  );
}

export default function NoteDetail({ note }) {
  const hiddenRef = useRef();
  const { title } = note;

  const onRightClick = (e) => {
    e.preventDefault();
    console.log(hiddenRef);
    hiddenRef.current.classList.toggle('note_detail_hidden__1TR6C');
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.index}>
        <div className={styles.index_wrap}>
          <div className={styles.index_title}>
            <span
              className={styles.index_title_span}
              onContextMenu={onRightClick}
            >
              {title}
              <div
                ref={hiddenRef}
                className={`${styles.hidden} ${styles.hiddenRef}`}
              >
                <RightClickSpan />
              </div>
            </span>
          </div>
          <div className={styles.index_index}>
            <div className={styles.index_topic}>
              <ul className={styles.index_topic_ul}>
                <li onContextMenu={onRightClick}>Topic</li>
                <li onContextMenu={onRightClick}>Topic</li>
                <li onContextMenu={onRightClick}>Topic</li>
                <li onContextMenu={onRightClick}>Topic</li>
                <li onContextMenu={onRightClick}>Topic</li>
                <li onContextMenu={onRightClick}>Topic</li>
                <li onContextMenu={onRightClick}>Topic</li>
              </ul>
            </div>
            <div className={styles.index_mini_title}>
              <ul className={styles.index_mini_title_ul}>
                <li onContextMenu={onRightClick}>디자인 패턴이란 무엇인가?</li>
                <li onContextMenu={onRightClick}>내가 보고 있는 PAGE</li>
                <li onContextMenu={onRightClick}>PAGE_PAGE</li>
                <li onContextMenu={onRightClick}>PAGE</li>
                <li onContextMenu={onRightClick}>PAGE</li>
                <li onContextMenu={onRightClick}>PAGE</li>
                <li onContextMenu={onRightClick}>PAGE</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.info_item}>
          <div className={styles.info_item_topic}>TOPIC</div>
          <select className={styles.info_item_page}>
            <option>디자인 패턴이란 무엇인가?</option>
            <option>내가 보고 있는 PAGE</option>
            <option>PAGE_PAGE</option>
            <option>PAGE</option>
            <option>PAGE</option>
            <option>PAGE</option>
            <option>PAGE</option>
          </select>
        </div>
        <div className={styles.icons}>
          <button className={styles.icons_bookmark}></button>
          <button className={styles.icons_share}></button>
        </div>
        <span as="h3" className={styles.span}>
          <p>
            assumenda architecto, facere eveniet amet maiores totam explicabo
            modi. Odio, illo? Lorem ipsumda, aspernatur non. Placeat excepturi
            voluptatibus quo tempora est sint quidem assumenda architecto,
            facere eveniet amet maiores totam explicabo modi. Odio, illo? Lorem
            ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Assumenda, aspernatur non. Placeat excepturi voluptatibus quo
            tempora est sint quidem assumenda architecto, facere eveniet amet
            maiores totam explicabo modi. Odio, illo? Lorem ipsumda, aspernatur
            non. Placeat excepturi voluptatibus quo tempora est sint quidem
            assumenda architecto, facere eveniet amet maiores totam explicabo
            modi. Odio, illo? Lorem ipsumda, aspernatur non. Placeat excepturi
            voluptatibus quo tempora est sint quidem assumenda architecto,
            facere eveniet amet maiores totam explicabo modi. Odio, illo? Lorem
            ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Assumenda, aspernatur non. Placeat excepturi voluptatibus quo
            tempora est sint quidem assumenda architecto, facere eveniet amet
            maiores totam explicabo modi. Odio, illo? Lorem ipsumda, aspernatur
            non. Placeat excepturi voluptatibus quo tempora est sint quidem
            assumenda architecto, facere eveniet amet maiores totam explicabo
            modi. Odio, illo? Lorem ipsumda, aspernatur non. Placeat excepturi
            voluptatibus quo tempora est sint quidem assumenda architecto,
            facere eveniet amet maiores totam explicabo modi. Odio, illo? Lorem
            ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit.
            assumenda architecto, facere eveniet amet maiores totam explicabo
            modi. Odio, illo? Lorem ipsumda, aspernatur non. Placeat excepturi
            voluptatibus quo tempora est sint quidem assumenda architecto,
            facere eveniet amet maiores totam explicabo modi. Odio, illo? Lorem
            ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Assumenda, aspernatur non. Placeat excepturi voluptatibus quo
            tempora est sint quidem assumenda architecto, facere eveniet amet
            maiores totam explicabo modi. Odio, illo? Lorem ipsumda, aspernatur
            non. Placeat excepturi voluptatibus quo tempora est sint quidem
            assumenda architecto, facere eveniet amet maiores totam explicabo
            modi. Odio, illo? Lorem ipsumda, aspernatur non. Placeat excepturi
            voluptatibus quo tempora est sint quidem assumenda architecto,
            facere eveniet amet maiores totam explicabo modi. Odio, illo? Lorem
            ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Assumenda, aspernatur non. Placeat excepturi voluptatibus quo
            tempora est sint quidem assumenda architecto, facere eveniet amet
            maiores totam explicabo modi. Odio, illo? Lorem ipsumda, aspernatur
            non. Placeat excepturi voluptatibus quo tempora est sint quidem
            assumenda architecto, facere eveniet amet maiores totam explicabo
            modi. Odio, illo? Lorem ipsumda, aspernatur non. Placeat excepturi
            voluptatibus quo tempora est sint quidem assumenda architecto,
            facere eveniet amet maiores totam explicabo modi. Odio, illo? Lorem
            ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Assumenda, aspernatur non. Placeat excepturi voluptatibus quo
            tempora est sint quidem assumenda architecto, facere eveniet amet
            maiores totam explicabo modi. Odio, illo? Lorem ipsumda, aspernatur
            non. Placeat excepturi voluptatibus quo tempora est sint quidem
            assumenda architecto, facere eveniet amet maiores totam explicabo
            modi. Odio, illo? Lorem ipsumda, aspernatur non. Placeat excepturi
            voluptatibus quo tempora est sint quidem assumenda architecto,
            facere eveniet amet maiores totam explicabo modi. Odio, illo? Lorem
            ipsum
          </p>
        </span>
      </div>
    </div>
  );
}
