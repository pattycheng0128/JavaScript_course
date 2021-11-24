const list = [1,2,3,4,5,8,10]

// const sum = list.reduce(function(a,b){
//   return a + b;
// })

const sum = list.reduce((a, b) => a + b)
console.log(sum)

//奇數
// const odd = list.filter(odd => odd % 2 == 1)
// console.log(odd)