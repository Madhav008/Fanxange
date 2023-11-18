import React from 'react'
import Navbar from '../Components/Navbar'
import { IoWalletSharp } from "react-icons/io5";
import { RiLuggageDepositFill } from "react-icons/ri";
import { LuArrowDownToLine, LuArrowUpFromLine } from "react-icons/lu";



const Wallet = () => {
    return (
        <div className='font-open-sans '>
            <Navbar wallet={true} />

            <div className='bg-base-200 m-8 rounded-xl p-2  flex items-center justify-between flex-wrap '>

                <div className='p-8 items-start'>
                    <h1 className='font-semibold text-xl'>Wallet</h1>
                    <div className='mt-8 text-sm text-gray-400 flex items-center gap-2'>
                        <IoWalletSharp />
                        <h1 className='font-semibold   '>Wallet Balance</h1>
                    </div>

                    <div className='mt-4'>
                        <h2 className='font-bold text-lg md:text-2xl lg:text-3xl text-white leading-1'>₹31,200</h2>
                    </div>
                </div>


                <div className='bg-neutral p-2 rounded-xl'>
                    <div className='flex items-center justify-between flex-wrap'>
                        <div className='flex items-center gap-4 m-4 '>
                            <h1 className='font-bold text-sm text-gray-400'>Enter Amount</h1>
                        </div>
                        <div className='flex items-center gap-2 m-4'>
                          
                            <input type="number" placeholder="₹100" className="input input-bordered input-secondary w-full max-w-xs" />
                        </div>
                    </div>

                    <div className='flex gap-2 p-2 font-bold ml-2 flex-wrap'>
                        <div className='btn btn-info text-white'>
                            ₹50
                        </div><div className='btn btn-info text-white'>
                            ₹100
                        </div><div className='btn btn-info text-white'>
                            ₹200
                        </div><div className='btn btn-info text-white'>
                            ₹500
                        </div><div className='btn btn-info text-white'>
                            ₹1000
                        </div>
                    </div>

                    <div className='p-4  '>
                        <p className='btn btn-primary w-full font-bold'>
                            Add Money
                        </p>
                    </div>

                </div>
                <div className='bg-neutral p-2 rounded-xl'>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-4 m-4'>
                            <RiLuggageDepositFill />
                            <h1 className='font-bold text-sm text-gray-400'>Total Deposit</h1>
                        </div>
                        <div className='flex items-center gap-2 m-4'>
                            <LuArrowDownToLine className='text-blue-500' />
                            <h1 className='font-bold text-lg text-white'>₹31,200</h1>
                        </div>
                    </div>

                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-4 m-4'>
                            <RiLuggageDepositFill />
                            <h1 className='font-bold text-sm text-gray-400'>Total Withdrawals</h1>
                        </div>

                        <div className='flex items-center gap-4 m-4'>
                            <LuArrowUpFromLine className='text-blue-500' />
                            <h1 className='font-bold text-lg text-white'>₹31,200</h1>
                        </div>
                    </div>

                </div>
            </div>


            <div className='bg-base-200  rounded-xl p-2 m-6 '>

                <div className='p-4 items-start'>
                    <h1 className='font-semibold text-xl'>Transaction History</h1>

                </div>
                <div className='overflow-auto  h-[400px]'>
                    <table class="table table-sm lg:table-lg m-2 ">
                        <thead>
                            <tr className='text-lg'>
                                <th>Action</th>
                                <th>Amount</th>
                                <th>Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody >
                            <tr className='my-4'>
                                <td className='flex gap-1 text-bold items-center'><RiLuggageDepositFill /> Deposit</td>
                                <td className='font-semibold text-white  w-30px  '>₹123</td>
                                <td>12/11/2023</td>
                                <td className='text-green-500 font-bold'>Succesfull</td>
                            </tr>


                            <tr className='my-4'>
                                <td className='flex gap-1 text-bold items-center'><RiLuggageDepositFill /> Deposit</td>
                                <td className='font-semibold text-white  w-30px  '>₹123</td>
                                <td>12/11/2023</td>
                                <td className='text-green-500 font-bold'>Succesfull</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Wallet