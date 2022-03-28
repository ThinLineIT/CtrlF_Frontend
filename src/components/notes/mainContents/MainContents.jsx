import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import DetailTopBar from './DetailTopBar';
import Editor from '../../Editor/Editor';
import Renderer from '../../renderer';
import { useRecoilValue, useSetRecoilState, useRecoilState } from 'recoil';
import styles from '../../../styles/items/notes/noteDetail/detail_contents.module.css';
import {
  topicName,
  pageContent,
  isOnEditPage,
  ModifyPageContent,
  firstVisiblePageTitle,
} from '../../../store/atom';
import IssueEdit from '../../editor/IssueEdit';

export default function MainContents() {
  // const modifyPage = useRecoilValue(ModifyPageContent)
  const [modifyPage, setModifyPage] = useRecoilState(ModifyPageContent);
  const setIsOnEditor = useSetRecoilState(isOnEditPage);

  const router = useRouter();
  const [isPageIssueEdit, setIsPageIssueEdit] = useState(false);
  useEffect(() => {
    const { edit } = router.query;
    if (edit) {
      setModifyPage(null);
      setIsPageIssueEdit(true);
    }
  }, []);

  useEffect(() => {
    !modifyPage && setIsOnEditor(false);
  }, [modifyPage]);

  const pageTitle = useRecoilValue(firstVisiblePageTitle);
  const topicTitle = useRecoilValue(topicName);
  const pagesContent = useRecoilValue(pageContent);
  const [pageCreateTitle, setPageCreateTitle] = useState(pageTitle);

  return (
    <section className={styles.content}>
      <article
        className={`${styles.info_item_topic} ${getFontSize(topicTitle)}
          `}
      >
        {topicTitle}
      </article>
      {isPageIssueEdit ? (
        <IssueEdit setIsPageIssueEdit={setIsPageIssueEdit} />
      ) : (
        <>
          <DetailTopBar
            pageCreateTitle={pageCreateTitle}
            setPageCreateTitle={setPageCreateTitle}
          />
          {modifyPage ? (
            <Editor
              contents={pagesContent ?? ''}
              pageCreateTitle={pageCreateTitle}
            />
          ) : (
            <Renderer contents={pagesContent ?? ''} />
          )}
        </>
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
