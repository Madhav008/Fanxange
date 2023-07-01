import React from 'react'

const BuySell = () => {
    return (
        <div className=' h-[350px] w-full p-5'>
            <div className="tabs flex justify-between ">
                <a className="tab tab-bordered tab-active flex-1 font-bold text-white text-lg">Execute Order</a>
            </div>


            <div className="form-control ">
                <label className="label">
                    <span className="label-text">Enter amount</span>
                </label>
                <label className="input-group text-white h-12 w-[100%]">
                    <span>At Price</span>
                    <input type="text" placeholder="10" className="w-[50%] pl-2 focus:outline-none " />
                    <span>INR</span>
                </label>


                <label className="label">
                    <span className="label-text">Number of Stocks</span>
                </label>
                <label className="input-group text-white h-12 w-[100%]">
                    <span>Stocks</span>
                    <input type="text" placeholder="12" className="w-[50%] pl-2 focus:outline-none " />
                    <span>QTY</span>
                </label>

                <label className="label">
                    <span className="label-text">Enter amount</span>
                </label>
                <label className="input-group text-white h-12 w-[100%] ">
                    <span>Total Price</span>
                    <input type="text" placeholder="10" className="w-[50%] pl-2 focus:outline-none  " />
                    <span>INR</span>
                </label>
            </div>

            <button className='btn bg-green-500 w-full mt-3 text-white font-bold'>
                BUY
            </button>
            <button className='btn bg-red-500 w-full mt-3 text-white font-bold mb-3'>
                SELL
            </button>
        </div>


    )
}

export default BuySell