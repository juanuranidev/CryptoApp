import React, { useEffect, useState } from 'react'

const CoinDetailChart = ({id}) => {
    const [data, setData] = useState()
    const [days, setDays] = useState(1)

    useEffect(() => {
        let days = 365
      fetch(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}`)
      .then(resp => resp.json())
      .then(data => setData(data.prices))
    }, [id])
    console.log(data)

  return (
    <div>
        {!data
        ? <h1>Cargando...</h1>
        : <p>1</p>
        }

    </div>
  )
}

export default CoinDetailChart