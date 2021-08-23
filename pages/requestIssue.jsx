import { useRecoilValue } from 'recoil';
import { userRequestDataList } from '../src/store/atom';
import styled from 'styled-components';

export default function Issue() {
  const requestData = useRecoilValue(userRequestDataList);
  return (
    <IssueContainer>
      {requestData &&
        requestData.map((item) => (
          <Article key={item.title}>
            {item.noteName ? <h1>{item.noteName}</h1> : <h1>{item.title}</h1>}
            <h3>{item.requestTitle}</h3>
            {item.noteName && <div>{item.title}</div>}
            <span>{item.requestContent}</span>
          </Article>
        ))}
    </IssueContainer>
  );
}

const IssueContainer = styled.div`
  width: 100%;
  height: 100vh;
  border: 0.2px solid rgba(185, 185, 185, 0.315);
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.19);
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(10%, 226.4px));
  grid-auto-rows: minmax(333px, 333px);
`;

const Article = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(
    166deg,
    rgba(237, 193, 211, 1) 0%,
    rgba(212, 149, 161, 1) 60%,
    rgba(162, 63, 161, 1) 100%
  );
  padding: 1.1em;
  color: white;
  margin: 1em;
  border-radius: 15px;
  & > div {
    font-weight: 1000;
    margin: 0.5em;
    margin-bottom: 1.2em;
  }
  & > h1 {
    color: blueviolet;
    padding: 0;
    margin: 0;
    margin-top: 1em;
  }

  & > h3 {
    color: seagreen;
  }
`;
