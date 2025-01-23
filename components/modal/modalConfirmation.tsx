"use client";

import React from "react";

interface ModalProps {
  isOpen: boolean;
  title: string;
  message?: string; // Optional message to display
  confirmText?: string; // Text for the confirm button
  cancelText?: string; // Text for the cancel button
  onClose: () => void;
  onConfirm: () => void;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  title,
  message,
  confirmText = "Yes",
  cancelText = "No",
  onClose,
  onConfirm,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 shadow-md text-center max-w-sm w-full">
        <h2 className="text-lg font-semibold mb-4">{title}</h2>
        {message && <p className="text-gray-600 mb-4">{message}</p>}
        <div className="flex flex-col gap-3">
          <button
            onClick={onConfirm}
            className="bg-primary  text-white py-2 px-4 rounded-full hover:bg-blue-600"
          >
            {confirmText}
          </button>
          <button
            onClick={onClose}
            className="text-primary hover:underline  hover:text-blue-600"
          >
            {cancelText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
