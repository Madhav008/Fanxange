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
                                
                                <th>Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <td>Cy Ganderton</td>
                                <td>100</td>
                                <td>1</td>
                            </tr>
                            {/* row 2 */}
                            <tr>
                                <td>Hart Hagerty</td>
                                <td>200</td>
                                <td>1</td>
                            </tr>
                            {/* row 3 */}
                            <tr>
                                <td>Brice Swyre</td>
                                <td>300</td>
                                <td>2</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>


        </div>
    )
}

export default Order