// 至少要等待5秒後，才能執行某些動作(如 Magic 例子)

setTimeout(function(){
  console.log("Magic!");
},5000);

console.log(123);

setTimeout(function(){
  console.log("hello!");
},0);