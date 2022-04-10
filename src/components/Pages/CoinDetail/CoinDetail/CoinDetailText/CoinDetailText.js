import React from 'react';
import parse from 'html-react-parser';
import './CoinDetailText.scss';

const CoinDetailText = ({description, links}) => {
  return (
    <div className="coinDetailText">
        {description && <p className="coinDetailText_p">{parse(description)}</p>}
        <div className="coinDetailText_div">
            {links.homepage[0] &&
            <a href={links.homepage[0]} target="_blank" rel="noreferrer" className='coinDetailText_div_a'><span className='fa fa-globe'/></a>}
            {links.facebook_username !== "" &&
            <a href={`https://www.facebook.com/${links.facebook_username}`} target="_blank" rel="noreferrer" className='coinDetailText_div_a'><span className='fa fa-facebook'/></a>}
            {links.subreddit_url !== "" &&
            <a href={links.subreddit_url} target="_blank" rel="noreferrer" className='coinDetailText_div_a'><span className='fa fa-reddit'/></a>}
            {links.twitter_screen_name !== "" &&
            <a href={`https://twitter.com/${links.twitter_screen_name}`} target="_blank" className='coinDetailText_div_a'><span className='fa fa-twitter'/></a>}
            {links.repos_url.github[0] &&
            <a href={links.repos_url.github[0]} target="_blank" rel="noreferrer" className='coinDetailText_div_a'><span className='fa fa-github'/></a>}   
        </div>
    </div>    
  );
}

export default CoinDetailText;