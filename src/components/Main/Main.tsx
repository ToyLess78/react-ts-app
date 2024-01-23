import React, {ReactNode} from 'react';

interface MainProps {
    children: ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => {
    return (
        <main>
            <h1 className="visually-hidden">Travel App</h1>
            {children}
        </main>
    );
};

export default Main;