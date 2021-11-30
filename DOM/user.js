document.addEventListener("DOMContentLoaded",
() => {
  fetch('https://randomuser.me/api/?results=10')
  .then((response) => {
    return response.json();//先解成 json
  })
  // 將 results 那包 array 丟進去解構
  .then(({results}) => {
    console.log(results);
    results.forEach((u) => {
      console.log(u.email, u.cell); //印出 email
    })
    //捕捉錯誤
    .catch((err) => {
      console.log("hi");
    })
  });
})