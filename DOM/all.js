document.addEventListener("DOMContentLoaded", 
function(){
  const btn = document.querySelector("#btn");
  const txt = document.getElementById("hi");
  const link = document.querySelector("#link");

  btn.addEventListener("click",function(){
    console.log("pressed");
  });

  btn.addEventListener("click", function(){
    txt.innerText = "World";
  });

  link.addEventListener("click", function(e){
    e.preventDefault(); //可以停止預設行為，不會換頁
    console.log("go!")
  })

});