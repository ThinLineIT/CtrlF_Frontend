import Axios from 'axios';
import RightClickSpan from './rightClick';
import React, { useRef, useState, useEffect } from 'react';
import NotApprovedModal from '../../../modal/not_approved_modal';
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';
import styles from '../../../../../styles/items/notes/noteDetail/sideIndex/index_index.module.css';
import {
  pageDetailIssueId, // 이슈 이동을 위한 atom
  issueDetailPageId,
  issueDetailTopicId, //임시
  topicIndex, // 페이지 등록을 위한 atom
  topicName,
  menuPageX,
  menuPageY,
  pageContent,
  pageDataList,
  topicDataList,
  isPageApproved,
  modalUtilsName,
  isApprovedModal,
  modalUtilsSyntax,
  ModifyPageContent,
  contextMenuActive,
  firstVisiblePageTitle,
} from '../../../../../store/atom';

export default function ContentNavigator() {
  const pageRef = useRef();
  const [modalToggle, setModalToggle] = useState(false);
  const [showMenu, setShowMenu] = useRecoilState(contextMenuActive);
  const [notApprovedModalActive, setNotApprovedModalActive] =
    useRecoilState(isApprovedModal);

  const [xPos, setXPos] = useRecoilState(menuPageX);
  const [yPos, setYPos] = useRecoilState(menuPageY);

  const setTopicTitle = useSetRecoilState(topicName);
  const setPageContent = useSetRecoilState(pageContent);
  const setNameState = useSetRecoilState(modalUtilsName);
  const setModifyPage = useSetRecoilState(ModifyPageContent);
  const setModalSyntax = useSetRecoilState(modalUtilsSyntax);
  const setIsPageApproved = useSetRecoilState(isPageApproved);

  const setNowTopicIndex = useSetRecoilState(topicIndex); // 페이지 추가를 위해 임시로 작성합니다
  const [topicId, setTopicId] = useRecoilState(issueDetailTopicId); // 자세히보기 기능을 위해 임시로 작성
  const [pageId, setPageId] = useRecoilState(issueDetailPageId); // 자세히보기 기능을 위해 임시로 작성
  const setIssueId = useSetRecoilState(pageDetailIssueId);

  const topicData = useRecoilValue(topicDataList);
  const [pageData, setPageData] = useRecoilState(pageDataList);
  const setPageTitle = useSetRecoilState(firstVisiblePageTitle);

  const useContextMenu = (event) => {
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

  const showPageList = async (id, status, convention, title) => {
    status == false && ifNotApprovedClicked(convention);
    if (status == true) {
      setIsPageApproved(true);
    }

    const API_URL_PG = `${process.env.NEXT_PUBLIC_API_URL}topics/${id}/pages`;
    await Axios.get(API_URL_PG).then((res) => {
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
    setNowTopicIndex(id);
    window.scrollTo(0, 0);
    setTopicTitle(title);
    setModifyPage(false);
    closeContextMenu();
    if (pageId !== '') {
      setTimeout(function () {
        document.getElementById(`page${pageId}`).click();
        setPageId('');
      }, 500);
    }
    // 임시입니다. 이 함수는 추후 분기를 나누워 구현될 예정입니다.
  };

  const showPageContent = (issueId, title, status, convention, content) => {
    status == false && ifNotApprovedClicked(convention);
    if (status == true) {
      setIsPageApproved(true);
    }
    setPageTitle(title);
    setModifyPage(false);
    setPageContent(content);
    closeContextMenu();
    setIssueId(issueId);
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

  useEffect(() => {
    if (topicId !== '') {
      document.getElementById(`topic${topicId}`).click();
      setTopicId('');
    }
    // 만약 클라이언트가 Issue에서 넘어온 상황이라면 실행이 될 예정입니다.
  }, []);

  return (
    <section className={styles.index_index}>
      <div className={styles.index_topic}>
        <ul className={styles.index_topic_ul}>
          {topicData &&
            topicData.map((item) => (
              <li
                id={`topic${item.id}`} // 선택을 위한 id입니다.
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
              id={`page${item.id}`} // 선택을 위한 id입니다.
              key={item.id}
              ref={pageRef}
              className={`${styles.index_page_li} ${getStyles(
                item.is_approved
              )}`}
              onClick={() =>
                showPageContent(
                  item.issue_id,
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
