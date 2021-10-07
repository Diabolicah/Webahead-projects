const textInput = document.getElementById('textInput')
const outputSpans = document.querySelectorAll('span')

// "keyup" event runs after you press on the keyboard and lift your finger off
textInput.addEventListener('keyup', (event) => {

    Array.from(outputSpans).forEach((span) => {
        span.textContent = event.target.value
    })
})