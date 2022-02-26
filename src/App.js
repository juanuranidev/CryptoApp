import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { WatchlistContextProvider } from './components/Context/WatchlistContext';
import Navbar from './components/Navbar/Navbar';
import CoinsContainer from './components/Pages/CoinsContainer/CoinsContainer';
import CoinDetailContainer from './components/Pages/CoinDetailContainer/CoinDetailContainer';
import WatchlistCointainer from './components/Pages/WatchlistCointainer/WatchlistCointainer';
import Footer from './components/Footer/Footer';
import './_App.scss';

function App() {
  return (
    <BrowserRouter>
      <WatchlistContextProvider>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<CoinsContainer />}  />
          <Route exact path="/coins/:id" element={<CoinDetailContainer />} />
          <Route exact path="/watchlist" element={<WatchlistCointainer />} />
        </Routes>
        <Footer />
      </WatchlistContextProvider>
    </BrowserRouter>
  );
}

export default App;