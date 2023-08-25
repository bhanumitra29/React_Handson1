import React, { useState } from "react";
import ClassCompo from "./ClassCompo";
import {FuncCompo} from "./FuncCompo"
import "../App.css"

function DataCollect (){
    const [count, setCount] = useState(false);
    const [count1, setCount1] = useState(false);
    return(
        <>
            <h1 className="mainh1">Styling using Functional and Class Component</h1>

            <div className="buttondiv">
            <button className="funcbutton" onClick={() => setCount(!count)}>To see styling in functional component</button>
            <button className="classbutton" onClick={() => setCount1(!count1)}>To see styling in class component</button>
            </div>


            {count ? <FuncCompo /> : ''}
            {count1 ? <ClassCompo /> : ''}
        </>
    )
}

export default DataCollect;