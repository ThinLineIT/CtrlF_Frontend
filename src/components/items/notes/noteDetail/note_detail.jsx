import Axios from 'axios';
import { useSetRecoilState } from 'recoil';
import DetailContents from './mainContents/detail_contents';
import SideIndex from './sideIndex/side_index';
import React, { useState, useEffect } from 'react';
import {
  pageListApi,
  topicListApi,
  pageDetailApi,
} from '../../../../utils/pageDetailFetch';
import UseLoader from '../../../../utils/useLoader';
import styles from '../../../../styles/items/notes/noteDetail/note_detail.module.css';
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
} from '../../../../store/atom';

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
  const setNowTopicIndex = useSetRecoilState(topicIndex); // 페이지 추가를 위해 임시로 작성합니다

  async function getTopic(noteId) {
    const topicList = await topicListApi(noteId) //
      .then((topics) => {
        const { title, id } = topics[0];
        setTopicData(topics);
        setTopicTitle(title);
        getPage(id);
      });
  }

  async function getPage(topicId) {
    const pageList = await pageListApi(topicId) //
      .then((pages) => {
        const { title, id, version_no } = pages[0];
        setPageData(pages);
        setPageTitle(title);
        setIsLoading(false);
        getPageBody(id, version_no);
      });
  }

  async function getPageBody(pageId, version_no) {
    const pageList = await pageDetailApi(pageId, version_no) //
      .then((page) => {
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
          <SideIndex noteId={id} />
          <DetailContents />
        </main>
      )}
    </>
  );
}
