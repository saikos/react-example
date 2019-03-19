import React, { Component } from 'react';

class Login extends Component {        
    
    constructor(props) {
        super(props);
        this.username = React.createRef();
        this.password = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(event) {
        console.log('ref to username: ', this.username.current);
        
        const u = this.username.current.value;
        const p = this.password.current.value;
        console.log('Submitting...', u, p);
        
        window.$.ajax({
            url: 'http://localhost:8080/WebApp/api/login',
            dataType: 'json',                       
            type: 'POST',         
            data: {
                username: u,
                password: p
            }
        }).then(json => {
            localStorage.setItem('token', json.token);            
        });
        
        event.preventDefault();
    }
    
    render() {
        let token = localStorage.getItem('token');
        if (token) {
            // Redirect
            return (
                <h4>Welcome back</h4>
            );
        }
        else {
            return (                                    
                <form onSubmit={this.handleSubmit}>

                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" ref={this.username} />

                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" ref={this.password} />

                    <button className="btn btn-primary" type="submit">
                        Login
                    </button>
                </form>
            );
        }
    }
    
}

export default Login;


