import { useRecoilState } from 'recoil';
import { useState, useEffect } from 'react';
import { filterList as filterListAtom } from '../../store/atom';
import styles from '../../styles/items/issue/issue_tag.module.css';

const IssueTagBtn = ({ name, isInput }) => {
  const [filterList, setFilterList] = useRecoilState(filterListAtom);
  const [checkState, setCheckState] = useState(false);

  useEffect(() => {
    if (filterList.includes(name) && isInput === true) setCheckState(false);
    if (filterList.includes(name) && isInput !== true) setCheckState(true);
  }, []);

  useEffect(() => {
    for (let tag of filterList) {
      if (name === tag) return;
    }
    setCheckState(false);
  }, [filterList]);

  const addFilter = () => {
    if (!checkState && !isInput) {
      setCheckState(true);
      setFilterList([...filterList, name]);
    }
  };
  const unselect = () => {
    setFilterList(filterList.filter((value) => name !== value));
  };

  return (
    <div
      className={`${styles.tag__btn} ${styles[`check_${checkState}`]}`}
      onClick={addFilter}
    >
      {name}
      {isInput && <button onClick={unselect}>X</button>}
    </div>
  );
};

export default IssueTagBtn;
