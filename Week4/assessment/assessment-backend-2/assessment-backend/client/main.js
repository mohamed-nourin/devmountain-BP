const complimentBtn = document.getElementById('complimentButton');
const fortuneBtn = document.getElementById('fortuneButton');
const saveProfileForm = document.getElementById('saveProfileForm');
const updateProfileForm = document.getElementById('updateProfileForm');
const hobbiesButton = document.getElementById('hobbiesButton');
const emailBtn = document.getElementById('emailBtn');
const unsubscribeBtn = document.getElementById('unsubscribeBtn');
const emailInput = document.getElementById('emailInput');
const hobbiesInput = document.getElementById('hobbiesInput');

complimentBtn.addEventListener('click', getCompliment);
fortuneBtn.addEventListener('click', getFortune);
saveProfileForm.addEventListener('submit', saveProfile);
updateProfileForm.addEventListener('submit', updateProfile);
hobbiesButton.addEventListener('click', submitFavoriteHobbies);
emailBtn.addEventListener('click', joinEmail);
unsubscribeBtn.addEventListener('click', deleteEmail);

    function getCompliment() {
        axios.get("http://localhost:4000/api/compliment")
            .then(res => {
                const data = res.data;
                alert(data);
            })
            .catch(err => console.log(err));
    }

    function getFortune() {
        axios.get("http://localhost:4000/api/fortune")
            .then(res => {
                const data = res.data;
                alert(data);
            })
            .catch(err => console.log(err));
    }

    function saveProfile(event) {
        event.preventDefault();
        var firstName = document.getElementById('firstName').value;
        var lastName = document.getElementById('lastName').value;
        var email = document.getElementById('email').value;

        var data = {
            firstName: firstName,
            lastName: lastName,
            email: email
        };

        axios.post('http://localhost:4000/api/profile', data)
            .then(response => {
                console.log(response.data);
                alert('Profile saved successfully!');
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    function updateProfile(event) {
        event.preventDefault();
        var firstName = document.getElementById('updateFirstName').value;
        var lastName = document.getElementById('updateLastName').value;
        var email = document.getElementById('updateEmail').value;
        var userId = document.getElementById('userId').value;

        var data = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            userId: userId
        };

        axios.put('http://localhost:4000/api/profile', data)
            .then(response => {
                console.log(response.data);
                alert('Profile updated successfully!');
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    function submitFavoriteHobbies(event) {
        event.preventDefault();
        let body = {
            'hobbies': hobbiesInput.value
        };
        axios.post("http://localhost:4000/api/hobbies", body)
            .then(res => {
                const data = res.data;
                alert("Submitted successfully!");
                console.log(body);
            })
            .catch(err => console.log(err));
    }

    function joinEmail(event) {
        event.preventDefault();
        let body = {
            'user': emailInput.value
        };
        axios.post("http://localhost:4000/api/email", body)
            .then(res => {
                const data = res.data;
                alert("Thanks for subscribing! Your welcome email should arrive shortly!");
                console.log(body);
            })
            .catch(err => console.log(err));
    }

    function deleteEmail(event) {
        event.preventDefault();
        const email = emailInput.value.trim();
        console.log('Sending email:', email);

        axios.delete(`http://localhost:4000/api/unsubscribe/${email}`)
            .then(res => {
                const data = res.data;
                alert("You have successfully unsubscribed from our Newsletter!");
                console.log(data);
            })
            .catch(err => console.log('Error:', err));
    }

//click should be for buttons 
//submit for forms