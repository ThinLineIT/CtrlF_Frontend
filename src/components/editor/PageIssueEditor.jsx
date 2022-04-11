import Renderer from '../renderer/EditRenderer';
import EditorBtnItem from './EditorBtnItem';
import { useState, useEffect, useRef } from 'react';
import { EDIT_BTNS } from '../../utils/useEditorBtns';
import insertTextAtCursor from 'insert-text-at-cursor';

import styles from '../../styles/markdown/editor.module.css';
import UseImageUploader from '../../utils/useImageUploader';

export default function PageIssueEditor({
  contents,
  setContents,
  reason,
  setReason,
}) {
  const inputRef = useRef();
  const onPageSummaryHandler = (event) => {
    setReason(event.target.value);
  };

  const saveContents = (data) => {
    setContents(data);
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

  const WRITE_OR_PREVIEW = ['Write', 'Preview'];

  useEffect(() => {
    const input_file = document.getElementById('img-upload');
    input_file.addEventListener('change', input_update);

    return () => {
      input_file.removeEventListener('change', input_update);
    };
  }, []);

  return (
    <form className={styles.editor_wrap}>
      <textarea
        type="text"
        placeholder="resaon"
        onChange={onPageSummaryHandler}
        className={styles.users_summary}
        value={reason}
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
              value={contents}
              onKeyDown={useTab}
              placeholder="page content"
              className={styles.users_textarea}
              onChange={(event) => saveContents(event.target.value)}
            />
          </>
        ) : (
          <Renderer contents={contents} />
        )}
      </span>
    </form>
  );
}
