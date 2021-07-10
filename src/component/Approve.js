import { Button } from 'semantic-ui-react';

export default function Approve() {
  return (
    <div>
      <Button.Group color="blue">
        <Button>승인</Button>
        <Button>미승인</Button>
      </Button.Group>
    </div>
  );
}
