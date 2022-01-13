import React from 'react'


const Coin = ({data}) => {
   
    

    return (
        <>
            {data.map(coin =>    
           
                <tr key={coin.id} >
                    <td>{coin.rank}</td>
                    <td>{coin.name}</td>
                    <td>{coin.symbol}</td>
                    <td>{coin.price_usd}</td>
                    <td>{coin.price_btc}</td>
                    <td>{coin.percent_change_24h}%</td>
                    <td>{coin.percent_change_7d}%</td>
                    <td>{parseInt((coin.market_cap_usd)).toLocaleString('en')}</td>
                    <td>{parseInt((coin.volume24)).toLocaleString('en')}</td>
                    

                </tr>         
            )}
        </>
    )
}

export default Coin
