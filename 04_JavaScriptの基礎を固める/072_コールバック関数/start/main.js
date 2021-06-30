// function hello(callback, lastname) {
//   console.log(callback);
//   console.log('hello' + callback(lastname));
// }

// function getName() {
//   return "code mafia";
// }

// function getFirstName() {
//   return "code";
// }

// hello(function (name) {
//   return "code" + name;
// }, 'Mafia');

 function doSomething(a,b, callback) {
   const result = callback(a,b);
   console.log(result);
 }

 function multiply(a, b) {
   return a * b;
 }

 function plus(a, b) {
  return a + b;
 }

doSomething(2, 6, multiply);
doSomething(2, 6, plus);