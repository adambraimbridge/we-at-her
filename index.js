const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || '0.0.0.0';

const filePath = path.join(__dirname, 'index.html');
const html = fs.readFileSync(filePath, 'utf8');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(html);
});
server.listen(PORT, () => {
  console.log(`Server running on ${PORT}/`);
});