import React, { useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux';
import { createOrder } from '../store/orderSlice';

const BuySell = ({ data }) => {
    const { playerData, status } = useSelector((state) => state.player);

    const [count, setcount] = useState(1)
    const increment = () => {
        setcount(count + 1);
    }

    const decrement = () => {
        if (count > 1) {
            setcount(count - 1);
        }
    }

    const dispatch = useDispatch();
    const price = playerData?.player?.playerPriceData?.price;
    const _handleOrder = () => {
        const price = playerData?.player?.playerPriceData?.price;
        const amount = price * count;
        const timestamp = Date.now();
        const status = "Pending";
        const orderType = data;
        const playerId = playerData.player.playerId
        const qty = count;
        if (data) {
            const order = {
                price, amount, qty, timestamp, status, orderType, playerId
            }
            dispatch(createOrder(order))
        }
    }

    return (
        <div className=' w-full p-5 bg-base-100 text-white'>
            <a className="font-bold text-white text-lg">{playerData?.player?.name}</a>
            {/* <h1>Batsman</h1> */}
            <div className='divider '></div>
            <div >
                <div className='flex justify-between w-full '>
                    <h1 className='font-semibold'>Initial Price</h1>
                    <h1 className=''>₹{parseFloat(playerData?.player?.playerPriceData?.price).toFixed(2)}</h1>
                </div>

                <div className='divider'></div>

                <div className='flex justify-between w-full '>
                    <h1 className='font-semibold'>No. of Shares</h1>
                    <div className=" flex items-center gap-2 rounded-full p-2 bg-accent">
                        <div className="flex items-center justify-center">
                            <FaMinus onClick={decrement} className=' mx-1' />
                        </div>
                        <div className="flex items-center justify-center">
                            <p>{count}</p>
                        </div>
                        <div className="flex items-center justify-center">
                            <FaPlus onClick={increment} className=' mx-1' />
                        </div>
                    </div >

                    {/* <div className"flex items-center space-x-3">
                        <button className"inline-flex items-center justify-center p-1 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                            <span className"sr-only">Quantity button</span>
                            <svg className"w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                            </svg>
                        </button>
                        <div>
                            <input type="number" id="first_product" className"bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1" required />
                        </div>
                        <button className"inline-flex items-center justify-center h-6 w-6 p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                            <span className"sr-only">Quantity button</span>
                            <svg className"w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                            </svg>
                        </button>
                    </div> */}
                </div >

                <div className='divider'></div>

                <div className='flex justify-between w-full '>
                    <h1 className='font-semibold'>Total Amount</h1>
                    <h1 className=''>{(price * count + 1.92).toFixed(2)}</h1>
                </div>

                <div className='divider'></div>

                <div className='flex justify-between w-full '>
                    <h1 >*Platform fees 6% (including GST)</h1>
                    <h1 className=''>₹1.92</h1>
                </div>

                <div className='divider'></div>
            </div >

            <button onClick={_handleOrder} className='btn bg-accent w-full mt-3 text-white font-bold mb-3'>
                Execute Order
            </button>
        </div >


    )
}

export default BuySell