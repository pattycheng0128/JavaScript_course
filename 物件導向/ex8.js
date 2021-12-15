var hero = {
  name: '悟空',
  sayMyName: function() {
    console.log(this.name);
  }
};

hero.sayMyName();   // A - hero
console.log("==========================")

var speakOut = hero.sayMyName;
speakOut();         // B - undefined
console.log("==========================")
const someone = { name: '路人' }

hero.sayMyName.call(someone);  // C - someone
console.log("==========================")
function here() {
  console.log(this);
}

const there = () => {
  console.log(this);
}
console.log("==========================")
here();   // D - global
there();  // E - global