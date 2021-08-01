import AddNewNote from '../items/sidebar/add_new_note';
import ResentIssue from '../items/sidebar/recent_issue';
import Toggle from '../items/sidebar/toggle';
import styles from '../../styles/layout/sidebar.module.css';

export default function SideBar() {
  return (
    <div className={styles.container}>
      <div className={styles.toggle}>
        <Toggle />
      </div>
      <div className={styles.add__new__note}>
        <AddNewNote />
      </div>
      <div className={styles.recent__issue}>
        <ResentIssue />
      </div>
    </div>
  );
}
