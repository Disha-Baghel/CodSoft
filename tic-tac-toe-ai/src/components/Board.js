import React from "react";
import {useState} from 'react';
import  Block from "./Block";


const Board = ({board, onClick}) => {

  return (
    <div>
      {board.map((value, index) => {
        return <Block value={value} onClick={() => onClick(index)}/>
      })}
    </div>
  );
}
export default Board;