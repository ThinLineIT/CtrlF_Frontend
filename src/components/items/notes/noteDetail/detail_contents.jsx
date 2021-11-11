import Image from 'next/image';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Editor from '../../../../../pages/Editor';
import useModal from '../../../../utils/useModal';
import IssueCreateModal from '../../modal/IssueCreateModal';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { useRecoilValue, useRecoilState, useSetRecoilState } from 'recoil';
import styles from '../../../../styles/items/notes/noteDetail/detail_contents.module.css';
import {
  topicName,
  pageContent,
  okBtnActive,
  preparingModal,
  isPageApproved,
  ModifyPageContent,
  pageDetailIssueId, // 이슈로 이동하기 위한 atom
  firstVisiblePageTitle,
} from '../../../../store/atom';

export default function DetailContents() {
  const topicTitle = useRecoilValue(topicName);
  const PagesContent = useRecoilValue(pageContent);
  const issueId = useRecoilValue(pageDetailIssueId); // 이슈로 이동하기 위한 atom
  const modifyPage = useRecoilValue(ModifyPageContent);
  const setIsUserSubmit = useSetRecoilState(okBtnActive);
  const pageTitle = useRecoilValue(firstVisiblePageTitle);
  const [showHiddenModal, setShowHiddenModal] = useRecoilState(preparingModal);

  // 이슈로 이동을 위한 라우팅
  const router = useRouter();
  const moveToIssue = () => {
    router.push({
      pathname: '/issue',
      query: { issueId: issueId },
    });
  };

  const [pageCreateTitle, setPageCreateTitle] = useState('');

  const onPageTitlehandler = (event) => {
    setPageCreateTitle(event.target.value);
  };

  const isPageApprove = useRecoilValue(isPageApproved);

  const [slideImg, setSlideImg] = useState(false);
  const copyClipboard = () => {
    const dummy = document.createElement('input');
    const text = location.href;
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
    setSlideImg(true);
    setTimeout(fadeOutSlideImg, 1000);
  };
  const fadeOutSlideImg = () => {
    setSlideImg(false);
  };

  const modalObj = useModal('page');

  const resetPageContentAndSendData = () => {
    setIsUserSubmit(true);
    setShowHiddenModal(true);
  };

  return (
    <section className={styles.content}>
      <article
        className={`${styles.info_item_topic} ${getFontSize(topicTitle)}
          `}
      >
        {topicTitle}
      </article>
      <article className={styles.topBar}>
        <section className={styles.info_item}>
          {modifyPage ? (
            <input
              className={styles.info_item_page}
              onChange={onPageTitlehandler}
              placeholder="TITLE"
            />
          ) : (
            <div className={styles.info_item_page}>{pageTitle}</div>
          )}
        </section>
        <section className={styles.icons}>
          {modifyPage ? (
            <div>
              <button
                className={styles.buttonOk}
                onClick={resetPageContentAndSendData}
              >
                확인
              </button>
            </div>
          ) : (
            <span className={styles.clipBoard}>
              <button className={styles.icons_share} onClick={copyClipboard} />
              {!isPageApprove && (
                <button onClick={moveToIssue} className={styles.icons_issue}>
                  관련된 이슈 확인
                </button>
              )}
              <aside
                className={`${
                  slideImg ? `${styles.slideActive}` : `${styles.slideHidden}`
                }`}
              />
            </span>
          )}
        </section>
      </article>
      <div
        style={{
          width: '90%',
        }}
      >
        {modifyPage ? (
          <Editor contents={PagesContent} pageCreateTitle={pageCreateTitle} />
        ) : (
          <ReactMarkdown
            className={styles.markdown_renderer}
            rehypePlugins={[rehypeRaw]}
            remarkPlugins={[remarkGfm]}
            components={{
              p: ({ node, children }) => {
                return <p>{children}</p>;
              },
              code({ language, children }) {
                return (
                  <SyntaxHighlighter style={docco} language={language}>
                    {children[0]}
                  </SyntaxHighlighter>
                );
              },
              image: ({ alt, src, title }) => (
                <Image
                  alt={alt}
                  src={src}
                  title={title}
                  style={{ maxWidth: '475px' }}
                />
              ),
            }}
          >
            {PagesContent}
          </ReactMarkdown>
        )}
      </div>
      {showHiddenModal && <IssueCreateModal modalObj={modalObj} isCreatePage />}
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
