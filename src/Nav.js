import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";

const css = {
    fullWidth: {
        width:'100%'
    }
}

/*
 * This is a React component, realized as function.
 */
const NavLink = props => {    
    const link = <Link className="nav-link" to={props.to}>{props.label}</Link>;
    if (props.to === props.location) {
        return <li className="nav-item active">{link}</li>
    }
    else {
        return <li className="nav-item">{link}</li>
    }    
}

class Nav extends Component {    
    
    render() {
        return (            
            <div className="row">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={css.fullWidth}>
                    <Link className="navbar-brand" to="/">Messenger</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">

                          <NavLink label="Home" to="/" location={this.props.location.pathname} />
                          <NavLink label="Other" to="/other" location={this.props.location.pathname} />


                          <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              Dropdown link
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                              <a className="dropdown-item" href="#">Action</a>
                              <a className="dropdown-item" href="#">Another action</a>
                              <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                          </li>

                        </ul>                                      
                    </div>
                </nav>
            </div>
        );
    }
    
}

export default withRouter(Nav);
