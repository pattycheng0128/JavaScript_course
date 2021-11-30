// Closure 閉包

function hello(){
  var a = 100; //這一行是 a 為了活存下來，不然會出現錯誤

  function x(){
    a += 1 //會去找外面的 var a
    console.log(a);
  }
  return x;
}

// yy 接收 hello() 的回傳值
const yy = hello()
yy()
yy()