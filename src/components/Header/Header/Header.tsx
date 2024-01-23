import React from 'react';
import Navigation from '../Navigation/Navigation.tsx';
import {NavLink} from "react-router-dom";

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="header__inner">
                <NavLink to='/' data-test-id="header-logo" className="header__logo">
                    Travel App
                </NavLink>
                <Navigation />
            </div>
        </header>
    );
};

export default Header;
