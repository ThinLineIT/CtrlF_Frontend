import { useRecoilState } from 'recoil';
import { useState, useEffect } from 'react';
import { filterList as filterListAtom } from '../../store/atom';
import styles from '../../styles/items/issue/issue_tag.module.css';

const IssueTagBtn = ({ name }) => {
  const [filterList, setFilterList] = useRecoilState(filterListAtom);
  const [checkState, setCheckState] = useState(false);

  useEffect(() => {
    if (filterList.includes(name)) setCheckState(true);
  }, []);

  useEffect(() => {
    for (let tag of filterList) {
      if (name === tag) return;
    }
    setCheckState(false);
  }, [filterList]);

  const addFilter = () => {
    if (!checkState) {
      setCheckState(true);
      setFilterList([...filterList, name]);
    }
  };

  return (
    <div
      className={`${styles.tag__btn} ${styles[`check_${checkState}`]}`}
      onClick={addFilter}
    >
      {name}
    </div>
  );
};

export default IssueTagBtn;
