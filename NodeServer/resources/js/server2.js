const http = require('http');
let fs = require('fs');

const express = require('express');
const app = express();
const port = 3000;
let counter = 0;

app.get('/', (req, res) => {
    counter++;
    fs.readFile("../../Index.html", function (err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        if (data == null) console.log(err);
        res.write(data);
        res.end();
    });
});

app.get('/counter', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader("access-control-allow-origin", "*");
    res.setHeader("access-control-allow-headers", "origin,x-request-with,content-type,accept");
    res.end('Called ' + counter + ' times');
});

app.get('/*/', (req, res) => {
    fs.readFile("../../" + req.url, function (err, data) {
        res.writeHead(200);
        if (data == null) console.log(err);
        res.write(data);
        res.end();
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// start command: node server2.js