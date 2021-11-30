document.addEventListener("DOMContentLoaded",
  function(){
    const check = document.querySelectorAll("li");
    const btn = document.querySelector("#btn");

    btn.addEventListener('click', function(){
      for (var i=0; i < check.length; i++) {
        if (check[i].innerText.length >= 4) {
          check[i].children[0].checked = true;
          console.log(check[i].children[0]); //-才抓的到 input 欄位
        }
      //console.log(check[i].innerText) - li才抓的到文字
    }  
  });
});