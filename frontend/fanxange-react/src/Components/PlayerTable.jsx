import React from 'react'
import { Link } from 'react-router-dom'

const PlayerTable = ({ order, }) => {
    return (
        <tr key={order.id}>
            <td class="mt-4">
                <Link to={`/player/${order.order.playerId}`}>
                    <div class="flex items-center">
                        <div class="flex flex-col items-center justify-center w-[70px] h-[70px] bg-purple-700 border-2 border-red-500 rounded-full relative">
                            <span class="flex items-end justify-center">
                                <img class='w-[55px] h-[60px] rounded-full border-none outline-none' src={order.playerInfo.imageUrl
                                    ? `https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_640,q_50/lsci${order.playerInfo?.imageUrl}`
                                    : '/assets/images/player_search/avatar_1.png'}
                                    alt='Player Avatar' />
                            </span>
                            <span class="absolute bottom-[-14px] left-1/2 transform -translate-x-1/2 w-[50px] h-[20px] text-[10px] font-bold uppercase font-open-sans leading-2 text-white bg-black text-center rounded-full" >Cricket</span>
                        </div>

                        <div class="flex flex-col justify-center items-start ml-2">
                            <span>{order.playerInfo?.name}</span>
                            <p>{order.playerInfo?.teamName}</p>
                        </div>
                    </div>
                </Link>
            </td>
            <td>
                <p class="earning flex items-center">
                    <i class="fas fa-dollar-sign"></i> {(order.order.orderType === 'Buy'
                        ? (Number(order.playerPerformanceMatches.price).toFixed(2) - Number(order.order.price).toFixed(2)).toFixed(2)
                        : (Number(order.order.price).toFixed(2) - Number(order.playerPerformanceMatches.price).toFixed(2)).toFixed(2)
                    )}
                </p>
            </td>
            <td>
                <p class="price"><i class="fas fa-dollar-sign"></i> {Number(order?.playerPerformanceMatches?.price).toFixed(2)}</p>
            </td>
            <td>
                <p class="bought"><i class="fas fa-dollar-sign"></i> {Number(order?.order?.price).toFixed(2)}</p>
            </td>
            <td>
                <p class="share">{order?.order?.qty}</p>
            </td>


            <td>
                <p className={`text-sm font-semibold flex items-center gap-1 ${order.order.orderType === 'Buy' ? 'text-green-400' : 'text-red-400'
                    }`}>
                    {order.order.orderType}</p>
            </td>
            <td>
                <p class="status">{order.order.status}</p>
            </td>
            <td>
                <span class="hover:bg-info font-open-sans text-[16px] font-bold leading-[1.75] uppercase text-white bg-transparent px-4 py-2 border border-white border-opacity-30 rounded-[25px] transition-all duration-600">Close</span>
            </td>
        </tr>


    )
}

export default PlayerTable


