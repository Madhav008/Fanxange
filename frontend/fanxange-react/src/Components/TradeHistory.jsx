import React from 'react'

const TradeHistory = () => {
    return (
        <div className='w-full'>
            <div className="tabs ">
                <a className="tab tab-bordered tab-active flex-1 font-bold text-left">TRADE HISTORY</a>
            </div>
            <div className='mx-5 h-full overflow-y-scroll'>
            

            <div className="overflow-x-auto text-white h-[450px] ">
                <table className="table ">
                    {/* head */}
                    <thead>
                        <tr>
                        
                            <th className='text-white'>Price</th>
                            <th className='text-white'>VOLUME</th>
                            <th className='text-white'>TIME</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <td className='text-red-400'>26,52,001. 80</td>
                            <td>0.03770</td>
                            <td>18:35:19</td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                            <td className='text-green-400'>26,52,001. 80</td>
                            <td>0.03770</td>
                            <td>18:35:19</td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                            <td className='text-red-400'>26,52,001. 80</td>
                            <td>0.03770</td>
                            <td>18:35:19</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div></div>
    )
}

export default TradeHistory