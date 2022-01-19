import Issue from '../../components/sidebar/issue';
import Toggle from '../../components/sidebar/toggle';
import AddNote from '../../components/sidebar/add_note';
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
