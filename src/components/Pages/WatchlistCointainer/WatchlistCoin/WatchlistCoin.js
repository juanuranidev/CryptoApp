import React from 'react'
import { Link } from 'react-router-dom'
import './_WatchlistCoin.scss'

const WatchlistCoin = ({data}) => {
    return (
        <>
            {data.map(coin =>    
                <tr key={coin.id} className="coin">
                    <td><Link to={`/coins/${coin.id}`}><img src={coin.image.small} className="coin_image" /></Link></td>
                    <td className="coin_name" >{coin.name}<span className="coin_name_symbol">{coin.symbol}</span></td>
                    {parseInt((coin.market_data.current_price.usd))>1
                    ?   <td>${coin.market_data.current_price.usd.toLocaleString('en')}</td>
                    :   <td>${coin.market_data.current_price.usd}</td>}
                    {coin.market_data.price_change_percentage_24h<0.00
                    ?   <td className="coin_loss"><span className="fas fa-sort-down coin_loss_arrow" />{coin.market_data.price_change_percentage_24h.toFixed(2)}%</td>
                    :   <td className="coin_profit"><span className="fas fa-sort-up coin_profit_arrow" />{coin.market_data.price_change_percentage_24h.toFixed(2)}%</td>}
                    <td>${parseInt((coin.market_data.market_cap.usd)).toLocaleString('en')}</td>
                </tr>
            )}
        </>
    )
}

export default WatchlistCoin