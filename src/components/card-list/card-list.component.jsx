import React from "react";
import { Card } from "../card/card.component";
import "./card-list.styles.css";

export const CardList = props => {
  return (
    <div className="card-list">
      {props.monsters.map(monster => (
        //key helps React know which changed element to rerender, rather than rerender the entire page/everything in the monsters array on change
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};
