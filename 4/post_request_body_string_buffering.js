
var http = require('http');
var items = [];

var server = http.createServer(function(req, res){
  switch (req.method) {
    case 'POST':
      var item = '';
      req.setEncoding('utf8');
      req.on('data', function(chunk){ //进入data事件
        item += chunk;
      });
      req.on('end', function(){ //进入完成事件
        items.push(item);
        res.end('OK\n');
      });
      break;
    case 'GET':
      items.forEach(function (it,i) {
        res.write(i+')'+it+'\n');
      });
      res.end();
      break;
  }
});
server.listen(4000);


