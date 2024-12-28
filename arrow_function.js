//function 1
var apple = () => {
  return "hello"
} 
//function 2
var orange = () => {
  return apple();
}
console.log(orange());

