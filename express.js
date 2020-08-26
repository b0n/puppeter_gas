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

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Application started');
  console.log('Press Ctrl+C to quit.');
});
