document.addEventListener("DOMContentLoaded", 
function(){
  const add = document.querySelector("#add_new");

  add.addEventListener("click", function(){
    // console.log("123");
    const el = document.createElement("div");
    el.innerText = "hi";
    el.className = "hi"; //會動態長出 class name
    const constainer = document.querySelector(".container");
    constainer.appendChild(el); //長出元素
  });
});