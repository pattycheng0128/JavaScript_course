class Human {
  eat() {
    console.log('yummy!')
  }
}

// HeroCreator 繼承至 Human
class HeroCreator extends Human {
  constructor(name, power) {
    super()
    this.name = name
    this.power = power
  }

  attack() {
    console.log(`${this.name} 攻擊，造成 ${this.power} 點傷害`)
  }

  greeting() {
    console.log('hi')
  }
}

const h = new HeroCreator("悟空", 100)
console.log(h)
console.log(h.__proto__ === HeroCreator.prototype)
console.log(h.name)