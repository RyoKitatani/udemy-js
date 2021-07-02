const obj ={
  first_name: 'Madia',
  last_name: 'Code',
  printFullName: function() {
    console.log('hello');
  }
}

class MyObj {
  constructor() {
    this.first_name = 'Mafia';
    this.last_name = 'Code';
  }
  printFullName() {
    console.log('hello');
  }
}
const obj2 = new MyObj()

obj.printFullName();
obj2.__proto__.printFullName();