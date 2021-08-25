import { useRef } from 'react';
import { useRouter } from 'next/dist/client/router';
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

export default function DetailContents() {
  const router = useRouter();
  const textareaRef = useRef();
  const noteTitleRef = useRef();

  const myPageList = useRecoilValue(pageList);
  const myPageContent = useRecoilValue(pageContent);
  const [modifyPage, setModifyPage] = useRecoilState(ModifyPageContent);

  const [content, setcontent] = useRecoilState(requestNoteContent);
  const [requestTitle, setRequestTitle] = useRecoilState(requestNoteTitle);
  const [requestData, setRequestData] = useRecoilState(userRequestDataList);

  const routerIssues = () => {
    router.push('/requestIssue');
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
            <button className={styles.icons_bookmark} onClick={routerIssues} />
            <button className={styles.icons_share} />
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
          <p>{myPageContent}</p>
        )}
      </span>
    </div>
  );
}
