// 函式可以包函式，通常到兩層
function hello(){
  function x(){
    console.log("I am XX");
    return 5
  }
  return x() //沒加()就是自己本身
}

console.log(hello())
