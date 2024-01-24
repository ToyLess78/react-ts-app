import React, {ReactNode} from "react";

export interface ButtonProps {
    dataTestId: string;
    to: string;
    className: string;
    children: React.ReactNode;
}

export interface HeaderProfileNavProps {
    username: string;
}

export interface LayoutProps {
    children?: ReactNode;
}
export interface MainProps {
    children: ReactNode;
}

