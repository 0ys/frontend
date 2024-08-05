var loginButton = document.querySelector("#login");
loginButton.addEventListener("click", loginHandler);

function loginHandler() {
    let id = prompt("아이디 입력");
    let pw = prompt("비밀번호 입력");
    if (id == "ssafy" && pw == 1234) {
        alert("로그인 성공!!");
        toggleLoginPage();
    } else {
        alert("로그인 실패..")
    }
}

function toggleLoginPage() {
    const btns = document.querySelectorAll(".headerNavi a");
    //console.log(btns);
    btns.forEach((btn) => {
        if (btn.style.display !== 'none') {
            btn.style.display = 'none';
        } else {
            btn.style.display = 'inline';
        }
    })

    const profile = document.querySelectorAll(".profile");
    profile.forEach((p) => {
        if (p.style.display !== 'none') {
            p.style.display = 'none';
        } else {
            p.style.display = 'inline';
        }
    })
}

var managerBtn = document.getElementById("#manager");
console.log(managerBtn);
managerBtn.addEventListener("click", alert("관리자"));