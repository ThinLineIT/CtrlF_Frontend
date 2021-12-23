import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import Renderer from '../Renderer/Renderer';
import EditorBtnItem from './EditorBtnItem';
import { useState, useEffect, useRef } from 'react';
import { EDIT_BTNS } from '../../../utils/useEditorBtns';
import insertTextAtCursor from 'insert-text-at-cursor';
import { pageCreateApi } from '../../../utils/PageCreate';
import {
  addNewPage,
  topicIndex,
  pageupdate,
  issueDetailPageId,
} from '../../../store/atom';
import styles from '../../../styles/markdown/Editor.module.css';
import UseImageUploader from '../../../utils/useImageUploader';
import { pageUpdateApi } from '../../../utils/pageDetailFetch';

export default function MarkdownEditor(props) {
  const inputRef = useRef();
  const { pageCreateTitle } = props;
  const [pageCreateSummary, setPageCreateSummary] = useState('');
  const onPageSummaryHandler = (event) => {
    setPageCreateSummary(event.target.value);
  };

  const router = useRouter();
  const topicId = useRecoilValue(topicIndex);
  const nowPageId = useRecoilValue(issueDetailPageId);

  const pageSubmit = () => {
    const { id } = router.query;
    if (!updatePage) {
      const postingData = {
        topic_id: +topicId,
        title: pageCreateTitle,
        content: input,
        reason: pageCreateSummary,
      };
      pageCreateApi(postingData);
    } else if (updatePage) {
      const newPostingData = {
        new_title: pageCreateTitle,
        new_content: input,
        reason: pageCreateSummary,
      };
      pageUpdateApi(nowPageId, newPostingData).then(() =>
        router.push(`/notes/${id}`)
      );
    }
  };

  const [input, setInput] = useState('');
  const saveContents = (data) => {
    setInput(data);
  };

  const [preview, setPreiview] = useState(false);
  const onChangeStatus = (event, status) => {
    event.preventDefault();
    status == 'Write' ? setPreiview(false) : setPreiview(true);
  };

  const input_update = (e) => {
    UseImageUploader.getUrl(e.target.files[0]).then((res) => {
      UseImageUploader.imgAdding(res.data.image_url, saveContents);
    });
  };

  const dropImg = (e) => {
    e.preventDefault();
    const { files } = e.dataTransfer;
    UseImageUploader.getUrl(files[0]).then((res) => {
      UseImageUploader.imgAdding(res.data.image_url, saveContents);
    });
  };

  const useTab = (e) => {
    if (e.key == 'Tab') {
      e.preventDefault();
      const TextArea = document.getElementById('textarea');
      insertTextAtCursor(TextArea, `  `);
    }
  };

  const content = props.contents;
  const WRITE_OR_PREVIEW = ['Write', 'Preview'];
  const addNewPageContent = useRecoilValue(addNewPage);
  const updatePage = useRecoilValue(pageupdate);
  let previewContents = !addNewPageContent
    ? input == null
      ? content
      : input
    : input;

  useEffect(() => {
    updatePage ? setInput(content) : null;

    const input_file = document.getElementById('img-upload');
    input_file.addEventListener('change', input_update);

    return () => {
      input_file.removeEventListener('change', input_update);
    };
  }, []);

  return (
    <form className={styles.editor_wrap}>
      <button
        onClick={(e) => pageSubmit(e)}
        id="pageCreate"
        style={{ display: 'none' }}
      >
        페이지 생성하기
      </button>
      <textarea
        type="text"
        placeholder={updatePage ? 'resaon' : 'summary'}
        onChange={onPageSummaryHandler}
        className={styles.users_summary}
      />
      <span as="h3" className={styles.detail_content}>
        <div className={styles.buttonsWrap}>
          <span className={styles.editor_button}>
            {WRITE_OR_PREVIEW.map((button, i) => (
              <button
                key={i}
                className={styles.statusBtn}
                onClick={(e) => onChangeStatus(e, button)}
              >
                {button}
              </button>
            ))}
          </span>
          <div className={styles.buttonsContainer}>
            {EDIT_BTNS.map((button, index) => (
              <EditorBtnItem
                key={index}
                icon={button}
                saveContents={saveContents}
                inputRef={inputRef}
              />
            ))}
            <input
              ref={inputRef}
              type="file"
              name="file"
              accept="image/*"
              id="img-upload"
              className={styles.img_upload}
            />
          </div>
        </div>
        {!preview ? (
          <>
            <textarea
              id="textarea"
              onDrop={dropImg}
              value={input}
              onKeyDown={useTab}
              placeholder="page content"
              className={styles.users_textarea}
              onChange={(event) => saveContents(event.target.value)}
            ></textarea>
          </>
        ) : (
          <Renderer contents={previewContents} />
        )}
      </span>
    </form>
  );
}
