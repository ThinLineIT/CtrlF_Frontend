import { useState } from 'react';
import DeleteModal from '../src/components/items/modal/DeleteModal';

export default function Delete() {
  const [modalOpen, setModalOpen] = useState(false);
  const closeDeleteModal = () => {
    setModalOpen(false);
  };
  return (
    <>
      <button
        onClick={() => {
          setModalOpen(true);
        }}
      >
        모달 오픈
      </button>
      {modalOpen && (
        <DeleteModal
          id={3}
          originTitle={'원래이름'}
          type={'노트'}
          closeDeleteModal={closeDeleteModal}
        />
      )}
    </>
  );
}
