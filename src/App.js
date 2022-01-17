import React from 'react'
import CoinsContainer from './components/CoinsContainer/CoinsContainer';
import FavoriteCoinsContainer from './components/FavoriteCoinsContainer/FavoriteCoinsContainer';
import { FavoritesContextProvider } from './components/Context/FavoriteContext';

function App() {
  return (
    <FavoritesContextProvider>
      <FavoriteCoinsContainer />
      <CoinsContainer />
    </FavoritesContextProvider>
  );
}

export default App;
