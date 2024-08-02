const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const msg = 'Hello Node! This is test 2'
  res.end(msg);
});

server.listen(port, () => {
  console.log(`Serveer running on http://localhost:${port}/`);
});
