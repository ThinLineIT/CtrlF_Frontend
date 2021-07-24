import { useRouter } from 'next/router';
import styles from '../../../styles/items/input/recentwork.module.css';

export default function Resentwork({ lists }) {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <span>
        <h1 className={styles.title}>요청 검토 중인 내용</h1>
        {lists &&
          lists.map((item) => (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <Title router={router} title={item.title} status={item.status} />
            </div>
          ))}
      </span>
    </div>
  );
}

function Title({ router, title, status }) {
  if (status === 'APPROVED') {
    return null;
  } else if (status === 'NOT_APPROVED') {
    return (
      <button
        onClick={() => {
          router.push('/view/id');
        }}
        className={styles.router}
      >
        {title}
      </button>
    );
  }
}
