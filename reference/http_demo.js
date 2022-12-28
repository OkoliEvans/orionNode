const http = require('http');

//create server object
http.createServer((req, res) => {
    //write to server
    res.write('Hello, okuko');
    res.end();
}).listen(5000, () => {
    console.log('server running...');
})