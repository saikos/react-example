import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import 'bootstrap';
import App from './App';
import test, { CONST } from './TestImports';

console.log(test);

const userData = { 
    token: localStorage.getItem('token'),
    username: localStorage.getItem('username')
}

console.log(userData);

ReactDOM.render(<App userData={userData} />, document.getElementById('root'));
