import React, {useContext, useEffect} from 'react'
import Coin from '../Coin/Coin'
import FavoritesContext from '../Context/FavoriteContext'
import Titulo from '../Titulo/Titulo'
import './_FavoriteCoinsContainer.scss'

const FavoriteCoinsContainer = () => {
    const {favorites, setFavorites} = useContext(FavoritesContext)

    // useEffect(() => {
    //     let data = localStorage.getItem('favoriteCoins')
    //     data===true
    //     ? setFavorites(JSON.parse(data))
    //     : console.log("error")

    // }, [])


    return(
        <section className='favoriteCoinsSection'>
            <Titulo text="Favorite Coins" />
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
                    <Coin data={favorites} />
                </tbody>
            </table>
        </section>
    )
}

export default FavoriteCoinsContainer