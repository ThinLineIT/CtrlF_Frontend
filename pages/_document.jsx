import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ko">
        <Head />
        <body>
          <Main />
          <style jsx global>{`
            #__next {
              height: 100%;
            }
          `}</style>
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default MyDocument;
