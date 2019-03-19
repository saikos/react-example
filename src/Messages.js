import React, { Component } from 'react';

class Messages extends Component {
    
    constructor(props) {
        super(props);
        console.log('Creating new Messages component');
    }
    
    render() {
        const messages = this.props.list;
        return (
            <div>
                <h4>{this.props.title}</h4>
                <ul>                                                            
                    {Object.keys(messages).map( k => {
                        console.log('Updating li for ' + k);
                        return <li key={k}>{k} = {messages[k].el}</li>
                    })}
                </ul>
            </div>
        );
    }
}

export default Messages;

