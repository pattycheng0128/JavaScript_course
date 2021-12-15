// 達成物件導向的一種手法，將會共用的屬性抽到外面

const actions = {
  greeting: function(){
   console.log("h1"); 
  },
  attact: function(){
    console.log(`${this.name} have ${this.power}`);
  }
}

function heroCreater(name, power){
  // const hero = Object.create(actions); 使用 actions 當作原型來打造
  // const hero = {}
  this.name = name;
  this.power = power;
  // return hero;
}

const h1 = heroCreater('悟空', 100);
const h2 = new heroCreater('悟空', 100); //函式用this，並搭配 new 會自動有回傳值
console.log(h1)
console.log("========")
console.log(h2)