import { useRef, useState } from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import {
  pageList,
  pageContent,
  requestNoteTitle,
  ModifyPageContent,
  requestNoteContent,
  userRequestDataList,
} from '../../../../store/atom';
import styles from '../../../../styles/items/notes/noteDetail/detail_contents.module.css';
// import ReactMarkdown from 'react-markdown';

export default function DetailContents() {
  const textareaRef = useRef();
  const noteTitleRef = useRef();

  const myPageList = useRecoilValue(pageList);
  const [slideImg, setSlideImg] = useState(false);
  const myPageContent = useRecoilValue(pageContent);
  const [modifyPage, setModifyPage] = useRecoilState(ModifyPageContent);

  const [content, setcontent] = useRecoilState(requestNoteContent);
  const [requestTitle, setRequestTitle] = useRecoilState(requestNoteTitle);
  const [requestData, setRequestData] = useRecoilState(userRequestDataList);

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
    setModifyPage(false);
    setRequestData([
      ...requestData,
      {
        noteName: 'ADD PAGE',
        title: requestTitle,
        requestContent: content,
      },
    ]);
  };

  const onInputChange = () => {
    setcontent(textareaRef.current.value);
    setRequestTitle(noteTitleRef.current.value);
  };

  return (
    <div className={styles.content}>
      <div className={styles.info_item}>
        <div className={styles.info_item_topic}>TOPIC</div>
        <select className={styles.info_item_page}>
          {myPageList.map((item) => (
            <option key={item.id}>{item.title}</option>
          ))}
        </select>
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
          <>
            <button className={styles.icons_share} onClick={copyClipboard} />
            <div
              className={`${
                slideImg ? `${styles.slideActive}` : `${styles.slideHidden}`
              }`}
            />
          </>
        )}
      </div>
      <span as="h3" className={styles.detail_content}>
        {modifyPage ? (
          <>
            <input
              type="text"
              ref={noteTitleRef}
              onChange={onInputChange}
              placeholder="수정 사유"
              className={styles.users_input}
              required
            />
            <textarea
              name="text"
              ref={textareaRef}
              onChange={onInputChange}
              placeholder="page content"
              className={styles.users_textarea}
              required
            />
          </>
        ) : (
          // <ReactMarkdown>{myPageContent}</ReactMarkdown>
          <p>{myPageContent}</p>
        )}
      </span>
    </div>
  );
}
