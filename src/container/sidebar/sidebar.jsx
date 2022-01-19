import IssueBox from '../../components/sidebar/IssueBox';
import ToggleSwitch from '../../components/sidebar/ToggleSwitch';
import NewNoteBtn from '../../components/sidebar/NewNoteBtn';
import styles from '../../styles/layout/sidebar.module.css';

export default function SideBar() {
  return (
    <aside className={styles.container}>
      <ToggleSwitch />
      <NewNoteBtn />
      <IssueBox />
    </aside>
  );
}
