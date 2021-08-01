import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import { List } from '../../../store/atom';
import styles from '../../../styles/items/sidebar/recent_issue.module.css';

export default function ResentIssue() {
  const lists = useRecoilValue(List);
  const router = useRouter();

  return (
    <div className={styles.container}>
      <span>
        <h1 className={styles.title}>요청 검토 중인 내용</h1>
        {lists &&
          lists.map((item) => (
            <div
              key={item.id}
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
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
          router.push('/note/id');
        }}
        className={styles.router}
      >
        {title}
      </button>
    );
  }
}
