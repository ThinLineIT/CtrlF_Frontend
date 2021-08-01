import { List } from '../store/atom';
import { useRecoilState } from 'recoil';

export default function UseToggle(lists, status) {
  const [note, setNote] = useRecoilState(List);
  const newList = [...note];
  const approveList = newList.filter((item) => item.is_approved === 'true');
  const notApproveList = newList.filter(
    (item) => item.is_approved === 'NOT_APPROVED'
  );
  console.log(lists);
  if (status === 'true') {
    setLists(approveList);
    console.log(approveList);
  } else if (status === 'false') {
    setLists(notApproveList);
    console.log(notApproveList);
  } else if (lists) {
    return lists;
  }
}
