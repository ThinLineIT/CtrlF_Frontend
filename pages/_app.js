import '/styles/globals.css';
import styles from './_app.module.css';
import 'semantic-ui-css/semantic.min.css';
import SearchHeader from '../src/component/SearchHeader';
import Footer from '../src/component/Footer';
import {
  RecoilRoot,
  // atom,
  // selector,
  // useRecoilState,
  // useRecoilValue,
} from 'recoil';

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <div className={styles.container}>
        <div className={styles.searchHeader}>
          <SearchHeader />
        </div>
        <div className={styles.component}>
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </RecoilRoot>
  );
}
export default MyApp;
