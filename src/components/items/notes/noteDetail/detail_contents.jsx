import React, { useState } from 'react';
import remarkGfm from 'remark-gfm';
import ReactMarkdown from 'react-markdown';
import MarkdownEditor from './markdownEditor';
import ModalPreparing from '../../modal/modal_preparing';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
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
  const myPageContent = useRecoilValue(pageContent);
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
      <div className={styles.info_item}>
        <div className={styles.info_item_topic}>{topicTitle}</div>
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
          <span>
            <button className={styles.icons_share} onClick={copyClipboard} />
            <span
              className={`${
                slideImg ? `${styles.slideActive}` : `${styles.slideHidden}`
              }`}
            />
          </span>
        )}
      </div>
      <>
        {modifyPage ? (
          <MarkdownEditor contents={myPageContent} />
        ) : (
          <ReactMarkdown
            children={myPageContent}
            className={styles.markdown_renderer}
            remarkPlugins={[remarkGfm]}
            components={{
              code: CodeBlock,
            }}
          />
        )}
      </>
      {showHiddenModal && <ModalPreparing />}
    </div>
  );
}

const CodeBlock = ({ value, language }) => {
  return (
    <SyntaxHighlighter language={language ?? null} style={docco}>
      {value ?? ''}
    </SyntaxHighlighter>
  );
};
