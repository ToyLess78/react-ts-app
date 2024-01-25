// AuthButton.tsx
import React, { ReactNode } from 'react';

interface AuthButtonProps {
    dataTestId: string;
    type: 'submit';
    children: ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>; // Optional onClick prop
}

const AuthButton: React.FC<AuthButtonProps> = ({ dataTestId, type, children, onClick }) => {
    return (
        <button data-test-id={dataTestId} className="button" type={type} onClick={onClick}>
            {children}
        </button>
    );
};

export default AuthButton;
