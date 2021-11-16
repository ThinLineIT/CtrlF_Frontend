import AddBtn from './addBtn';
import React, { useState } from 'react';
import RightClickSpan from './rightClick';
import ContentNavigator from './ContentNavigator';
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';
import styles from '../../../../../styles/items/notes/noteDetail/sideIndex/side_index.module.css';
import {
  menuPageX,
  menuPageY,
  detailTitle,
  contextMenuActive,
  ModifyPageContent,
} from '../../../../../store/atom';

export default function SideIndex({ noteId }) {
  const [modalToggle, setModalToggle] = useState(false);
  const [showMenu, setShowMenu] = useRecoilState(contextMenuActive);

  const noteTitle = useRecoilValue(detailTitle);
  const [xPos, setXPos] = useRecoilState(menuPageX);
  const [yPos, setYPos] = useRecoilState(menuPageY);
  const setModifyPage = useSetRecoilState(ModifyPageContent);

  const onRightClick = (e) => {
    e.preventDefault();
    if (!modalToggle) {
      setShowMenu(true);
      setModalToggle(true);
    } else {
      setShowMenu(false);
      setModalToggle(false);
    }
    setXPos(`${e.pageX + 5}px`);
    setYPos(`${e.pageY - 115}px`);
  };

  const closeContextMenu = () => {
    setShowMenu(false);
    setModifyPage(false);
  };

  return (
    <aside className={styles.index}>
      <article className={styles.index_wrap}>
        <section className={styles.index_title}>
          <span
            className={styles.index_title_span}
            onContextMenu={onRightClick}
            onClick={closeContextMenu}
          >
            {noteTitle}
          </span>
        </section>
        <section className={styles.index_list_wrap}>
          <ContentNavigator />
          <AddBtn noteId={noteId} />
        </section>
        {showMenu && <RightClickSpan noteTitle={noteTitle} x={xPos} y={yPos} />}
      </article>
    </aside>
  );
}
