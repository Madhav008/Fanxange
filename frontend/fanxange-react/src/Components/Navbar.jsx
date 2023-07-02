import React, { useEffect, useState } from 'react'
import PlayerStats from './PlayerStats'
import Tabbar from './Tabbar'
import axios from 'axios';
import Matches from './Macthes.json'
const Navbar = () => {

    function getSeries() {
        const res = Matches

        try {
            // console.log(res);
            // if(res.matches.status!=="RESULT"){
            //     console.log(res.matches)
            //     return res.matches;
            // }
            let matchdata = [];
            res.matches.map((series) => {
                if ( (series.coverage==="Y" || series.coverage==="U") || (series.stage==="RUNNING" || series.stage==="LIVE")) {
                    // console.log(series)
                    matchdata.push(series);
                }
            });

            let seriesmap = new Map();
            matchdata.map((series) => {
                const alternateName = series.series.alternateName;
                if (!seriesmap.has(alternateName)) {
                  seriesmap.set(alternateName, []);
                }
                seriesmap.get(alternateName).push(series);
            })

            console.log(seriesmap);

            return seriesmap;
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        const data = getSeries();

        setSeies(data);

    }, [])

    const [Seies, setSeies] = useState()

    return (
        <div>
            <nav className='w-full'>
                <div className="navbar bg-base-100 ">

                    <div className="flex justify-between mx-auto w-full">
                        <div className='flex space-x-1 text-center font-bold text-3xl items-center'>
                            <img src="./src/assets/react.svg" alt="" srcset="" />
                            <span className='text-accent'>Fan</span>Xange
                        </div>
                        <div className="flex-none lg:hidden">
                            <button className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </button>
                        </div>
                    </div>

                </div>
                <div className='mx-5 flex flex-col justify-center space-x-3 overflow-x-auto'>

                    {
                        // console.log(Seies)
                        // Array.from(Seies)?.map(([key]) => {
                        //     return <span className='text-white '>{key}</span>
                        // })
                    }
                    {/* 
                    <span>Series</span>
                    <span>Series</span>
                    <span>Series</span>
                 */}
                </div>

                <Tabbar />
            </nav>
        </div>
    )
}

export default Navbar