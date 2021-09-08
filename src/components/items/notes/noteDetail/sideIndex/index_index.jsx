import RightClickSpan from './rightClick';
import React, { useRef, useState } from 'react';
import NotApprovedModal from '../../../modal/not_approved_modal';
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';
import styles from '../../../../../styles/items/notes/noteDetail/sideIndex/index_index.module.css';
import {
  pageList,
  modalName,
  topicName,
  menuPageX,
  menuPageY,
  modalNameEn,
  pageContent,
  modalUtilsName,
  noteDetailData,
  contextMenuName,
  isApprovedModal,
  modalUtilsSyntax,
  contextMenuState,
  isValidOnMainpage,
  ModifyPageContent,
  contextMenuActive,
  modalInputPlaceholder,
  firstVisiblePageTitle,
} from '../../../../../store/atom';

export default function IndexIndex({ isValidJwt }) {
  const pageRef = useRef();
  const [modalToggle, setModalToggle] = useState(false);
  const setIsOnMainPage = useSetRecoilState(isValidOnMainpage);
  const [showMenu, setShowMenu] = useRecoilState(contextMenuActive);
  const [notApprovedModalActive, setNotApprovedModalActive] =
    useRecoilState(isApprovedModal);

  const data = useRecoilValue(noteDetailData);
  const setModalName = useSetRecoilState(modalName);
  const [xPos, setXPos] = useRecoilState(menuPageX);
  const [yPos, setYPos] = useRecoilState(menuPageY);
  const setTopicTitle = useSetRecoilState(topicName);
  const setModalNameEn = useSetRecoilState(modalNameEn);
  const setNameState = useSetRecoilState(modalUtilsName);
  const setMyPageContent = useSetRecoilState(pageContent);
  const setModifyPage = useSetRecoilState(ModifyPageContent);
  const setModalSyntax = useSetRecoilState(modalUtilsSyntax);
  const [myPageList, setMyPageList] = useRecoilState(pageList);
  const setContextMenuName = useSetRecoilState(contextMenuName);
  const setContextMenuStates = useSetRecoilState(contextMenuState);
  const setPageTitle = useSetRecoilState(firstVisiblePageTitle);
  const setModalInputPlaceholder = useSetRecoilState(modalInputPlaceholder);

  const useContextMenu = (event) => {
    if (!modalToggle) {
      setShowMenu(true);
      setModalToggle(true);
    } else {
      setShowMenu(false);
      setModalToggle(false);
    }
    event.preventDefault();
    setIsOnMainPage(false);
    setXPos(`${event.pageX}px`);
    setYPos(`${event.pageY - 80}px`);

    if (event.target.className.includes('topic')) {
      setModalName('토픽');
      setModalNameEn('topic');
      setContextMenuName('이름 수정');
      setModalInputPlaceholder('topic title');
    } else if (event.target.className.includes('page')) {
      setModalName('페이지');
      setModalNameEn('page');
      setContextMenuName('내용 수정');
      setContextMenuStates('내용 수정');
      setModalInputPlaceholder('page title');
    }
  };

  const showPageList = (index, status, convention, title) => {
    status == false && ifNotApprovedClicked(convention);

    setTopicTitle(title);
    setModifyPage(false);
    const getNewPageData = data[index].section;
    setMyPageList(getNewPageData);
    setPageTitle(getNewPageData[0].title);
    const myPageData = data[index].section.map((a) => a.content);
    setMyPageContent(myPageData[0]);
    closeContextMenu();
  };

  const showPageContent = (index, status, convention) => {
    status == false && ifNotApprovedClicked(convention);
    setPageTitle(myPageList[index].title);

    const myPageData = data[index].section.map((a) => a.content);
    setModifyPage(false);
    setMyPageContent(myPageData[index]);
    closeContextMenu();
  };

  const ifNotApprovedClicked = (convention) => {
    if (convention == 'topic') {
      setNameState('토픽');
      setModalSyntax('은');
    } else if (convention == 'page') {
      setNameState('페이지');
      setModalSyntax('는');
    }
    setNotApprovedModalActive(true);
  };

  const closeContextMenu = () => {
    setShowMenu(false);
    setModalToggle(false);
  };

  return (
    <section className={styles.index_index}>
      <div className={styles.index_topic}>
        <ul className={styles.index_topic_ul}>
          {data &&
            data.map((item, index) => (
              <li
                key={item.id}
                className={`${styles.index_topic_li} ${getStyles(
                  item.is_approved
                )}`}
                onClick={() =>
                  showPageList(index, item.is_approved, 'topic', item.name)
                }
                onContextMenu={useContextMenu}
              >
                {item.name}
              </li>
            ))}
        </ul>
      </div>
      <div className={styles.index_page}>
        <ul className={styles.index_page_ul}>
          {myPageList.map((item, index) => (
            <li
              key={item.id}
              ref={pageRef}
              className={`${styles.index_page_li} ${getStyles(
                item.is_approved
              )}`}
              onClick={() => showPageContent(index, item.is_approved, 'page')}
              onContextMenu={useContextMenu}
            >
              {item.title}
            </li>
          ))}
        </ul>
      </div>
      {showMenu && <RightClickSpan x={xPos} y={yPos} />}
      {notApprovedModalActive && <NotApprovedModal />}
    </section>
  );
}

function getStyles(status) {
  switch (status) {
    case true:
      return '';
    case false:
      return styles.dark;
    default:
      console.log('Error');
  }
}
