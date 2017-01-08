var React = require('react');

// var About = React.createClass({
//   render: function() {
//     return(
//       <h3>About component</h3>
//     );
//   }
// });

//can only do this is the componet will only use the render method.

var About = (props) => {
  return(
    <h3>About component</h3>
  );
}

module.exports = About;
