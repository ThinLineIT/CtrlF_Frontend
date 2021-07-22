import styles from '../styles/app.module.css';
import '../styles/globals.css';
import 'semantic-ui-css/semantic.min.css';
import Topbar from '../component/layout/topbar';
import Footer from '../component/layout/Footer';
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
          <Topbar />
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
