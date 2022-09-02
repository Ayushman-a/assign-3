const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const Router = require('./routes')

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));


const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/assign3', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(express.static(path.join(__dirname, '/public')))
app.use(bodyParser.urlencoded({ extended: true }))
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/" + "index.html");
})
app.get('/user', (req, res) => {
    res.sendFile(__dirname + "/" + "user.html");
})


const db = mongoose.connection
db.on('error', console.error.bind(console, "connection error:"));
db.once('open', function () {
    console.log("database connected successfully")
});

app.use(Router)

app.listen(3000, () => {
    console.log('index file is running ')
})