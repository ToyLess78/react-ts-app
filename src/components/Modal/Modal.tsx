import React, { ReactNode } from 'react';

interface ModalProps {
    openModal: boolean;
    onClick: () => void;
    children?: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ openModal, onClick, children }) => {
    return (
        <>
            {openModal && (
                <div className="modal">
                    <div className="book-trip-popup">
                        <button data-test-id="book-trip-popup-close" className="book-trip-popup__close" onClick={onClick}>
                            ×
                        </button>
                        {children}
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;