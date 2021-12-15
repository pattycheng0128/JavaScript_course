// 誰呼叫，誰就是 this
// 沒有呼叫者，this -> glabal/window
// 箭頭函式沒有自己的 this 和 arguments，處理的時候要小心

const h = {
  name: 'kk',
  age: 18,
  hi: () => {
    console.log(this.age)
  }
}

h.hi()