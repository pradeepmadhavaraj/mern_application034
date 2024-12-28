let a = 10;
if (true) {
    let a = 20; 
    console.log("Inside block (let):", a);  
}
console.log("Outside block (let):", a); 
var b = 30;
if (true) {
    var b = 40; 
    console.log("Inside block (var):", b);  
}
console.log("Outside block (var):", b); 
const c = 50;
console.log("Const value:", c);