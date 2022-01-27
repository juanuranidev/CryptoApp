import React from 'react'
import {useState, useEffect} from 'react'
import Loading from '../../Loading/Loading'
import Coin from './Coin/Coin'
import Titulo from '../../Titulo/Titulo'
import Tip from '../../Tip/Tip'
import './_CoinsContainer.scss'

const CoinsContainer = () => {
    const [data, setData] = useState([])
    const [loader, setLoader] = useState(true)
    const [search, setSearch] = useState("")
    const [order, setOrder] = useState("minor to major")

    useEffect(() => {
        fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
        .then(resp => resp.json())
        .then(data => setData(data))
        .finally(() => {setLoader(false)})
    }, [])

    function sort(col){
        if(order === "minor to major"){
            const sortedData = [...data].sort((a, b) => a[col] > b[col] ? 1:-1)
            setData(sortedData)
            setOrder("major to minor")
        }
        if(order === "major to minor"){
            const sortedData = [...data].sort((a, b) => a[col] < b[col] ? 1:-1)
            setData(sortedData)
            setOrder("minor to major")
        }
    }

    return (
        <section className='coinsSection'>
            <Titulo text="All Coins" />
            <input className="searchBar" placeholder="Search your coin..." onChange={(e) => setSearch(e.target.value)} />
            <div className="table">
                <table>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th className="coin_name">Name</th>
                            <th className="coin_hover" onClick={() => sort("current_price")}>Price</th>
                            <th className="coin_hover" onClick={() => sort("price_change_percentage_24h")}>24h %</th>
                            <th className="coin_hover" onClick={() => sort("market_cap")}>Marketcap</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loader
                        ?   <tr><th><Loading /></th></tr>
                        :   <Coin data={data} search={search} />}        
                    </tbody>
                </table>
                <Tip />
            </div>
        </section>
    )
}

export default CoinsContainer