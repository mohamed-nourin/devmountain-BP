

const express = require("express");

// Cors is a package that allows the client and server to communicate with each other without the need for advanced configuration.
const cors = require("cors");

// to avoid repeating lengthy code, we will create a variable called app that we will reuse to initialize express commands. Set app equal to the invocation of express
const app = express();

// Our client and server will be communicating by sending and receiving JSON objects to each other. In this step, we will configure our express server to use JSON objects correctly.
app.use(express.json());

// we will also need to allow our express server to use the cors package we required
app.use(cors());

// Let’s now tell express to set our server up to run (or “listen”) on port 4000
app.listen(4000, () => console.log("Server running on port 4000"));

app.get("/api/users", (req, res) => {
    let friends = ["Nitin", "Eric", "Jeddy", "Cameron", "Riley"];
    res.status(200).send(friends);
  });

  app.get("/weather/:temperature", (req, res) => {
    const phrase = `<h3>It was ${req.params.temperature} today</h3>`;
    res.status(200).send(phrase);
  });

  app.get("/weather/:temperature", (req, res) => {
    const { temperature } = req.params;
    const phrase = `<h3>It was ${temperature} today</h3>`;
    res.status(200).send(phrase);
  });