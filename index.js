const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  /*
  if(req.url === '/') {
    fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
        if(err) throw err;
        res.writeHead(200, { 'content-type': 'text/html' });
        res.end(content);
    })

  };

  if(req.url === '/about') {
    fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
        if(err) throw err;
        res.writeHead(200, { 'content-type': 'text/html' });
        res.end(content);
    })

  };

  if(req.url === '/api/users') {
    const users = [
        { name:'Johnny', age: 45},
        { name:'Johnny jr.', age: 15},
        { name:'Beatix', age: 53}
    ];
    res.writeHead(200, { 'Content-Type': 'application/json'});
    res.end(JSON.stringify(users));
  }         */

  // build file path
  let filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );

  //Extension of file
  let extName = path.extname(filePath);

  //initial content type
  let contentType = "text/html";

  //check ext. and set content type
  switch (extName) {
    case ".js":
      contentType = "text/javascript";
      break;

    case ".css":
      contentType = "text/css";
      break;

    case ".json":
      contentType = "application/json";
      break;

    case ".png":
      contentType = "image/png";
      break;

    case ".jpg":
      contentType = "image/jpg";
      break;

    default:
      break;
  }

  //readfile
  fs.readFile(filePath, (err, content) => {
    if(err) {
        if(err.code === 'ENOENT') {
            //page not found
            fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(content, 'utf-8');
            })
        } else {
            //some server error
            res.writeHead(500);
            res.end(`server error: ${err.code}`);
        }
    } else {
        //success
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(content, 'utf-8')
    }
  })
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`server running on PORT ${PORT}`));
