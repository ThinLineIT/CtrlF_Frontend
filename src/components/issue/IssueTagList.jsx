import IssueTagBtn from './IssueTagBtn';

const IssueTagList = ({ styles }) => {
  return (
    <div className={styles.tag__list}>
      <IssueTagBtn name={'note'} />
      <IssueTagBtn name={'topic'} />
      <IssueTagBtn name={'page'} />
      <IssueTagBtn name={'my issue'} />
    </div>
  );
};

export default IssueTagList;
