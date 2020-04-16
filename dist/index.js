"use strict";

var _http = _interopRequireDefault(require("http"));

var _url = _interopRequireDefault(require("url"));

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_http["default"].createServer(function (req, res) {
  var query = _url["default"].parse(req.url, true);

  console.log(' CURRENT URL :', req.url);
  var filename;

  if (req.url === '/') {
    console.log('MA INjAYIM');
    filename = "__dirname/../src/frontend/html/index.html";

    _fs["default"].readFile(filename, function (error, data) {
      if (error) {
        console.log('ERROR~!', error, data, filename);
        res.writeHead(404, {
          'Content-Type': 'text/html'
        });
        return res.end("error ".concat(filename));
      }

      res.writeHead(200, {
        'Content-Type': 'text/html'
      });
      res.write(data);
      return res.end();
    });
  } else {
    filename = "__dirname/../src/frontend/html".concat(query.pathname, ".html");

    _fs["default"].readFile(filename, function (error, data) {
      if (error) {
        console.log('ERROR~!', error, data, filename);
        res.writeHead(404, {
          'Content-Type': 'text/html'
        });
        return res.end("error ".concat(filename));
      }

      res.writeHead(200, {
        'Content-Type': 'text/html'
      });
      res.write(data);
      return res.end();
    });
  }

  console.log(' CURRENT PATH :', __dirname); //   fs.readFile(filename, (err, data) => {
  //     if (err) {
  //       res.writeHead(404, { 'Content-Type': 'text/html' });
  //       return res.end(`404 Page Not Found ${filename}`);
  //     }
  //     res.writeHead(200, { 'Content-Type': 'text/html' });
  //     res.write(data);
  //     return res.end();
  //   });
}).listen(8080);

console.log('server running !');