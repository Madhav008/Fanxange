import React from 'react'
import { BiSolidDownArrow, BiSolidUpArrow, BiSolidPlusCircle, BiSolidMinusCircle } from 'react-icons/bi'
import BuySell from './BuySell'

const PlayerProfile = () => {
  return (
    <div className='p-5 lg:flex bg-neutral lg:items-center mb-6 '>
      <div className='flex items-center justify-between mb-6'>
        <img className="w-[100px] h-[100px] lg:w-max lg:h-max" src="https://pixner.net/spovest/dark/assets/images/profile/profile.png" alt="" />
        <div className='text-end'>
          <h1 className='font-bold lg:text-xl mx-5 px-5 text-white'>David Miller</h1>
          <h1 className='font-bold lg:text-xl mx-5 px-5 text-yellow-400'>Golden State Warriors</h1>
        </div>
      </div>
      <div className="divider"></div>
      <div className='lg:flex gap-2 justify-evenly items-center'>
        <div className="lg:divider lg:divider-horizontal "></div>
        <div className='whitespace-nowrap'>
          <h1><span className='font-bold lg:text-xl text-white'>$0.00</span> <span className='break-words whitespace-nowrap'>(0 Shares)</span></h1>
          <h1 className='lg:text-lg text-info break-words whitespace-nowrap'>Total value</h1>
        </div>
        <div className="divider lg:divider-horizontal "></div>
        <div>
          <h1><span className='font-bold lg:text-xl text-white'>$1.06</span></h1>
          <h1 className='lg:text-lg text-info break-words whitespace-nowrap'>Current Price</h1>
        </div>
        <div className="divider lg:divider-horizontal "></div>
        <div>
          <h1><span className='font-bold lg:text-xl text-white'>Points 1.30</span></h1>
          <h1 className='lg:text-lg text-info break-words whitespace-nowrap'>Current Points</h1>
        </div>
        <div className="divider lg:divider-horizontal "></div>

        <div className='flex  mx-auto w-full justify-between  items-center'>
          <div>
            <h1><span className='font-bold lg:text-xl flex text-success '>$0.21(11%) <BiSolidUpArrow className=' m-1' /> </span></h1>
            <h1 className='lg:text-lg text-info break-words whitespace-nowrap'>24H Change</h1>
          </div>


          <div className="divider lg:divider-horizontal "></div>

          <div className='flex text-center gap-5 text-lg items-center py-5'>
            <button className='outline rounded-full w-[100px] btn btn-outline hover:bg-green-500 text-white hover:text-white ' onClick={() => window.my_modal_2.showModal()}>Buy</button>
            <button className='outline rounded-full w-[100px] btn btn-outline hover:bg-red-500 text-white hover:text-white ' onClick={() => window.my_modal_2.showModal()}>Sell</button>
          </div>
        </div>

      </div>

      <dialog id="my_modal_2" className="modal">
        {/* <form method="dialog" className="modal-box p-0 "> */}
        <div class=" modal-box  p-0 relative w-full  max-h-full">
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">

            <div class=" text-center">

              <BuySell />







            </div>
          </div>
        </div>
        {/* </form> */}
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  )
}

export default PlayerProfile