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
const entryTextSection = document.getElementById('entry-text');


const movies = [];

const updateUI = () => {
    if(movies.length === 0){
        entryTextSection.style.display = 'block'
    } else{
        entryTextSection.style.display = 'none';
    }
};

const renderNewMoveElement = (title, imageUrl, rating) => {
    const newMovieElement = document.createElement('li');
    newMovieElement.className = 'movie-element';
    newMovieElement.innerHTML = `
        <div class="movie-element__image">
          <img src="${imageUrl}" alt="${title}"> 
        </div>
        <div class="movie-element__info">
          <h2>${title}</h2>
          <p>${rating}/5 stars</p>
        </div>
    `;
    const listRoot = document.getElementById('movie-list');
    listRoot.append(newMovieElement);
};

const clearMovieInput = () => {
    for (const userInput of userInputs){
        userInput.value = ''
    }
};

const toggleMovieModal = () => { //function()
    addMovieModalEl.classList.toggle('visible')
    toggleBackdrop()
    clearMovieInput()
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
    renderNewMoveElement(newMovie.title, newMovie.image, newMovie.rating)
    updateUI();
}

const backdropClickHandler = () => {
    toggleMovieModal();
}

startAddMovieButtonEl.addEventListener('click', toggleMovieModal);
backdropEl.addEventListener('click', backdropClickHandler);
cancelAddMovieModalButtonEl.addEventListener('click', cancelAddMovieHandler);
confirmAddMovieButton.addEventListener('click', addMovieHandler);