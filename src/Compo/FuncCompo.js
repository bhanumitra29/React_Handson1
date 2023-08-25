import React from "react";
import "../App.css"


const textstyle ={
    color: "blue"
  }

function FuncCompo(){
    return(
      <div className="funcdiv">
        <h1>This is created using functional Component</h1>
         <p>This is done using external CSS</p>
        <p style={textstyle}>This is done using inline CSS</p>
      </div>
        
    )
}

export {FuncCompo};

