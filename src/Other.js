import React, { Component } from 'react';
import { UserContext } from './UserContext';

class Other extends Component {      
    
    static contextType = UserContext;
    
    constructor(props) {
        super(props);
        console.log(props);                        
    }
    
    componentDidMount() {
        console.log(this.context);
        this.context.updateStyle({
            backgroundColor: '#ddd',
            height: '100vh'
        });
    }
    
    render() {
        console.log(this.context);
        return (
            <div className='row'>
                This is another "page".
            </div>
        );
    }
    
}

export default Other;
