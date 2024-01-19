import React from "react";

const Reset = ({onClick}) => {

    return (
      <button className= "bg-sky-400 rounded-lg w-20 h-10 hover:bg-red-400 border-2 border-orange-300 text-xl shadow-xl " onClick={onClick}>
        Reset
      </button>
    );
    
  }

  export default Reset;