const express = require("express");
const app = express();
const http = require('http');
const fs = require('fs');
const path = require('path');

const port = process.env.port || 5000;

app.use(express.static(__dirname + '/resources'));


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/resources/index.html'));
})

app.get('/pomidory-paprykowe.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/resources/pomidory-paprykowe.html'));
})
app.get('/pomidory-czekoladowe.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/resources/pomidory-czekoladowe.html'));
})
app.get('/czarne-pomidory.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/resources/czarne-pomidory.html'));
})
app.get('/pomidory-tygrysie.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/resources/pomidory-tygrysie.html'));
})

app.listen(port, () => console.log(`Listening on port ${port}`))