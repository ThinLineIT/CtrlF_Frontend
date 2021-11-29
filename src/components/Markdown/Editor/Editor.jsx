import axios from 'axios';
import { useRecoilValue } from 'recoil';
import Renderer from '../Renderer/Renderer';
import { useState, useEffect } from 'react';
import BtnsDict from '../../../utils/useEditorBtns';
import insertTextAtCursor from 'insert-text-at-cursor';
import { pageCreateApi } from '../../../utils/PageCreate';
import { addNewPage, topicIndex } from '../../../store/atom';
import styles from '../../../styles/markdown/Editor.module.css';

export default function MarkdownEditor(props) {
  const [pageCreateSummary, setPageCreateSummary] = useState('');
  const onPageSummaryHandler = (event) => {
    setPageCreateSummary(event.target.value);
  };

  const topicId = useRecoilValue(topicIndex);
  const createPage = () => {
    pageCreateApi(props.pageCreateTitle, pageCreateSummary, input, topicId);
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

  const btnsObj = new BtnsDict();
  const addFuncButtons = (event, key) => {
    event.preventDefault();
    const TextArea = document.getElementById('textarea');
    return btnsObj.useElement(TextArea, saveContents, key);
  };

  const input_update = (e) => {
    getUrl(e.target.files[0]).then((res) => {
      imgAdding(res.data.image_url);
    });
  };

  const getUrl = async (file) => {
    if (file && file.size < 5000000) {
      const body = new FormData();
      body.append('image', file);
      const result = await axios({
        method: 'post',
        url: `${
          process.env.NODE_ENV === 'development'
            ? process.env.NEXT_PUBLIC_DEVELOP_API_BASE_URL
            : process.env.NEXT_PUBLIC_RELEASE_API_BASE_URL
        }actions/images/`,
        data: body,
      })
        .then((res) => res)
        .catch((err) => err);
      return result;
    } else alert('파일 용량 초과');
  };

  const dropImg = (e) => {
    e.preventDefault();
    const { files } = e.dataTransfer;
    getUrl(files[0]).then((res) => {
      imgAdding(res.data.image_url);
    });
  };

  const imgAdding = (url) => {
    const TextArea = document.getElementById('textarea');
    const origin = TextArea.value;
    const sStart = TextArea.selectionStart;
    const sEnd = TextArea.selectionEnd;

    TextArea.value =
      origin.substring(0, sStart) +
      `![img](${url})` +
      origin.substring(sEnd, origin.length);
    saveContents(TextArea.value);
    TextArea.focus();
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
  let previewContents = !addNewPageContent
    ? input == null
      ? content
      : input
    : input;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const input_file = document.getElementById('img-upload');
    input_file.addEventListener('change', input_update);

    return () => {
      input_file.removeEventListener('change', input_update);
    };
  }, []);

  return (
    <form className={styles.editor_wrap}>
      <button onClick={createPage}>페이지 생성하기</button>
      <textarea
        type="text"
        placeholder="summary"
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
            {btnsObj.ALL_EDIT_BTNS.map((button, i) => (
              <button
                key={i}
                className={styles.btn}
                onClick={(e) => addFuncButtons(e, button)}
              >
                {button}
              </button>
            ))}
            <input type="file" id="img-upload" />
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
            >
              {addNewPageContent ? null : content}
            </textarea>
          </>
        ) : (
          <Renderer contents={previewContents} />
        )}
      </span>
    </form>
  );
}
