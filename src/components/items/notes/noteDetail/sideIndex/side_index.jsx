import AddBtn from './addBtn';
import ContentNavigator from './ContentNavigator';
import RightClickSpan from './rightClick';
import React, { useState } from 'react';
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

  const onRightClick = (event) => {
    event.preventDefault();
    if (!modalToggle) {
      setShowMenu(true);
      setModalToggle(true);
    } else {
      setShowMenu(false);
      setModalToggle(false);
    }
    setXPos(`${event.pageX + 5}px`);
    setYPos(`${event.pageY - 115}px`);
  };

  const closeContextMenu = () => {
    setShowMenu(false);
    setModifyPage(false);
  };

  return (
    <div className={styles.index}>
      <div className={styles.index_wrap}>
        <div className={styles.index_title}>
          <span
            className={styles.index_title_span}
            onContextMenu={onRightClick}
            onClick={closeContextMenu}
          >
            {noteTitle}
          </span>
        </div>
        <div className={styles.index_list_wrap}>
          <ContentNavigator />
          <AddBtn noteId={noteId} />
        </div>
        {showMenu && <RightClickSpan noteTitle={noteTitle} x={xPos} y={yPos} />}
      </div>
    </div>
  );
}
