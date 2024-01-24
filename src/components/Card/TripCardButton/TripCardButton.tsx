import React from 'react';
import Button from "../../Button/Button.tsx";

const TripCardButton: React.FC = () => {
    return (
        <Button dataTestId="trip-card-link" to="./t" className="">
            Discover a trip
        </Button>
    );
};

export default TripCardButton;
