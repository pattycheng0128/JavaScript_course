document.addEventListener("DOMContentLoaded", 
function(){
  const form = document.querySelector("#user_form");
  const username = document.querySelector("#user_id");

  form.addEventListener("submit", function(e){
    if (username.value === ''){
      e.preventDefault();
      alert("hi");
    }
  });
});