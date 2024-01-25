import React from 'react';
import {MainProps} from "../../helpers/interfases.ts";
import {useLocation, useParams} from "react-router-dom";

const Main: React.FC<MainProps> = ({ children }) => {
    const {tripId} = useParams()
    const location = useLocation();

        let i = '';
        switch (location.pathname) {
            case '/bookings' : i = 'bookings-page'
                break
            case '/sign-up' : i = 'sign-up-page'
                break
            case '/sign-in' : i = 'sign-in-page'
                break
            case `/trip/${tripId}`: i = 'trip-page'
                break
            default: i = ''
        }

    return (
        <main className={i}>
            <h1 className="visually-hidden">Travel App</h1>
            {children}
        </main>
    );
};

export default Main;