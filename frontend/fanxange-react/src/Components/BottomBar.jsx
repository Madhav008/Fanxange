import React from 'react'

const BottomBar = () => {
    return (
        <div> <div className='px-5 mt-2 sticky bottom-0 '>
            <div className="tabs tabs-boxed flex justify-between ">
                <div className="divider"></div>
                <a className="tab text-sm p-2">Markets</a>
                <a className="tab text-sm p-2 ">Charts</a>
                <a className="tab text-sm p-2 tab-active">Buy/Sell</a>
                <a className="tab text-sm p-2">Trades</a>
                <a className="tab text-sm p-2 ">My Orders</a>
            </div>
        </div></div>
    )
}

export default BottomBar