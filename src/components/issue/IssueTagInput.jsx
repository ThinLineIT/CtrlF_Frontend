import { useRecoilValue } from 'recoil';
import { filterList as filterListAtom } from '../../store/atom';
import IssueTagBtn from '../../components/issue/IssueTagBtn';
import IssueFilterBtn from '../../../public/images/issue/issueTag/issue_search_button.svg';

const issueFilterBtnStyle = {
  top: '-7px;',
  right: '-9px;',
  position: 'relative;',
};

const IssueTagInput = ({ styles }) => {
  const filterTags = useRecoilValue(filterListAtom);
  const getFilteredIssue = () => {
    console.log(filterTags); // 필터가 될 요소입니다.
  };
  return (
    <div className={styles.tag__input}>
      <div className={styles.tag_select}>
        {filterTags.map((v, i) => (
          <IssueTagBtn key={i} name={v} selected={true} />
        ))}
      </div>
      <div className={styles.filter_btn} onClick={getFilteredIssue}>
        <IssueFilterBtn style={issueFilterBtnStyle} />
      </div>
    </div>
  );
};

export default IssueTagInput;
