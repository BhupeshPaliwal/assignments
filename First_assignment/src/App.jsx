import React, { Component } from 'react';
import './App.css';




class Square extends Component 
{
 //React components can have state by setting this.state in their constructors.
  // constructor (){
  //   super();
  //   this.state ={ value:null };
  // }
  //Square component to “remember” that it got clicked, and fill it with an “X” mark. 
  //To “remember” things, components use state
  render() { 
    return ( <button className="sq" 
          onClick={() => this.props.onClick()}>
             {this.props.value} </button> );
        // we have give button a value to show
  }
}



class Board extends Component {
  constructor() {
    super()
    this.state={
     squares: Array(9).fill(null),
     xisnext: true,
     num: 0
    }
  }
  

handleClick(i){
  const squares = this.state.squares.slice();
  if (win(squares) || squares[i]) {
    return;
  }
  else if (this.state.xisnext == true) {
    squares[i]= 'X';}
  else
    squares[i]= 'O';
  this.setState({xisnext: !this.state.xisnext})
  this.setState({squares: squares});
  this.setState({num: this.state.num +1})

}
 
  renderSquare(i) { 
    return (<Square value={this.state.squares[i]}
             onClick={ () => this.handleClick(i)}/>);
  }
    //value is a prop which assigns value to square
render() {
  const winner = win(this.state.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } 
    else if(this.state.num==9){
      status = 'Its a Draw ';
    }
    else {
      status = 'Next player: ' + (this.state.xisnext ? 'X' : 'O');}

    return (
      <div>
        
        <div >
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div >
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div >
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
        <div className="comment">{status}</div>
      </div>
    );
  }

 
}
export default Board;

function win(squares)
{
  const lines= [
   [0, 1, 2],
   [3, 4, 5],
   [6, 7, 8],
   [0, 3, 6],
   [1, 4, 7],
   [2, 5, 8],
   [0, 4, 8],
   [2, 4, 6]
];
for (let i = 0; i < lines.length; i++) {
  const [a, b, c] = lines[i];
  if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
    return squares[a];
  }
}
return null;
}
