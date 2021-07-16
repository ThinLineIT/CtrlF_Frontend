import '/styles/globals.css';
import 'semantic-ui-css/semantic.min.css';
import SearchHeader from '../src/component/SearchHeader';
import Footer from '../src/component/Footer';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <div
        style={{
          width: '100%',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            marginTop: '7px',
            marginBottom: '14px',
            height: '79px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
          }}
        >
          <SearchHeader />
        </div>
        <div
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            padding: '0 1rem',
            borderTop: '1px solid #999',
            textAlign: 'center',
          }}
        >
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </RecoilRoot>
  );
}
export default MyApp;
