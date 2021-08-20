import { useRecoilValue } from "recoil";
import { useRouter } from "next/dist/client/router";
import { noteDetailData, pageContent, pageList } from "../../../../store/atom";
import styles from "../../../../styles/items/notes/noteDetail/detail_contents.module.css";

export default function DetailContents() {
  const router = useRouter();
  const data = useRecoilValue(noteDetailData);
  const myPageContent = useRecoilValue(pageContent);
  const myPageList = useRecoilValue(pageList);

  const routerIssues = () => {
    router.push("/requestIssue");
  };

  return (
    <div className={styles.content}>
      <div className={styles.info_item}>
        <div className={styles.info_item_topic}>TOPIC</div>
        <select className={styles.info_item_page}>
          {myPageList.map((pageName) => (
            <option>{pageName}</option>
          ))}
        </select>
      </div>
      <div className={styles.icons}>
        <button className={styles.icons_bookmark} onClick={routerIssues} />
        <button className={styles.icons_share} />
      </div>
      <span as="h3" className={styles.detail_content}>
        <p>{myPageContent}</p>
      </span>
    </div>
  );
}
