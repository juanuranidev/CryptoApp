import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { WatchlistContextProvider } from './components/Context/WatchlistContext';
import Navbar from './components/Navbar/Navbar';
import Coins from './components/Pages/Coins/Coins';
import CoinFinder from './components/Pages/CoinDetail/CoinFinder';
import Watchlist from './components/Pages/Watchlist/Watchlist';
import Footer from './components/Footer/Footer';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <WatchlistContextProvider>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Coins />}  />
          <Route exact path="/coin/:id" element={<CoinFinder />} />
          <Route exact path="/watchlist" element={<Watchlist />} />
        </Routes>
        <Footer />
      </WatchlistContextProvider>
    </BrowserRouter>
  );
}

export default App;