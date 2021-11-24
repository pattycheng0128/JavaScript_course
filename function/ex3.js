function c(){
  console.log("hello")
}

function sayHello(a, b){
  // console.log(a, b);
  c() //如果 call 的 function 同名於參數是 a()或 b()，會出現 TypeError: b is not a function
}

sayHello(1, "a");
// TypeError: a is not a function