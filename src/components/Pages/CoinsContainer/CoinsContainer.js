import React from 'react'
import {useState, useEffect, useContext} from 'react'
import {Link} from 'react-router-dom'
import Loading from '../../Loading/Loading'
import Coin from './Coin/Coin'
import Titulo from '../../Titulo/Titulo'
import './_CoinsContainer.scss'

const CoinsContainer = () => {
    const [data, setData] = useState([])
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
        .then(resp => resp.json())
        .then(data => setData(data))
        .finally(() => {setLoader(false)})
    }, [])

    return (
        <section className='coinsSection'>
            {/* <Titulo text="All Coins" /> */}
            <button className="watchlistButton"><Link to="/watchlist">Watchlist</Link></button>
            <table>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th className="coin_name">Name</th>
                        <th>Price</th>
                        <th>24h %</th>
                        <th>Marketcap</th>
                    </tr>
                </thead>
                <tbody>
                    {loader
                    ?   <tr><th><Loading /></th></tr>
                    :   <Coin data={data} />}        
                </tbody>
            </table>
        </section>
    )
}

export default CoinsContainer