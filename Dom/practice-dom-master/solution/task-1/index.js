// select the button
var button = document.querySelector('button')
var paragraph = document.querySelector('p')


// add an event listener that runs when someone clicks the button
button.addEventListener('click', () => {

    // var paragraphDisplay = paragraph.style.display

    // if (paragraphDisplay === 'none') {
    //     paragraph.style.display = 'block'
    // } else {
    //     paragraph.style.display = 'none'
    // }

    paragraph.classList.toggle('hide')

})