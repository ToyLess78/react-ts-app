// AuthInput.tsx
import React, { forwardRef, DetailedHTMLProps, InputHTMLAttributes, Ref } from 'react';

interface AuthInputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    label: string;
    dataTestId: string;
}

const AuthInput: React.ForwardRefRenderFunction<HTMLInputElement, AuthInputProps> = ({ label, type, name, dataTestId }, ref) => {
    return (
        <div>
            <label className="input">
                <span className="input__heading">{label}</span>
                <input ref={ref as Ref<HTMLInputElement>} data-test-id={dataTestId} name={name} type={type} />
            </label>
        </div>
    );
};

export default forwardRef(AuthInput);
