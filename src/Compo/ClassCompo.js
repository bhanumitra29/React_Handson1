import { Component } from "react";
import "../App.css"

const textstyle ={
  color: "blue"
}

class ClassCompo extends Component {
  
  
  render() {
    return (
      <div className="classdiv">
        <h1>This is created using class Component</h1>
        <p>This is done using external CSS</p>
        <p style={textstyle}>This is done using inline CSS</p>
      </div>
    );
  }
}

export default ClassCompo;
