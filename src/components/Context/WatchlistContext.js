import React from 'react';
import { createContext } from 'react';
import { useState, useEffect } from 'react';

export const WatchlistContext = createContext([])

export const WatchlistContextProvider = ({children}) => {
    const [watchlist, setWatchlist] = useState([])

    function addCoinToWatchlist(coin){setWatchlist([...watchlist, coin])}     
    function deleteCoinFromWatchlist(coin){setWatchlist(watchlist.filter((x) => x.id !== coin.id))}

    useEffect(() => {
        let watchlist = localStorage.getItem("watchlist")
        if (watchlist) {
            setWatchlist(JSON.parse(watchlist))
          }
    }, [])

    useEffect(() => {
        localStorage.setItem('watchlist', JSON.stringify(watchlist))
    }, [watchlist])

    return(
        <WatchlistContext.Provider value={{
            watchlist,
            setWatchlist,
            addCoinToWatchlist,
            deleteCoinFromWatchlist 
        }}>
            {children}
        </WatchlistContext.Provider>
    )
}

export default WatchlistContext;