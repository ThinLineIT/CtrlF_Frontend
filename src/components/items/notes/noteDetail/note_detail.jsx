import Axios from 'axios';
import SideIndex from './sideIndex/side_index';
import DetailContents from './detail_contents';
import React, { useState, useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import UseLoader from '../../../../utils/useLoader';
import styles from '../../../../styles/items/notes/noteDetail/note_detail.module.css';
import {
  topicName,
  pageContent,
  detailTitle,
  isValidOnMainpage,
  ModifyPageContent,
  firstVisiblePageTitle,
  topicDataList,
  pageDataList,
} from '../../../../store/atom';

export default function NoteDetail({ note, noteId }) {
  const { title } = note;
  const [isLoading, setIsLoading] = useState(true);
  const setNoteTitle = useSetRecoilState(detailTitle);
  const setModifyPage = useSetRecoilState(ModifyPageContent);
  const setIsOnMainPage = useSetRecoilState(isValidOnMainpage);

  useEffect(() => {
    setNoteTitle(title);
    setModifyPage(false);
    setIsOnMainPage(false);
  }, [note]);

  const setTopicTitle = useSetRecoilState(topicName);
  const setPageData = useSetRecoilState(pageDataList);
  const setPageContent = useSetRecoilState(pageContent);
  const setTopicData = useSetRecoilState(topicDataList);
  const setPageTitle = useSetRecoilState(firstVisiblePageTitle);

  function getTopic(id) {
    const API_URL_TOPIC = `${process.env.NEXT_PUBLIC_API_URL}notes/${id}/topics`;
    Axios.get(API_URL_TOPIC).then((res) => {
      const data = res.data;
      setTopicData(data);
      setTopicTitle(data[0].title);
      getPage(data[0].id);
    });
  }

  function getPage(id) {
    const API_URL_PAGE = `${process.env.NEXT_PUBLIC_API_URL}topics/${id}/pages`;
    Axios.get(API_URL_PAGE)
      .then((res) => {
        const data = res.data;
        setPageData(data);
        setPageTitle(data[0].title);
        setPageContent(data[0].content);
      })
      .then(setIsLoading(false));
  }

  useEffect(() => {
    if (noteId && noteId > 0) {
      getTopic(noteId);
    }
  }, [noteId]);

  return (
    <>
      {isLoading && (
        <div style={{ padding: '30% 0' }}>
          <UseLoader />
        </div>
      )}
      {!isLoading && (
        <div className={styles.wrap}>
          <SideIndex noteId={noteId} />
          <DetailContents />
        </div>
      )}
    </>
  );
}
