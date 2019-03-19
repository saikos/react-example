import React, { Component } from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import Main from './Main';
import Other from './Other';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
        <Router>
            <div className='container'>
                <Nav />
                <Route path="/" exact component={Main} />
                <Route path="/other" component={Other} />
                <Footer />
            </div>
        </Router>
    );
  }
  
  example() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>     
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
