const textInput = document.getElementById('textInput')
let spansList = document.querySelectorAll("span")
// "keyup" event runs after you press on the keyboard and lift your finger off
textInput.addEventListener('keyup', (event) => {
    // event.target.value contains the text that was written in the text input
    // open the console and start typing to see what it logs
    console.log(event.target.value)
    Array.from(spansList).forEach(span=>span.textContent = event.target.value)
})