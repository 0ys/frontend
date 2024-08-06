var buttons = document.querySelectorAll("#movieList .saved");
//console.log(buttons);
let movies = JSON.parse(localStorage.getItem("movies")) || [];

buttons.forEach((b) => {
    b.addEventListener("click", handler);
})


function handler() {
    const parent = this.parentElement;
    const title = parent.querySelector(".title").innerText;
    const genre = parent.querySelector(".genre").innerText;
    const director = parent.querySelector(".director").innerText;
    const runningTime = parent.querySelector(".runningTime").innerText;
    console.log(title, genre, director, runningTime);

    var movie = {
        'title': title,
        'genre': genre,
        'director': director,
        'runningTime':runningTime
    }

    // 중복된 영화가 저장되지 않도록 처리
    const isDuplicate = movies.some(m => m.title === movie.title && m.director === movie.director);
    if (!isDuplicate) {
        movies.push(movie);
        localStorage.setItem("movies", JSON.stringify(movies));
    }

    updateWish()
}

function updateWish() {
    const list = document.getElementById("wishList")
    if (movies.length === 0) {
        list.textContent = "아직 찜한 영화가 없습니다...";
    } else {
        // Create HTML for each movie and join them into a single string
        const contents = movies.map(movie => `
            <div id="wishList">
                <p>${movie.title} | ${movie.genre} | ${movie.director} | ${movie.runningTime}</p>
            </div>
        `).join('');

        // Set the HTML content of the list element
        list.innerHTML = contents;
    }
}
