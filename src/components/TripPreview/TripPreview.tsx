import React from 'react';
import TripInfo from "../Card/TripInfo/TripInfo.tsx";
import TripPrice from "../Card/TripPrice/TripPrice.tsx";

interface TripProps {
    title: string;
    duration: number;
    level: string;
    description: string;
    price: number;
    image: string;
    handleBookTripClick: () => void;
}

const TripPreview: React.FC<TripProps> = ({ title, duration, level, description, price, image, handleBookTripClick }) => {
    return (
        <div className="trip">
            <img
                data-test-id="trip-details-image"
                src={image}
                className="trip__img"
                alt="trip photo"
            />
            <div className="trip__content">
                <TripInfo title={title} duration={duration} level={level} />
                <div data-test-id="trip-details-description" className="trip__description">
                    {description}
                </div>
                <TripPrice price={price} />

                <button data-test-id="trip-details-button"
                        className="trip__button button"
                        onClick={handleBookTripClick}>
                    Book a trip
                </button>
            </div>
        </div>
    );
};

export default TripPreview;
