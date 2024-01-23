import React, {useEffect} from 'react'
import ReactDOM from 'react-dom/client'
import './css/style.css'
import {createBrowserRouter, RouterProvider, useNavigate} from 'react-router-dom';
import Layout from './components/Layout/Layout.tsx';
import Trip from './pages/Trip.tsx';
import Booking from './pages/Booking.tsx';
import Register from './pages/Register.tsx';
import Login from './pages/Login.tsx';
import MainPage from './pages/MainPage.tsx';

const RedirectToHome = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/');
    }, [navigate]);

    // You can render something here if needed, or just null
    return null;
};

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <MainPage />
            },
            {
                path: 'trip/:tripId',
                element: <Trip />
            },
            {
                path: 'booking',
                element: <Booking />
            },
            {
                path: 'sign-up',
                element: <Register />
            },
            {
                path: 'sign-in',
                element: <Login />
            },
            {
                path: '*',
                element: <RedirectToHome />
            }
        ]
    }
]);

    ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);