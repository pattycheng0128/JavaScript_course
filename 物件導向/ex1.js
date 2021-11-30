function heroCreate(name, power, attack){
  const obj = {name, power, 
    attack: function(){
    console.log("hi");
  }}
  return obj;
}

const h1 = heroCreate("A", 44, "hi");
console.log(h1.name);