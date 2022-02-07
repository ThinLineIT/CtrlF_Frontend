import toc from 'remark-toc';
import gfm from 'remark-gfm';
import emoji from 'remark-emoji';
import rehypeRaw from 'rehype-raw';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import styles from '../../styles/markdown/renderStyle.module.css';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';

export default function Renderer(props) {
  const content = props.contents;

  return (
    <MarkDownStyle>
      <ReactMarkdown
        components={renderers}
        className={styles.markdown}
        rehypePlugins={[rehypeRaw]}
        plugins={[gfm, emoji, toc]}
      >
        {`${content}`}
      </ReactMarkdown>
    </MarkDownStyle>
  );
}

const MarkDownStyle = styled.div`
  & > pre {
    word-break: break-all;
    overflow: hidden;
  }
  margin: 2.8em 1.5em;
  display: block;

  max-width: 80%;
  height: 100%;
  padding-bottom: 64px;
  padding-top: 16px;
  padding-bottom: 16px;
  object-fit: cover;
  object-position: center;
  transition-delay: 500ms;
`;

function flatten(text, child) {
  return typeof child === 'string'
    ? text + child
    : React.Children.toArray(child.props.children).reduce(flatten, text);
}

function headingRenderer({ level, children }) {
  const childrenArr = React.Children.toArray(children);
  const text = childrenArr.reduce(flatten, '');
  const slug = text.toLowerCase().replace(/\./g, '').replace(/\W/g, '-');

  const header = [
    React.createElement('h' + level, { key: slug, id: slug }, children),
  ];
  return header;
}

export const ImageBlock = (props) => {
  const { src } = props;
  return <Image src={src} alt={src} />;
};

const renderers = {
  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || '');
    return !inline && match ? (
      <SyntaxHighlighter
        children={String(children).replace(/\n$/, '')}
        style={prism}
        language={match[1]}
        PreTag="div"
        {...props}
      />
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
  heading: headingRenderer,
  image: ({ src }) => <ImageBlock src={src} />,
};
