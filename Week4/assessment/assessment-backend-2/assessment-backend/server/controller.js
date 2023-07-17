const userDatabase = []
let id = 0
let userProfile = {}

module.exports = {
    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];

        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];

        res.status(200).send(randomCompliment);
    },

    
    getFortune: (req, res) => {
        let fortunes = ["Don’t just think, act!", "Go take a rest; you deserve it.", "It’s time to get moving. Your spirits will lift accordingly.", "Love lights up the world."];

        let random = Math.floor(Math.random() * fortunes.length);
        let fortune = fortunes[random];
        res.status(200).send(fortune);
    },

    saveProfile(req, res) {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;

    userProfile = {
        firstName: firstName,
        lastName: lastName,
        email: email
    };

    res.status(200).send('Profile saved successfully!');
    },

    updateProfile(req, res) {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;

    userProfile.firstName = firstName;
    userProfile.lastName = lastName;
    userProfile.email = email;
    res.status(200).send('Profile updated successfully!');
    },



    submitFavoriteHobbies: (req, res) => {
    let { hobbies } = req.body;
    res.status(200).send()
    return hobbies
    },

    joinEmail: (req, res) => {
    let { email } = req.body
    let newUser = { ...req.body, id: id };
    userDatabase.push(newUser);
    id++
    res.status(200).send(newUser)
    },

    deleteEmail: (req, res) => {
        let existingEmail = req.params.email
        for (let i = 0; i <= userDatabase.length; i++) {
            if (userDatabase[i].email === existingEmail) {
                userDatabase.splice(i, 1)
                res.status(200).send(`User Unsubscribed`)
            } else {
                res.status(400).send('User not found')
            }
        }
    }
};
