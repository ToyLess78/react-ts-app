import React from 'react';
import {MainProps} from "../../helpers/interfases.ts";

const Main: React.FC<MainProps> = ({ children }) => {
    return (
        <main>
            <h1 className="visually-hidden">Travel App</h1>
            {children}
        </main>
    );
};

export default Main;