import ProfileNavigation from '../ProfileNavigation/ProfileNavigation.tsx';
import {NavLink} from "react-router-dom";

const Navigation = () => {

    return (
        <nav data-test-id="header-nav" className="header__nav">
            <ul className="nav-header__list">
                <li className="nav-header__item" title="Bookings">
                    <NavLink to='/bookings' data-test-id="header-bookings-link" className="nav-header__inner">
                        <span className="visually-hidden">Bookings</span>
                        <img src="/images/briefcase.svg" alt="bookings" />
                    </NavLink>
                </li>
                <li className="nav-header__item" title="Profile">
                    <ProfileNavigation />
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
