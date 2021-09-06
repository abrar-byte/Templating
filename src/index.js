import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Axios from './Axios';
// import Portofolio from './Portofolio';
import 'bootstrap/dist/css/bootstrap.min.css';
import Inti from './Portofolio';
// import Shape from './Shape';
// // import NavbarComponent from './Server';
// import Server from './kasir-app-frontend/Server.js';

ReactDOM.render(
  <React.StrictMode>
    <Inti />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
