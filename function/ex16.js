// let 會把 i 收起來，然後先把 i 印出來，但不會去排隊
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(x), 1000); //不會做這件事
}

// var 會去排隊，晚點再把 i 印出來
for(var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000 * i); //沒有*i，會同時出現3個3，有*i，會各別出現3
}