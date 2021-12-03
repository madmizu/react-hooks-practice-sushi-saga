import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";
import SushiWallet from"./SushiWallet";

const API = "http://localhost:3001/sushis";
const sushiBeltSize = 4

function App() {
  const [sushiList, setSushiList] = useState([]);
  const [sushiStart, setSushiStart] = useState(0);
  const [budget, setBudget] = useState(50);

  useEffect (() => {
    fetch(API)
      .then(resp=>resp.json())
      .then(json=>setSushiList(json))
  }, []);

  function nextSushi () {
    sushiStart < 96 ? setSushiStart (sushiStart => sushiStart + sushiBeltSize) : setSushiStart(0);
    }

  function eatSushi (sushi) {
    if (sushi.eaten === true) {
      alert("That plate is empy!");
    } else if (sushi.price <= budget) {
      setBudget(budget=>budget-sushi.price);
      setSushiList(sushiList.map((piece)=> (piece.id === sushi.id ? {...piece, eaten: true} : piece)));
    } else {
      alert("You can't afford that!")
    }
  }

  function addMoney (amount) {
    setBudget(budget=> budget + parseInt(amount))
  }

  return (
    <div>
      <div className="navBar">
        <SushiWallet increaseBudget={addMoney}/>
      </div>
      <div className="app">
        <SushiContainer
          sushiList={sushiList.slice(sushiStart,sushiBeltSize + sushiStart)}
          nextSushi={nextSushi}
          eatSushi={eatSushi}
        />
        <Table
          plates={sushiList.filter((sushi)=>sushi.eaten)}
          wallet={budget}/>
    </div>
    </div>
  );
}

export default App;
