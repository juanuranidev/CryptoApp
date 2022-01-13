import React from 'react'
import './_Coin.scss'

const Coin = ({data}) => {
   
    return (
        <>
            {data.map(coin =>    
                <tr key={coin.id} className="coin">
                    <td className="coinRank" >{coin.rank}</td>
                    <td className="coinName" >{coin.name} <span className="coinSymbol">{coin.symbol}</span></td>
                    {parseInt((coin.price_usd))>1
                    ? <td className="coinPrice" >${parseInt((coin.price_usd)).toLocaleString('en')}</td>
                    : <td className="coinPrice" >${coin.price_usd}</td>}
                    {coin.percent_change_24h<0.00
                    ? <td className="loss"><span className="fas fa-sort-down arrow" />{coin.percent_change_24h}%</td>
                    : <td className="profit"><span className="fas fa-sort-up arrow" />{coin.percent_change_24h}%</td>}
                    {coin.percent_change_7d<0.00
                    ? <td className="loss"><span className="fas fa-sort-down arrow" />{coin.percent_change_7d}%</td>
                    : <td className="profit"><span className="fas fa-sort-up arrow" />{coin.percent_change_7d}%</td>}
                    <td className="coinMarketcap" >${parseInt((coin.market_cap_usd)).toLocaleString('en')}</td>
                    <td className="coinVolume" >${parseInt((coin.volume24)).toLocaleString('en')}</td>
                    <td className="coinSupply" >{parseInt((coin.tsupply)).toLocaleString('en')}<span className="supplySymbol">{coin.symbol}</span></td>
                </tr>         
            )}
        </>
    )
}

export default Coin
