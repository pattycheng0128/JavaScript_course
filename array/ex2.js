const list = [1,2,3,4,5]

// 匿名函式function沒有名稱
// const newArr = list.map(function(x){
//   return 2 * x
// });
// 箭頭函數 Arrow Function
const newArr = list.map(x => x*2)
console.log(newArr)
