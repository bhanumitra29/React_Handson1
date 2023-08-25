import "./App.css";
import DataCollect from "./Compo/DataCollect";
// import FuncCompo from "./Compo/FuncCompo"
// import ClassCompo from "./Compo/ClassCompo"
// import React, { useState } from "react";
function App() {
  // const [count, setCount] = useState(false);
  // const [count1, setCount1] = useState(false);
  return (
  <div className="App">
  {/* <div>  */}
    {/* <h1 className="mainh1">Styling using Functional and Class Component</h1>

    <div className="buttondiv">
    <button className="funcbutton" onClick={() => setCount(!count)}>To see styling in functional component</button>
    <button className="classbutton" onClick={() => setCount1(!count1)}>To see styling in class component</button>
    </div> */}

    {/* <div className="displayitems"> */}
    {/* {count ? <FuncCompo /> : ''}
    {count1 ? <ClassCompo /> : ''} */}
    {/* </div> */}

    <DataCollect />
  
  </div>
  );
}

export default App;


