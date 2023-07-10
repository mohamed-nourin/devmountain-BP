let picture = document.querySelector('#catImage')
picture.addEventListener('mouseover', () => {
    alert("You are fantastic!")
})

function handleSubmit(evt) {
    evt.preventDefault();

    alert("Form submitted successfully");
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);
