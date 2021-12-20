import Axios from 'axios';
import RightClickSpan from './rightClick';
import React, { useRef, useState, useEffect } from 'react';
import NotApprovedModal from '../../../modal/not_approved_modal';
import {
  pageListApi,
  pageDetailApi,
} from '../../../../../utils/pageDetailFetch';
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';
import styles from '../../../../../styles/items/notes/noteDetail/sideIndex/index_index.module.css';
import {
  pageDetailIssueId, // 이슈 이동을 위한 atom
  issueDetailPageId,
  issueDetailTopicId, //임시
  issueDetailPageVersion_no,
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
  const [pageVesion, setPageVersion] = useRecoilState(
    issueDetailPageVersion_no
  ); // 자세히보기 기능에서 페이지의 버전 넘버를 위해 작성
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
    setXPos(`${event.screenX + 5}px`);
    setYPos(`${event.screenY - 115}px`);
  };

  const showPageList = async (data) => {
    window.scrollTo(0, 0);
    let { id, title, is_approved } = data;
    closeContextMenu();
    setNowTopicIndex(id);
    setTopicTitle(title);
    setModifyPage(false);
    is_approved === false && ifNotApprovedClicked('topic');
    if (is_approved == true) {
      setIsPageApproved(true);
    }
    const pageList = await pageListApi(id) //
      .then((pages) => {
        const { title, is_approved, version_no, id } = pages[0];
        if (is_approved === false) {
          setIsPageApproved(false);
        } else {
          setPageData(pages);
          setPageTitle(title);
          showPageContent(id, version_no);
        }
      });
    if (pageId !== '') {
      setTimeout(function () {
        document.getElementById(`page${pageId}`).click();
        setPageId('');
        setPageVersion(null);
      }, 500);
    }
  };

  const showPageContent = async (pageId, version_no) => {
    window.scrollTo(0, 0);
    setModifyPage(false);
    closeContextMenu();
    const pageList = await pageDetailApi(pageId, version_no) //
      .then((page) => {
        const {
          title,
          content,
          is_approved,
          issue_id,
          version_type,
          version_no,
        } = page;
        is_approved == false && ifNotApprovedClicked('page');
        if (is_approved == true) {
          setIsPageApproved(true);
        }
        setPageTitle(title);
        setPageContent(content);
        setIssueId(issue_id);
      });
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
                    const data = {
                      id,
                      title,
                      is_approved,
                    };
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
            const { id, title, is_approved, version_no } = item;
            return (
              <li
                id={`page${id}`} // 선택을 위한 id입니다.
                key={id}
                ref={pageRef}
                className={`${styles.index_page_li} ${getStyles(is_approved)}`}
                onClick={() => {
                  showPageContent(id, version_no);
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
