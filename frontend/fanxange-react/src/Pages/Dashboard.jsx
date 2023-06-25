import React from 'react'
import Charts from '../Components/Charts'

const Dashboard = () => {
  return (
    <div className='h-[100vh] '>

      <div >
        {/* Navbar */}
        <nav>
          <div className="navbar bg-base-100">

            <div className="flex-1">
              <a className="btn btn-ghost normal-case text-2xl"><span className='text-accent'>Fan</span>Xange</a>
            </div>
            <div className="flex-none lg:hidden">
              <button className="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
              </button>
            </div>


          </div>
        </nav>
        {/* Tab bar and search bar */}
        <div className='px-5 my-3'>
          <ul className='flex space-x-2 overflow-x-scroll'>
            <li>
              <div className="card w-96 bg-neutral text-neutral-content">
                <div className="card-body items-center text-center">
                  <h2 className="card-title">Cookies!</h2>
                  <p>We are using cookies for no reason.</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Accept</button>
                    <button className="btn btn-ghost">Deny</button>
                  </div>
                </div>
              </div>
            </li><li>
              <div className="card w-96 bg-neutral text-neutral-content">
                <div className="card-body items-center text-center">
                  <h2 className="card-title">Cookies!</h2>
                  <p>We are using cookies for no reason.</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Accept</button>
                    <button className="btn btn-ghost">Deny</button>
                  </div>
                </div>
              </div>
            </li><li>
              <div className="card w-96 bg-neutral text-neutral-content">
                <div className="card-body items-center text-center">
                  <h2 className="card-title">Cookies!</h2>
                  <p>We are using cookies for no reason.</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Accept</button>
                    <button className="btn btn-ghost">Deny</button>
                  </div>
                </div>
              </div>
            </li><li>
              <div className="card w-96 bg-neutral text-neutral-content">
                <div className="card-body items-center text-center">
                  <h2 className="card-title">Cookies!</h2>
                  <p>We are using cookies for no reason.</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Accept</button>
                    <button className="btn btn-ghost">Deny</button>
                  </div>
                </div>
              </div>
            </li><li>
              <div className="card w-96 bg-neutral text-neutral-content">
                <div className="card-body items-center text-center">
                  <h2 className="card-title">Cookies!</h2>
                  <p>We are using cookies for no reason.</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Accept</button>
                    <button className="btn btn-ghost">Deny</button>
                  </div>
                </div>
              </div>
            </li>
          </ul>

        </div>
      </div>

      {/* Player stats */}
      <div className='p-5'>
        <div className="form-control w-full">
          <div className="input-group">
            <input type="text" placeholder="Search…" className="input input-bordered outline-none w-[100%] " />
            <button className="btn btn-square">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
          </div>
        </div>
        <div className="overflow-x-auto h-[150px]">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Name</th>
                <th>Favorite Color</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <td>Cy Ganderton</td>
                <td>Blue</td>
              </tr>
              {/* row 2 */}
              <tr>
                <td>Hart Hagerty</td>
                <td>Purple</td>
              </tr>
              {/* row 3 */}
              <tr>
                <td>Brice Swyre</td>
                <td>Red</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>




      <div className='flex'>
        {/* Orders */}
        <div className='mx-5 w-[500px]'>
          <div className="tabs flex justify-between ">
            <a className="tab tab-bordered flex-1">OPEN ORDERS</a>
            <a className="tab tab-bordered tab-active flex-1">CLOSE ORDERS</a>
          </div>

          <div className="overflow-x-auto  h-[350px]">
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

        {/* Buy/Sell */}

        <div className='mx-5 w-[500px] h-[350px]'>
          <div className="tabs flex justify-between ">
            <a className="tab tab-bordered flex-1">Buy</a>
            <a className="tab tab-bordered tab-active flex-1">Sell</a>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Enter amount</span>
            </label>
            <label className="input-group">
              <span>At Price</span>
              <input type="text" placeholder="10" className="input input-bordered w-[100%]" />
              <span>INR</span>
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Number of Stocks</span>
            </label>
            <label className="input-group">
              <span>Stocks</span>
              <input type="text" placeholder="12" className="input input-bordered w-[100%]" />
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Enter amount</span>
            </label>
            <label className="input-group">
              <span>Total Price</span>
              <input type="text" placeholder="10" className="input input-bordered w-[100%]" />
              <span>INR</span>
            </label>
          </div>


        </div>
      </div>
      <div className='m-5'>
        <Charts />
      </div>
      {/* Bottom Tabbar */}

      <div className='px-5 mt-2 sticky bottom-0 '>
        <div className="tabs tabs-boxed flex justify-between ">
          <div className="divider"></div>
          <a className="tab text-sm p-2">Markets</a>
          <a className="tab text-sm p-2 ">Charts</a>
          <a className="tab text-sm p-2 tab-active">Buy/Sell</a>
          <a className="tab text-sm p-2">Trades</a>
          <a className="tab text-sm p-2 ">My Orders</a>
        </div>
      </div>
    </div>
  )
}

export default Dashboard