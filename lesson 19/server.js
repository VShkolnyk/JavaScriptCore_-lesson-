var express = require('express');
var bodyParser = require("body-parser");

var server = express();
var jsonParser = bodyParser.json();

server.use(jsonParser);
server.use(express.static(__dirname));
server.use(bodyParser.urlencoded({
    extended: true
}));

server.get("/", function (req, resp) {
    console.log("Start page requested.");
});

server.get("/formGet", function (req, resp) {
    console.log("Form receipted by GET.");
    var obj = req.query;
    console.log(obj.userFirstName += ".ValidatedByGET");
    console.log(obj.userLastName += ".ValidatedByGET");
    console.log(obj.userAge += ".ValidatedByGET");
    console.log(obj.userCity += ".ValidatedByGET");
	resp.send(obj);
});

server.post("/formPost", function (req, resp) {
    console.log("Form receipted by POST.");
    // console.log(JSON.parse(req.query));
    var obj = req.body;
    console.log(obj.userFirstName += ".ValidatedByPOST");
    console.log(obj.userLastName += ".ValidatedByPOST");
    console.log(obj.userAge += ".ValidatedByPOST");
    console.log(obj.userCity += ".ValidatedByPOST");
    resp.send(obj);
});

server.listen(3000); //the server object listens on port 8080