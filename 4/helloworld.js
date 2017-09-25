/**
 * Created by robin on 2017/9/25.
 */

var http = require('http');
http.createServer(function(req,resp) {
    resp.end('hello world,robin')
}).listen(3000);

