// scope chain 範圍鏈 (看老師課程再確認一下)
var a = 1;

function hello(){
  var a = 2; // 沒有 var 或 let 不算是宣告，會變成全域變數
  console.log(a)
}

hello(); // 2
console.log(a) // 1
