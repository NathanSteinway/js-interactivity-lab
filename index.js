const message = document.querySelector('#message')

const addMovie = (event) => {

    event.preventDefault()

    let inputField = document.querySelector('input')
    const movie = document.createElement(`li`)
    const movieTitle = document.createElement(`span`)
    let formElement = document.querySelector('ul')

    // stores input field as value saved to movietitle
    movieTitle.textContent = inputField.value
    movieTitle.addEventListener('click', crossOffMovie)

    // appends movieTitle to Movie object
    movie.appendChild(movieTitle)

    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'X'
    deleteBtn.addEventListener('click', deleteMovie)

    movie.appendChild(deleteBtn)

    // appends movie obj to ul
    formElement.appendChild(movie)

    inputField.value = ''
}

const deleteMovie = (event) => {
    message.textContent = `${event.target.previousElementSibling.textContent} deleted`
    event.target.parentNode.remove()
    revealMessage()
}

const crossOffMovie = (event) => {
    event.target.classList.toggle(`checked`)

    if (event.target.classList.contains(`checked`)){
        message.textContent = `${event.target.textContent} Watched`
    } else {
        message.textContent = `${event.target.textContent} added back`
    }

    revealMessage()
}

const revealMessage = () => {

    message.classList.remove('hide')

    // inline functions only exist here and cant be called again bc they're nameless
    setTimeout(() => {
        message.classList.add('hide')
    }, 10000)
}

const hideMessage = () => {
    message.classList.add('hide')
}

const selectForm = document.querySelector('form')

selectForm.addEventListener('submit', addMovie)








