/**
 * Created by robin on 2017/9/24.
 */

var http = require('http');
http.createServer(function (req,resp) {
    resp.writeHead(200,{'Content-Type':'text/plain'});
    resp.end('hello world ,robin')
}).listen(3000);
console.log('server is running on port 3000');