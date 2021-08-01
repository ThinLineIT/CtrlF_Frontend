import { Button } from 'semantic-ui-react';
import React, { useState } from 'react';
import useNoteSearch from '../../../hooks/use_note_search';

export default function Toggle() {
  const [query, setQuery] = useState('');
  const [cursorNumber, setCursorNumber] = useState(0);
  const [toggle, setToggle] = useState('');
  const { approved, notApproved } = useNoteSearch(cursorNumber, query, toggle);

  const handleButtonApprove = () => {
    console.log(approved);
    setCursorNumber(0);
  };

  const handleButtonReject = () => {
    console.log(notApproved);
    setCursorNumber(0);
  };

  return (
    <Button.Group style={{ color: 'white' }}>
      <Button
        style={{
          borderBottomLeftRadius: '30px',
          borderTopLeftRadius: '30px',
          boxShadow: '1px 1px 10px grey',
        }}
        onClick={handleButtonApprove}
      >
        승인
      </Button>
      <Button
        style={{
          borderBottomRightRadius: '30px',
          borderTopRightRadius: '30px',
          boxShadow: '1px 1px 10px grey',
        }}
        onClick={handleButtonReject}
      >
        미승인
      </Button>
    </Button.Group>
  );
}
