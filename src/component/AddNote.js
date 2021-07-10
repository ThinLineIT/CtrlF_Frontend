import { Button, Divider } from 'semantic-ui-react';

export default function AddNote() {
  return (
    <div>
      <Button.Group basic style={{ width: 154 }}>
        <Button>+ 노트 추가하기</Button>
      </Button.Group>
    </div>
  );
}
