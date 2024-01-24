import { useLocation } from 'react-router-dom';
import BookingItem from "../components/BookingItem/BookingItem.tsx";
import bookings from '../assets/bookings.json';
import {useState} from "react";

interface Trip {
    id: string;
    guests: number;
    date: string;
    totalPrice: number;
    trip: {
        title: string;
    };
}

const Booking = () => {
    const location = useLocation();
    const { newBooking } = location.state || {};

    const updatedTripsData: Trip[] = [...bookings];
    if (newBooking) {
        // Add newBooking to tripsData
        updatedTripsData.push(newBooking)
    }

// Sort tripsData by date
    const sortedTripsData = updatedTripsData
        .slice()
        .sort((a: Trip, b: Trip) => new Date(a.date).getTime() - new Date(b.date).getTime());

    const [displayTrips, setDisplayTrips] = useState<Trip[]>(sortedTripsData);
    const handleCancelBooking = (bookingId: string) => {
        const updatedDisplayTrips = displayTrips.filter((trip) => trip.id !== bookingId);

        // Update the state with the filtered array
        setDisplayTrips(updatedDisplayTrips);
    }

    return (<>
        <ul className="bookings__list">

            {displayTrips.map((trip) => (
                <BookingItem
                    key={trip.id}
                    title={trip.trip.title}
                    guests={trip.guests}
                    date={new Date(trip.date).toLocaleDateString()}
                    total={trip.totalPrice}
                    onCancel={() => handleCancelBooking(trip.id)}
                />
            ))}
        </ul>
    </>)
}

export default Booking