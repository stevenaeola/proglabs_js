console.log("Hello World!");

const http = require("http");

const hostname = "100.112.100.112";
const port = 8080;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-type", "text/plain");
    res.end("Hello World!");
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
