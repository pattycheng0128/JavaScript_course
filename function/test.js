// let/var 放在 function 內外的差異
var a = 7;

function hello(){
  var a = 5;
  console.log(a);
}

hello()
console.log(a)
