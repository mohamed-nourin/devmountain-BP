const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.getElementById('fortuneButton');
const saveProfileBtn = document.getElementById('saveProfile');
const updateProfileBtn = document.getElementById('updateProfile');
const favoriteHobbiesBtn = document.getElementById('hobbiesButton');
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

const saveProfile = (event) => {
    event.preventDefault();
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;

    var data = {
        firstName: firstName,
        lastName: lastName,
        email: email
    };

    axios.post('/api/profile', data)
        .then(response => {
            console.log(response.data);
            alert('Profile saved successfully!');
        })
        .catch(error => {
            console.error('Error:', error);
        });
};

const updateProfile = (event) => {
    event.preventDefault();
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;

    var data = {
        firstName: firstName,
        lastName: lastName,
        email: email
    };
    axios.put('/api/profile', data)
        .then(response => {
            console.log(response.data);
            alert('Profile updated successfully!');
        })
        .catch(error => {
            console.error('Error:', error);
        });
};

const submitFavoriteHobbies = (event) => {
    event.preventDefault();
    let body = {
        'hobbies': document.getElementById('hobbiesButton').value,
    }
    axios.post("http://localhost:4000/api/hobbies/", body)
        .then(res => {
            const data = res.data
            alert("Submitted successfully!");
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
document.getElementById('emailButton').addEventListener('click', saveProfile);
document.getElementById('updateButton').addEventListener('click', updateProfile);
favoriteHobbiesBtn.addEventListener('click', submitFavoriteHobbies)
emailBtn.addEventListener('click', joinEmail)
unsubscribeBtn.addEventListener('click', deleteEmail)








