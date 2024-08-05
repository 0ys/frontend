var buttons = document.querySelectorAll("#movieList .saved");
//console.log(buttons);
buttons.forEach((b) => {
    b.addEventListener("click", handler);
})

function handler() {
    console.log(this.previousElementSibling.innerText);
}