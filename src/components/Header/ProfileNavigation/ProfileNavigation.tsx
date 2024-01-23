import HeaderProfileNav from '../HeaderProfileNav/HeaderProfileNav.tsx';

const username = 'John Doe';
const ProfileNavigation = () => {
    return (
        <div data-test-id="header-profile-nav" className="nav-header__inner profile-nav">
            <span className="visually-hidden">Profile</span>
            <img src="/images/user.svg" alt="profile" />
            <HeaderProfileNav username={username} />
        </div>
    );
};

export default ProfileNavigation;