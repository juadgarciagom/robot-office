import React from 'react'

import '../card/card.css'
export const Card = (props) => {
    return (
        <div className="card_container">
            <img src={`https://robohash.org/${Math.random()*10}?size=180x180`} alt="" />
          <h2>{props.dino.name}</h2>
          <p>{props.dino.email}</p>
        </div>
    )
}


