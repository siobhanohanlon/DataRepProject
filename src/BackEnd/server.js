//Express Variables
const express = require('express')
const app = express()
const port = 2000 //Localhost:*port* to view
const cors = require('cors');

//Mongoose- To connect to my database
const mongoose = require('mongoose');

//Calls main to make a connection with the database
main().catch(err => console.log(err));

//Giving database address
async function main() {
  //Connect to Cluster- Open to all IP Addresses
  await mongoose.connect('mongodb+srv://admin:pass@songcluster.j1ijsdr.mongodb.net/test');
  //Username: admin Password: pass
}

//Convert to String
const songSchema = new mongoose.Schema({
  title: String,
  cover: String,
  author: String,
  streams: Number,
  album: String
});

//Model to interact with database
const songModel = mongoose.model('listSongs', songSchema);

//Body Parser to pass info from post form
const bodyParser = require("body-parser");
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse/application/json
app.use(bodyParser.json());

//To allow connection from host to other
app.use(cors());

//Access Control
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//HTTP is handled by req & res, Gets all json Data
app.get('/api/songs', (req, res) => {
  //To interact to database
  songModel.find((error, data) => {
    res.json(data);
  })
})

//Put data embedded body
app.post('/api/songs', (req, res) => {
  //Write data to page
  songModel.create({
    title: req.body.title,
    cover: req.body.cover,
    author: req.body.author,
    streams: req.body.streams,
    album: req.body.album
  })

  //Update User
  res.send('Song Data Received Successfully');
})

//Pass ID to URL
// ' : ' is to say variable
app.get('/api/songs/:id', (req, res) => {
  console.log("Song ID: " + req.params.id);

  //Find Song Details by ID
  songModel.findById(req.params.id, (error, data) => {
    res.json(data);
  })
})

//Update by Id
app.put('/api/songs/:id', (req, res) => {
  console.log("Song #" + req.params.id + " has been Updated");

  //Update songModel
  songModel.findByIdAndUpdate(req.params.id, req.body, { new: true },
    (error, data) => {
      res.send(data);
    })
})

//Delete by ID
app.delete('/api/songs/:id', (req, res) => {
  console.log('Deleting Song with ID: ' + req.params.id);

  //Find Song by ID and Delete
  songModel.findByIdAndDelete({ _id: req.params.id }, (error, data) => {
    res.send(data);
  })
})

//Listen- Port 2000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})