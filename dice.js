// My SMART Goal is:

// Refactor my code so that by 12:00pm 3/2/21 I can store the value of the user input as a number and console log that value.

// Stretch goals:

// Create and console log a string of random dice that is the appropriate length


document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('button')
    btn.addEventListener('click', () => {
        console.log('clicked!')
        const input = document.querySelector('input')
        console.log(input.value)
    })

})

