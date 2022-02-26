import React, { useContext } from 'react';
import BackButton from '../../BackButton/BackButton';
import Title from '../../Title/Title';
import WatchlistContext from '../../Context/WatchlistContext';
import WatchlistCoin from './WatchlistCoin/WatchlistCoin';

const WatchlistCointainer = () => {
  const {watchlist} = useContext(WatchlistContext)

  return(
    <section className='coinsSection'>
    <BackButton />
    <Title text="Watchlist" />
    <div className="table">
      <table>
          <thead>
              <tr>
                <th>Image</th>
                <th className="coin_name">Name</th>
                <th>Price</th>
                <th>24h %</th>
                <th>Marketcap</th>
              </tr>
          </thead>
          <tbody>
            <WatchlistCoin data={watchlist} />    
          </tbody>
      </table>
    </div>
    </section>
  );
};

export default WatchlistCointainer;