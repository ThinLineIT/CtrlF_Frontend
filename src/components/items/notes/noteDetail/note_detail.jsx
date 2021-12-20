import Axios from 'axios';
import { useSetRecoilState } from 'recoil';
import DetailContents from './mainContents/detail_contents';
import SideIndex from './sideIndex/side_index';
import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    setNoteTitle(title);
    setModifyPage(false);
    setIsOnEditor(false);
  }, [note]);

  const setTopicTitle = useSetRecoilState(topicName);
  const setPageData = useSetRecoilState(pageDataList);
  const setPageContent = useSetRecoilState(pageContent);
  const setTopicData = useSetRecoilState(topicDataList);
  const setPageTitle = useSetRecoilState(firstVisiblePageTitle);

  useEffect(() => {
    if (id && id > 0) {
      getTopic(id);
    }
  }, [id]);

  const setNowTopicIndex = useSetRecoilState(topicIndex); // 페이지 추가를 위해 임시로 작성합니다

  function getTopic(id) {
    const API_URL_TOPIC = `${process.env.NEXT_PUBLIC_API_URL}notes/${id}/topics`;
    Axios.get(API_URL_TOPIC).then((res) => {
      const data = res.data;
      const { title, id } = data[0];
      setTopicData(data);
      setTopicTitle(title);
      getPage(id);
    });
  }

  function getPage(id) {
    const API_URL_PAGE = `${process.env.NEXT_PUBLIC_API_URL}topics/${id}/pages`;
    setNowTopicIndex(id);
    Axios.get(API_URL_PAGE)
      .then((res) => {
        const data = res.data;
        const { title, content } = data[0];
        setPageData(data);
        setPageTitle(title);
        setPageContent(content);
      })
      .then(setIsLoading(false));
  }

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
