import { useRecoilValue } from "recoil";
import { noteDetailData } from "../../../../store/atom";
import styles from "../../../../styles/items/notes/note_detail.module.css";

export default function DetailContents() {
  const data = useRecoilValue(noteDetailData);

  return (
    <div className={styles.content}>
      <div className={styles.info_item}>
        <div className={styles.info_item_topic}>TOPIC</div>
        <select className={styles.info_item_page}>
          {data && data.map((item) => <option>{item.title}</option>)}
        </select>
      </div>
      <div className={styles.icons}>
        <button className={styles.icons_bookmark}></button>
        <button className={styles.icons_share}></button>
      </div>
      <span as="h3" className={styles.span}>
        {data &&
          data.map((item) => (
            <div>
              <h1>{item.title}</h1>
              <p>{item.content}</p>
              <br />
            </div>
          ))}
      </span>
    </div>
  );
}
