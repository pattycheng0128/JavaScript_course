function displayHero({name, age}){
   //let {name, age} = h - 解構賦值 (Destructuring assignment)
  console.log(`hi,I'm ${name} and I'm ${age} years old.`)
}

const hero = {
  name: 123,
  age: 22,
  gender: "A"
}

displayHero(hero)

// let {name, age, gender} = hero;
// console.log(name, age, gender)

// let n = hero.name;
// let a = hero.age;
// displayHero(n, a);

// let{name, age} = hero
// displayHero(name, age)