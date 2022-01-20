import React from 'react'
import { useContext } from 'react'
import SearchBarContext from '../Context/SearchBarContext'
import './_SearchBar.scss'

const SearchBar = () => {
   const {getValue} = useContext(SearchBarContext)
 
    return (
        <input type="text" placeholder="Search your coin..." className="searchBar" onChange={getValue} />
    )
}

export default SearchBar
