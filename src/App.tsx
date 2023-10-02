import React, { useState } from "react";
import Block from "./Components/Block/Block";
import "./style.css";
import { stat } from "fs";

const App: React.FC = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [currentTurn, setcurrentTurn] = useState("X");
  const [win,setWin]=useState<string>('')

  const checkWinner = (state:any[]) => {
    const win = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < win.length; i++) {
      const [a, b, c] = win[i];
      if (state[a] !== null && state[a] === state[b] && state[c]) return true;
    }
    return false;
  };
  const handleClick = (index: number) => {
    const stateCopy = Array.from(state);
    stateCopy[index] = currentTurn;
    setState(stateCopy);
    const win = checkWinner(stateCopy);
    if (win) {
      // alert("true");
      setWin('congratulation')
    }
    setcurrentTurn(currentTurn === "X" ? "Y" : "O");
  };

  return (
    <div>
      {!win ? (
        <div className="Board">
          <div className="row">
            <Block value={state[0]} onClick={() => handleClick(0)} />
            <Block value={state[1]} onClick={() => handleClick(1)} />
            <Block value={state[2]} onClick={() => handleClick(2)} />
          </div>
          <div className="row">
            <Block value={state[3]} onClick={() => handleClick(3)} />
            <Block value={state[4]} onClick={() => handleClick(4)} />
            <Block value={state[5]} onClick={() => handleClick(5)} />
          </div>
          <div className="row">
            <Block value={state[6]} onClick={() => handleClick(6)} />
            <Block value={state[7]} onClick={() => handleClick(7)} />
            <Block value={state[8]} onClick={() => handleClick(8)} />
          </div>
        </div>
      ) : (
        <div className="wincard">
          <p>{win}</p>
        </div>
      )}
    </div>
  );
};

export default App;
