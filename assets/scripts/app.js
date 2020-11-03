const addMovieModalEl = document.getElementById('add-modal'); //Besr approach
// const addMovieModal = document.querySelector('#add-modal')   Similar approach but little worse performance
// const addMovieModal = document.body.children[1]; Another approach.

const startAddMovieButtonEl = document.querySelector('header button');

const backdropEl = document.getElementById('backdrop');

const cancelAddMovieModalButtonEl = addMovieModalEl.querySelector('.btn--passive')
// const cancelAddMovieModalButtonEl = document.querySelector('#add-modal').lastElementChild.firstElementChild

console.log(cancelAddMovieModalButtonEl)

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
    
}

const backdropClickHandler = () => {
    toggleMovieModal();
}

startAddMovieButtonEl.addEventListener('click', toggleMovieModal);
backdropEl.addEventListener('click', backdropClickHandler);
cancelAddMovieModalButtonEl.addEventListener('click', cancelAddMovieHandler);
confirmAddMovieButton.addEventListener('click')