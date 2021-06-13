import React, { useState } from "react";
import "./styles.css";

const SquareComponent = (props) => {
  return (
    <span className="box" onClick={() => props.onClick(props.index)}>
      {props.value}
    </span>
  );
};

const ThePlayer = (props) => {
  return <p id={props.value}>Player {props.value}</p>;
};

var idData = ["", "", "", "", "", "", "", "", ""];

function Game() {
  const [Counter, updateCounter] = useState(0);
  const [currentData, updateCurrent] = useState(idData);
  const [activePlayer, updatePlayer] = useState("X");

  const fillIt = (idno) => {
    let temp = Array.from(currentData);
    if (temp[idno] !== "") {
      return null;
    }

    let activeP = activePlayer;
    temp[idno] = activeP;
    updateCurrent(temp);

    document.getElementById(activeP).classList.remove("activeOne");

    let count = Counter;
    ++count;
    updateCounter(count);

    if (Counter > 3) {
      var champ = checkWinner(temp);
      if (champ) {
        alert(`${activeP} won !`);
        refreshbutton();
        return null;
      }
    }

    if (Counter === 8) {
      alert("It's a Draw buddy !!!");
      refreshbutton();
      return null;
    }

    //document.getElementById(activeP).classList.toggle("activeOne");

    if (activePlayer === "X") {
      activeP = "O";
    } else {
      activeP = "X";
    }

    updatePlayer(activeP);

    console.log(Counter);

    document.getElementById(activeP).classList.add("activeOne");
  };

  const checkWinner = (arr) => {
    let arr2d = [
      [arr[0], arr[1], arr[2]],
      [arr[3], arr[4], arr[5]],
      [arr[6], arr[7], arr[8]]
    ];

    //Rows
    for (var i = 0; i < 3; ++i) {
      if (
        arr2d[i][0] === arr2d[i][1] &&
        arr2d[i][1] === arr2d[i][2] &&
        arr2d[i][1] !== ""
      ) {
        return true;
      }
    }

    //Columns
    for (var j = 0; j < 3; ++j) {
      if (
        arr2d[0][j] === arr2d[1][j] &&
        arr2d[1][j] === arr2d[2][j] &&
        arr2d[1][j] !== ""
      ) {
        return true;
      }
    }

    //Diagonals
    if (
      (arr[0] === arr[4] && arr[4] === arr[8] && arr[4] !== "") ||
      (arr[2] === arr[4] && arr[4] === arr[6] && arr[4] !== "")
    ) {
      return true;
    }

    return false;
  };

  const refreshbutton = () => {
    updateCurrent(idData);
    updateCounter(0);
  };

  return (
    <div className="main">
      <div>
        <SquareComponent value={currentData[0]} onClick={() => fillIt(0)} />
        <SquareComponent value={currentData[1]} onClick={() => fillIt(1)} />
        <SquareComponent value={currentData[2]} onClick={() => fillIt(2)} />
      </div>
      <div>
        <SquareComponent value={currentData[3]} onClick={() => fillIt(3)} />
        <SquareComponent value={currentData[4]} onClick={() => fillIt(4)} />
        <SquareComponent value={currentData[5]} onClick={() => fillIt(5)} />
      </div>
      <div>
        <SquareComponent value={currentData[6]} onClick={() => fillIt(6)} />
        <SquareComponent value={currentData[7]} onClick={() => fillIt(7)} />
        <SquareComponent value={currentData[8]} onClick={() => fillIt(8)} />
      </div>
      <div>
        <ThePlayer value="X" className="activeOne" />
      </div>
      <div>
        <ThePlayer value="O" />
      </div>
      <div>
        <button onClick={refreshbutton}>Refresh</button>
      </div>
    </div>
  );
}

export default Game;
