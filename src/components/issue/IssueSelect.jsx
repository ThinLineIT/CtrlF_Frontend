import styles from '../../styles/items/issue/issue_btn.module.css';

export default function IssueSelect() {
  return (
    <div className={styles.select}>
      <select name="note" className={styles.select__note}>
        <option defaultValue value="first">
          ALL
        </option>
        <option value="second">OS</option>
        <option value="third">Data Structure</option>
        <option value="fourth">Network</option>
        <option value="fifth">Database</option>
        <option value="sixth">Algorithm</option>
      </select>
      <select name="topic" className={styles.select__topic}>
        <option defaultValue value="first">
          ALL
        </option>
        <option value="second">Thread & Process</option>
        <option value="third">CPU Scheduling</option>
        <option value="fourth">Cache Memory</option>
      </select>
    </div>
  );
}
