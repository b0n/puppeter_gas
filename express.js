const express = require('express');
const fs = require('fs');

const app = express();

app.use(express.static('public'));

app.get('/hello', (req, res) => {
    console.log('hello');
    res.send('Hello ' + req.query.name);
});

app.get('/image', (req, res) => {
    console.log('image');
    fs.readFile('./example.png', (err, data) => {
      res.type('png');
      res.send(data);
    });
});

app.get('/download', (req, res) => {
    console.log('download');
    res.download('./example.png')
});

app.listen('3000', () => {
    console.log('Application started');
});
