import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushiList, nextSushi, eatSushi }) {
  return (
    <div className="belt">
      {sushiList.map((piece)=> (
      <Sushi key={piece.id} sushi={piece} eatSushi={eatSushi} />
      ))}
      <MoreButton handleClick={nextSushi}/>
    </div>
  );
}

export default SushiContainer;
