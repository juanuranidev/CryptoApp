import React from 'react';
import './_Tip.scss';

const Tip = () => {
  return (
    <div className="tip">
        <span className="fab fa-bitcoin fa-3x refreshCoins tip_span" />
        <p className="tip_p">Click on the image of a cryptocurrency to go to its page</p>
    </div>
    );
};

export default Tip;