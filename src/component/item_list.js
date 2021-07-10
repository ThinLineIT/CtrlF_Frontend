import { Grid } from 'semantic-ui-react';
import styles from './item_list.module.css';
import Link from 'next/link';

export default function ItemList({ list }) {
  return (
    <div>
      <Grid columns={5}>
        <Grid.Row>
          {list &&
            list.map((item) => (
              <Grid.Column key={item.id} style={{ padding: '0 50px' }}>
                <Link href="/view/[id]" as={`/view/${item.id}`}>
                  <a style={{ margin: 0 }}>
                    <div className={styles.wrap}>
                      <img
                        src={item.medium_cover_image}
                        alt={item.title}
                        className={styles.img_item}
                      />
                    </div>
                  </a>
                </Link>
              </Grid.Column>
            ))}
        </Grid.Row>
      </Grid>
    </div>
  );
}
