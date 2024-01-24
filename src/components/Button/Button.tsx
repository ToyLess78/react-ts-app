import React from 'react';
import {NavLink} from "react-router-dom";
import {ButtonProps} from "../../helpers/interfases.ts";

const Button: React.FC<ButtonProps> = ({ dataTestId, to, className, children }) => {
    return (
        <NavLink to={to} data-test-id={dataTestId} className={`button ${className}`}>
            {children}
        </NavLink>
    );
};

export default Button;
