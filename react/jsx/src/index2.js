import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const name= "your name";
const h1ELM=<h1 style={
  {
    textAlign:"center", color:"red"
  }
}>{name}</h1>
const divStyle={
  color:"white",
  backgroundColor:"red",
  textAlign:"center"
}
const divELM=<div style={divStyle}>hello ABC</div>

// React.createElement("h1",{style:{textAlign:"center", color:"red",}}, name)
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(
divELM
  
  );

  
reportWebVitals();

