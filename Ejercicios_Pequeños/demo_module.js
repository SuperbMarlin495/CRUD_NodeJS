var http = require('http');
var dt = require('./myfirstmodule');

http.createServer(function(req, res){  //agregar modulo de el archivo externo
    res.writeHead(200, {'Content-Type' :  'text/html'});
    res.write("El dato del tiempo es: " + dt.myDateTime());
    res.end();
}).listen(8080);