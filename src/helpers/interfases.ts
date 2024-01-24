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

export interface DurationFilterProps {
    dataTestId: string;
    name: string;
}

export interface SelectFilterProps {
    dataTestId: string;
    name: string;
    options: { value: string; label: string }[];
}

export interface TripCardProps {
    dataTestId: string;
    tripData: {
        id: string;
        title: string;
        description: string;
        level: string;
        duration: number;
        price: number;
        image: string;
        createdAt: string;
    };
    linkText: string;
}
