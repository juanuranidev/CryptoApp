import React from 'react'
import { createContext } from 'react'
import { useState, useEffect } from 'react'

export const FavoritesContext = createContext([])

export const FavoritesContextProvider = ({children}) => {
    const [favorites, setFavorites] = useState([])

    function addToFavorites(coin){setFavorites([...favorites, coin])}
    function deleteFromFavorites(coin){setFavorites(favorites.filter((x) => x !== coin))}


    useEffect(() => {
        let favorites = localStorage.getItem("favorites")
        if (favorites) {
            setFavorites(JSON.parse(favorites))
          }
    }, [])

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])

    return(
        <FavoritesContext.Provider value={{
            favorites,
            setFavorites,
            addToFavorites,
            deleteFromFavorites
        }}>
            {children}
        </FavoritesContext.Provider>
    )
}
export default FavoritesContext