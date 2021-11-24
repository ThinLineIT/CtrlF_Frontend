import Issue from '../items/sidebar/issue';
import Toggle from '../items/sidebar/toggle';
import AddNote from '../items/sidebar/add_note';
import styles from '../../styles/layout/sideBar.module.css';

export default function SideBar() {
  return (
    <aside className={styles.container}>
      <Toggle />
      <AddNote />
      <Issue />
    </aside>
  );
}
