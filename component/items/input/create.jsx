import { useRouter } from 'next/router';
import React from 'react';
import { Button, Modal } from 'semantic-ui-react';

function Create() {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    router.push('../../../pages/signup');
  };

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Button
          style={{
            width: '158px',
            borderRadius: '30px/30px',
          }}
        >
          + 노트 추가하기
        </Button>
      }
    >
      <Modal.Header>notice</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <h1>ADD NOTE</h1>
            <span
              style={{
                margin: '17px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <p>커넵 회원만 사용 가능한 기능입니다.</p>
              <p> 로그인 후 이용해주세요.</p>
            </span>
            <button
              onClick={handleClick}
              style={{
                width: '20%',
                background: '#8BC8FD',
                color: 'white',
                height: '3rem',
                borderRadius: '10px',
                marginBottom: '1rem',
              }}
            >
              Login 하러 가기
            </button>
            <ul style={{ display: 'flex' }}>
              <li>
                <button style={{ fontWeight: 'bolder' }}>ID 찾기</button>
              </li>
              <li>
                <button style={{ fontWeight: 'bolder' }}>PASSWORD 찾기</button>
              </li>
              <li>
                <button style={{ fontWeight: 'bolder' }}>회원가입</button>
              </li>
            </ul>
          </div>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button
          content="OK"
          labelPosition="right"
          icon="checkmark"
          onClick={() => setOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
}

export default Create;
