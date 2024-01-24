import React from 'react';
import TripCard from "../Card/TripCard/TripCard.tsx";

interface TripsListProps {
    trips: Array<{
        id: string;
        title: string;
        description: string;
        level: string;
        duration: number;
        price: number;
        image: string;
        createdAt: string;
    }>;
}

const TripsList: React.FC<TripsListProps> = ({ trips }) => {
    return (
        <ul className="trip-list">
            {trips.map((trip) => (
                <TripCard key={trip.id} trip={trip} />
            ))}
        </ul>
    );
};

export default TripsList;
