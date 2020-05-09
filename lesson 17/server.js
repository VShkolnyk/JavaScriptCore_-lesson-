let express = require('express');
let bodyParser = require("body-parser");

let server = express();
let jsonParser = bodyParser.json();

server.use(jsonParser);
server.use(express.static(__dirname));

server.get("/", function (request, response) {
    console.log("Start page requested.");
    response.send('<h1>Welcome<h1>');
});

server.get("/user-data", function (request, response) {
    console.log(request.query);
    response.send(request.query);
});

server.listen(3000);