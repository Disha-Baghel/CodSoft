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
import "./App.css";

function Square() {
  const [value, setValue] = useState("1");

  function handleClick() {
    console.log("click");
  }

  return (
    <button class="square bg-slate-200 w-24 h-24 hover:bg-slate-300" onClick={handleClick}>
      {value}
    </button>
  );
  
}

function Board() {
  return (
    <>
      <div class="place-content-center">
        
        <div class="board-row">
          <Square />
          <Square />
          <Square />
        </div>
        <div class="board-row">
          <Square />
          <Square />
          <Square />
        </div>
        <div class="board-row">
          <Square />
          <Square />
          <Square />
        </div>
        
        
      </div>
    </>
  );
}
export default Board;