import React from "react";
import {useState} from 'react';

function Square() {
  const [value, setValue] = useState("1");

  function handleClick() {
    console.log("click");
    setValue("2");
    
  }

  return (
    <button className="square bg-slate-200 w-24 h-24 hover:bg-slate-300" onClick={handleClick}>
      {value}
    </button>
  );
  
}

function Board() {
  return (
    <>
      <div className="flex justify-center items-center flex-col h-screen">
        <h1 className="text-3xl">Tic Tac Toe</h1>
        <div className="board-row">
          <Square />
          <Square />
          <Square />
        </div>
        <div className="board-row">
          <Square />
          <Square />
          <Square />
        </div>
        <div className="board-row">
          <Square />
          <Square />
          <Square />
        </div>
  
      </div>
    </>
  );
}
export default Board;