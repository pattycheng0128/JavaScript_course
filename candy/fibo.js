function fibo(n){
  if(n == 0){
    return 0;
  }else if(n == 1 || n == 2){
    return 1;
  }else if(n >= 3){
    return fibo(n-1) + fibo(n-2);
  }else{
    return false
  }
}

console.log(fibo(4))
console.log(fibo(6))
console.log(fibo(7))