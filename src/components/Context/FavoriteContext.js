import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'

export const FavoritesContext = createContext([])

export const FavoritesContextProvider = ({children}) => {
    const [favorites, setFavorites] = useState([])

    function addToFavorites(coin){setFavorites([...favorites, coin])}
    function deleteFromFavorites(coin){setFavorites(favorites.filter((x) => x !== coin))}

    return(
        <FavoritesContext.Provider value={{
            favorites,
            addToFavorites,
            deleteFromFavorites
        }}>
            {children}
        </FavoritesContext.Provider>
    )
}
export default FavoritesContext