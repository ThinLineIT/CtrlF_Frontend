import { useRecoilValue } from 'recoil';
import { filterList as filterListAtom } from '../../store/atom';
import IssueTagBtn from '../../components/issue/IssueTagBtn';

const IssueTagInput = ({ styles }) => {
  const filterTags = useRecoilValue(filterListAtom);
  const getFilteredIssue = () => {
    console.log(filterTags);
  };
  return (
    <div className={styles.tag__input}>
      <div className={styles.tag_select}>
        {filterTags.map((v, i) => (
          <IssueTagBtn key={i} name={v} selected={true} />
        ))}
      </div>
      <div className={styles.filter_btn} onClick={getFilteredIssue}>
        화살표
      </div>
    </div>
  );
};

export default IssueTagInput;
