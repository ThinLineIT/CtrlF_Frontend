import { useEffect, useState } from 'react';
import IssueCard from '../issue/IssueCard';
import IssuePage from '../../../public/images/issue/issue1.svg';

const IssueList = ({ styles, issues }) => {
  return (
    <div className={styles.issue__list}>
      {issues &&
        issues.map((v) => {
          return <IssueCard key={v.id} title={v.title} length={v.id} />;
        })}
      {issues &&
        issues.map((v) => {
          return <IssueCard key={v.id} title={v.title} length={v.id} />;
        })}
      {issues &&
        issues.map((v) => {
          return <IssueCard key={v.id} title={v.title} length={v.id} />;
        })}
      {issues &&
        issues.map((v) => {
          return <IssueCard key={v.id} title={v.title} length={v.id} />;
        })}
      {issues &&
        issues.map((v) => {
          return <IssueCard key={v.id} title={v.title} length={v.id} />;
        })}
      <IssuePage />
    </div>
  );
};

export default IssueList;
