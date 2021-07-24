import { useRouter } from 'next/router';
import { Button } from 'semantic-ui-react';

export default function Newbutton({ lists, buttonApprove, buttonReject }) {
  const router = useRouter();

  const handleApprove = () => {
    // router.push('/approve');
    buttonApprove(lists);
  };

  const handleReject = () => {
    // router.push('/reject');
    buttonReject(lists);
  };

  return (
    <div>
      <Button.Group style={{ color: 'white' }}>
        <Button
          style={{
            borderBottomLeftRadius: '30px',
            borderTopLeftRadius: '30px',
            boxShadow: '1px 1px 10px grey',
          }}
          onClick={handleApprove}
        >
          승인
        </Button>
        <Button
          style={{
            borderBottomRightRadius: '30px',
            borderTopRightRadius: '30px',
            boxShadow: '1px 1px 10px grey',
          }}
          onClick={handleReject}
        >
          미승인
        </Button>
      </Button.Group>
    </div>
  );
}
