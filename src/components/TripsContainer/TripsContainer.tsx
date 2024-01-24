import TripsList from "../TripsList/TripsList.tsx";
import React, { useReducer, useEffect, useState } from 'react';
import tripsData from '../../assets/trips.json';
import FilterForm from "../FilterForm/FilterForm.tsx";

interface Filters {
    search: string;
    duration: string;
    level: string;
}

type Action =
    | { type: 'SET_SEARCH'; payload: string }
    | { type: 'SET_DURATION'; payload: string }
    | { type: 'SET_LEVEL'; payload: string };

const initialState: Filters = {
    search: '',
    duration: '',
    level: '',
};

const filtersReducer = (state: Filters, action: Action): Filters => {
    switch (action.type) {
        case 'SET_SEARCH':
            return { ...state, search: action.payload };
        case 'SET_DURATION':
            return { ...state, duration: action.payload };
        case 'SET_LEVEL':
            return { ...state, level: action.payload };
        default:
            return state;
    }
};

const TripsContainer: React.FC = () => {
    const [state, dispatch] = useReducer(filtersReducer, initialState);
    const [filteredTrips, setFilteredTrips] = useState(tripsData);

    useEffect(() => {
        applyFilters();
    }, [state]);

    const applyFilters = () => {
        const { search, duration, level } = state;

        const filtered = tripsData.filter((trip) => {
            const titleMatch = trip.title.toLowerCase().includes(search.toLowerCase());

            const firstCondition = trip.duration < 5
            const secondCondition = trip.duration < 10
            const thirdCondition = trip.duration >= 10
            const durationSwitch = () => {
                let value
                switch (duration.toString()) {
                    case "0_x_5": value = firstCondition
                        break
                    case "5_x_10": value = secondCondition
                        break
                    case "< 10 days": value = thirdCondition
                        break
                }
                return value
            }

            // const durationMatch = !duration || trip.duration === duration;
            const durationMatch = !duration || durationSwitch();
            const levelMatch = !level || trip.level === level;
            return titleMatch && durationMatch && levelMatch;
        });

        setFilteredTrips(filtered);
    };

    return (
        <>
            <section className="trips-filter">
                <h2 className="visually-hidden">Trips filter</h2>
                <FilterForm state={state} dispatch={dispatch} />
            </section>
            <section className="trips">
                <h2 className="visually-hidden">Trips List</h2>
                <TripsList trips={filteredTrips} />
            </section>
        </>
    );
};

export default TripsContainer;
