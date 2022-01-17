import React from 'react'
import {useState, useEffect} from 'react'
import Loading from '../Loading/Loading'
import Coin from '../Coin/Coin'
import Titulo from '../Titulo/Titulo'
import './_CoinsContainer.scss'


const CoinsContainer = () => {
    const [data, setData] = useState([])
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        fetch("https://api.coinlore.net/api/tickers/")
        .then(resp => resp.json())
        .then(data => setData(data.data))
        .finally(() => setLoader(false))
    }, [])

    return (
        <section className='coinsSection'>
            <Titulo text="All Coins" />
            <table>
                <thead>
                    <tr>
                    <th className="coinFavorite"><span className="far fa-star"/></th>
                        <th className="coinRank">#</th>
                        <th className="coinName">Name</th>
                        <th className="coinPrice">Price</th>
                        <th className="coin24">24h %</th>
                        <th className="coin7">7d %</th>
                        <th className="coinMarketcap">Marketcap</th>
                        <th className="coinVolume">Volume(24h)</th>
                    </tr>
                </thead>
                <tbody>
                    {loader ?   <tr><th><Loading /></th></tr>  :   <Coin data={data} />}        
                </tbody>
            </table>
        </section>
    )
}

export default CoinsContainer
