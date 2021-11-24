
// hello(); //用 var - TypeError: hello is not a function, 用 let - ReferenceError: hello is not defined

// function Expression
let hello = function(){
  console.log("hi");
}

hello();