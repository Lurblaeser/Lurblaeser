import http from 'http';

const port = 8890

const server = http.createServer((req, res) => {
  const headers = {
    'Access-Control-Allow-Origin': 'https://reaver.dev', /* @dev First, read about security */
    'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
    'Access-Control-Max-Age': 2592000, // 30 days
    /** add other headers as per requirement */
  };

  if (req.method === 'OPTIONS') {
    res.writeHead(204, headers);
    res.end();
    return;
  }

  if (['GET', 'POST'].indexOf(req.method) > -1) {
    res.writeHead(200, headers);
    res.end('Hello World');
    return;
  }

  res.writeHead(405, headers);
  res.end(`${req.method} is not allowed for the request.`);
})

console.log(` [*] Listening on 0.0.0.0:${port}`);
server.listen(port, 'localhost');
