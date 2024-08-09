// var managerBtn = document.getElementById("#manager");
// console.log(managerBtn);
// managerBtn.addEventListener("click", alert("관리자"));
function main() {
  getXMLData();
  getJSONData();
}

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

document.querySelector("#btn-logout").addEventListener("click", function () {
  let loginPre = document.querySelector("#login-pre");
  let loginAfter = document.querySelector("#login-after");
  let profilePre = document.querySelector("#noimg");
  let profileAfter = document.querySelector("#profile");

  loginPre.setAttribute("style", "display: ;");
  loginAfter.setAttribute("style", "display: none;");
  profilePre.setAttribute("style", "display: ;");
  profileAfter.setAttribute("style", "display: none;");
});

/* 프로그래밍 언어 책 정보 받아서 화면 구현하기*/
var xhrPbook = new XMLHttpRequest();
function getXMLData() {
  xhrPbook.open("get", "./data/programming.xml", true);
  xhrPbook.onreadystatechange = addXMLList;
  xhrPbook.send(null);
}

function addXMLList() {
  if (xhrPbook.readyState == 4 && xhrPbook.status == 200) {
    var xmlDoc = xhrPbook.responseXML;
    let xmlBooks = xmlDoc.getElementsByTagName("book");

    var bookList = document.getElementById("pbooks");
    Array.prototype.forEach.call(xmlBooks, (book) => {
      //   console.log(book);
      var imgVal = book.childNodes[1].innerHTML;
      var title = book.childNodes[3].innerHTML;
      var author = book.childNodes[5].innerHTML;
      var publisher = book.childNodes[7].innerHTML;
      var price = book.childNodes[9].innerHTML;
      var description = book.childNodes[11].innerHTML;
      //   console.log(imgVal, title, author, publisher, price);

      var divCard = document.createElement("div");
      divCard.className = "card col-lg-3 col-md-6";

      var img = document.createElement("img");
      img.setAttribute("src", "./assets/img/book/" + imgVal + ".png");
      img.className = "card-img-top mt-2";
      divCard.appendChild(img);

      var divBody = document.createElement("div");
      divBody.className = "card-body";

      divBody.innerHTML += "<h5 class='card-title'>" + title + "</h5>";
      divBody.innerHTML += "<p class='card-text'>" + author + "</p>";
      divBody.innerHTML += "<p class='card-text  fw-bold text-end'>가격: " + price + "원</p>";
      divBody.innerHTML +=
        "<div class='text-center'><a href='#' class='btn btn-outline-primary btn-sm'>구매하기</a></div>";

      divCard.appendChild(divBody);
      bookList.appendChild(divCard);
    });
  }
}

/* 에세이 책 정보 받아서 화면 구현하기*/
var xhrEbook = new XMLHttpRequest();
function getJSONData() {
  xhrEbook.open("get", "./data/essay.json", true);
  xhrEbook.onreadystatechange = addJSONList;
  xhrEbook.send(null);
}

function addJSONList() {
  if (xhrEbook.readyState == 4 && xhrEbook.status == 200) {
    var json = JSON.parse(xhrEbook.responseText);
    console.log(json);

    var bookList = document.getElementById("ebooks");
    json.forEach((book) => {
      console.log(book);
      var divCard = document.createElement("div");
      divCard.className = "card col-lg-3 col-md-6";

      var img = document.createElement("img");
      img.setAttribute("src", "./assets/img/book/" + book.isbn + ".png");
      img.className = "card-img-top mt-2";
      divCard.appendChild(img);

      var divBody = document.createElement("div");
      divBody.className = "card-body";

      divBody.innerHTML += "<h5 class='card-title'>" + book.title + "</h5>";
      divBody.innerHTML += "<p class='card-text'>" + book.author + "</p>";
      divBody.innerHTML += "<p class='card-text  fw-bold text-end'>가격: " + book.price + "원</p>";
      divBody.innerHTML +=
        "<div class='text-center'><a href='#' class='btn btn-outline-primary btn-sm'>구매하기</a></div>";

      divCard.appendChild(divBody);
      bookList.appendChild(divCard);
    });
  }
}

/*카카오 지도 API*/
// var mapContainer = document.getElementById("map"), // 지도를 표시할 div
//   mapOption = {
//     center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
//     level: 3, // 지도의 확대 레벨
//   };

// var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

// // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
// var mapTypeControl = new kakao.maps.MapTypeControl();

// // 지도에 컨트롤을 추가해야 지도위에 표시됩니다
// // kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
// map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

// // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
// var zoomControl = new kakao.maps.ZoomControl();
// map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
