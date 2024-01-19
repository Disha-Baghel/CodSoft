import React from "react";
import {useState} from 'react';
import Board from "./components/Board";
import Reset from "./components/Reset";




function App() {

  const WINNING_COMBINATIONS = [
    [0,1,2], //top row
    [3,4,5], //middle row
    [6,7,8], //bottom row
    [0,3,6], //left column
    [1,4,7], //middle column
    [2,5,8], //right column
    [0,4,8], //diagonal
    [2,4,6]  //diagonal
  ]

  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlaying, setXPlaying] = useState(true);

  const reset = () => {
    setBoard(Array(9).fill(null));
    setXPlaying(true);
  }
  
  const handleClick = (boxindex) => {

    const updatedBoard = board.map((value, index) => {
      if (index === boxindex) {
        return xPlaying===true ? "X" : "O";
      }
      else{
        return value;
      }
    
    })

    checkWinner(updatedBoard)
    setBoard(updatedBoard);
    setXPlaying(!xPlaying);
  }

  const checkWinner = (board) => {
    for (let i=0; i<WINNING_COMBINATIONS.length; i++) {
      const [x, y, z] = WINNING_COMBINATIONS[i];

      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        console.log(board[x]);
        return board[x];
      }
    }
  }

  return (
    <>
      <div className="flex justify-center items-center flex-col h-screen bg-orange-200">
        <h1 className="text-3xl ">Tic Tac Toe</h1>
        <div >
          <Board board={board} onClick={handleClick}/>
        </div>
        <br></br>
        <div>
          <Reset onClick={reset}/>
        </div>
      <br></br>
        <div>
           <p className="text-3xl visible">Winner {}</p>
        </div>
      </div>
    </>
  );
}
export default App;