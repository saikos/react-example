import React, { Component } from 'react';
import Messages from './Messages';
import $ from 'jquery';

let cssStyle = {
    redClass: {
        color: '#ee0000',
        backgroundColor: 'dddddd'
    }
};

class Main extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            messages:{}
        };
    }
    
    componentDidMount() {        
        console.log("Main component did mount");
        $.ajax({
            url: 'http://localhost:3000/texts.json',
            dataType: 'json',                       
            type: 'GET'            
       }).then ( data => {
           console.log("Updating UI");
           this.setState({
               messages: data
           });
       });
    }
    
    render() {
        return (
            <div>
                <div className='row'>
                    <h1 style={cssStyle.redClass}>
                        Messages
                        &nbsp;
                        <small>
                            ({Object.keys(this.state.messages).length})
                        </small>
                    </h1>                
                </div>
                <div className="row">
                    <Messages list={this.state.messages} title='List of messages'/>
                </div>
            </div>
        );
    }
    
}

export default Main;
