import React from 'react';
import { Link } from 'react-router-dom';
import './_BackButton.scss';

const BackButton = () => {
  return(
    <div className="backButton">
      <Link to="/" className="backButton_a"><button className="backButton_a_button">Back</button></Link>
    </div>
 );
};

export default BackButton;