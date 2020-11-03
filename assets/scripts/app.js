const addMovieModalEl = document.getElementById('add-modal'); //Besr approach
// const addMovieModal = document.querySelector('#add-modal')   Similar approach but little worse performance
// const addMovieModal = document.body.children[1]; Another approach.

const startAddMovieButtonEl = document.querySelector('header button');

const backdropEl = document.getElementById('backdrop');

const cancelAddMovieModalButtonEl = addMovieModalEl.querySelector('.btn--passive')
const confirmAddMovieButton = addMovieModalEl.querySelector('.btn--success')

// const cancelAddMovieModalButtonEl = document.querySelector('#add-modal').lastElementChild.firstElementChild

const userInputs = addMovieModalEl.querySelectorAll('input');
// const userInputs = addMovieModalEl.getElementsByTagName('input');

console.log(confirmAddMovieButton)

const movies = [];

const clearMovieInput = () => {
    for (const userInput of userInputs){
        userInput.value = ''
    }
}
const toggleMovieModal = () => { //function()
    addMovieModalEl.classList.toggle('visible')
    toggleBackdrop()
};

const cancelAddMovieHandler = () => {
    toggleMovieModal();
}
const toggleBackdrop = () => {
    backdropEl.classList.toggle('visible')
}

const addMovieHandler = () => {
    const titleValue = userInputs[0].value
    const imageUrlValue = userInputs[1].value
    const ratingValue = userInputs[2].value
    if (titleValue.trim() === '' || imageUrlValue.trim() === '' || ratingValue.trim() === '' || +ratingValue < 1 || +ratingValue > 5) {
        alert('Please enter valid values (rating between 1 and 5).');
        return
    } 
    const newMovie = {
        title: titleValue,
        image: imageUrlValue,
        rating: ratingValue
    };

    movies.push(newMovie);
    console.log(movies);
    toggleMovieModal();
    clearMovieInput();
}

const backdropClickHandler = () => {
    toggleMovieModal();
}

startAddMovieButtonEl.addEventListener('click', toggleMovieModal);
backdropEl.addEventListener('click', backdropClickHandler);
cancelAddMovieModalButtonEl.addEventListener('click', cancelAddMovieHandler);
confirmAddMovieButton.addEventListener('click', addMovieHandler);