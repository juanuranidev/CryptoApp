import React, { useContext } from 'react';
import {Link} from 'react-router-dom'
import WatchlistContext from '../../Context/WatchlistContext';
import WatchlistCoin from './WatchlistCoin/WatchlistCoin';

const WatchlistCointainer = () => {
  const {watchlist} = useContext(WatchlistContext)

  return(
    <section className='coinsSection'>
    {/* <Titulo text="All Coins" /> */}
    <button><Link to="/">Watchlist</Link></button>
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
    </section>
  );
};

export default WatchlistCointainer;


{/* <h1>watchlist</h1>
      <Link to="/"><button>Back</button></Link>
        <Coin data={data} ></Coin> */}