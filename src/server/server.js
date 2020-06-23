var path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();


// BodyParser config
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
app.use(express.static('dist'));

//Get route
app.get('/', function (req, res) {
  res.sendFile('dist/index.html')
})

// Post Route
app.post('/add', function(req, res) {
  let data = {};
  data.depCity = req.body.depCity;
  data.arrCity = req.body.arrCity;
  data.depDate = req.body.depDate;
  data.weather = req.body.weather;
  data.image = req.body.image;
  res.send(data);
})

// Setup Server

const port = 8000;
const server = app.listen(port, listening);

function listening() {
  console.log(`running on localhost: ${port}`);
}
