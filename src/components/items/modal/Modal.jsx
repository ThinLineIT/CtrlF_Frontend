import { useEffect, useRef } from 'react';
import styels from '../../../styles/items/modal/modal.module.css';

export default function Modal(props) {
  const modalRef = useRef(null);

  useEffect(() => {
    modalRef.current.style.width = props.width;
  }, []);

  return (
    <div className={styels.backgorund}>
      <div className={styels.modal} ref={modalRef}>
        {props.children}
      </div>
    </div>
  );
}
