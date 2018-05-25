import React from 'react';

class Footer extends React.Component {
   render() {
      var cssStyle = {
          fontSize: '86%',
          backgroundColor: '#444',
          color: '#eee'
      };
      return (
         <div style={cssStyle}>
            This is the footer
         </div>
      );
   }
}
export default Footer;
