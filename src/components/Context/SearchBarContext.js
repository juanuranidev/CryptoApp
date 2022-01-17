import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'

export const SearchBarContext = createContext([])

export const SearchBarContextProvider = ({children}) => {
    const [searchTerm, setSearchTerm] = useState('')

    function getValue(event){setSearchTerm(event.target.value)}

    return(
        <SearchBarContext.Provider value={{
            searchTerm,
            getValue,
        }}>
            {children}
        </SearchBarContext.Provider>
    )
}
export default SearchBarContext