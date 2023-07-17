const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.getElementById('fortuneButton');
const favoriteHobbiesBtn = document.getElementById('hobbiesButton')
const emailBtn = document.getElementById('emailButton');
const unsubscribeBtn = document.getElementById('unsubscribeButton');

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};


const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
        })
        .catch(err => console.log(err));
};

const submitFavoriteHobbies = (event) => {
    event.preventDefault();
    let body = {
        'hobbiesButton': document.getElementById('hobbiesButton').value,
    }
    axios.post("http://localhost:4000/api/hobbies/", body)
        .then(res => {
            const data = res.data
            alert(data);
            console.log(body)
        })
        .catch(err => console.log(err));
};



const joinEmail = (event) => {
    event.preventDefault();
    let body = {
        'user': document.getElementById('email').value
    }
    axios.post("http://localhost:4000/api/email/", body)
        .then(res => {
            const data = res.data
            alert(`Thanks for subscribing! Your welcome email should arrive shortly!`)

            console.log(body)
        })
        .catch(err => console.log(err));
};

const deleteEmail = (event) => {
    event.preventDefault()
    axios.delete("http://localhost:4000/api/unsubscribe/")
        .then(res => {
            const data = res.data
            alert('You have successfully unsubscribed from our Newsletter!')
            console.log(data)
        })
        .catch(err => console.log('Could not find user'));
};


complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
favoriteHobbiesBtn.addEventListener('click', submitFavoriteHobbies)
emailBtn.addEventListener('click', joinEmail)
unsubscribeBtn.addEventListener('click', deleteEmail)



