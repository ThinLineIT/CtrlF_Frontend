import styles from '../../styles/layout/sidebar.module.css';
import Newbutton from '../items/input/newbutton';
import Create from '../items/input/create';
import Resentwork from '../items/input/recentwork';

export default function SideBar({ lists, buttonApprove, buttonReject }) {
  const handleButtonApprove = () => {
    buttonApprove();
  };

  const handleButtonReject = () => {
    buttonReject();
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.approve}>
        <Newbutton
          lists={lists}
          buttonApprove={handleButtonApprove}
          buttonReject={handleButtonReject}
        />
      </div>
      <div className={styles.add_note}>
        <Create />
      </div>
      <Resentwork />
    </div>
  );
}
