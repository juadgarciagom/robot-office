import React from "react";


import "../card-list/card-list.css";
import { Card } from "../card/Card";

export const CardList = (props) => {
  
  return (
    <div className="card_list">
      {props.dinos.map((dino) => (
        <Card key={dino.id}  dino={dino}/>
      ))}
    </div>
  );
};
