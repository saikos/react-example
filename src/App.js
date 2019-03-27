import React, { Component } from 'react';
import { HashRouter as Router, Route, Redirect } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import Main from './Main';
import Other from './Other';
import Footer from './Footer';
import { Login, Logout } from './Auth';
import { UserProvider } from './UserContext';

class App extends Component {
    
  constructor(props) {
      super(props)
      this.state = {
        token: props.userData.token,
        username: props.userData.username,        
        style: {
            backgroundColor:'#fff',
            height:'100vh'
        },
        setUserData: (token, username) => this.setState({
            token: token,
            username: username
        }),
        updateStyle: (styleObj) => this.setState({
            style: styleObj
        })
      };
  }
  
  renderProtectedComponent(ProtectedComponent) {
      if (this.state.username !== null) {
          return  (props) => <ProtectedComponent {...props} />;
      }
      else {
          return (props) => <Redirect to='/login' />;
      }
  }
    
  render() {
    return (
      <div style={this.state.style}>
        <UserProvider value={this.state}>
            <Router>
                <div className='container'>  
                    <Nav />
                    <Route path="/" exact render={(props) => {
                        return <h1>Welcome {this.state.username === null? 'Stranger' : this.state.username}</h1>;
                    }}/>
                    <Route path="/main" render={this.renderProtectedComponent(Main)} />
                    <Route path="/other" render={this.renderProtectedComponent(Other)} />
                    <Route path="/login" component={Login} />                    
                    <Route path="/logout" render={this.renderProtectedComponent(Logout)} />                    
                    <Footer />                    
                </div>
            </Router>
        </UserProvider>
      </div>  
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
