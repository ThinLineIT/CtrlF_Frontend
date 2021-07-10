import styles from './SideBar.module.css';
import Approve from './Approve';
import AddNote from './AddNote';
import Request from './Request';

export default function SideBar() {
  return (
    <div className={styles.wrap}>
      <div className={styles.approve}>
        <Approve />
      </div>
      <div className={styles.add_note}>
        <AddNote />
      </div>
      <Request />
    </div>
  );
}
