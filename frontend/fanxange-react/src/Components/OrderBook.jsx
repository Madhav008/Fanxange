import React from 'react'

const OrderBook = () => {
  return (
    <div className='w-full'>
      <div className="tabs ">
        <a className="tab tab-bordered tab-active flex-1 font-bold text-left">ORDER BOOK</a>
      </div>
      <div className='mx-5 h-[450px] overflow-y-scroll'>



        <div className='text-white'>
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th className='text-white'>Price</th>
                <th className='text-white'>Volume</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr className='bg-red-900'>
                <td>Virat Kohli</td>
                <td>$100</td>
              </tr>
              {/* row 2 */}
              <tr className='bg-green-900'>
                <td>Shikhar Dhawan</td>

                <td>$500</td>
              </tr>
              {/* row 3 */}
              <tr className='bg-red-900'>
                <td>Japreet Bumrah</td>

                <td>$42</td>
              </tr>


            </tbody>
          </table>
        </div>

      </div></div>
  )
}

export default OrderBook