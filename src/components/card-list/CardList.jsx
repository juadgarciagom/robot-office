import React from "react";


import "../card-list/card-list.css";
import { Card } from "../card/Card";

export const CardList = (props) => {
  
  return (
    <div className="card_list">
      {props.robots.map((robot) => (
        <Card key={robot.id}  robot={robot}/>
      ))}
    </div>
  );
};
