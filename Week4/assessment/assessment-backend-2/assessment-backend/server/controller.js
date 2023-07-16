const userDatabase = []
let id = 0

module.exports = {
    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];

        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];

        res.status(200).send(randomCompliment);
    },

    //feature #1: Fortune cookie
    getFortune: (req, res) => {
        let fortunes = ["Don’t just think, act!", "Go take a rest; you deserve it.", "It’s time to get moving. Your spirits will lift accordingly.", "Love lights up the world."];

        let random = Math.floor(Math.random() * fortunes.length);
        let fortune = fortunes[random];
        res.status(200).send(fortune);
    },



    //feature #2: user profile (name, age, fitness level (drop down menue), goals)
    


    //feature #3: favorite music genre


    //feature #4: sign up for a newsletter



}







