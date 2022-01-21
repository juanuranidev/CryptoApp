import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import WatchlistContext from '../../../Context/WatchlistContext'
import './_Coin.scss'

const Coin = ({data}) => {
    const {watchlist, addCoinToWatchlist, deleteCoinFromWatchlist} = useContext(WatchlistContext)

    console.log(watchlist)

    return (
        <>
            {data.map(coin =>    
                <tr key={coin.id} className="coin">
                    {watchlist.includes(coin)
                    ?   <td><span className="coin_emptyStar fas fa-star fullStar" onClick={() => deleteCoinFromWatchlist(coin)} /></td>
                    :   <td><span className="coin_emptyStar far fa-star emptyStar" onClick={() => addCoinToWatchlist(coin)} /></td>}
                    <td><img src={coin.image} className="coin_image" /></td>
                    <td className="coin_name" ><Link to={`/coins/${coin.id}`}>{coin.name}</Link><span className="coin_name_symbol">{coin.symbol}</span></td>
                    {parseInt((coin.current_price))>1
                    ?   <td>${coin.current_price.toLocaleString('en')}</td>
                    :   <td>${coin.current_price}</td>}
                    {coin.price_change_percentage_24h<0.00
                    ?   <td className="coin_loss"><span className="fas fa-sort-down coin_loss_arrow" />{coin.price_change_percentage_24h.toFixed(2)}%</td>
                    :   <td className="coin_profit"><span className="fas fa-sort-up coin_profit_arrow" />{coin.price_change_percentage_24h.toFixed(2)}%</td>}
                    <td>${parseInt((coin.market_cap)).toLocaleString('en')}</td>
                </tr>
            )}
        </>
    )
}

export default Coin

// data.filter((coin) => {
//     if(searchTerm == ""){
//         return coin
//     } else if(coin.name.toLowerCase().includes(searchTerm.toLowerCase())){
//         return coin
//     }
// })