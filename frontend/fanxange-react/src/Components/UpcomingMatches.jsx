import React, { useEffect, useState } from 'react'
import { useGetMatchInfoQuery, useGetTeamDataQuery } from '../services/fanxangeApi'
import { useDispatch } from 'react-redux';
import { setMatchData, setTeamData } from '../store/matchSlice';

const UpcomingMatches = ({ match }) => {

    const [query, setquery] = useState({})
    const { data: matchInfo } = useGetMatchInfoQuery(query);
    const { data: teamdata } = useGetTeamDataQuery(query)


    const dispatch = useDispatch();

    const handleQuery = () => {
        setquery({
            matchId: match.matchId,
            seriesId: match.seriesId,
        })

    }

    useEffect(() => {
        if (matchInfo) {
            dispatch(setMatchData(matchInfo))
        }

        if (teamdata) {
            dispatch(setTeamData(teamdata))
        }
    }, [matchInfo, query,teamdata])

    return (
        <div onClick={handleQuery} key={match?.mactchId} className='card shadow-lg hover:opacity-70 p-10 bg-base-200 mb-3'>
            <p className='font-semibold mb-2 text-xs border-b whitespace-nowrap flex justify-between'> <div>{match.groundName}</div> <div>{match.matchTime}</div> </p>
            <div className='flex text-center justify-between align-middle'>
                <div>
                    <img className='rounded-full w-[40px] h-[35px] mt-1' src={`https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_80/lsci${match.teams[0]?.team.imageUrl}`} width="40" height="35" alt="Team 1" />
                    <span className='text-bold text-white whitespace-nowrap'>{match.teams[0]?.team.abbreviation}</span>
                </div>
                <span className='text-bold text-white m-5'>
                    vs
                </span>
                <div>
                    <img className='rounded-full w-[40px] h-[35px] mt-1' src={`https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_80/lsci${match.teams[1]?.team.imageUrl}`} width="40" height="35" alt="Team 2" />
                    <span className='text-bold text-white whitespace-nowrap'>{match.teams[1]?.team.abbreviation}</span>
                </div>
            </div>
            <p className='font-semibold mb-2 text-xs mt-5 whitespace-nowrap'>{match.statusText}</p>

        </div>
    )
}

export default UpcomingMatches



