import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Coin.scss';

const Coin = ({coins, search}) => {
    const navigate = useNavigate();

    return (
        <>
            {coins.filter(coin => {
                if(search == ""){
                    return coin
                } else if(coin.name.toLowerCase().includes(search.toLowerCase())){
                    return coin
                }}).map(coin =>    
                <tr key={coin.id} className="coin" onClick={() => navigate(`/coin/${coin.id}`)} >
                    <td><img src={coin.image} className="coin_image" /></td>
                    <td className="coin_name" >{coin.name}<span className="coin_name_symbol">{coin.symbol}</span></td>
                    {parseInt(coin.current_price)>1
                    ?   <td>${coin.current_price.toLocaleString('en')}</td>
                    :   <td>${coin.current_price}</td>}
                    {coin.price_change_percentage_24h<0.00
                    ?   <td className="coin_loss"><span className="fas fa-sort-down coin_loss_span"/>{parseFloat(coin.price_change_percentage_24h).toFixed(2)}%</td>
                    :   <td className="coin_profit"><span className="fas fa-sort-up coin_profit_span"/>{parseFloat(coin.price_change_percentage_24h).toFixed(2)}%</td>}
                    <td>${parseInt((coin.market_cap)).toLocaleString('en')}</td>
                </tr>
            )}
        </>
    );
}

export default Coin;