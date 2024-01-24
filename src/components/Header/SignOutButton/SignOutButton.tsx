import React from 'react';
import Button from "../../Button/Button.tsx";

const SignOutButton: React.FC = () => {
    return (
        <Button dataTestId="header-profile-nav-sign-out" to="/sign-in" className="profile-nav__sign-out">
            Sign Out
        </Button>
    );
};

export default SignOutButton;
