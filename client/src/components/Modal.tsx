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
        className="bg-transparent rounded-lg shadow-lg p-6 relative"
        style={style} // Apply custom styles here
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '0.5rem',
            right: '0.5rem',
            backgroundColor: 'transparent', // Transparent background
            color: '#FFFAE2', // Text color
            fontWeight: 'bold', // Bold text
            padding: '0.1rem 0.25rem',
            borderRadius: '0.25rem',
            border: '2px solid #FFFAE2', // Border color
            cursor: 'pointer',
            transition: 'background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease',
          }}
          onMouseOver={(e) => {
            (e.target as HTMLButtonElement).style.backgroundColor = '#FFFAE2'; // Lighten background on hover
            (e.target as HTMLButtonElement).style.color = '#000000'; // Darken text on hover
          }}
          onMouseOut={(e) => {
            (e.target as HTMLButtonElement).style.backgroundColor = 'transparent'; // Revert background color
            (e.target as HTMLButtonElement).style.color = '#FFFAE2'; // Revert text color
          }}
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
