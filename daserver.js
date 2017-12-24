var port = 8080;
var http = require("http");
var server = http.createServer();
server.on('request', request);
server.listen(port);
function request(request, response) {
    var store = '';

    request.on('data', function(data) 
    {
        store += data;
    });
    request.on('end', function() 
    {  console.log(store);
        response.write("Recived, thanks!")
        response.end()
    });
 }  