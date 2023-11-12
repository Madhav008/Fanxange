import React from 'react'
import Navbar from '../Components/Navbar'
import './index.css'

const Wallet = () => {
    return (
        <div>
            <Navbar />
            <div>
                Total Balance ₹16.00
            </div>

            <div>
                Add Money

                <div>Enter Amount</div>

                <div>Choose amount to add</div>

                <div>Promotion Code</div>

                <button>Add Cash</button>
            </div>

            <div>
                Verify

                <div>Email Verification</div>

                <div>Phone Verification</div>

                <div>
                    Kyc Verification

                    <div>Name As per Aadhar,PAN and Band</div>

                    <div>
                        Identity Details

                        <div>
                            Aadhar Number

                        </div>

                        <div>
                            Pan Card Number

                            Date of Birth
                        </div>


                        <div>Band Account Details</div>
                    </div>
                </div>
            </div>

            <div>
                My Transactions
            </div>
        </div>
    )
}

export default Wallet