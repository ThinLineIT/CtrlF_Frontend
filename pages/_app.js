import '../styles/globals.css';
import styles from '../styles/Home.module.css';
import 'semantic-ui-css/semantic.min.css';
import Top from './src/components/Top.js';
import Footer from './src/components/Footer.js';

function Ctrl_F({ Component, pageProps }) {
  return (
    <div className={styles.container}>
      <Top />
      <Component {...pageProps} />
      <main className={styles.main}>
        <h1 className={styles.title}>
          현재 모아진 아이디어{' '}
          <a href="https://nextjs.org">
            <b>30</b>
          </a>
        </h1>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Ctrl_F;
