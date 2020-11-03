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
const deleteMovieModal = document.getElementById('delete-modal');




const movies = [];

const updateUI = () => {
    if(movies.length === 0){
        entryTextSection.style.display = 'block'
    } else{
        entryTextSection.style.display = 'none';
    }
};

const deleteMovie = (movieId) => {
    let movieIndex = 0
    for(const movie of movies) {
        if (movie.id === movieId) {
            break;
        }
        movieIndex++;
    }
    movies.splice(movieIndex, 1);
    const listRoot = document.getElementById('movie-list');
    listRoot.children[movieIndex].remove();
    // listRoot.removeChild(listRoot.children[movieIndex]);
}

const closeMovieDelitionModal = () => {
    toggleBackdrop();
    deleteMovieModal.classList.remove('visible');
}

const deleteMovieHandler = (movieId) => {
    deleteMovieModal.classList.add('visible');
    toggleBackdrop();
    // deleteMovie(movieId);
}

const renderNewMoveElement = (id, title, imageUrl, rating) => {
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
    newMovieElement.addEventListener('click', deleteMovieHandler.bind(null, id))
    const listRoot = document.getElementById('movie-list');
    listRoot.append(newMovieElement);
};

const clearMovieInput = () => {
    for (const userInput of userInputs){
        userInput.value = ''
    }
};

const showMovieModal = () => { //function()
    addMovieModalEl.classList.add('visible')
    toggleBackdrop()
    clearMovieInput()
};

const cancelAddMovieHandler = () => {
    closeMovieModal();
    clearMovieInput();
}

const closeMovieModal = () => {
    addMovieModalEl.classList.remove('visible')
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
        id: Math.random().toString(),
        title: titleValue,
        image: imageUrlValue,
        rating: ratingValue
    };

    movies.push(newMovie);
    console.log(movies);
    closeMovieModal();
    toggleBackdrop()
    clearMovieInput();
    renderNewMoveElement(newMovie.id ,newMovie.title, newMovie.image, newMovie.rating)
    updateUI();
}

const backdropClickHandler = () => {
    closeMovieModal();
    closeMovieDelitionModal();
}

startAddMovieButtonEl.addEventListener('click', showMovieModal);
backdropEl.addEventListener('click', backdropClickHandler);
cancelAddMovieModalButtonEl.addEventListener('click', cancelAddMovieHandler);
confirmAddMovieButton.addEventListener('click', addMovieHandler);