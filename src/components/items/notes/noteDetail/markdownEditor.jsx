import Image from 'next/image';
import { useState } from 'react';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import { useRecoilValue } from 'recoil';
import ReactMarkdown from 'react-markdown';
import { addNewPage, topicIndex } from '../../../../store/atom';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import styles from '../../../../styles/items/notes/noteDetail/markdownEditor.module.css';

// import { pageCreateApi } from '../../../../utils/PageCreate';

export default function MarkdownEditor(props) {
  const content = props.contents;
  const [input, setInput] = useState(null);
  const [preview, setPreiview] = useState(false);
  const addNewContent = useRecoilValue(addNewPage);

  // const topic_id = useRecoilValue(topicIndex);
  // const [newPageTitle, setNewPageTitle] = useState('');
  // const [newPageSummary, setNewPageSummary] = useState('');

  // const onPageTitleHandler = (event) => {
  //   setNewPageTitle(event.currentTarget.value);
  // };

  // const onPageSummaryHandler = (event) => {
  //   setNewPageSummary(event.currentTarget.value);
  // };
  // 위 두가지는 임시로 넣어놓은 Input 창입니다.

  // const pageCreate = () => {
  //   pageCreateApi(newPageTitle, newPageSummary, input, topic_id);
  // };

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

  return (
    <div className={styles.editor_wrap}>
      {/* <input type="text" placeholder="title" onChange={onPageTitleHandler} />
      <input
        type="text"
        placeholder="summary"
        onChange={onPageSummaryHandler}
      />
      <button onClick={pageCreate}>페이지 생성하기</button> */}
      <span className={styles.editor_button}>
        <button onClick={() => onChangeStatus('write')}>Write</button>
        <button onClick={() => onChangeStatus('preview')}>Preview</button>
      </span>
      <span as="h3" className={styles.detail_content}>
        {!preview ? (
          <>
            {!addNewContent && (
              <input
                type="text"
                placeholder="수정 사유"
                className={styles.users_input}
                required
              />
            )}
            <textarea
              name="text"
              value={input}
              placeholder="page content"
              onKeyDown={useTab}
              onChange={(e) => setInput(e.target.value)}
              className={styles.users_textarea}
              required
              autoFocus
            >
              {addNewContent ? null : content}
            </textarea>
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
