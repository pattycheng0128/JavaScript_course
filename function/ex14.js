// 解構賦值 (Destructuring assignment) 語法是一種 JavaScript 運算式，可以把陣列或物件中的資料解開擷取成為獨立變數。
// 解構賦值，可以額外給值
function calcScore(){
  return [1, 4, 5] // object
}

let [a, b, c] = calcScore()
console.log(a, b, c) //解構賦值後會是 number

