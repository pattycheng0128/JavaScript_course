//會執行兩個階段 1.建立期 1A/1B 2.執行期-才會真的把值塞給變數 
// 變數提昇(Variable Hosting)?
// 宣告一個 a 變數，沒加 var 會是一個 global

// 驗證1 - var
// console.log(a); // 在變數宣告前印出，會出現 undefined
// var a = "hello"
// console.log(a); // hello

// 驗證2 - let
console.log(a); // ReferenceError: a is not defined (會產生 TDZ 暫時死區)
let a = "hi"
console.log(a)