// let c = 0

function y(){
  // c += 1
  console.count()
  x();
}

function x(){
  // c += 1
  console.count()
  y();
}

x();