import React from 'react';
import Modal from 'react-modal';

const SingupModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="Modal"
      overlayClassName="Overlay"
      contentLabel="My Modal"
    >
      <div className="bg-white w-1/2 p-8 rounded-lg">
        <h2 className="text-2xl mb-4">My Modal</h2>
        <p>This is the body of the modal.</p>
        <div className="mt-4 flex justify-end">
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 mr-2 rounded"
            onClick={onClose}
          >
            Close
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={onClose}
          >
            Save Changes
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default SingupModal;
