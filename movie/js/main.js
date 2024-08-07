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
        // Create HTML for each movie and join them into a single string
        const contents = movies.map(movie => `
            <div class="movieItem">
                <p>${movie.title} | ${movie.genre} | ${movie.director} | ${movie.runningTime}</p>
            </div>
        `).join('');

        // Set the HTML content of the list element
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
            divMovie.className = "movie";

            var img = document.createElement("img");
            img.setAttribute("src", movie.img);
            divMovie.appendChild(img);

            divMovie.innerHTML += "<p class='title'>" + movie.title + "</p>";
            divMovie.innerHTML += "<p class='genre'>" + movie.genre + "</p>";
            divMovie.innerHTML += "<p class='director'>" + movie.director + "</p>";
            divMovie.innerHTML += "<p class='runningTime'>" + movie.runningTime + "</p>";
            divMovie.innerHTML += "<button class='saved'>찜</button>";

            movieListContainer.appendChild(divMovie);
        });

        // 버튼 클릭 이벤트 리스너를 추가합니다.
        document.querySelectorAll("#movieList .saved").forEach(button => {
            button.addEventListener("click", handler);
        });
    }
}
