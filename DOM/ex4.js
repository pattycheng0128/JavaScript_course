document.addEventListener("DOMContentLoaded", 
function(){
  const check = document.querySelectorAll(".check");
  const btn = document.querySelector(".btn");

  btn.addEventListener("click", function(){
    for(let i=0; i < check.length; i++){
      if (check[i].checked == false)
        check[i].checked = true;
      else{
        check[i].checked = false;
      }
    }
  });
});