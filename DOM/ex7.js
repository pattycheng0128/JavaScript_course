document.addEventListener("DOMContentLoaded",
() => {
  const btn = document.querySelector("#task_input");
  const list = document.querySelector("#list");

  btn.addEventListener("keydown", (e) => {

    console.log(e) //印出enter的log
    if(e.key == "Enter" && e.target.value != ""){
      // 新增 todo item
      const note = document.createElement("div");
      note.className = "todoItem";
      note.innerText = e.target.value;
      list.appendChild(note);

      //建立 todo btn(刪除)
      const closeBtn = document.createElement("button");
      closeBtn.innerText = "X";
      note.appendChild(closeBtn); //note要將closeBtn 加到 appendChild

      //close 功能
      closeBtn.addEventListener("click",(e) => {
        console.log(e.target.parentNode);
        e.target.parentNode.remove();
      });

      // 消掉
      e.target.value = "";
    }
  });
});