import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App' ;
import reportWebVitals from './reportWebVitals';
import SearchBox from './components/SearchBox'
import { catNames } from './catNames' ;
import 'tachyons' ;

ReactDOM.render(
   <App/>, document.getElementById('root')
  );


reportWebVitals();
