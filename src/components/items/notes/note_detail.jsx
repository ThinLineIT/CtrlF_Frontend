import React, { useRef } from 'react';
import ModalInput from '../modal/modal_input';
import styles from '../../../styles/items/notes/note_detail.module.css';

export function RightClickSpan({ title }) {
  const modifyRef = useRef();
  const deleteRef = useRef();
  const onModify = (e) => {
    e.preventDefault();
    modifyRef.current.classList.toggle('note_detail_hidden__1TR6C');
  };
  const onDelete = (e) => {
    e.preventDefault();
    deleteRef.current.classList.toggle('note_detail_hidden__1TR6C');
  };
  const closeModifyModal = () => {
    modifyRef.current.classList.toggle('note_detail_hidden__1TR6C');
  };
  const closeDeleteModal = () => {
    deleteRef.current.classList.toggle('note_detail_hidden__1TR6C');
  };
  return (
    <div className={styles.rightClickSpan}>
      <span onClick={onModify}>이름 수정</span>
      <div ref={modifyRef} className={`${styles.hiddenModal} ${styles.hidden}`}>
        <ModalInput
          title="노트 이름 수정"
          noteName={title}
          placeholder="수정 요청 사유"
          buttonOk="OK"
          buttonCancel="CANCEL"
          closeModal={closeModifyModal}
          isInputActive="noteTitle"
          modalUtils="노트이름을 수정하시겠습니까?"
        >
          이름 수정 요청이 노트 owner에게 전달됩니다.
        </ModalInput>
      </div>
      <span onClick={onDelete}>삭제 요청</span>
      <div ref={deleteRef} className={`${styles.hiddenModal} ${styles.hidden}`}>
        <ModalInput
          title="노트 삭제 요청"
          noteName={title}
          placeholder="삭제 요청 사유"
          buttonOk="OK"
          buttonCancel="CANCEL"
          closeModal={closeDeleteModal}
          modalUtils="페이지를 삭제하시겠습니까?"
        >
          페이지 삭제 요청이 토픽 owner에게 전달됩니다.
          <br />
          삭제된 페이지는 복구할 수 없습니다.
        </ModalInput>
      </div>
    </div>
  );
}

export default function NoteDetail({ note }) {
  const hiddenRef = useRef();
  const { title } = note;

  const onRightClick = (e) => {
    e.preventDefault();
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
                <RightClickSpan title={title} />
              </div>
            </span>
          </div>
          <div className={styles.index_index}>
            <div className={styles.index_topic}>
              <ul className={styles.index_topic_ul}>
                <li
                  className={styles.index_topic_li}
                  onContextMenu={onRightClick}
                >
                  Topic
                </li>
                <li className={styles.index_topic_li}>Topic</li>
                <li className={styles.index_topic_li}>Topic</li>
                <li className={styles.index_topic_li}>Topic</li>
                <li className={styles.index_topic_li}>Topic</li>
                <li className={styles.index_topic_li}>Topic</li>
                <li className={styles.index_topic_li}>Topic</li>
              </ul>
            </div>
            <div className={styles.index_mini_title}>
              <ul className={styles.index_mini_title_ul}>
                <li>디자인 패턴이란 무엇인가?</li>
                <li>내가 보고 있는 PAGE</li>
                <li>PAGE_PAGE</li>
                <li>PAGE</li>
                <li>PAGE</li>
                <li>PAGE</li>
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
