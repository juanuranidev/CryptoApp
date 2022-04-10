import React from 'react';
import { useNavigate } from 'react-router-dom';
import './WatchlistCoin.scss';

const WatchlistCoin = ({coins}) => {
    const navigate = useNavigate();

    return (
        <>
            {coins.map(coin =>    
                <tr key={coin.id} className="watchlistCoin" onClick={() => navigate(`/coin/${coin.id}`)} >
                    <td><img src={coin.image.small} className="watchlistCoin_image" /></td>
                    <td className="watchlistCoin_name" >{coin.name}<span className="watchlistCoin_name_symbol">{coin.symbol}</span></td>
                    {parseInt((coin.market_data.current_price.usd))>1
                    ?   <td>${coin.market_data.current_price.usd.toLocaleString('en')}</td>
                    :   <td>${coin.market_data.current_price.usd}</td>}
                    {coin.market_data.price_change_percentage_24h<0.00
                    ?   <td className="watchlistCoin_loss"><span className="fas fa-sort-down watchlistCoin_loss_span" />{coin.market_data.price_change_percentage_24h.toFixed(2)}%</td>
                    :   <td className="watchlistCoin_profit"><span className="fas fa-sort-up watchlistCoin_profit_span" />{coin.market_data.price_change_percentage_24h.toFixed(2)}%</td>}
                    <td>${parseInt((coin.market_data.market_cap.usd)).toLocaleString('en')}</td>
                </tr>
            )}
        </>
    )
}

export default WatchlistCoin;