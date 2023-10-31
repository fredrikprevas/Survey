const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000;

const server = http.createServer((req, res) => {
  const filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);
  const extname = path.extname(filePath);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('File not found');
    } else {
      let contentType = 'text/html';
      if (extname === '.css') {
        contentType = 'text/css';
      } else if (extname === '.ico') {
        contentType = 'image/x-icon';
      } else if (extname === '.jpg' || extname === '.jpeg' || extname === '.png' || extname === '.gif') {
        contentType = 'image';
      }

      if (contentType === 'image') {
        fs.readFile(filePath, (err, imageData) => {
          if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Image not found');
          } else {
            res.writeHead(200, { 'Content-Type': 'image' });
            res.end(imageData, 'binary');
          }
        });
      } else {
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(data);
      }
    }
  });
});

server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
