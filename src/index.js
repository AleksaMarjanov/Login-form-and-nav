import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './index.css';
import Navbar from './components/navigation';
import LoginForm from './components/login-form';


const login = React.createElement(LoginForm, {}, null);
const nav = React.createElement(Navbar, {}, null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  [nav, login]

);


