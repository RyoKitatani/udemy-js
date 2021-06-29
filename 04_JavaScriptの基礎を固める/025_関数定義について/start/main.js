function hello(name, age){
  // let name = 'Code Mafia';  変数
  console.log('hello' + name + age);
  return name + age
  //戻り値
}

//関数を持った変数
//変数がないのは、無名関数という。

hello('Code Mafia', 20);
const returnVal = hello('Code Mafia2', 20);

console.log(returnVal);