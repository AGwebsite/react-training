import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import reportWebVitals from './reportWebVitals';
import { catNames } from './catNames' ;
import 'tachyons' ;

ReactDOM.render(
    <div>
      <Card id={catNames[0]} name={catNames[0]}/>
      <Card id={catNames[1]} name={catNames[1]}/>
      <Card id={catNames[2]} name={catNames[2]}/>
      <Card id={catNames[3]} name={catNames[3]}/>
     
    </div>,
   document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
