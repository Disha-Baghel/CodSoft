import React from "react";
import {useState} from 'react';
import  Block from "./Block";


const Board = ({board, onClick}) => {

  return (
    <div className="grid justify-center items-center grid-cols-3 border-4 border-gray-500 shadow-2xl">
      {board.map((value, index) => {
        return <Block value={value} onClick={() => value === null && onClick(index)}/>
      })}
    </div>
  );
}
export default Board;