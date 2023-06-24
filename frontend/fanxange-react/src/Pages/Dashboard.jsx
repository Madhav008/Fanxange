import React from 'react'

const Dashboard = () => {
  return (
    <div className='h-[100vh]'>

      <div className='sticky top-0 bg-black'>
        {/* Navbar */}
        <nav>
          <div className="navbar bg-base-100">

            <div className="flex-1">
              <a className="btn btn-ghost normal-case text-2xl"><span className='text-accent'>Fan</span>Xange</a>
            </div>
            <div className="btn flex-none lg:hidden">
              <button className="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
              </button>
            </div>


          </div>
        </nav>
        {/* Tab bar and search bar */}
        <div className='px-5 border-t border-gray-200 dark:border-gray-700 '>

          <ul class="mb-2  flex text-sm font-medium text-center text-gray-500  dark:text-gray-400 overflow-auto">
            <li class="mr-2">
              <a href="#" aria-current="page" class="inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500">Profile</a>
            </li>
            <li class="mr-2">
              <a href="#" class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Dashboard</a>
            </li>
            <li class="mr-2">
              <a href="#" class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Settings</a>
            </li>
            <li class="mr-2">
              <a href="#" class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Contacts</a>
            </li>
            <li>
              <a class="inline-block p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500">Disabled</a>
            </li>
          </ul>

          <input type="text" placeholder="Type here" className="input input-bordered input-info w-full " />
        </div>
      </div>

      {/* Player stats */}
      <div className='p-5'>
        <div class="shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left">
            <thead class="text-xs ">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Player
                </th>


                <th scope="col" class="px-6 py-3">
                  <div class="flex items-center">
                    Price
                    <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" /></svg></a>
                  </div>
                </th>

              </tr>
            </thead>
            <tbody>
              <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr> <tr class="">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>

                <td class="px-6 py-4">
                  $2999
                </td>
              </tr>

            </tbody>
          </table>
        </div>

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