import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
// import FavoritesContext from '../Context/FavoriteContext'
// import SearchBarContext from '../Context/SearchBarContext'
import './_Coin.scss'

const Coin = ({data}) => {
    // const {addToFavorites, deleteFromFavorites, favorites} = useContext(FavoritesContext)
    // const {searchTerm} = useContext(SearchBarContext)
    
    console.log(data)

    return (
        <>
            {data.map(coin =>    
                // 
                <tr key={coin.id} className="coin">
                    {/* {favorites.includes(coin)
                    ?   <td className="coinFavorite"><span className="fas fa-star fullStar" onClick={() => deleteFromFavorites(coin)} /></td>
                    :   <td className="coinFavorite"><span className="far fa-star emptyStar" onClick={() => addToFavorites(coin)} /></td>                        
                    } */}
                    <td><span className="far fa-star emptyStar" /></td>     
                    <td><img src={coin.image} className="coinImage" /></td>
                    <td className="coinName" ><Link to={`/coins/${coin.id}`}>{coin.name}</Link><span className="coinSymbol">{coin.symbol}</span></td>
                    {parseInt((coin.current_price))>1
                    ?   <td>${coin.current_price.toLocaleString('en')}</td>
                    :   <td>${coin.current_price}</td>}
                    {coin.price_change_percentage_24h<0.00
                    ?   <td className="loss"><span className="fas fa-sort-down arrow" />{coin.price_change_percentage_24h.toFixed(2)}%</td>
                    :   <td className="profit"><span className="fas fa-sort-up arrow" />{coin.price_change_percentage_24h.toFixed(2)}%</td>}
                    <td className="coinMarketcap" >${parseInt((coin.market_cap)).toLocaleString('en')}</td>
                </tr>
                // 
            )}
        </>
    )
}

export default Coin

// data.filter((coin) => {
//     if(searchTerm == ""){
//         return coin
//     } else if(coin.name.toLowerCase().includes(searchTerm.toLowerCase())){
//         return coin
//     }
// })