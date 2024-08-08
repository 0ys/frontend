// var managerBtn = document.getElementById("#manager");
// console.log(managerBtn);
// managerBtn.addEventListener("click", alert("관리자"));

document.querySelector("#btn-login").addEventListener("click", function () {
  let userId = document.querySelector("#userid").value;
  let userPwd = document.querySelector("#userpwd").value;
  console.log(userId + " " + userPwd);

  let loginPre = document.querySelector("#login-pre");
  let loginAfter = document.querySelector("#login-after");
  let profilePre = document.querySelector("#noimg");
  let profileAfter = document.querySelector("#profile");

  if (userId === "ssafy" && userPwd === "1234") {
    loginPre.setAttribute("style", "display: none;");
    loginAfter.setAttribute("style", "display: ;");
    profilePre.setAttribute("style", "display: none;");
    profileAfter.setAttribute("style", "display: ;");
    let myModal = document.getElementById("loginModal");
    let modal = bootstrap.Modal.getInstance(myModal);
    modal.hide();
  } else {
    alert("아이디 또는 비번 확인!!!");
  }
});
