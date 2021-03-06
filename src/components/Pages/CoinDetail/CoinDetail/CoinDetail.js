import React, {useContext} from 'react';
import WatchlistContext from '../../../Context/WatchlistContext';
import BackButton from '../../../BackButton/BackButton';
import CoinDetailText from './CoinDetailText/CoinDetailText';
import './CoinDetail.scss';
import CoinDetailChart from './CoinDetailChart/CoinDetailChart';

const CoinDetail = ({coin}) => {
  const {watchlist, addCoinToWatchlist, deleteCoinFromWatchlist} = useContext(WatchlistContext)

  const isInWatchlist = (coin) => {
    return watchlist.some(function(product) {
      return product.id === coin.id;
    }); 
  }

  return (
    <div className="coinDetail">
      <BackButton />
      <div className="coinTitle">
        <h1 className="coinTitle_h1">{coin.name} <span className="coinTitle_h1_span">{coin.symbol}</span></h1>
        <p className="coinTitle_p">Rank: {coin.market_cap_rank}</p>
      </div>
      <div className="coinFirstInformation">
        <div className="coinImage">
          <img src={coin.image.large} />
        </div>
        <div className="coinInformation">
          <div className="coinInformation_div">
          {coin.market_data.current_price.usd > 1
          ? <p className="coinInformation_div_p">Current Price:<span className="coinInformation_div_p_span">${(coin.market_data.current_price.usd).toLocaleString('en')}</span></p>
          : <p className="coinInformation_div_p">Current Price:<span className="coinInformation_div_p_span">${coin.market_data.current_price.usd}</span></p>}
            <p className="coinInformation_div_p">Market Cap:<span className="coinInformation_div_p_span">${(coin.market_data.market_cap.usd).toLocaleString('en')}</span></p>
            <div className="coinPriceChange">
              <p className="coinPriceChange_p">Price change:</p>
              <div className="coinPriceChange_div">
                {coin.market_data.price_change_percentage_24h > 0
                ? <p className="coinPriceChange_div_p">24 hours: <span className="coinPriceChange_div_p_span profit">{(coin.market_data.price_change_percentage_24h).toFixed(2)}%</span></p>
                : <p className="coinPriceChange_div_p">24 hours: <span className="coinPriceChange_div_p_span loss">{(coin.market_data.price_change_percentage_24h).toFixed(2)}%</span></p>}
                {coin.market_data.price_change_percentage_7d > 0
                ? <p className="coinPriceChange_div_p">7 days: <span className="coinPriceChange_div_p_span profit">{(coin.market_data.price_change_percentage_7d).toFixed(2)}%</span></p>
                : <p className="coinPriceChange_div_p">7 days: <span className="coinPriceChange_div_p_span loss">{(coin.market_data.price_change_percentage_7d).toFixed(2)}%</span></p>}
              </div>
              <div className="coinPriceChange_div">
                {coin.market_data.price_change_percentage_30d > 0
                ? <p className="coinPriceChange_div_p">30 days: <span className="coinPriceChange_div_p_span profit">{(coin.market_data.price_change_percentage_30d).toFixed(2)}%</span></p>
                : <p className="coinPriceChange_div_p">30 days: <span className="coinPriceChange_div_p_span loss">{(coin.market_data.price_change_percentage_30d).toFixed(2)}%</span></p>}
                {coin.market_data.price_change_percentage_1y > 0
                ? <p className="coinPriceChange_div_p">1 year: <span className="coinPriceChange_div_p_span profit">{(coin.market_data.price_change_percentage_1y).toFixed(2)}%</span></p>
                : <p className="coinPriceChange_div_p">1 year: <span className="coinPriceChange_div_p_span loss">{(coin.market_data.price_change_percentage_1y).toFixed(2)}%</span></p>}
              </div>
            </div>
            <div className="coinVotes">
              <p className="coinVotes_p upVotes"><span className="coinVotes_p_span fas fa-thumbs-up" />{coin.sentiment_votes_up_percentage}%</p>
              <p className="coinVotes_p downVotes"><span className="coinVotes_p_span fas fa-thumbs-down" />{coin.sentiment_votes_down_percentage}%</p>
            </div>        
          </div>  
          <div className="coinButton">
            {isInWatchlist(coin)
            ? <button className="coinButton_button_delete" onClick={() => deleteCoinFromWatchlist(coin)} >Delete from Watchlist</button>
            : <button className="coinButton_button_add" onClick={() => addCoinToWatchlist(coin)} >Add To Watchlist</button>}
          </div>
        </div>
      </div>
      <CoinDetailChart id={coin.id} />
      <CoinDetailText description={coin.description.en} links={coin.links}/>
    </div>)
}

export default CoinDetail;