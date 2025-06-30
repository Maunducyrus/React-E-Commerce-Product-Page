// const Modal = () => <div>Modal</div>;

// export default Modal;

import { useEffect } from 'react';

export default function Modal({ isOpen, onClose, children }) {
  useEffect(() => {
    const handleEsc = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded shadow p-6 relative max-w-md w-full">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-black">✕</button>
        {children}
      </div>
    </div>
  );
}