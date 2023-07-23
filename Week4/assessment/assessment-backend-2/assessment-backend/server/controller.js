let id = 1
let userProfile = {}
const emails = []
const userDatabase = []

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
            email: email,
            userId: id
        };
        userDatabase.push(userProfile);
        console.log(userDatabase);
        id++
        res.status(200).send('Profile saved successfully!');
    },
    
    
    updateProfile(req, res) {
        const firstName = req.body.firstName;
        const lastName = req.body.lastName;
        const email = req.body.email;
        const userId = req.body.userId;
        const indexofUser = userDatabase.findIndex((user) =>  user.userId === +userId)
        console.log(indexofUser);
        if (indexofUser === -1) {
            res.status(400).send("user not found");
            return;
        }


        console.log(userDatabase[indexofUser]);
        userDatabase[indexofUser].firstName = firstName;
        userDatabase[indexofUser].lastName = lastName;
        userDatabase[indexofUser].email = email;
        
        console.log(userDatabase);
        res.status(200).send('Profile updated successfully!');
    },

    submitFavoriteHobbies: (req, res) => {
        let { hobbies } = req.body;
        res.status(200).send()
        return hobbies
    },

    joinEmail: (req, res) => {
        const { email } = req.body;
        const newUser = { email, id: id };
        emails.push(newUser);
        id++;
        res.status(200).send(newUser);
    },

    deleteEmail: (req, res) => {
        const { existingEmail } = req.params;
        console.log('Received email:', existingEmail);

        let found = false;

        for (let i = 0; i < emails.length; i++) {
            if (emails[i].email === existingEmail) {
                emails.splice(i, 1);
                found = true;
                break;
            }
        }

        if (found) {
            res.status(200).send(`User Unsubscribed`);
        } else {
            res.status(400).send('User not found');
        }
    }
};
