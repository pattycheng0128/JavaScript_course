// 每個 function 都有 bind 方法，bind 是 function 包裝器，改變指向
// 是否使用 bind/call/apply，call 和 apply 選一個用
// 是否使用 new
// 是否使用嚴格模式

// 規則 1. 函數執行的時候，是否有使用 new 關鍵字？如果有，this 就是指向那個物件本身。
// 規則 2. 「誰呼叫，誰就是 this」規則。
// 規則 3. 是否使用箭頭函數？有的話就不會有自己的 this。
// 規則 4. 是否有使用 bind、apply 或是 call 方法？有的話 this 的指向也會跟著改變。
// 規則 5. 是否有開啟「嚴格模式」？

// function hello(){
//   console.log(this);
// }

// const hero = {
//   name: 'kk',
//   power: 100
// }

// const new_hello = hello.bind(hero); 
// new_hello();

const warrior = {
  hp: 100, 
  mp: 10,
  power: 95, 
  attack: function(){}
}

const mage = {
  hp: 70, 
  mp: 80, 
  power: 30, 
  attack: function() {}, 
  heal: function() {
    this.hp += 20
  }
}

console.log(warrior.hp, mage.hp)
mage.heal()
mage.heal.call(warrior)
console.log(warrior.hp, mage.hp)

