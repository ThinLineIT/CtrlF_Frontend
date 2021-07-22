import styles from '../../../styles/layout/item/itemlist.module.css';
import Link from 'next/link';

export default function ItemList({ lists }) {
  return (
    <div className={styles.container}>
      {lists.map((item) => (
        <div className={`${styles.wrap} ${getStyles(item.status)}`}>
          <Link
            href="/view/[id]"
            as={`/view/${item.title}`}
            style={{ margin: 0 }}
          >
            <h3>{item.title}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
}

function getStyles(status) {
  switch (status) {
    case 'APPROVED':
      return styles.light;
    case 'NOT_APPROVED':
      return styles.dark;
    default:
      console.log('Error');
  }
}
