import {useParams} from "react-router-dom";
import { useState} from "react";
import tripsData from '../assets/trips.json';
import TripPreview from "../components/TripPreview/TripPreview.tsx";
import BookingForm from "../components/BookingForm/BookingForm.tsx";
import Modal from "../components/Modal/Modal.tsx";

const Trip = () => {
    const {tripId} = useParams()
    const trip = tripsData.find(item => item.id === tripId);
    console.log(trip);


    const { title, duration, level,  description, price,image} = trip
    const [openModal, setOpenModal] = useState(false);


    const handleBookTripClick = () => {
        setOpenModal(true);
    };
    const handleModalClick = () => {
        setOpenModal(false);
    }

    return (
        <>
        <TripPreview
            title={title}
            duration={duration}
            level={level}
            description={description}
            price={price}
            image={image}
            handleBookTripClick={handleBookTripClick}
        />
            <Modal openModal={openModal} onClick={handleModalClick}>
                <BookingForm
                    title={title}
                    duration={duration}
                    price={price}
                />
            </Modal>
        </>
    )

}

export default Trip