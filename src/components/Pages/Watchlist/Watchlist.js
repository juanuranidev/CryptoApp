import React, { useContext } from 'react';
import WatchlistContext from '../../Context/WatchlistContext';
import BackButton from '../../BackButton/BackButton';
import Title from '../../Title/Title';
import WatchlistCoin from './WatchlistCoin/WatchlistCoin';
import './Watchlist.scss';

const WatchlistCointainer = () => {
  const {watchlist } = useContext(WatchlistContext);

  return(
    <section className='watchlist'>
    <BackButton />
    <Title text="Watchlist" />
    <div className="watchlist_div">
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th className="coins_name">Name</th>
            <th>Price</th>
            <th>24h %</th>
            <th>Marketcap</th>
          </tr>
        </thead>
        <tbody>
          <WatchlistCoin coins={watchlist} />    
        </tbody>
      </table>
    </div>
    </section>
  );
};

export default WatchlistCointainer;