console.log("Hello Girls");
var http = require("http");

var server = http.createServer( function (req, res) {
    res.write("Hello !!! I'm  Git");
    res.end();
}).listen(3000);