import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import styles from '../../../styles/items/notes/noteDetail/detail_contents.module.css';

const Renderer = (props) => {
  const content = props.contents;
  console.log(content);
  return (
    <ReactMarkdown
      className={styles.markdown_renderer}
      rehypePlugins={[rehypeRaw]}
      remarkPlugins={[remarkGfm]}
      components={{
        code: CodeBlock,
        blockquote: BlockQuote,
      }}
      style={{ wordWrap: 'break-word' }}
    >
      {content}
    </ReactMarkdown>
  );
};

export default Renderer;

const Pre = styled.pre`
  background-color: rgb(249, 249, 251);
  padding: 2rem;
  line-height: 1.5rem;
  margin: 2rem auto;
`;

function CodeBlock({ children: value }) {
  return (
    <Pre>
      <code>{value}</code>
    </Pre>
  );
}

const BlockQuoteStyle = styled.div`
  line-height: 3rem;
  padding: 0.7rem;
  border-left: 5.5px solid rgb(112, 105, 243);
  background-color: rgb(249, 249, 251);
`;

function BlockQuote({ children }) {
  return <BlockQuoteStyle>{children ?? ''}</BlockQuoteStyle>;
}
