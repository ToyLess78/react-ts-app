import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
      <span className="footer__text">
        from
        <a className="footer__link" href="https://binary-studio.com">
          binary studio
        </a>
        with
        <img className="footer__icon" src="/images/heart.svg" alt="heart" />
      </span>
        </footer>
    );
};

export default Footer;
