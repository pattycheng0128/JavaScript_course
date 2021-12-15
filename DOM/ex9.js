document.addEventListener("DOMContentLoaded",
() => {

  const add = document.querySelector(".txt");
  const container = document.querySelector(".container");

  function randomHex(){
    // return(
    //   Math.floor(Math.random() * 255).toString(16).padStart(2, '0')+
    //   Math.floor(Math.random() * 255).toString(16).padStart(2, '0')+
    //   Math.floor(Math.random() * 255).toString(16).padStart(2, '0')
    // ).toUpperCase();
    return Math.floor(Math.random() * 16777215).toString(16);
  }

  // 也可以在外層綁事件(Event delegation 委任)
  // close 功能
  container.addEventListener("click", (e) => {
    console.log(e.target.nodeName);
    if(e.target && e.target.nodeName == "BUTTON"){
      e.target.parentNode.remove();
    }
  })

  add.addEventListener("click", () => {
    const color = randomHex();
    const note = document.createElement("div");
    // note.innerText = "hi";
    note.innerText = "hi";
    note.className = "bar";
    const constainer = document.querySelector(".container");
    constainer.insertAdjacentElement("afterbegin", note);
    // console.log(randomHex());
    note.style.backgroundColor = `#${color}`;

    // btn
    const closeBtn = document.createElement("button");
    closeBtn.innerText = "X";
    note.appendChild(closeBtn);

  // //close 功能
  //   closeBtn.addEventListener("click",(e) => {
  //   console.log(e.target.parentNode);
  //   e.target.parentNode.remove();
  // });


  })
})