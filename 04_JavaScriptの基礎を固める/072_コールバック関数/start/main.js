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

//  function doSomething(a,b, callback) {
//    const result = callback(a,b);
//    console.log(result);
//  }

//  function multiply(a, b) {
//    return a * b;
//  }

//  function plus(a, b) {
//   return a + b;
//  }

// doSomething(2, 6, multiply);
// doSomething(2, 6, plus);


const arry = [1,2,3,4,5];

function forEach(arry, callback) {
  for(let i = 0; i < arry.length; i++) {
    callback(arry[i]);
  }
}

function log(val) {
  console.log(val);
}

function double(val){
  val = val * 2;
  log(val);
}

forEach(arry, double);