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

import { useRouter } from 'next/router';

export default function DetailContents() {
  const [showHiddenModal, setShowHiddenModal] = useRecoilState(preparingModal);

  const topicTitle = useRecoilValue(topicName);
  const [slideImg, setSlideImg] = useState(false);
  const PagesContent = useRecoilValue(pageContent);
  const modifyPage = useRecoilValue(ModifyPageContent);
  const pageTitle = useRecoilValue(firstVisiblePageTitle);
  const setIsOkBtnActive = useSetRecoilState(okBtnActive);
  const setPageRequestTitle = useSetRecoilState(modalTitle);
  // const [newPageTitle, setNewPageTitle] = useState(''); // 페이지 생성을 위한 테스트입니다.
  // const [newPageSummary, setNewPageSummary] = useState(''); // 페이지 생성을 위한 테스트입니다.

  // const onPageTitleHandler = (event) => {
  //   setNewPageTitle(event.currentTarget.value);
  // };
  const router = useRouter();
  const moveToIssue = () => {
    router.push('/issue');
  };
  // const onPageSummaryHandler = (event) => {
  //   setNewPageSummary(event.currentTarget.value);
  // };
  // // 위 두가지는 임시로 넣어놓은 Input 창입니다.

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
            <div>
              <button
                className={styles.buttonOk}
                onClick={resetPageContentAndSendData}
              >
                확인
              </button>

              {/* 임시 이슈 이동 버튼입니다 */}
              {/* <input
                type="text"
                placeholder="title"
                onChange={onPageTitleHandler}
              />
              <input
                type="text"
                placeholder="summary"
                onChange={onPageSummaryHandler}
              /> */}
            </div>
          ) : (
            <span className={styles.clipBoard}>
              <button className={styles.icons_share} onClick={copyClipboard} />
              <button onClick={moveToIssue}>관련된 이슈 보기</button>
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
          width: '55vw',
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
