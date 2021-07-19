import styles from './item_list.module.css';
import Link from 'next/link';

export default function ItemList({ list }) {
  return (
    <div className={styles.container}>
      {list.map((item) => (
        <div className={styles.wrap}>
          <Link href="/view/[id]" as={`/view/${item.id}`} style={{ margin: 0 }}>
            <h3>{item.title}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
}
