import Axios from 'axios';
import { useSetRecoilState } from 'recoil';
import DetailContents from './detail_contents';
import SideIndex from './sideIndex/side_index';
import React, { useState, useEffect } from 'react';
import UseLoader from '../../../../utils/useLoader';
import styles from '../../../../styles/items/notes/noteDetail/note_detail.module.css';
import {
  topicName,
  detailTitle,
  pageContent,
  pageDataList,
  topicDataList,
  ModifyPageContent,
  firstVisiblePageTitle,
} from '../../../../store/atom';

export default function NoteDetail({ note }) {
  const { title, id } = note;
  const [isLoading, setIsLoading] = useState(true);
  const setNoteTitle = useSetRecoilState(detailTitle);
  const setModifyPage = useSetRecoilState(ModifyPageContent);

  useEffect(() => {
    setNoteTitle(title);
    setModifyPage(false);
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

  return (
    <>
      {isLoading && (
        <div style={{ padding: '30% 0' }}>
          <UseLoader />
        </div>
      )}
      {!isLoading && (
        <div className={styles.wrap}>
          <SideIndex noteId={id} />
          <DetailContents />
        </div>
      )}
    </>
  );
}
