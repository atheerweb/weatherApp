// Setup empty JS object to act as endpoint for all routes
projectData = [];
// Require Express to run server and routes
const express = require("express");
// Start up an instance of app
const app = express();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());
// Initialize the main project folder
app.use(express.static("website"));

// Setup Server
const port = 8000;
const successM = () => console.log(`server is running on port : ${port}`);
const server = app.listen(port, successM);

//get route to have all the data on /allData route
const getData = (request, response) => {
  response.send(projectData);
  projectData = [];
};

app.use("/allData", getData);

// post route to post data from the client side to the server
const addTemp = (request, resolve) => {
  let data = {
    date: request.body.date,
    temp: request.body.temp,
  };
  projectData.push(data);
  console.log(projectData);
};

app.post("/weather", addTemp);
