import React, {useRef} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {Link, useNavigate} from "react-router-dom";
import AuthForm from "../components/AuthForm/AuthForm.tsx";
import AuthInput from "../components/AuthInput/AuthInput.tsx";
import AuthButton from "../components/AuthButton/AuthButton.tsx";

const Login: React.FC = () => {
    const { handleSubmit } = useForm<FormData>();

    const emailRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<FormData> = () => {
        const email = emailRef.current.value.trim();
        const password = passwordRef.current.value.trim();
        const dataUser = {
            email: '',
            password: ''
        }

        if (password.length < 20 && password.length > 3 ) {
            dataUser.password = password
        } else {
            alert('Bed Password')}
        if (email.length) {
            dataUser.email = email
        } else {
            alert('Bed Email')}
        if (password.length < 20 && password.length > 3 && email.length) {
            navigate('/');
        }
        console.log('Form Data:', dataUser);
    };

    return (
        <AuthForm title="Sign In" onSubmit={handleSubmit(onSubmit)}>
            <AuthInput label="Email" type="email" name="email" dataTestId="auth-email" ref={emailRef} />
            <AuthInput label="Password" type="password" name="password" dataTestId="auth-password" ref={passwordRef} />
            <AuthButton dataTestId="auth-submit" type="submit">
                Sign In
            </AuthButton>
            <span>
        Don't have an account?
        <Link to={'/sign-up'} data-test-id="auth-sign-in-link" className="sign-up-form__link"> Sign Up</Link>
      </span>
        </AuthForm>
    );
};


export default Login