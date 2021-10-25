import RightClickSpan from './rightClick';
import React, { useRef, useState } from 'react';
import NotApprovedModal from '../../../modal/not_approved_modal';
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';
import styles from '../../../../../styles/items/notes/noteDetail/sideIndex/index_index.module.css';
import {
  modalName,
  topicName,
  menuPageX,
  menuPageY,
  modalNameEn,
  pageContent,
  modalUtilsName,
  contextMenuName,
  isApprovedModal,
  modalUtilsSyntax,
  contextMenuState,
  isValidOnMainpage,
  ModifyPageContent,
  contextMenuActive,
  modalInputPlaceholder,
  firstVisiblePageTitle,
  topicDataList,
  pageDataList,
  isPageApproved,
} from '../../../../../store/atom';
import Axios from 'axios';

export default function IndexIndex() {
  const pageRef = useRef();
  const [modalToggle, setModalToggle] = useState(false);
  const setIsOnMainPage = useSetRecoilState(isValidOnMainpage);
  const [showMenu, setShowMenu] = useRecoilState(contextMenuActive);
  const [notApprovedModalActive, setNotApprovedModalActive] =
    useRecoilState(isApprovedModal);

  const setModalName = useSetRecoilState(modalName);
  const [xPos, setXPos] = useRecoilState(menuPageX);
  const [yPos, setYPos] = useRecoilState(menuPageY);
  const setTopicTitle = useSetRecoilState(topicName);
  const setModalNameEn = useSetRecoilState(modalNameEn);
  const setNameState = useSetRecoilState(modalUtilsName);
  const setPageContent = useSetRecoilState(pageContent);
  const setModifyPage = useSetRecoilState(ModifyPageContent);
  const setModalSyntax = useSetRecoilState(modalUtilsSyntax);
  const setContextMenuName = useSetRecoilState(contextMenuName);
  const setPageTitle = useSetRecoilState(firstVisiblePageTitle);
  const setContextMenuState = useSetRecoilState(contextMenuState);
  const setModalInputPlaceholder = useSetRecoilState(modalInputPlaceholder);
  const setIsPageApproved = useSetRecoilState(isPageApproved);

  const topicData = useRecoilValue(topicDataList);
  const [pageData, setPageData] = useRecoilState(pageDataList);

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
    setXPos(`${event.pageX + 5}px`);
    setYPos(`${event.pageY - 115}px`);

    if (event.target.className.includes('topic')) {
      setModalName('토픽');
      setModalNameEn('topic');
      setContextMenuName('이름 수정');
      setModalInputPlaceholder('topic title');
    } else if (event.target.className.includes('page')) {
      setModalName('페이지');
      setModalNameEn('page');
      setContextMenuName('내용 수정');
      setContextMenuState('내용 수정');
      setModalInputPlaceholder('page title');
    }
  };

  const showPageList = (id, status, convention, title) => {
    status == false && ifNotApprovedClicked(convention);
    if (status == true) {
      setIsPageApproved(true);
    }

    const API_URL_PG = `${process.env.NEXT_PUBLIC_API_URL}topics/${id}/pages`;
    Axios.get(API_URL_PG).then((res) => {
      const data = res.data;
      setPageData(data);
      if (data[0]) {
        setPageTitle(data[0].title);
        setPageContent(data[0].content);
      }
      if (data[0].is_approved == false) {
        setIsPageApproved(false);
      }
    });

    window.scrollTo(0, 0);
    setTopicTitle(title);
    setModifyPage(false);
    closeContextMenu();
  };

  const showPageContent = (title, status, convention, content) => {
    status == false && ifNotApprovedClicked(convention);
    if (status == true) {
      setIsPageApproved(true);
    }
    setPageTitle(title);
    setModifyPage(false);
    setPageContent(content);
    closeContextMenu();
    window.scrollTo(0, 0);
  };

  const ifNotApprovedClicked = (convention) => {
    if (convention == 'topic') {
      setNameState('토픽');
      setModalSyntax('은');
    } else if (convention == 'page') {
      setNameState('페이지');
      setModalSyntax('는');
      setIsPageApproved(false);
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
          {topicData &&
            topicData.map((item) => (
              <li
                key={item.id}
                className={`${styles.index_topic_li} ${getStyles(
                  item.is_approved
                )}`}
                onClick={() =>
                  showPageList(item.id, item.is_approved, 'topic', item.title)
                }
                onContextMenu={useContextMenu}
              >
                {item.title}
              </li>
            ))}
        </ul>
      </div>
      <div className={styles.index_page}>
        <ul className={styles.index_page_ul}>
          {pageData.map((item) => (
            <li
              key={item.id}
              ref={pageRef}
              className={`${styles.index_page_li} ${getStyles(
                item.is_approved
              )}`}
              onClick={() =>
                showPageContent(
                  item.title,
                  item.is_approved,
                  'page',
                  item.content
                )
              }
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
