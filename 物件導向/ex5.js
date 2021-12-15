function hello() {
  console.log(this);  // A. 會印出什麼？ 全域變數
  console.log("==========")

  function world() {
    console.log(this);  // B. 會印出什麼？ 全域變數
    console.log("==========")

    const game = {
      name: "Zelda",
      greeting: function() {
        console.log(this); // C. 會印出什麼？ game物件
        console.log("==========")
      }
    }
    game.greeting();
  }
  world();
}
hello();