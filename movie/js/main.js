function main() {
    getData();
    updateWish();
}

/* 찜하기 기능 */
var buttons = document.querySelectorAll("#movieList .saved");
let movies = JSON.parse(localStorage.getItem("movies")) || [];

// 찜하기 버튼 클릭 이벤트 핸들러
function handler() {
    const parent = this.parentElement;
    const title = parent.querySelector(".title").innerText;
    const genre = parent.querySelector(".genre").innerText;
    const director = parent.querySelector(".director").innerText;
    const runningTime = parent.querySelector(".runningTime").innerText;

    var movie = {
        'title': title,
        'genre': genre,
        'director': director,
        'runningTime': runningTime
    };

    // 중복된 영화가 저장되지 않도록 처리
    const isDuplicate = movies.some(m => m.title === movie.title && m.director === movie.director);
    if (!isDuplicate) {
        movies.push(movie);
        localStorage.setItem("movies", JSON.stringify(movies));
        updateWish(); // 위시 리스트 업데이트
    }
}

// 위시리스트 업데이트
function updateWish() {
    const list = document.getElementById("wishList");
    if (movies.length === 0) {
        list.textContent = "아직 찜한 영화가 없습니다...";
    } else {
        const contents = movies.map(movie => `
            <li class="list-group-item">${movie.title} | ${movie.genre} | ${movie.director} | ${movie.runningTime}</li>
        `).join('');

        list.innerHTML = contents;
    }
}

/* JSON 데이터 가져와서 영화 화면 뿌리기 */
var xhr = new XMLHttpRequest();
function getData() {
    xhr.open('get', '/movie/data/movie.json', true);
    xhr.onreadystatechange = addMovieList;
    xhr.send(null);
}

function addMovieList() {
    if (xhr.readyState == 4 && xhr.status == 200) {
        var json = JSON.parse(xhr.responseText);
        var movieListContainer = document.getElementById("movieList");

        json.movies.forEach(movie => {
            var divMovie = document.createElement("div");
            divMovie.className = "card m-2 row-lg-3 row-md-2 row-sm-12";
            divMovie.style = "width: 16rem;"

            var img = document.createElement("img");
            img.setAttribute("src", movie.img);
            img.className = "card-img-top";
            divMovie.appendChild(img);

            var divBody = document.createElement("div");
            divBody.className = "card-body";

            divBody.innerHTML += "<span class='title fw-bold'>" + movie.title + "</span><br>";
            divBody.innerHTML += "<span class='genre'>"+ movie.genre + "</span><br>";
            divBody.innerHTML += "<span class='director'>" + movie.director + "</span><br>";
            divBody.innerHTML += "<span class='runningTime'>" + movie.runningTime + "분</span><br>";
            divBody.innerHTML += "<a href='#' class='saved btn btn-sm btn-outline-danger float-end'><i class='bi bi-heart-fill'></i></a><br>";

            divMovie.appendChild(divBody);
            movieListContainer.appendChild(divMovie);
        });

        // 버튼 클릭 이벤트 리스너를 추가합니다.
        document.querySelectorAll("#movieList .saved").forEach(button => {
            button.addEventListener("click", handler);
        });
    }
}
