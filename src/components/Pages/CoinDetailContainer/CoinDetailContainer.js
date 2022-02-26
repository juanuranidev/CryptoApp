import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../Loading/Loading';
import CoinDetail from './CoinDetail/CoinDetail';

const CoinDetailContainer = () => {
  const [coin, setCoin] = useState({})
  const [loading, setLoading] = useState(true)
  const {id} = useParams()
  
  useEffect(() => {
    fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
      .then(resp => resp.json())
      .then(coin => setCoin(coin))
      .catch(error => console.log(error))
      .finally(() => setLoading(false))
  }, [])
  
  return (<>
          {loading
          ? <Loading />
          : <CoinDetail coin={coin} />}
        </>)
};

export default CoinDetailContainer;

