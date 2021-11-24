function sayHello(a, b){
  console.log(123); 
  return a
}

let result = sayHello(1, "a"); // 回傳sayHello()內容
console.log(result); 
//如果 sayHello()沒有做 return, result 接收到的會是 undefined，所以要加 return，才會回傳東西給 result