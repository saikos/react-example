import React, { Component } from 'react';

let cssStyle = {
    redClass: {
        backgroundColor: '#ee0000'
    }
};

class Main extends Component {
    
    componentDidMount() {
        //fetch the ajax call here
    }
    
    render() {
        return (
            <div className='row'>
                <h1 style={cssStyle.redClass}>Welcome User</h1>
            </div>
        );
    }
    
}

export default Main;
