import { useSetRecoilState } from 'recoil';
import MainContents from '../../components/notes/mainContents/MainContents';
import DetailSidebar from '../../components/notes/sideIndex/DetailSidebar';
import React, { useState, useEffect } from 'react';
import {
  fetchTopics,
  fetchPageList,
  fetchPageDetail,
} from '../../utils/pageDetailFetch';
import UseLoader from '../../utils/useLoader';
import styles from '../../styles/items/notes/noteDetail/note_detail.module.css';
import {
  topicIndex, // 임시
  topicName,
  detailTitle,
  pageContent,
  pageDataList,
  isOnEditPage,
  topicDataList,
  ModifyPageContent,
  firstVisiblePageTitle,
} from '../../store/atom';

export default function NoteDetail({ note }) {
  const { title, id } = note;
  const [isLoading, setIsLoading] = useState(true);
  const setIsOnEditor = useSetRecoilState(isOnEditPage);
  const setNoteTitle = useSetRecoilState(detailTitle);
  const setModifyPage = useSetRecoilState(ModifyPageContent);

  const setTopicTitle = useSetRecoilState(topicName);
  const setPageData = useSetRecoilState(pageDataList);
  const setPageContent = useSetRecoilState(pageContent);
  const setTopicData = useSetRecoilState(topicDataList);
  const setPageTitle = useSetRecoilState(firstVisiblePageTitle);
  const setNowTopicIndex = useSetRecoilState(topicIndex);

  async function getTopic(noteId) {
    await fetchTopics(noteId).then((topics) => {
      if (topics[0]?.title) {
        const { title, id } = topics[0];
        setTopicData(topics);
        setTopicTitle(title);
        getPage(id);
      } else {
        setTopicData([]);
        setTopicTitle('');
        setPageData([]);
        setPageContent('');
        setIsLoading(false);
      }
    });
  }

  async function getPage(topicId) {
    await fetchPageList(topicId).then((pages) => {
      if (pages[0]?.title) {
        const { title, id, version_no } = pages[0];
        setPageData(pages);
        setPageTitle(title);
        setIsLoading(false);
        getPageBody(id, version_no);
      } else {
        setPageData([]);
        setPageTitle('');
        setPageContent('');
        setIsLoading(false);
      }
    });
  }

  async function getPageBody(pageId, version_no) {
    await fetchPageDetail(pageId, version_no).then((page) => {
      const { content } = page;
      setPageContent(content);
    });
  }

  useEffect(() => {
    if (id && id > 0) {
      getTopic(id);
    }
  }, [id]);

  useEffect(() => {
    setNoteTitle(title);
    setModifyPage(false);
    setIsOnEditor(false);
  }, [note]);

  return (
    <>
      {isLoading ? (
        <div style={{ padding: '30% 0' }}>
          <UseLoader />
        </div>
      ) : (
        <main className={styles.wrap}>
          <DetailSidebar noteId={id} />
          <MainContents />
        </main>
      )}
    </>
  );
}
