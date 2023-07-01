import React from 'react'

const Order = () => {
    return (

        <div className='mx-5 h-[350px] w-full' >
            <div className="tabs flex flex-wrap justify-between ">
                <a className="tab tab-bordered flex-1">OPEN ORDERS</a>
                <a className="tab tab-bordered tab-active flex-1">CLOSE ORDERS</a>
            </div>
            <div className='mx-5 h-[350px] overflow-y-scroll'>
                <div className="text-white">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Job</th>
                                <th>Favorite Color</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <th>1</th>
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>
                            </tr>
                            {/* row 2 */}
                            <tr>
                                <th>2</th>
                                <td>Hart Hagerty</td>
                                <td>Desktop Support Technician</td>
                                <td>Purple</td>
                            </tr>
                            {/* row 3 */}
                            <tr>
                                <th>3</th>
                                <td>Brice Swyre</td>
                                <td>Tax Accountant</td>
                                <td>Red</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>


        </div>
    )
}

export default Order