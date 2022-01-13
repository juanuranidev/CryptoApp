import React from 'react'
import './_Coin.scss'

const Coin = ({data}) => {
   
    return (
        <>
            {data.map(coin =>    
                <tr key={coin.id} className="coin">
                    <td>{coin.rank}</td>
                    <td>{coin.name} <span className="symbol">{coin.symbol}</span></td>
                    <td>${coin.price_usd}</td>
                    {coin.percent_change_24h>0.01
                    ? <td className="profit"><span className="fas fa-sort-up arrow" />{coin.percent_change_24h}%</td>
                    : <td className="loss"><span className="fas fa-sort-down arrow" />{coin.percent_change_24h}%</td>}
                    {coin.percent_change_7d>0.01
                    ? <td className="profit"><span className="fas fa-sort-up arrow" />{coin.percent_change_7d}%</td>
                    : <td className="loss"><span className="fas fa-sort-down arrow" />{coin.percent_change_7d}%</td>}
                    <td>${parseInt((coin.market_cap_usd)).toLocaleString('en')}</td>
                    <td>${parseInt((coin.volume24)).toLocaleString('en')}</td>
                </tr>         
            )}
        </>
    )
}

export default Coin
