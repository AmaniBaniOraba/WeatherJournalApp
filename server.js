
const express = require("express");


const app = express();


const cors = require("cors");


app.use(cors());

//body-parser allow the backend to access JSON data sent from the client using request.body in POST route handler.
const bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());


projectData = {};

app.use(express.static("website"));

// Callback function to complete GET '/all'
const getAll = (req, res) => res.status(200).send(projectData);

app.get("/all", getAll);



const postData = (req, res) => {
    projectData = req.body;
    console.log(projectData);
    res.status(200).send(projectData);
  }
// GET Route
app.post("/add", postData);

const port = 4000;
const hostname = "127.0.0.1";

// function to test the server 
const listening = () =>
console.log(`Server running at http://${hostname}:${port}/`);

// spin up the server
app.listen(port, listening);
