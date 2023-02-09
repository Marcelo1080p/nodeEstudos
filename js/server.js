const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req)
    console.log(req.url)
    res.statusCode = 200
    res.end('<h1 style="color: #00C1c2">Hello  World!</h1>')
});

server.listen(3000, () => {
    console.log("Servidor Ativo")
});