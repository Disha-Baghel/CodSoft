import React from "react";

const Block = ({value, onclick}) => {
    const style = value === 'X' ? "box x" : "box o";
    // const [value, setValue] = useState(".");
  
  
  
    function handleClick() {
      console.log("click");
      
      
    }
  
    return (
      <button className="{style} square bg-slate-200 w-24 h-24 hover:bg-slate-300" onClick={onclick}>
        {value}
      </button>
    );
    
  }

  export default Block;