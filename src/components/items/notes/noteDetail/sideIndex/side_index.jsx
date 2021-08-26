import AddBtn from './AddBtn';
import IndexIndex from './index_index';
import { useCookies } from 'react-cookie';
import RightClickSpan from './rightClick';
import React, { useEffect, useState } from 'react';
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
  modalInputPlaceholder,
} from '../../../../../store/atom';

export default function SideIndex() {
  const [isValidJwt, setIsValidJwt] = useState(false);
  const [modalToggle, setModalToggle] = useState(false);
  const setIsOnMainPage = useSetRecoilState(isValidOnMainpage);
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const [showMenu, setShowMenu] = useRecoilState(contextMenuActive);

  const isValidToken = cookies.token;
  const noteTitle = useRecoilValue(detailTitle);
  const setModalName = useSetRecoilState(modalName);
  const [xPos, setXPos] = useRecoilState(menuPageX);
  const [yPos, setYPos] = useRecoilState(menuPageY);
  const setModalNameEn = useSetRecoilState(modalNameEn);
  const setContextMenuName = useSetRecoilState(contextMenuName);
  const setContextMenuStates = useSetRecoilState(contextMenuState);
  const setModalInputPlaceholder = useSetRecoilState(modalInputPlaceholder);

  useEffect(() => {
    isValidToken !== undefined ? setIsValidJwt(true) : setIsValidJwt(false);
  }, [cookies]);

  const onRightClick = (event) => {
    if (!modalToggle) {
      setShowMenu(true);
      setModalToggle(true);
    } else {
      setShowMenu(false);
      setModalToggle(false);
    }
    event.preventDefault();
    setXPos(`${event.pageX}px`);
    setYPos(`${event.pageY - 80}px`);
    setModalName('노트');
    setModalNameEn('note');
    setIsOnMainPage(false);
    setContextMenuName('이름 수정');
    setContextMenuStates('이름 수정');
    setModalInputPlaceholder('note title');
  };

  const closeContextMenu = () => {
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
          <IndexIndex />
          <AddBtn isValidJwt={isValidJwt} />
        </div>
        {showMenu && <RightClickSpan noteTitle={noteTitle} x={xPos} y={yPos} />}
      </div>
    </div>
  );
}
