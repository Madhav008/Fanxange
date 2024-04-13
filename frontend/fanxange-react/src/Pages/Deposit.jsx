import React, { useEffect, useState } from 'react';
import './DepositPage.css';
import { load } from '@cashfreepayments/cashfree-js';
import { useParams } from 'react-router-dom';
import axios from 'axios'; // Make sure axios is imported

const DepositPage = () => {
    const { orderId } = useParams();
    const [orderData, setOrderData] = useState(null);


    let cashfree;

    let insitialzeSDK = async function () {

        cashfree = await load({
            mode: "production",
        })
    }

    insitialzeSDK()
    useEffect(() => {
        if (orderId) {
            getOrderData(orderId);
        }
    }, [orderId]);


    const getOrderData = async (orderId) => {
        try {
            let res = await axios.post(`https://test.fanxange.live/payment/order/${orderId}`);
            setOrderData(res.data);
        } catch (error) {
            console.error("Failed to fetch order data:", error);
        }
    };
    
    const handleClick = async (e) => {
        e.preventDefault()
        try {
            let checkoutOptions = {
                paymentSessionId: orderData.payment_session_id,
                redirectTarget: "_self",
            }
            cashfree.checkout(checkoutOptions).then(async (res) => {
                await verifyPayment();
            })
        } catch (error) {
            console.log(error)
        }
    }

    if (!orderData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="iphone">
            <header className="header">
                <h1>Add Amount To Wallet</h1>
            </header>

            <form className="form">
                <div>
                    <table>
                        <tbody>
                            <tr>
                                <td>Amount</td>
                                <td align="right">₹{orderData.order_amount}</td>
                            </tr>
                            <tr>
                                <td>GST 28%</td>
                                <td align="right">+₹{(orderData.order_amount * 0.28).toFixed(2)}</td>
                            </tr>
                            <tr>
                                <td>Discount</td>
                                <td align="right">-₹{(orderData.order_amount * 0.28).toFixed(2)}</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td>Total</td>
                                <td align="right">₹{orderData.order_amount}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>

                <div>
                    <button onClick={handleClick} className="button button--full"> {/* Corrected button type */}
                        Add Fund
                    </button>
                </div>
            </form>
        </div>
    );
};

export default DepositPage;
