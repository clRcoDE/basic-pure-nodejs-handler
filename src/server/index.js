import http from 'http';
import url from 'url';
import fs from 'fs';

http
  .createServer((req, res) => {
    const query = url.parse(req.url, true);

    const filename = `__dirname/../src/html${query.pathname}`;
    console.log(' CURRENT PATH :', __dirname);
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
    //   fs.readFile(filename, (err, data) => {
    //     if (err) {
    //       res.writeHead(404, { 'Content-Type': 'text/html' });
    //       return res.end(`404 Page Not Found ${filename}`);
    //     }
    //     res.writeHead(200, { 'Content-Type': 'text/html' });
    //     res.write(data);
    //     return res.end();
    //   });
  })
  .listen(8080);

console.log('server running !');
