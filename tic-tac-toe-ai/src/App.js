// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}
//     </div>
//   );
// }

// export default App;
import React from "react";
import {useState} from 'react';
import "./output.css";

function Square({value}) {


  function handleClick() {
    console.log("click");
  }

  return (
    <>
      <div class="place-content-center">
        <div class="board-row">
          <button class="square mx-auto bg-slate-200 w-24 h-24" onClick={handleClick}>{value}</button>
          <button class="square mx-auto bg-slate-200 w-24 h-24 border-x-2 border-black" onClick={handleClick}>
            {value}
          </button>
          <button class="square mx-auto bg-slate-200 w-24 h-24" onClick={handleClick}>
            {value}
          </button>
        </div>
        <div class="board-row">
          <button class="square mx-auto bg-slate-200 w-24 h-24 border-y-2 border-black" onClick={handleClick}>
            {value}
          </button>
          <button class="square mx-auto bg-slate-200 w-24 h-24 border-2 border-black" onClick={handleClick}>
            {value}
          </button>
          <button class="square mx-auto bg-slate-200 w-24 h-24 border-y-2 border-black" onClick={handleClick}>
            {value}
          </button>
        </div>
        <div class="board-row">
          <button class="square mx-auto bg-slate-200 w-24 h-24 shadow-lg" onClick={handleClick}>
            {value}
          </button>
          <button class="square mx-auto bg-slate-200 w-24 h-24 border-x-2 border-black shadow-lg" onClick={handleClick}>
            {value}
          </button>
          <button class="square mx-auto bg-slate-200 w-24 h-24 shadow-lg" onClick={handleClick}>
            {value}
          </button>
        </div>
      </div>
    </>
  );
}
export default Square;