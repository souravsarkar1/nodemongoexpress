const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.setHeader('Content-type','text/html')
        res.end('<h1>Home Page</h1>');
    }
    else if (req.url === '/reports') {
        res.end('This is the report data');
    }
    else if (req.url === '/blogs') {
        res.end('this is my blogs page')
    }
    else if (req.url === '/data') {
        res.end('data page');
    }
    else if(req.url='/users'){
        try {
            const data = fs.readFileSync("./db.json","utf-8");
            res.end(data);
        } catch (error) {
            res.end(error);
        }
    }
    else {
        res.end('Invalid Request');
    }
})
server.listen(4500, () => {
    console.log('server is running on 4500');
})