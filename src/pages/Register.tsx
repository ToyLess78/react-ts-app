// Register.tsx
import React, { useRef } from 'react';
import AuthForm from "../components/AuthForm/AuthForm";
import AuthInput from "../components/AuthInput/AuthInput";
import AuthButton from "../components/AuthButton/AuthButton";
import { useForm, SubmitHandler } from 'react-hook-form';
import {Link, useNavigate} from 'react-router-dom';

interface FormData {
    fullName: string;
    email: string;
    password: string;
}
const Register: React.FC = () => {
    const { handleSubmit } = useForm<FormData>();

    const fullNameRef = useRef<HTMLInputElement | null>(null);
    const emailRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<FormData> = () => {
        const fullName = fullNameRef.current.value.trim();
        const email = emailRef.current.value.trim();
        const password = passwordRef.current.value.trim();
        const dataUser = {
            fullName: '',
            email: '',
            password: ''
        }
        if (fullName.length < 20 && fullName.length > 3 ) {
            dataUser.fullName = fullName
        } else {
            alert('Bed Full Name')}
        if (password.length < 20 && password.length > 3 ) {
            dataUser.password = password
        } else {
            alert('Bed Password')}
        if (email.length) {
            dataUser.email = email
        } else {
            alert('Bed Email')}
        if (fullName.length < 20 && fullName.length > 3  && password.length < 20 && password.length > 3 && email.length) {
            navigate('/');
        }
        console.log('Form Data:', dataUser);
    };

    return (
        <AuthForm title="Sign Up" onSubmit={handleSubmit(onSubmit)}>
            <AuthInput label="Full name" type="text" name="fullName" dataTestId="auth-full-name" ref={fullNameRef} />
            <AuthInput label="Email" type="email" name="email" dataTestId="auth-email" ref={emailRef} />
            <AuthInput label="Password" type="password" name="password" dataTestId="auth-password" ref={passwordRef} />
            <AuthButton dataTestId="auth-submit" type="submit">
                Sign Up
            </AuthButton>
            <span>
        Already have an account?
        <Link to={'/sign-in'} data-test-id="auth-sign-in-link" className="sign-up-form__link"> Sign In</Link>
      </span>
        </AuthForm>
    );
};

export default Register;
