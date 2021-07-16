import { Button, Divider } from 'semantic-ui-react';

export default function AddNote() {
  return (
    <div>
      <Button.Group
        basic
        style={{
          width: 154,
          borderRadius: '30px/30px',
          boxShadow: '1px 1px 10px grey',
        }}
      >
        <Button
          style={{ fontSize: '1.1rem', fontWeight: 'bolder', color: 'black' }}
        >
          + 노트 추가하기
        </Button>
      </Button.Group>
    </div>
  );
}
