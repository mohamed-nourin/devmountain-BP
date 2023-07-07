{/* <body>
<main>

</main>
<script src="index.js">

</script>

</body> */}
console.log('hello world');

let message = document.querySelector('#message');

function addMovie (event) {
    event.preventDefault();
    let  inputField = document.querySelector('input');

    let movie = document.createElement('li');
    let movieTitle = document.createElement('span');
    movieTitle.textContent = inputField.value;
    movieTitle.addEventListener('click', crossOfMovie);
    movie.appendChild(movieTitle);
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.addEventListener('click', deleteMovie);
    movie.appendChild(deleteBtn);
    let newMovie = document.querySelector('ul');
    newMovie.appendChild(movie);
    inputField.value = '';   
}
let form = document.querySelector('form');
form.addEventListener('submit', addMovie);

function deleteMovie(event) {
    event.target.parentNode.remove();
    message.textContent = "Movie Deleted!";
    // alert('Movie Deleted!');
}

function crossOfMovie (event) {
    event.target.classList.toggle('checked');
    if (event.target.classList.contains('checked')) {
        message.textContent='Watched'
    }


}

