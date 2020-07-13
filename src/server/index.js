// Express to run server and routes
const express = require("express");

// Start up an instance of app
const app = express();

// Setup empty object to act as endpoint for all routes
let projectData = {};

// Dependencies
const bodyParser = require("body-parser");

//Configuring our express to use body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());

// Initialize the dist folder
app.use(express.static("dist"));

//
const port = process.env.PORT || 3050;

// Callback to debug
const listening = () => {
  console.log(`server running on localhost: ${port}`);
};

const server = app.listen(port, listening);

const sendData = (request, response) => {
  // Return the appData object
  response.send(JSON.stringify(projectData));
};

app.get("/", (req, res) => {
  res.sendFile("dist/index.html");
});

app.get("/all", sendData);

const addData = (request, response) => {
  projectData.destination = request.body.destination;
  projectData.country = request.body.country;
  projectData.latitude = request.body.latitude;
  projectData.longitude = request.body.longitude;
  projectData.highTemp = request.body.highTemp;
  projectData.lowTemp = request.body.lowTemp;
  projectData.picture = request.body.picture;
  console.log(projectData);
  response.send(JSON.stringify(projectData));
};

app.post("/add", addData);

module.exports = app;
