// IIFE - Intermediate Invoked Function Expression
// 用完立即丟棄，不會汙染其他 function，和在外面呼叫 function 一樣

(function(x){
  console.log(x);
  console.log("hello");
})(123);