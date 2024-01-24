import React from 'react';

interface TripPriceProps {
    price: number;
}

const TripPrice: React.FC<TripPriceProps> = ({ price }) => {
    return (
        <div className="trip-price">
            <span>Price</span>
            <strong data-test-id="trip-card-price-value" className="trip-price__value">
                ${price}
            </strong>
        </div>
    );
};

export default TripPrice;
