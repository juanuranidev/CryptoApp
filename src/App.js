import React from 'react'
import CoinsContainer from './components/CoinsContainer/CoinsContainer';
import CoinDetailContainer from './components/Pages/CoinDetailContainer/CoinDetailContainer'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<CoinsContainer />}  />
        <Route exact path="/coins/:id" element={<CoinDetailContainer />} />
        <Route exact path="/favorites" element={<CoinsContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
