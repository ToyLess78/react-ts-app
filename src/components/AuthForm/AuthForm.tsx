// AuthForm.tsx
import React, { ReactNode, FormEventHandler } from 'react';
import { SubmitHandler, FieldValues } from 'react-hook-form';

interface AuthFormProps {
    title: string;
    onSubmit: SubmitHandler<FieldValues>;
    children: ReactNode;
}

const AuthForm: React.FC<AuthFormProps> = ({ title, onSubmit, children }) => {
    const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        onSubmit(e as unknown as SubmitHandler<FieldValues>); // You might need to adjust this line based on your form submission logic
    };

    return (
        <form className="sign-up-form" autoComplete="off" onSubmit={handleSubmit}>
            <h2 className="sign-up-form__title">{title}</h2>
            {React.Children.map(children, (child: React.ReactNode) => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, {
                        ...child.props,
                    });
                }
                return child;
            })}
        </form>
    );
};

export default AuthForm;
