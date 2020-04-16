import http from 'http';
import url from 'url';
import fs from 'fs';

http
  .createServer((req, res) => {
    const query = url.parse(req.url, true);
    console.log(' CURRENT URL :', req.url);

    let filename;
    if (req.url === '/') {
      filename = `__dirname/../src/frontend/html/index.html`;
      fs.readFile(filename, (error, data) => {
        if (error) {
          console.log('ERROR~!', error, data, filename);
          res.writeHead(404, { 'Content-Type': 'text/html' });
          return res.end(`error ${filename}`);
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
      });
    } else {
      filename = `__dirname/../src/frontend/html${query.pathname}.html`;
      fs.readFile(filename, (error, data) => {
        if (error) {
          console.log('ERROR~!', error, data, filename);
          res.writeHead(404, { 'Content-Type': 'text/html' });
          return res.end(`error ${filename}`);
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
      });
    }
  })
  .listen(8080);

console.log('server running !');
