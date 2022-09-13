import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

//component file
import TodoContainer from "./functionBased/components/TodoContainer"

//stylesheet
import "./App.css"

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(
<React.StrictMode>
  <TodoContainer />
</React.StrictMode>);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();