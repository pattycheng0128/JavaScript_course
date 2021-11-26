function high_and_low(numbers){
  let max = Math.max(...numbers);
  let min = Math.min(...numbers);
  return{max, min}
}

console.log(high_and_low([6, 4, 9, 2, 1]));