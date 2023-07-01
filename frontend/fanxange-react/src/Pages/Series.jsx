import React from 'react'
import Navbar from '../Components/Navbar'

const Series = () => {
    return (
        <div>
            <Navbar />
            <div className="overflow-x-auto m-6">
                <table className="table text-xl">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Tournament</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>

                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="https://ik.imagekit.io/c7syb8qpjp/Series/17A.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">
                                            Ireland tour of England 2023</div>
                                        <div className="text-sm opacity-50">United States</div>
                                    </div>
                                </div>
                            </td>
                          

                        </tr>
                        {/* row 2 */}
                        <tr>

                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="https://ik.imagekit.io/c7syb8qpjp/Series/17A.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Brice Swyre</div>
                                        <div className="text-sm opacity-50">China</div>
                                    </div>
                                </div>
                            </td>
                        

                        </tr>
                        {/* row 3 */}
                        <tr>

                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="https://ik.imagekit.io/c7syb8qpjp/Series/17A.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Marjy Ferencz</div>
                                        <div className="text-sm opacity-50">Russia</div>
                                    </div>
                                </div>
                            </td>
                           

                        </tr>
                     
                    </tbody>


                </table>
            </div>
        </div>
    )
}

export default Series