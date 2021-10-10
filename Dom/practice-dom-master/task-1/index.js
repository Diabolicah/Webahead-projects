// select the button and the paragraph
// let button = document.querySelector("button")
let button = document.getElementById("button1")
let paragraph = document.querySelector("p")
// paragraph.style.opacity = "1"
// add an event listener that runs when someone clicks the button
button.addEventListener("click",() => {
    console.log("Hello DOM")
    paragraph.classList.toggle("hide")
    paragraph.classList.toggle("george")
})