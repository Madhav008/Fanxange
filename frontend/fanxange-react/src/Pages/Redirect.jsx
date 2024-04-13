import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Redirect.css';  // Make sure to link the CSS file for styles

const Redirect = () => {
    const { orderId } = useParams();
    const [verified, setVerified] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const verifyPayment = async (orderId) => {
            try {
                const response = await axios.post(`https://test.fanxange.live/payment/verify/order/${orderId}`);
                if (response.data.success) {
                    setVerified(true);
                } else {
                    setVerified(false);
                }
            } catch (error) {
                console.log('Error verifying payment:', error);
            }
            setLoading(false);

            // Redirect and close after a delay
            setTimeout(() => {
                window.location.href = 'fanxange://orders';
                try {
                    window.close(); // Attempt to close the tab
                } catch (e) {
                    console.error("Couldn't close the tab automatically:", e);
                }
            }, 2000);
        };

        if (orderId) {
            verifyPayment(orderId);
        }
    }, [orderId]);

    if (loading) {
        return <div className="container">Verifying...</div>;
    }

    return (
        <div className="container">
            {verified ? (
                <div className="row justify-content-center">
                    <div className="col-md-5">
                        <div className="message-box _success">
                            <i className="fa fa-check-circle" aria-hidden="true"></i>
                            <h2>Your payment was successful</h2>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="row justify-content-center">
                    <div className="col-md-5">
                        <div className="message-box _success _failed">
                            <i className="fa fa-times-circle" aria-hidden="true"></i>
                            <h2>Your payment failed</h2>
                            <p>Try again later.</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Redirect;
