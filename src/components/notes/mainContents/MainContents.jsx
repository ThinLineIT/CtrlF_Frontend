import React, { useState, useEffect } from 'react';
import DetailTopBar from './DetailTopBar';
import Editor from '../../Editor/Editor';
import Renderer from '../../Renderer/Renderer';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import styles from '../../../styles/items/notes/noteDetail/detail_contents.module.css';
import {
  topicName,
  pageContent,
  isOnEditPage,
  ModifyPageContent,
} from '../../../store/atom';

export default function MainContents() {
  const modifyPage = useRecoilValue(ModifyPageContent);
  const setIsOnEditor = useSetRecoilState(isOnEditPage);
  useEffect(() => {
    !modifyPage && setIsOnEditor(false);
  }, [modifyPage]);

  const topicTitle = useRecoilValue(topicName);
  const pagesContent = useRecoilValue(pageContent);
  const [pageCreateTitle, setPageCreateTitle] = useState('');

  return (
    <section className={styles.content}>
      <article
        className={`${styles.info_item_topic} ${getFontSize(topicTitle)}
          `}
      >
        {topicTitle}
      </article>
      <DetailTopBar setPageCreateTitle={setPageCreateTitle} />
      {modifyPage ? (
        <Editor
          contents={pagesContent ?? ''}
          pageCreateTitle={pageCreateTitle}
        />
      ) : (
        <Renderer contents={pagesContent ?? ''} />
      )}
    </section>
  );
}

function getFontSize(status) {
  if (10 < status.length < 16) {
    return styles.fontMiddle;
  }

  if (status.length >= 15) {
    return styles.fontSmall;
  }
}
