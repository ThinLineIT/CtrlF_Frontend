import React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

const MarkDownStyle = styled.div`
  font-size: 1rem;
  line-height: 2.5rem;
`;

const markdown = `
# 헤딩

**굵게**

\`\`\`
  코드 블럭
\`\`\`

*기울이기*

글자 \`배경색\`
  
> 인용문
`;

function MarkdownRenderer() {
  return (
    <MarkDownStyle>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </MarkDownStyle>
  );
}

export default MarkdownRenderer;
