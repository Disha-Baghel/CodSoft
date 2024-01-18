import React from "react";
import {useState} from 'react';
import Board from "./components/Board";




function App() {
  const [board, setBoard] = useState(Array(9).fill('.'));
  
  const handleClick = (boxindex) => {
    const updatedBoard = board.map((value, index) => {
      if (index === boxindex) {
        console.log("click")
        return 'X';
      }
      return value;
    
    })

    setBoard(updatedBoard);
  }

  return (
    <>
      <div className="flex justify-center items-center flex-col h-screen">
        <h1 className="text-3xl ">Tic Tac Toe</h1>
        <div className="grid justify-center items-center grid-cols-3 ">
          <Board board={board} onClick={handleClick}/>
        </div>
  
      </div>
    </>
  );
}
export default App;