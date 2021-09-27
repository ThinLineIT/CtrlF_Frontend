import AddBtn from './AddBtn';
import IndexIndex from './index_index';
import RightClickSpan from './rightClick';
import React, { useState } from 'react';
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';
import styles from '../../../../../styles/items/notes/noteDetail/sideIndex/side_index.module.css';
import {
  modalName,
  menuPageX,
  menuPageY,
  modalNameEn,
  detailTitle,
  contextMenuName,
  contextMenuState,
  contextMenuActive,
  isValidOnMainpage,
  ModifyPageContent,
  modalInputPlaceholder,
} from '../../../../../store/atom';

export default function SideIndex({ isValidJwt }) {
  const [modalToggle, setModalToggle] = useState(false);
  const setIsOnMainPage = useSetRecoilState(isValidOnMainpage);
  const [showMenu, setShowMenu] = useRecoilState(contextMenuActive);

  const noteTitle = useRecoilValue(detailTitle);
  const setModalName = useSetRecoilState(modalName);
  const [xPos, setXPos] = useRecoilState(menuPageX);
  const [yPos, setYPos] = useRecoilState(menuPageY);
  const setModalNameEn = useSetRecoilState(modalNameEn);
  const setModifyPage = useSetRecoilState(ModifyPageContent);
  const setContextMenuName = useSetRecoilState(contextMenuName);
  const setContextMenuStates = useSetRecoilState(contextMenuState);
  const setModalInputPlaceholder = useSetRecoilState(modalInputPlaceholder);

  const onRightClick = (event) => {
    if (!modalToggle) {
      setShowMenu(true);
      setModalToggle(true);
    } else {
      setShowMenu(false);
      setModalToggle(false);
    }
    event.preventDefault();
    setXPos(`${event.pageX + 5}px`);
    setYPos(`${event.pageY - 115}px`);
    setModalName('노트');
    setModalNameEn('note');
    setIsOnMainPage(false);
    setContextMenuName('이름 수정');
    setContextMenuStates('이름 수정');
    setModalInputPlaceholder('note title');
  };

  const closeContextMenu = () => {
    setModifyPage(false);
    setShowMenu(false);
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
          <IndexIndex isValidJwt={isValidJwt} />
          <AddBtn isValidJwt={isValidJwt} />
        </div>
        {showMenu && <RightClickSpan noteTitle={noteTitle} x={xPos} y={yPos} />}
      </div>
    </div>
  );
}
