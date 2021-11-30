$().ready(function () {
  const userList = document.querySelector("#userList");

  $.ajax({
    url: "https://randomuser.me/api/?results=10",
    dataType: "json",
    success: function ({ results }) {
      results.forEach((user) => {
        let { first, last } = user.name;
        let { thumbnail } = user.picture;

        const el = document.createElement("li");
        el.innerHTML = `<img src="${thumbnail}" /> ${first} ${last}`;
        userList.appendChild(el);
      });
    },
  });
});
