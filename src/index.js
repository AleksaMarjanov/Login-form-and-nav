import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import Navbar from './components/navigation';
import LoginForm from './components/login-form';
import reportWebVitals from './reportWebVitals';

const login = React.createElement(LoginForm, {}, null);
const nav = React.createElement(Navbar, {}, null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  [nav, login]

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
