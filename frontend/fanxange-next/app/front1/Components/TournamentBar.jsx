import React from 'react';

const LoadingComponent = () => {
    return (
        <div className='text-white text-xs cursor-pointer hover:opacity-50 font-bold'>
            Loading...
        </div>
    );
};

const TournamentBar = ({ matches, Series, liveMatchesStatus, upcomingMatchesStatus, recentMatchesStatus, resultMatchesStatus }) => {
    // Check if any of the statuses is "loading"
    const isLoading =
        liveMatchesStatus === 'loading' ||
        upcomingMatchesStatus === 'loading' ||
        recentMatchesStatus === 'loading' ||
        resultMatchesStatus === 'loading';

    return (
        <div className='w-full overflow-auto'>
            <div className='flex space-x-3 flex-wrap px-5 w-max'>
                {isLoading ? (
                    <LoadingComponent />
                ) : (
                    <p className='text-white text-xs cursor-pointer hover:opacity-50 font-bold'>
                        All Matches({matches?.result?.length})
                    </p>
                )}

                {Series?.map((series) => {
                    return (
                        <p
                            key={series.seriesId}
                            className='text-white text-xs cursor-pointer hover:opacity-50'
                        >
                            {isLoading ? (
                                <LoadingComponent />
                            ) : (
                                `${series.name}(${series.count})`
                            )}
                        </p>
                    );
                })}
            </div>
        </div>
    );
};

export default TournamentBar;
