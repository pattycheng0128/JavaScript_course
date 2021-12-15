// this 寫在哪裡沒關係

const game = {
  name: "Zelda",
  greeting: function() {
    console.log(this);    // A. 會印出什麼？ game物件

    function attack() {
      console.log(this);  // B. 會印出什麼? 全域物件
    }

    attack();
  }
}

game.greeting();