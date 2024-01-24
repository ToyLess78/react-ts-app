import React from 'react';
import Button from "../../Button/Button.tsx";
import TripInfo from "../TripInfo/TripInfo.tsx";
import TripPrice from "../TripPrice/TripPrice.tsx";

interface TripCardProps {
    trip: {
        id: string;
        title: string;
        description: string;
        level: string;
        duration: number;
        price: number;
        image: string;
        createdAt: string;
    };
}

const TripCard: React.FC<TripCardProps> = ({ trip }) => {
    const { title, duration, level, price, image } = trip;

    return (
        <li data-test-id="trip-card" className="trip-card">
            <img data-test-id="trip-card-image" src={image} alt={`${title} photo`} />
            <div className="trip-card__content">
                <TripInfo title={title} duration={duration} level={level} />
                <TripPrice price={price} />
            </div>
            <Button dataTestId="trip-card-link" to={`/trip/${trip.id}`} className="button">
                Discover a trip
            </Button>
        </li>
    );
};

export default TripCard;
