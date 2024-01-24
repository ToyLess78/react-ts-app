import React from 'react';

interface TripButtonProps {
    onClick: () => void;
}
const TripCardButton: React.FC<TripButtonProps> = ({ onClick }) => {
    return (
        <button data-test-id="trip-details-button" className="trip__button button" onClick={onClick}>
            Book a trip
        </button>
    );
};

export default TripCardButton;
