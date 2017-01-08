// var names = ['Justin', 'Rachel', 'Pepper'];
//
// names.forEach(function(name) {
//   console.log('foreach', name);
// });
//
// names.forEach((name) => {
//   console.log('arrowFunc', name);
// });
//
// names.forEach((name) => console.log('arrowShort', name));

// var returnMe = (name) => `${name}!`;
// console.log(returnMe('Justin'));

// var person = {
//   name: 'Justin',
//   greet: function() {
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name)
//     });
//   }
// }
//
// person.greet();


//can use arrow functions in place of annoyomus functions
//Arrow functions scope is to its parent this.name


function add(a, b) {
  return a + b;
}

console.log(add(1,3));
console.log(add(9,0));

var addStatement = (a,b) => {
  return a + b;
}

console.log('state', addStatement(1,2));

var addExpression = (a,b) => a+b;

console.log('expres', addExpression(19,1));
