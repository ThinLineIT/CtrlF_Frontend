import React, { useState } from 'react';

export default function useStatus(list, status) {
  // const [lists, setLists] = useState();

  const newList = [...list];
  const approveList = newList.filter((item) => item.status === `${status}`);
  setLists(approveList);
}
