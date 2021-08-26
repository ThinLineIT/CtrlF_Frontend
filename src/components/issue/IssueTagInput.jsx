import { useRecoilValue } from 'recoil';
import { useEffect } from 'react';
import { filterList as filterListAtom } from '../../store/atom';
import IssueTagBtn from '../../components/issue/IssueTagBtn';

const IssueTagInput = ({ styles }) => {
  const filterTags = useRecoilValue(filterListAtom);
  return (
    <div className={styles.tag__input}>
      {filterTags.map((v, i) => (
        <IssueTagBtn key={i} name={v} selected={true} />
      ))}
    </div>
  );
};

export default IssueTagInput;
