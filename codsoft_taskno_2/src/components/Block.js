import React from "react";

const Block = ({value, onClick}) => {
  
    return (
      <button className="square bg-slate-200 w-24 h-24 hover:bg-slate-300 border-2 border-gray-400 text-5xl font-bold" onClick={onClick}>
        {value}
      </button>
    );
    
  }

  export default Block;