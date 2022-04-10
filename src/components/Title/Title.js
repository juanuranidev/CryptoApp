import React from 'react';
import './Title.scss';

const Title = ({text}) => {
    return (
        <h2 className="title">{text}</h2>
    );
}

export default Title;