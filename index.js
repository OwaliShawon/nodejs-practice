const http = require('http');
const fs = require('fs');


const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>Welcome to Full Stack Development</h1>');
        res.end();
    }

    if (req.url === '/read') {
        fs.readFile('first.txt', (err, data) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.write(data);
            res.end();
        });
    }

    if (req.url === '/write') {
        fs.writeFile('test.txt', 'Hello World!', function (err) {
            if (err)
                console.log(err);
            else
                console.log('Write operation complete.');
        });
        res.end();
    }


    if (req.url === '/append') {
        fs.appendFile('test.txt', 'Hello Mee!', function (err) {
            if (err)
                console.log(err);
            else
                console.log('Append operation complete.');
        });
    }

    if (req.url === '/delete') {
        fs.unlink('first.txt', function (err) {
            if (err)
                console.log(err);
            else
                console.log('File deleted!');
        });
    }
});

server.listen(5000);