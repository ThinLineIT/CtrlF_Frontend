import toc from 'remark-toc';
import gfm from 'remark-gfm';
import emoji from 'remark-emoji';
import rehypeRaw from 'rehype-raw';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import styles from '../../../styles/markdown/Renderer.module.css';
import 'github-markdown-css/github-markdown.css';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';

export default function Renderer(props) {
  const content = props.contents;

  return (
    <section className={styles.appContainer}>
      <article className={styles.mdContainer}>
        <MarkDownStyle>
          <ReactMarkdown
            renderers={renderers}
            className="markdown-body"
            rehypePlugins={[rehypeRaw]}
            plugins={[gfm, emoji, toc]}
          >
            {`${content}`}
          </ReactMarkdown>
        </MarkDownStyle>
      </article>
    </section>
  );
}

const MarkDownStyle = styled.div`
  & > pre {
    word-break: break-all;
    overflow: hidden;
  }
  margin: 2.8em 1.5em;
  display: block;

  max-width: 100%;
  height: 100%;
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
  const maxWidth = 477;
  return <Image src={src} alt={src} width={maxWidth} />;
};

const renderers = {
  code: ({ language, value }) => {
    return (
      <SyntaxHighlighter style={prism} language={language}>
        {value}
      </SyntaxHighlighter>
    );
  },
  heading: headingRenderer,
  image: ({ src }) => <ImageBlock src={src} />,
};
