document.addEventListener("DOMContentLoaded", 
function(){
  const div_out = document.querySelector(".out");
  const div_in_one = document.querySelector(".in_one");
  const div_in_two = document.querySelector(".in_two");

  div_out.addEventListener("click",(e) => {
    //e.stopPropagation(); 事件不要在往下傳播了，所以in事件不會被執行
    console.log("outer div");
    alert("outer div");
    // console.log(e.target);
    // console.log(e.currentTarget);
  })

  // div_in_one.addEventListener("click",() => {
  //   console.log("inter div one");
  //   alert("inter div one");
  // })

  // div_in_two.addEventListener("click",() => {
  //   console.log("inter div two");
  //   alert("inter div two");
  // })


  
});