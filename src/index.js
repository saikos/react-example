import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import test, { CONST } from './TestImports';

console.log(test);

ReactDOM.render(<App />, document.getElementById('root'));
