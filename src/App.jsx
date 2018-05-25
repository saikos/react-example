import React from 'react';
import Footer from './Footer.jsx';

class App extends React.Component {
   render() {
      var cssStyle = {
          backgroundColor: '#ddd',
          color: '#666'
      };
      return (
         <div style={cssStyle}>
            <h1>
                Hello World!
            </h1>

            <p> 1 + 1 = {1 + 1}</p>

            <Footer />
         </div>
      );
   }
}
export default App;
