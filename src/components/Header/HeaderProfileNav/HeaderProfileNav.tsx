import React from 'react';
import SignOutButton from "../SignOutButton/SignOutButton.tsx";
import {HeaderProfileNavProps} from "../../../helpers/interfases.ts";

const HeaderProfileNav: React.FC<HeaderProfileNavProps> = ({username}) => {
    return (
        <ul data-test-id="header-profile-nav-list" className="profile-nav__list">
            <li data-test-id="header-profile-nav-username" className="profile-nav__item">
                {username}
            </li>
            <li className="profile-nav__item">
                <SignOutButton/>
            </li>
        </ul>
    );
};

export default HeaderProfileNav;
