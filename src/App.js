import React from 'react'
import CoinsContainer from './components/Pages/CoinsContainer/CoinsContainer';
import CoinDetailContainer from './components/Pages/CoinDetailContainer/CoinDetailContainer'
import WatchlistCointainer from './components/Pages/WatchlistCointainer/WatchlistCointainer'
import { WatchlistContextProvider } from './components/Context/WatchlistContext';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <WatchlistContextProvider>
        <Routes>
          <Route exact path="/" element={<CoinsContainer />}  />
          <Route exact path="/coins/:id" element={<CoinDetailContainer />} />
          <Route exact path="/watchlist" element={<WatchlistCointainer />} />
        </Routes>
      </WatchlistContextProvider>
    </BrowserRouter>
  );
}

export default App;
