const express = require('express');
const path = require('path');

const app = express();

const port = process.env.PORT || 8080;

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname,'index.html'));
});


app.get('/about', function (req, res) {
    res.sendFile(path.join(__dirname,'about.html'));
});

app.get('/contact', function (req, res) {
    res.sendFile(path.join(__dirname,'contactme.html'));
});

// tried to do .get with and if statment if res.status = 404 then to sendfile  but did not work 
// if res.status === 404 
// res.sendFile this did not work 

// had to google this .use 
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname,'404.html'))
});

app.listen(port);
console.log(`Hello this is listening on ${port}!`);



