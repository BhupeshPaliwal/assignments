 import React, { Component } from 'react';
 import './App.css';
 //import React from 'react';
 import ReactDOM from 'react-dom';
 //import App from './App';
 import './index.css';

const PLAYER_ONE='X',PLAYER_TWO='O'

class App extends React.Component {

    // Component Initialization
    constructor(props){
        super(props)
        this.state = {
            currentTurn: PLAYER_ONE,
            board: [
                "", "", "", "", "", "", "", "", ""
            ],
            winner: null,
            moveCount: 0
        }
    };

    handleClick(index){
        if(this.state.board[index] === "" && !this.state.winner) {
            var currentBoard = this.state.board,
                count = this.state.moveCount;

            currentBoard[index] = this.state.currentTurn;
            count += 1;

            this.setState({
                board: this.state.board,
                winner: this.checkForWinner(),
                currentTurn: this.state.currentTurn === PLAYER_ONE ? PLAYER_TWO : PLAYER_ONE,
                moveCount: count
            });
        }
    };

    handleReset(){
        console.log("RESET");
        this.setState({
            currentTurn: PLAYER_ONE,
            board: [
                "", "", "", "", "", "", "", "", ""
            ],
            winner: null,
            moveCount: 0
        })
    };

    checkForWinner() {
        var currentTurn = this.state.currentTurn;
        var symbols = this.state.board;
        var winningCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

        return winningCombos.find(function(combo) {
            if(symbols[combo[0]] !== "" && symbols[combo[1]] !== ""  && symbols[combo[2]] !== ""  && symbols[combo[0]] === symbols[combo[1]] && symbols[combo[1]] === symbols[combo[2]]) {
                console.log("Found a winner", currentTurn, [combo[0],combo[1],combo[2]]);
                return currentTurn;
            }
            else {
                return null;
            }

        })
    };

    // Component Render
    render() {
        console.log(this.state.currentTurn);

        return (
            <div className="app-container">
                {this.state.winner ? <h2>{`The winner is ${this.state.currentTurn===PLAYER_ONE ? PLAYER_TWO : PLAYER_ONE}`}</h2> : null}
                <div className="board">
                    {this.state.board.map((cell, index) => {
                        return <div onClick={() => this.handleClick(index)} key={index} className="square"><p className="playerSymbol">{cell}</p></div>
                    })}
                </div>
                <div className="reset">
                    <button onClick={() => this.handleReset()} className="resetButton">RESET</button>
                </div>
            </div>
        )
    };
}

 export default App;

ReactDOM.render(
  <App />,
  document.getElementById('root')
);