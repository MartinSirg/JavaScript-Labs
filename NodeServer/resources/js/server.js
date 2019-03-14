const http = require('http');
let fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;
let counter = 0;

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        counter++;
        fs.readFile( "../../Index.html", function (err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            if (data == null) console.log(err);
            res.write(data);
            res.end();
        });
    } else if (req.url === "/counter") {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.setHeader("access-control-allow-origin", "*");
        res.setHeader("access-control-allow-headers", "origin,x-request-with,content-type,accept");
        res.end('Called ' + counter + ' times');
    } else {
        fs.readFile( "../../" + req.url, function (err, data) {
            res.writeHead(200);
            if (data == null) console.log(err);
            res.write(data);
            res.end();
        });
    }
    console.log(req.url)
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

// start command: node .\server.js