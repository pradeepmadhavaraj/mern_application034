//spread operator
a=[1,2,3];
b=[...a];
console.log(b);
//rest operator
let fun=(...values)=>{
  console.log(values);
}
fun(1,2,3,4);
//destructuring operator

let val=[1,2,3,4,5];
let [e,c,d,...x]=val;
console.log(e);
