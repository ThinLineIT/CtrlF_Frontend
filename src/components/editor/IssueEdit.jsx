import { useRecoilValue, useRecoilState } from 'recoil';
import { ModifyPageContent } from '../../store/atom';
import { fetchPageDetail } from '../../utils/pageDetailFetch';
import { pageIssue } from '../../store/issueAtom';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import PageIssueEditor from './PageIssueEditor';
import styles from '../../styles/items/notes/noteDetail/detail_contents.module.css';
import axios from 'axios';
import { issueUpdateApi } from '../../utils/issueApi';

export default function IssueEdit({ setIsPageIssueEdit }) {
  const modifyPage = useRecoilValue(ModifyPageContent);
  const [issue, setIssue] = useRecoilState(pageIssue);
  const [title, setTitle] = useState(issue?.title);
  const [firstLoad, setFirstLoad] = useState(true);
  const [contents, setContents] = useState('');
  const [reason, setReason] = useState(issue?.reason);
  const router = useRouter();

  const editPageIssue = async () => {
    const result = await issueUpdateApi(issue.id, title, contents, reason);

    console.log(result);
  };

  const onTitleHandler = (event) => {
    setTitle(event.target.value);
  };

  const getNote = async () => {
    const { content } = await fetchPageDetail(issue.page_id, issue.version_no);
    setContents(content);
  };

  useEffect(() => {
    getNote();
  }, []);

  useEffect(() => {
    setFirstLoad(false);
    if (!firstLoad && modifyPage !== null) {
      setIsPageIssueEdit(false);
    }
    return () => {
      console.log(router.asPath.split('?')[0]);
      router.replace(router.asPath.split('?')[0]);
      // setIssue("")
    };
  }, [modifyPage]);

  return (
    <>
      <article className={styles.topBar}>
        <section className={`${styles.info_item} ${styles.info_item_edit}`}>
          <input
            type="text"
            className={styles.info_item_page}
            placeholder="TITLE"
            value={title}
            onChange={onTitleHandler}
          />
        </section>
        <section className={styles.icons}>
          <div>
            <button className={styles.buttonOk} onClick={editPageIssue}>
              확인
            </button>
          </div>
        </section>
      </article>
      <PageIssueEditor
        contents={contents}
        setContents={setContents}
        reason={reason}
        setReason={setReason}
      />
    </>
  );
}
