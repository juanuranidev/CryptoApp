import React from 'react';
import './_Title.scss';

const Title = ({text}) => {
    return (
        <h2 className="title">{text}</h2>
    );
}

export default Title;