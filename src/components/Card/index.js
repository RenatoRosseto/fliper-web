import React from 'react';

import './styles.scss'

function Card ({children}) {
    return (
        <div className="containerCard">
          <div className="containerInfos">
            {children}
          </div>
        </div>
    );
}

export default Card;