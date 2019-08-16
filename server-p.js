var http = require ("http");
var fs = require ("fs");

var PORT = 8080;

var server = http.createServer(handleRequest);

function handleRequest (req, res){

    var path = req.url;

    switch (path){
        case "/food":   
        case "/framework":
        case "/movies":
            renderHTML(path+ ".html", res);

        default:
            renderHTML("/index.html", res);
    }
}

function renderHTML (filePath, res){
    return fs.readFile(__dirname+filePath, function(err, data){
        if(err) throw err;
        res.writeHead(200, {"Content-Type":"text/html"});
        res.end(data);
    });
}

server.listen(PORT, function(){
    console.log("listening to "+PORT);
});