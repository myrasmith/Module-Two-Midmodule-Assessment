document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('button')
    btn.addEventListener('click', () => {
        console.log('clicked!')
        const input = document.querySelector('input')
        console.log(input)
    })
})

