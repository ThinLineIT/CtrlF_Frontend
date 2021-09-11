import { useRecoilState } from 'recoil';
import { filterList as filterListAtom } from '../../store/atom';
import styles from '../../styles/items/issue/issue_tag.module.css';

export default function IssueSelectedTagBtn({ name }) {
  const [filterList, setFilterList] = useRecoilState(filterListAtom);
  const unselect = () => {
    setFilterList(filterList.filter((value) => name !== value));
  };

  return (
    <div className={styles.tag__btn}>
      {name}
      <button onClick={unselect}>X</button>
    </div>
  );
}
