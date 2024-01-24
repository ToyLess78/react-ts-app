import React from 'react';

interface BookingItemProps {
    title: string;
    guests: number;
    date: string;
    total: number;
    onCancel: () => void;
}

const BookingItem: React.FC<BookingItemProps> = ({ title, guests, date, total, onCancel }) => {
    return (
        <li data-test-id="booking" className="booking">
            <h3 data-test-id="booking-title" className="booking__title">
                {title}
            </h3>
            <span data-test-id="booking-guests" className="booking__guests">
        {guests} guests
      </span>
            <span data-test-id="booking-date" className="booking__date">
        {date}
      </span>
            <span data-test-id="booking-total" className="booking__total">
        {total} $
      </span>
            <button
                data-test-id="booking-cancel"
                className="booking__cancel"
                title="Cancel booking"
                onClick={onCancel}
            >
                <span className="visually-hidden">Cancel booking</span>
                ×
            </button>
        </li>
    );
};

export default BookingItem;
