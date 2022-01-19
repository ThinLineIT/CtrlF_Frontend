import IssueTagBtn from '../../components/issue/issue_tag_btn';

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
