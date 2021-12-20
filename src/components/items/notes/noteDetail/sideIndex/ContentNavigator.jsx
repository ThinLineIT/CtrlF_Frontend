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
  issueDetailPageVersionNo,
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
  firstVisiblePageTitle,
} from '../../../../../store/atom';

export default function ContentNavigator() {
  const pageRef = useRef();
  const [showMenu, setShowMenu] = useState(false);
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

  const setIssueId = useSetRecoilState(pageDetailIssueId);
  const setNowTopicIndex = useSetRecoilState(topicIndex); // 페이지 추가를 위해 임시로 작성합니다
  const [pageId, setPageId] = useRecoilState(issueDetailPageId); // 자세히보기 기능을 위해 임시로 작성
  const [pageVesion, setPageVersion] = useRecoilState(issueDetailPageVersionNo); // 자세히보기 기능에서 페이지의 버전 넘버를 위해 작성
  const [topicId, setTopicId] = useRecoilState(issueDetailTopicId); // 자세히보기 기능을 위해 임시로 작성

  const topicData = useRecoilValue(topicDataList);
  const [pageData, setPageData] = useRecoilState(pageDataList);
  const setPageTitle = useSetRecoilState(firstVisiblePageTitle);

  const [previousTitle, setPreviousTitle] = useState('');

  const handleContext = (event, id) => {
    event.preventDefault();
    setTopicId(id);
    setPreviousTitle(event.target.innerHTML);
    showMenu ? setShowMenu(false) : setShowMenu(true);
    setXPos(`${event.pageX + 5}px`);
    setYPos(`${event.pageY - 115}px`);
  };

  const showPageList = async (data) => {
    let [id, title, status, convention] = data;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    status == false && ifNotApprovedClicked(convention);
    if (status == true) {
      setIsPageApproved(true);
    }

    const API_URL_PG = `${
      process.env.NODE_ENV === 'development'
        ? process.env.NEXT_PUBLIC_API_URL
        : process.env.NEXT_PUBLIC_RELEASE_API_BASE_URL
    }topics/${id}/pages`; // version_no & version_type이 답긴 page detail api로 변경해야 합니다.
    await Axios.get(API_URL_PG).then((res) => {
      const data = res.data;
      const { title, content, is_approved, version_no, version_type } = data[0]; // version_no & version_type을 함께 받아옵니다.
      setPageData(data);
      if (data[0]) {
        setPageTitle(title);
        setPageContent(content);
      }
      if (is_approved == false) {
        setIsPageApproved(false);
      }
    });
    setNowTopicIndex(id);
    setTopicTitle(title);
    setModifyPage(false);
    closeContextMenu();
    if (pageId !== '') {
      setTimeout(function () {
        document.getElementById(`page${pageId}`).click(); // 여기서 version_no를 체크해주는게 필요할 것 같습니다.
        setPageId('');
        setPageVersion(null);
      }, 500);
    }
    // 임시입니다. 이 함수는 추후 분기를 나누워 구현될 예정입니다.
  };

  const showPageContent = (data) => {
    let [issueId, title, content, status, convention] = data;
    window.scrollTo({ top: 0, behavior: 'smooth' });

    status == false && ifNotApprovedClicked(convention);
    if (status == true) {
      setIsPageApproved(true);
    }
    setPageTitle(title);
    setModifyPage(false);
    setPageContent(content);
    closeContextMenu();
    setIssueId(issueId);
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
    if (showMenu) setShowMenu(false);
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
            topicData.map((item) => {
              const { id, title, is_approved } = item;
              return (
                <li
                  id={`topic${id}`} // 선택을 위한 id입니다.
                  key={id}
                  className={`${styles.index_topic_li} ${getStyles(
                    is_approved
                  )}`}
                  onClick={() => {
                    const data = [id, title, is_approved, 'topic'];
                    showPageList(data);
                  }}
                  onContextMenu={(event) => handleContext(event, id)}
                >
                  {title ?? null}
                </li>
              );
            })}
        </ul>
      </div>
      <div className={styles.index_page}>
        <ul className={styles.index_page_ul}>
          {pageData.map((item) => {
            const { id, title, is_approved, content, issue_id } = item;
            return (
              <li
                id={`page${id}`} // 선택을 위한 id입니다.
                key={id}
                ref={pageRef}
                className={`${styles.index_page_li} ${getStyles(is_approved)}`}
                onClick={() => {
                  const data = [issue_id, title, content, is_approved, 'page'];
                  showPageContent(data);
                }}
                onContextMenu={handleContext}
              >
                {title ?? null}
              </li>
            );
          })}
        </ul>
      </div>
      {showMenu && (
        <RightClickSpan
          previosTitle={previousTitle}
          x={xPos}
          y={yPos}
          topicId={topicId}
        />
      )}
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
