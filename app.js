var http = require('http');
var fs = require('fs');
var indexPage = fs.readFileSync(__dirname + '/index-history.html');

http.createServer(function (request, response) {
    response.writeHeader(200, {"Content-Type": "text/html"});
    response.write(indexPage);
    response.end();
}).listen(8888);
