import React from 'react';

interface HeaderProfileNavProps {
    username: string;
}

const HeaderProfileNav: React.FC<HeaderProfileNavProps> = ({ username }) => {
    return (
        <ul data-test-id="header-profile-nav-list" className="profile-nav__list">
            <li data-test-id="header-profile-nav-username" className="profile-nav__item">
                {username}
            </li>
            <li className="profile-nav__item">
                <a data-test-id="header-profile-nav-sign-out" href="/sign-in" className="profile-nav__sign-out button">
                    Sign Out
                </a>
            </li>
        </ul>
    );
};

export default HeaderProfileNav;
