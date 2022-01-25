import React from 'react'
import {useState, useEffect} from 'react'
import Loading from '../../Loading/Loading'
import Coin from './Coin/Coin'
import Titulo from '../../Titulo/Titulo'
import './_CoinsContainer.scss'

const CoinsContainer = () => {
    const [data, setData] = useState([])
    const [loader, setLoader] = useState(true)
    const [search, setSearch] = useState("")

    useEffect(() => {
        fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
        .then(resp => resp.json())
        .then(data => setData(data))
        .finally(() => {setLoader(false)})
    }, [])

    return (
        <section className='coinsSection'>
            {/* <Titulo text="All Coins" /> */}
            <input className="searchBar" placeholder="Search your coin..." onChange={(e) => setSearch(e.target.value)} />
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
                    :   <Coin data={data} search={search} />}        
                </tbody>
            </table>
        </section>
    )
}

export default CoinsContainer