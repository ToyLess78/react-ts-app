import React, { useState, useRef } from 'react';
import {setStartDate} from "../../helpers/helpers.ts";
import { useNavigate } from 'react-router-dom';
interface FormProps {
    title: string;
    duration: number;
    price: number;
}


const BookingForm: React.FC<FormProps> = ({ title, duration, price}) => {
    const [date, setDate] = useState('');
    const [guests, setGuests]: [
        number,
        React.Dispatch<
            React.SetStateAction<number>
        >,
    ] = useState(1);
    const navigate = useNavigate();


    const changeInput = (event) => {
        if (event.target.name === 'guests') {
            setGuests(+event.target.value);
        }
        if (event.target.name === 'date') {
            setDate(`${event.target.value}`);
        }
    };

    // console.log(dateOnly);
    const dateInputRef = useRef(null);
    const guestsInputRef = useRef(null);
    const totalPriseRef = useRef(null);


    return (

                        <form className="book-trip-popup__form" autoComplete="off" method="post" action="/bookings" onSubmit={e => {
                            e.preventDefault()
                            const newBooking = {
                                id: (new Date().getTime()).toString(36),
                                date: dateInputRef.current.value,
                                guests: guestsInputRef.current.value,
                                totalPrice: totalPriseRef.current.value,
                                trip: {
                                    title: title,
                                    duration: duration,
                                    price: price
                            }
                        }

                            navigate('/bookings', { state: { newBooking } });

                        }}>
                            <div className="trip-info">
                                <h3 data-test-id="book-trip-popup-title" className="trip-info__title">
                                    {title}
                                </h3>
                                <div className="trip-info__content">
                  <span data-test-id="book-trip-popup-duration" className="trip-info__duration">
                    <strong>{duration}</strong> days
                  </span>
                                    <span data-test-id="book-trip-popup-level" className="trip-info__level">
                    easy
                  </span>
                                </div>
                            </div>
                            <label className="input">
                                <span className="input__heading">Date</span>
                                <input
                                    data-test-id="book-trip-popup-date"
                                    name="date"
                                    type="date"
                                    required
                                    value={date}
                                    min ={setStartDate()}
                                    onChange={changeInput}
                                    ref={dateInputRef}
                                />
                            </label>
                            <label className="input">
                                <span className="input__heading">Number of guests</span>
                                <input data-test-id="book-trip-popup-guests" name="guests" type="number" min="1" max="10" value={guests} onChange={changeInput} ref={guestsInputRef} required/>
                            </label>
                            <span className="book-trip-popup__total">
                Total:
                 <output data-test-id="book-trip-popup-total-value" ref={totalPriseRef}>
                     {price * guests}$
                  </output>
              </span>
                            <button data-test-id="book-trip-popup-submit" className="button" type="submit" onSubmit={(e) => {
                                e.preventDefault();
                                console.log("submit",e)
                            }}>
                                Book a trip
                            </button>
                        </form>

    );
};

export default BookingForm;
