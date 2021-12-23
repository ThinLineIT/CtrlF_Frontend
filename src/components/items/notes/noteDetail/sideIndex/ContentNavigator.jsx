import RightClickSpan from './rightClick';
import { useScroll } from '../../../../../utils/useScroll';
import React, { useRef, useState, useEffect } from 'react';
import NotApprovedModal from '../../../modal/not_approved_modal';
import {
  fetchPageList,
  fetchPageDetail,
} from '../../../../../utils/pageDetailFetch';
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
  contextMenuName,
} from '../../../../../store/atom';

export default function ContentNavigator() {
  const pageRef = useRef();
  const [showMenu, setShowMenu] = useState(false);
  const [notApprovedModalActive, setNotApprovedModalActive] =
    useRecoilState(isApprovedModal);

  const { scrollY } = useScroll();
  const [xPos, setXPos] = useRecoilState(menuPageX);
  const [yPos, setYPos] = useRecoilState(menuPageY);

  const setTopicTitle = useSetRecoilState(topicName);
  const setPageContent = useSetRecoilState(pageContent);
  const setNameState = useSetRecoilState(modalUtilsName);
  const setModifyPage = useSetRecoilState(ModifyPageContent);
  const setModalSyntax = useSetRecoilState(modalUtilsSyntax);
  const setIsPageApproved = useSetRecoilState(isPageApproved);
  const setcontextMenuName = useSetRecoilState(contextMenuName);

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
    event.target.id.match('page')
      ? setcontextMenuName('내용 수정')
      : setcontextMenuName('이름 수정');
    setTopicId(id);
    setPreviousTitle(event.target.innerHTML);
    showMenu ? setShowMenu(false) : setShowMenu(true);
    setXPos(`${event.screenX + 5}px`);
    setYPos(
      scrollY >= 50 ? `${event.screenY - 115}px` : `${event.screenY - 215}px`
    );
  };

  const topicNavigatorTapped = (topic) => {
    let { id, title, is_approved } = topic;

    if (pageId !== '') {
      setTimeout(function () {
        document.getElementById(`page${pageId}`).click(); // 여기서 version_no를 체크해주는게 필요할 것 같습니다.
        setPageId('');
        setPageVersion(null);
      }, 500);
    }
    is_approved === false
      ? ifNotApprovedClicked('topic')
      : setIsPageApproved(true);
    setShowMenu(false);
    setTopicTitle(title);
    setModifyPage(false);
    setNowTopicIndex(id);
    window.scrollTo(0, 0);

    getPages(id);
  };

  const getPages = async (id) => {
    await fetchPageList(id).then((pages) => {
      if (!pages[0]) return;
      const { title, is_approved, version_no, id } = pages[0] ?? null;
      if (is_approved === false) {
        setIsPageApproved(false);
      } else {
        setPageData(pages);
        setPageTitle(title);
        pageNavigatorTapped(id, version_no);
      }
    });
  };

  const pageNavigatorTapped = async (pageId, version_no) => {
    await fetchPageDetail(pageId, version_no).then((page) => {
      const {
        id,
        title,
        content,
        is_approved,
        issue_id,
        version_type,
        version_no,
      } = page;

      is_approved == false
        ? ifNotApprovedClicked('page')
        : setIsPageApproved(true);
      setPageId(id);
      setShowMenu(false);
      setPageTitle(title);
      setIssueId(issue_id);
      setModifyPage(false);
      window.scrollTo(0, 0);
      setPageContent(content);
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

  useEffect(() => {
    if (topicId !== '') {
      document.getElementById(`topic${topicId}`).click();
      setTopicId('');
    }
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
                  id={`topic${id}`}
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
                    topicNavigatorTapped(data);
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
                id={`page${id}`}
                key={id}
                ref={pageRef}
                className={`${styles.index_page_li} ${getStyles(is_approved)}`}
                onClick={() => {
                  pageNavigatorTapped(id, version_no);
                }}
                onContextMenu={handleContext}
              >
                {title.slice(0, 26) ?? null}
                {title.length > 26 && '...'}
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
          setShowMenu={setShowMenu}
          topicId={topicId}
          setShowMenu={setShowMenu}
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
