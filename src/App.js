import React from 'react'
import { FavoritesContextProvider } from './components/Context/FavoriteContext';
import { SearchBarContextProvider } from './components/Context/SearchBarContext';
import SearchBar from './components/SearchBar/SearchBar'
import CoinsContainer from './components/CoinsContainer/CoinsContainer';
import FavoriteCoinsContainer from './components/FavoriteCoinsContainer/FavoriteCoinsContainer';

function App() {
  return (
    <FavoritesContextProvider>
      <SearchBarContextProvider>
        <SearchBar />
        <FavoriteCoinsContainer />
        <CoinsContainer />
      </SearchBarContextProvider>
    </FavoritesContextProvider>
  );
}

export default App;
