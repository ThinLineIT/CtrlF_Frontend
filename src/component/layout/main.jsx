import ItemList from './item/itemlist';
import SideBar from './sideBar';
import React, { useState } from 'react';
import styles from '../../styles/Home.module.css';

export default function Main({ lists, length }) {
  const [data, setData] = useState(lists);
  const [lengths, setLengths] = useState(length);

  const handleButtonApprove = () => {
    const newList = [...lists];
    const approveList = newList.filter((item) => item.status === 'APPROVED');
    setData(approveList);
    setLengths(approveList.length);
  };

  const handleButtonReject = () => {
    const newList = [...lists];
    const notApproveList = newList.filter(
      (item) => item.status === 'NOT_APPROVED'
    );
    setData(notApproveList);
    setLengths(notApproveList.length);
  };

  return (
    <>
      <div className={styles.header}>
        <p onClick={handleButtonApprove} style={{ cursor: 'pointer' }}>
          {`현재 모아진 아이디어 ${lengths}`}
        </p>
      </div>
      <div className={styles.body}>
        <div className={styles.itemList}>
          <ItemList data={data} />
        </div>
        <div className={styles.side_bar}>
          <SideBar
            lists={lists}
            buttonApprove={handleButtonApprove}
            buttonReject={handleButtonReject}
          />
        </div>
      </div>
    </>
  );
}
