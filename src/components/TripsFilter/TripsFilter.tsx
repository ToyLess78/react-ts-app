import DurationFilter from "../SelectFilter/DurationFilter.tsx";
import TripsFilterLevel from "../SelectFilter/TripsFilterLevel.tsx";
import React from "react";
import Search from "../Search/Search.tsx";


const TripsFilter: React.FC = () => {
    return (
        <section className="trips-filter">
            <h2 className="visually-hidden">Trips filter</h2>
            <form className="trips-filter__form" autoComplete="off">
                <Search />
                <DurationFilter dataTestId="filter-duration" name="duration" />
                <TripsFilterLevel />
            </form>
        </section>
    );
};

export default TripsFilter;
