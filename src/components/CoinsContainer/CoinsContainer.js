import React from 'react'
import {useState, useEffect} from 'react'
import Loading from '../Loading/Loading'
import Coin from '../Coin/Coin'
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
    console.log(data)

    return (
        <section className='coinsSection'>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>24h %</th>
                        <th>7d %</th>
                        <th>Marketcap</th>
                        <th>Volume(24h)</th>
                        <th>Circulating Supply</th>
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
