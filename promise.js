function a1(){
  return new Promise((resolve, reject)=>{
    let datas=false;
    if(datas){
      resolve("data returned");
    }
    else{
      reject("data never returnded");
    }
  })
}
a1().then((values)=>{
console.log(values)
}).catch((values)=>{
  console.error(values);
});