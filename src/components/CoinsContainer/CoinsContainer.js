import React from 'react'
import {useState, useEffect} from 'react'
import Coin from './Coin/Coin'

const CoinsContainer = () => {
    const [data, setData] = useState([])

    useEffect(() => {

        fetch("https://api.coinlore.net/api/tickers/")
        .then(resp => resp.json())
        .then(data => setData(data.data))

    }, [])
    console.log(data)


    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Symbol</th>
                        <th>Price USD</th>
                        <th>Price BTC</th>
                        <th>24h %</th>
                        <th>7d %</th>
                        <th>Marketcap USD</th>
                        <th>Volume(24h)</th>
                    </tr>
                </thead>
                <tbody>
                    <Coin data={data} />
                </tbody>
            </table>
            
        </>
    )
}

export default CoinsContainer
