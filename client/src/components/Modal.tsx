import React from "react";

interface ModalProps {
  show: boolean;
  onClose: () => void;
  children: React.ReactNode;
  style?: React.CSSProperties; // Add style prop
}

const Modal: React.FC<ModalProps> = ({ show, onClose, children, style }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div
        className="bg-white rounded-lg shadow-lg p-6 relative"
        style={style} // Apply custom styles here
      >
        <button
          className="absolute top-0 right-0 mt-2 mr-2 text-gray-700 hover:text-gray-900"
          onClick={onClose}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
