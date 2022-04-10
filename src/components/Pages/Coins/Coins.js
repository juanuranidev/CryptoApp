import React, { useState, useEffect } from 'react';
import Loader from '../../Loader/Loader';
import Coin from './Coin/Coin';
import Title from '../../Title/Title';
import './Coins.scss';

const Coins = () => {
    const [coins, setCoins] = useState([])
    const [loader, setLoader] = useState(true)
    const [search, setSearch] = useState("")
    const [order, setOrder] = useState("minor to major")

    useEffect(() => {
        fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false")
        .then(resp => resp.json())
        .then(coins => setCoins(coins))
        .finally(() => setLoader(false))
    }, [])

    const sort = (col) => {
        if(order === "minor to major"){
            const sortedData = [...coins].sort((a, b) => a[col] > b[col] ? 1:-1)
            setCoins(sortedData)
            setOrder("major to minor")
        }
        if(order === "major to minor"){
            const sortedData = [...coins].sort((a, b) => a[col] < b[col] ? 1:-1)
            setCoins(sortedData)
            setOrder("minor to major")
        }
    }

    return (
        <section className='coinsSection'>
            <Title text="All Coins" />
            <input className="coinsSection_input" placeholder="Search your coin..." onChange={(e) => setSearch(e.target.value)} />
            <div className="coinsSection_div">
                <table>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th className="coins_name">Name</th>
                            <th className="coins_sorter" onClick={() => sort("current_price")}>Price</th>
                            <th className="coins_sorter" onClick={() => sort("price_change_percentage_24h")}>24h %</th>
                            <th className="coins_sorter" onClick={() => sort("market_cap")}>Marketcap</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loader
                        ?   <tr><th><Loader/></th></tr>
                        :   <Coin coins={coins} search={search} />}        
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default Coins;