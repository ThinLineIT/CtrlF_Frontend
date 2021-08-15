import styles from '../../styles/items/issue/issue_btn.module.css';

export default function IssueSelect() {
  return (
    <div className={styles.select}>
      <select name="note" className={styles.select__note}>
        <option defaultValue value="first">
          ALL
        </option>
        <option value="second">Second Value</option>
        <option value="third">Third Value</option>
      </select>
      <select name="topic" className={styles.select__topic}>
        <option defaultValue value="first">
          ALL
        </option>
        <option value="second">Second Value</option>
        <option value="third">Third Value</option>
      </select>
    </div>
  );
}
