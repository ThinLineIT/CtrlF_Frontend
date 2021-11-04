import Image from 'next/image';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Editor from '../../../../../pages/Editor';
import ModalPreparing from '../../modal/modal_preparing';
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
  firstVisiblePageTitle,
} from '../../../../store/atom';

export default function DetailContents() {
  const isPageApprove = useRecoilValue(isPageApproved);
  const modifyPage = useRecoilValue(ModifyPageContent);
  const setIsUserSubmit = useSetRecoilState(okBtnActive);
  const [showHiddenModal, setShowHiddenModal] = useRecoilState(preparingModal);

  const topicTitle = useRecoilValue(topicName);
  const PagesContent = useRecoilValue(pageContent);
  const pageTitle = useRecoilValue(firstVisiblePageTitle);

  const [slideImg, setSlideImg] = useState(false);
  const copyClipboard = () => {
    const dummy = document.createElement('input');
    const text = location.href;
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.body.removeChild(dummy);
    setSlideImg(true);
    setTimeout(fadeOutSlideImg, 1000);
  };
  const fadeOutSlideImg = () => {
    setSlideImg(false);
  };

  const resetPageContentAndSendData = () => {
    setIsUserSubmit(true);
    setShowHiddenModal(true);
  };

  return (
    <div className={styles.content}>
      <div className={styles.topicBar}>
        <div className={styles.info_item}>
          <div
            className={`${styles.info_item_topic} ${getFontSize(topicTitle)}
          `}
          >
            {topicTitle}
          </div>
          {modifyPage ? (
            <input className={styles.info_item_page} placeholder="TITLE" />
          ) : (
            <div className={styles.info_item_page}>{pageTitle}</div>
          )}
        </div>
        <div className={styles.icons}>
          {modifyPage ? (
            <button
              className={styles.buttonOk}
              onClick={resetPageContentAndSendData}
            >
              확인
            </button>
          ) : (
            <span className={styles.clipBoard}>
              <button className={styles.icons_share} onClick={copyClipboard} />
              {!isPageApprove && (
                <button className={styles.icons_issue}>관련된 이슈 확인</button>
              )}
              <span
                className={`${
                  slideImg ? `${styles.slideActive}` : `${styles.slideHidden}`
                }`}
              />
            </span>
          )}
        </div>
      </div>
      <div
        style={{
          width: '90%',
        }}
      >
        {modifyPage ? (
          <Editor contents={PagesContent} />
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
      {showHiddenModal && <ModalPreparing />}
    </div>
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
