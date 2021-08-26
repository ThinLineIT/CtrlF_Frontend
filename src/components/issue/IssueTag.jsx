import IssueTagList from './IssueTagList';
import IssueTagInput from './IssueTagInput';
import styles from '../../styles/items/issue/issue_tag.module.css';
import { useRecoilValue } from 'recoil';
import { filterList as filterListAtom } from '../../store/atom';

const IssueTag = () => {
  const filters = useRecoilValue(filterListAtom);
  const getFilteredIssue = () => {
    console.log(filters);
  };
  return (
    <div className={styles.tag}>
      <IssueTagInput styles={styles} />
      <IssueTagList styles={styles} />
      <button onClick={getFilteredIssue}>임시 버튼입니다</button>
    </div>
  );
};

export default IssueTag;
