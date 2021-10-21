import Image from 'next/image';
import { useRef, useState } from 'react';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import { useRecoilValue } from 'recoil';
import ReactMarkdown from 'react-markdown';
import { addNewPage } from '../src/store/atom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import styles from '../src/styles/Editor.module.css';
import Buttons from '../src/components/editors/buttons';

export default function MarkdownEditor(props) {
  const content = props.contents;
  const contentRef = useRef();
  const [input, setInput] = useState('');
  const [preview, setPreiview] = useState(false);
  const addNewContent = useRecoilValue(addNewPage);

  const useTab = (e) => {
    if (e.key == 'Tab') {
      e.preventDefault();
    }
  };

  const onChangeStatus = (status) => {
    status == 'write' ? setPreiview(false) : setPreiview(true);
    if (status == 'preview') {
      setPreiview(true);
    }
  };

  const dropFunc = (e) => {
    e.preventDefault();
    var data = e.dataTransfer.getData('Text');
    e.target.appendChild(document.getElementById(data));
    document.getElementById('demo').innerHTML = '##';
  };

  const dragOverFunc = (e) => {
    e.preventDefault();
  };

  const dragFunc = (e) => {
    document.getElementById('demo').innerHTML = '####';
  };

  const dragStartFunc = (e) => {
    e.dataTransfer.setData('Text', e.target.id);
  };

  return (
    <div className={styles.editor_wrap}>
      <textarea
        type="text"
        placeholder="summary"
        className={styles.users_summary}
        required
        autoComplete="off"
        autoFocus
      />
      <span as="h3" className={styles.detail_content}>
        <div className={styles.buttonsWrap}>
          <span className={styles.editor_button}>
            <button onClick={() => onChangeStatus('write')}>Write</button>
            <button onClick={() => onChangeStatus('preview')}>Preview</button>
          </span>
          <Buttons />
        </div>
        {!preview ? (
          <>
            <textarea
              name="text"
              value={input}
              ref={contentRef}
              placeholder="page content"
              onKeyDown={useTab}
              onDrop={(e) => dropFunc(e)}
              onChange={(e) => setInput(e.target.value)}
              className={styles.users_textarea}
              required
              autoFocus={false}
            >
              <p
                onDragStart={(e) => dragStartFunc(e)}
                onDrag={(e) => dragFunc(e)}
                draggable="true"
                id="dragtarget"
              >
                {addNewContent ? null : content}
              </p>
            </textarea>
            <div
              className="droptarget"
              onDrop={(e) => dropFunc(e)}
              onDragOver={(e) => dragOverFunc(e)}
            ></div>
            <p id="demo"></p>
          </>
        ) : (
          <ReactMarkdown
            className={styles.preview}
            rehypePlugins={[rehypeRaw]}
            remarkPlugins={[remarkGfm]}
            // eslint-disable-next-line react/no-children-prop
            children={
              !addNewContent ? (input == null ? content : input) : input
            }
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
          />
        )}
      </span>
    </div>
  );
}
