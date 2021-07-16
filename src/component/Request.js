import { useRouter } from 'next/router';

export default function Request() {
  const router = useRouter();

  return (
    <div
      style={{
        border: '0.2px solid #FFFFFF',
        borderRadius: '5px/5px',
        boxShadow: '1px 1px 10px  grey',
      }}
    >
      <span>
        <h1
          style={{
            fontSize: '1.1rem',
            fontWeight: 'bolder',
            marginTop: '16px',
          }}
        >
          요청 검토 중인 내용
        </h1>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <button
            onClick={() => {
              router.push('../view/id');
            }}
            style={{
              height: '4rem',
              border: '1px solid white',
              display: 'block',
              fontSize: '1.3rem ',
              fontWeight: 'bold',
              margin: '10px 0.8rem',
              lineHeight: '4rem',
              textAlign: 'left',
              borderRadius: '4%',
              paddingLeft: '10px',
              background: '#C7D6F5',
              borderBottomRightRadius: '25%',
            }}
          >
            TITLE
          </button>
          <button
            onClick={() => {
              router.push('../view/id');
            }}
            style={{
              height: '4rem',
              border: '1px solid white',
              display: 'block',
              fontSize: '1.3rem ',
              fontWeight: 'bold',
              margin: '10px 0.8rem',
              lineHeight: '4rem',
              textAlign: 'left',
              borderRadius: '4%',
              paddingLeft: '10px',
              background: '#D1E9FE',
              borderBottomRightRadius: '25%',
            }}
          >
            TITLE
          </button>
          <button
            onClick={() => {
              router.push('../view/id');
            }}
            style={{
              height: '4rem',
              border: '1px solid white',
              display: 'block',
              fontSize: '1.3rem ',
              fontWeight: 'bold',
              margin: '10px 0.8rem',
              lineHeight: '4rem',
              textAlign: 'left',
              borderRadius: '4%',
              background: '#B6E0EE',
              paddingLeft: '10px',
              borderBottomRightRadius: '25%',
            }}
          >
            TITLE
          </button>
          <button
            onClick={() => {
              router.push('../view/id');
            }}
            style={{
              height: '4rem',
              border: '1px solid white',
              display: 'block',
              fontSize: '1.3rem ',
              fontWeight: 'bold',
              margin: '10px 0.8rem',
              lineHeight: '4rem',
              textAlign: 'left',
              borderRadius: '4%',
              background: '#B6E0EE',
              borderBottomRightRadius: '25%',
              paddingLeft: '10px',
            }}
          >
            TITLE
          </button>
          <button
            onClick={() => {
              router.push('../view/id');
            }}
            style={{
              height: '4rem',
              border: '1px solid white',
              display: 'block',
              fontSize: '1.3rem ',
              fontWeight: 'bold',
              margin: '10px 0.8rem',
              lineHeight: '4rem',
              textAlign: 'left',
              borderRadius: '4%',
              background: '#C7D6F5',
              borderBottomRightRadius: '25%',
              paddingLeft: '10px',
            }}
          >
            TITLE
          </button>
          <button
            onClick={() => {
              router.push('../view/id');
            }}
            style={{
              height: '4rem',
              border: '1px solid white',
              display: 'block',
              fontSize: '1.3rem ',
              fontWeight: 'bold',
              margin: '10px 0.8rem',
              lineHeight: '4rem',
              textAlign: 'left',
              background: '#D1E9FE',
              borderRadius: '4%',
              borderBottomRightRadius: '25%',
              paddingLeft: '10px',
            }}
          >
            TITLE
          </button>
        </div>
      </span>
    </div>
  );
}
