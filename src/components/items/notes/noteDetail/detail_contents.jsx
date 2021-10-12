import Image from 'next/image';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import MarkdownEditor from './markdownEditor';
import ModalPreparing from '../../modal/modal_preparing';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { useRecoilValue, useRecoilState, useSetRecoilState } from 'recoil';
import styles from '../../../../styles/items/notes/noteDetail/detail_contents.module.css';
import {
  topicName,
  modalTitle,
  pageContent,
  okBtnActive,
  preparingModal,
  ModifyPageContent,
  firstVisiblePageTitle,
} from '../../../../store/atom';

export default function DetailContents() {
  const [showHiddenModal, setShowHiddenModal] = useRecoilState(preparingModal);

  const topicTitle = useRecoilValue(topicName);
  const [slideImg, setSlideImg] = useState(false);
  const PagesContent = useRecoilValue(pageContent);
  const modifyPage = useRecoilValue(ModifyPageContent);
  const pageTitle = useRecoilValue(firstVisiblePageTitle);
  const setIsOkBtnActive = useSetRecoilState(okBtnActive);
  const setPageRequestTitle = useSetRecoilState(modalTitle);

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

  const resetPageContentAndSendData = () => {
    setPageRequestTitle('페이지');
    setIsOkBtnActive(true);
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
          <div className={styles.info_item_page}>{pageTitle}</div>
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
          maxWidth: '100%',
        }}
      >
        {modifyPage ? (
          <MarkdownEditor contents={PagesContent} />
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
              image: ({ alt, src }) => (
                <Image alt={alt} src={src} style={{ maxWidth: 475 }} />
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
