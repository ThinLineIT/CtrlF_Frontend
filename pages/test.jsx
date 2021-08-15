import styles from '../src/styles/Issue.module.css';
import IssuePage from '../public/images/issue/issue1.svg';

function Issue() {
  const adjust = () => {
    console.log(document.getElementsByTagName('svg'));
  };

  return (
    <div className="component" id={styles.issue}>
      <button onClick={adjust}> 클릭 </button>
      <div className={styles.test}>
        <IssuePage />
      </div>
      <div className={styles.test2}></div>
    </div>
  );
}

export default Issue;
