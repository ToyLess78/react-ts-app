import React from 'react';
import {NavLink} from "react-router-dom";
import RenderNavigation from "../RenderNavigation/RenderNavigation.tsx";

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="header__inner">
                <NavLink to='/' data-test-id="header-logo" className="header__logo">
                    Travel App
                </NavLink>
                <RenderNavigation />

            </div>
        </header>
    );
};

export default Header;
