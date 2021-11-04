import Image from 'next/image';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Editor from '../../../../../pages/Editor';
import ModalPreparing from '../../modal/modal_preparing';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { useRecoilValue, useRecoilState, useSetRecoilState } from 'recoil';
import styles from '../../../../styles/items/notes/noteDetail/detail_contents.module.css';
import {
  pageDetailIssueId, // 이슈로 이동하기 위한 atom
  topicName,
  modalTitle,
  pageContent,
  okBtnActive,
  preparingModal,
  isPageApproved,
  ModifyPageContent,
  firstVisiblePageTitle,
} from '../../../../store/atom';

import { useRouter } from 'next/router';

export default function DetailContents() {
  const issueId = useRecoilValue(pageDetailIssueId); // 이슈로 이동하기 위한 atom
  const [showHiddenModal, setShowHiddenModal] = useRecoilState(preparingModal);
  const topicTitle = useRecoilValue(topicName);
  const [slideImg, setSlideImg] = useState(false);
  const PagesContent = useRecoilValue(pageContent);
  const modifyPage = useRecoilValue(ModifyPageContent);
  const pageTitle = useRecoilValue(firstVisiblePageTitle);
  const setIsOkBtnActive = useSetRecoilState(okBtnActive);
  const setPageRequestTitle = useSetRecoilState(modalTitle);

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
          {modifyPage ? (
            <input
              className={styles.info_item_page}
              onChange={onPageTitlehandler}
              placeholder="TITLE"
            />
          ) : (
            <div className={styles.info_item_page}>{pageTitle}</div>
          )}
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
            </div>
          ) : (
            <span className={styles.clipBoard}>
              <button className={styles.icons_share} onClick={copyClipboard} />
              {!isPageApprove && (
                <button onClick={moveToIssue} className={styles.icons_issue}>
                  관련된 이슈 확인
                </button>
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
