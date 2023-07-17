const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());


const controller = require('./controller')
const { getCompliment, getFortune, joinEmail, deleteEmail, submitFavoriteHobbies } = controller


app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.post("/api/affirmation", submitFavoriteHobbies);
app.post("/api/email", joinEmail);
app.delete("/api/unsubscribe", deleteEmail);






app.listen(4000, () => console.log("Server running on 4000"));




