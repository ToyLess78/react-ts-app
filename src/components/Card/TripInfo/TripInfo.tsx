import React from 'react';

interface TripInfoProps {
    title: string;
    duration: number;
    level: string;
}

const TripInfo: React.FC<TripInfoProps> = ({ title, duration, level }) => {
    return (
        <div className="trip-info">
            <h3 data-test-id="trip-card-title" className="trip-info__title">
                {title}
            </h3>
            <div className="trip-info__content">
        <span data-test-id="trip-card-duration" className="trip-info__duration">
          <strong>{duration}</strong> days
        </span>
                <span data-test-id="trip-card-level" className="trip-info__level">
          {level}
        </span>
            </div>
        </div>
    );
};

export default TripInfo;
